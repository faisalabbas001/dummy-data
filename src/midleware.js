import { NextResponse } from "next/server";

export function middleware(request) {
    if (request.nextURL.pathname === "/study") {
        return NextResponse.redirect(new URL("/study", request.url));
    }
}

export const config = {
    routes: ["^/about/:path*", "^/studentclass/:path*"]
};
