import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const { status, statusText, cookies } = NextResponse.next();
    if (request.nextUrl.pathname === '/profile') {
        return NextResponse.rewrite(new URL('/hello', request.url));
    }
}


// export default function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL('/', request.url));
// }

// export const config = {
//     matcher: "/profile"
// }