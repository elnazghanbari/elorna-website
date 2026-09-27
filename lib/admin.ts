import {NextRequest} from "next/server";
export function adminOK(req:NextRequest){const secret=process.env.ELORNA_ADMIN_KEY;if(!secret)return false;return req.headers.get("x-elorna-admin-key")===secret}
