import { NextResponse, NextRequest } from "next/server"

export async function GET(request) {
    const response = await fetch('https://jobicy.com/api/v2/remote-jobs?count=6&tag=marketing');
    const data = await response.json();
    if (response.status === 200) {
        return NextResponse.json(data);
    } else {
        return NextResponse.error.json({ message: 'Failed to fetch jobs' });
    }
}