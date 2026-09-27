export type Lead={id:string,name:string,email:string,stage:string,note:string,createdAt:string};
export type Booking={id:string,name:string,email:string,company:string,date:string,time:string,topic:string,message:string,status:string,createdAt:string};
type DB={leads:Lead[];bookings:Booking[]};
const g=globalThis as typeof globalThis & {__elornaDB?:DB};
export function memoryDB(){if(!g.__elornaDB)g.__elornaDB={leads:[],bookings:[]};return g.__elornaDB}
export function hasRedis(){return Boolean(process.env.KV_REST_API_URL&&process.env.KV_REST_API_TOKEN)}
async function redis(path:string,init?:RequestInit){const r=await fetch(process.env.KV_REST_API_URL+path,{...init,headers:{Authorization:`Bearer ${process.env.KV_REST_API_TOKEN}`,"Content-Type":"application/json",...(init?.headers||{})},cache:"no-store"});if(!r.ok)throw new Error("storage unavailable");return r.json()}
export async function listLeads():Promise<Lead[]>{if(!hasRedis())return memoryDB().leads;const d=await redis("/get/elorna:leads");try{return JSON.parse(d.result||"[]") as Lead[]}catch{return []}}
export async function saveLeads(v:Lead[]){if(!hasRedis()){memoryDB().leads=v;return}await redis("/set/elorna:leads",{method:"POST",body:JSON.stringify(v)})}
export async function listBookings():Promise<Booking[]>{if(!hasRedis())return memoryDB().bookings;const d=await redis("/get/elorna:bookings");try{return JSON.parse(d.result||"[]") as Booking[]}catch{return []}}
export async function saveBookings(v:Booking[]){if(!hasRedis()){memoryDB().bookings=v;return}await redis("/set/elorna:bookings",{method:"POST",body:JSON.stringify(v)})}
