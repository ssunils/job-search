import { NextResponse } from "next/server"

export async function GET(){
    const result = "Hello World"
    return NextResponse.json({ data:result })
}