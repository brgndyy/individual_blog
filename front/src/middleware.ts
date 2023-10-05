import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const response = NextResponse.next();
  const fetchMode = request.headers.get("sec-fetch-mode");

  console.log("미들웨어 실행중 !");

  return response;
}

export const config = {
  matcher: ["/"],
};
