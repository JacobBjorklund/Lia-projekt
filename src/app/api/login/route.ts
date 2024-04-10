//Server
import { login } from "@/utils/getUsers"

export async function GET(req:Request, res:Response){
    return Response.json({msg: "Hello World"})
}

export async function POST(req:Request, res:Response){
    const body = await req.json()
    const response = await login(body.email, body.password)
    return Response.json(response)
}