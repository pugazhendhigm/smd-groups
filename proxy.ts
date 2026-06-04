import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const VALID_THEMES = new Set(["1", "2", "3"]);

export function proxy(request: NextRequest) {
  const theme = request.nextUrl.searchParams.get("theme");

  if (theme && VALID_THEMES.has(theme)) {
    const response =
      theme === "1"
        ? NextResponse.redirect(
            (() => {
              const url = request.nextUrl.clone();
              url.searchParams.delete("theme");
              return url;
            })(),
          )
        : NextResponse.next();

    response.cookies.set("site-theme", theme, {
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
    });

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
