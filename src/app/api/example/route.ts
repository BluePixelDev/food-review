import { NextResponse } from 'next/server'

export async function GET() {
    return NextResponse.json({ message: "Hello from app!" }, { status: 200 })
}

export async function POST() {
    return NextResponse.json({ message: "NO POST!" }, { status: 200 })
}