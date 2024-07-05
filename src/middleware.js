import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({ publicRoutes: ["/", "/blog"] });

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/shop", "/(api|trpc)(.*)"],
};
