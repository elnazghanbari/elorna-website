export type Lead={id:string,name:string,email:string,phone?:string,stage:string,note:string,createdAt:string,source?:string,consentedAt?:string};
export type Booking={id:string,name:string,email:string,company:string,date:string,time:string,topic:string,message:string,status:string,createdAt:string};
type DB={leads:Lead[];bookings:Booking[]};
const g=globalThis as typeof globalThis & {__elornaDB?:DB};
export function memoryDB(){if(!g.__elornaDB)g.__elornaDB={leads:[],bookings:[]};return g.__elornaDB}
function redisConfig(){return {url:process.env.KV_REST_API_URL||process.env.UPSTASH_REDIS_REST_URL,token:process.env.KV_REST_API_TOKEN||process.env.UPSTASH_REDIS_REST_TOKEN}}
export function hasRedis(){const c=redisConfig();return Boolean(c.url&&c.token)}
async function redis(path:string,init?:RequestInit){const r=await fetch(redisConfig().url+path,{...init,headers:{Authorization:`Bearer ${redisConfig().token}`,"Content-Type":"application/json",...(init?.headers||{})},signal:AbortSignal.timeout(8000),cache:"no-store"});if(!r.ok)throw new Error("storage unavailable");const data=await r.json();if(data.error)throw new Error("storage unavailable");return data}
export async function listLeads():Promise<Lead[]>{if(!hasRedis())return memoryDB().leads;const d=await redis("/get/elorna:leads");try{return JSON.parse(d.result||"[]") as Lead[]}catch{return []}}
export async function saveLeads(v:Lead[]){if(!hasRedis()){memoryDB().leads=v;return}await redis("/set/elorna:leads",{method:"POST",body:JSON.stringify(v)})}
export async function listBookings():Promise<Booking[]>{if(!hasRedis())return memoryDB().bookings;const d=await redis("/get/elorna:bookings");try{return JSON.parse(d.result||"[]") as Booking[]}catch{return []}}
export async function saveBookings(v:Booking[]){if(!hasRedis()){memoryDB().bookings=v;return}await redis("/set/elorna:bookings",{method:"POST",body:JSON.stringify(v)})}

// Atomically append and deduplicate public enquiries; never report in-memory data as saved.
export async function appendPersistentLead(lead:Lead):Promise<string>{
 if(!hasRedis())throw new Error("persistent storage not configured");
 const script="local v=cjson.decode(redis.call('GET',KEYS[1]) or '[]'); local n=cjson.decode(ARGV[1]); for _,x in ipairs(v) do if x.id==n.id then return x.id end end; table.insert(v,1,n); while #v>1000 do table.remove(v) end; redis.call('SET',KEYS[1],cjson.encode(v)); return n.id";
 const d=await redis("",{method:"POST",body:JSON.stringify(["EVAL",script,"1","elorna:leads",JSON.stringify(lead)])});
 if(typeof d.result!=="string")throw new Error("storage confirmation missing");return d.result;
}
export async function allowPublicLead(ipHash:string):Promise<boolean>{
 const script="local n=redis.call('INCR',KEYS[1]); if n==1 then redis.call('EXPIRE',KEYS[1],600) end; return n";
 const d=await redis("",{method:"POST",body:JSON.stringify(["EVAL",script,"1","elorna:lead-rate:"+ipHash])});
 return Number(d.result)<=5;
}
