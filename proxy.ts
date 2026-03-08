import { NextResponse, NextRequest } from 'next/server';
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {

  // Redirect
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about-2', request.url))
  }

  //Cookie
  // const cookieStore = cookies();
  // //Get 
  // const token = cookieStore.get("token");

  // //Set
  // cookieStore.set("token", "abc123", {
  //   httpOnly: true,
  //   secure: true,
  //   path: "/",
  //   maxAge: 60 * 60 * 24,
  // });

  // //delete
  // cookieStore.delete("token");

  // console.log('Middleware test', request.nextUrl.pathname);

  return NextResponse.next();
}
