import { NextResponse } from "next/server";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/blogs/")) {
    const slug = pathname.replace("/blogs/", "");

    const response = NextResponse.next();
    response.headers.set("x-slug", slug);
    return response;
  }

  return NextResponse.next();
}
