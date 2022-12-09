import React, { useEffect } from "react";
import { useRouter } from "next/router";

// TODO switch to the login page after created

export const RouteGuard = (props: React.ComponentProps<any>) => {
  const router = useRouter();
  const isAuthenticated = true;

  useEffect(() => {
    const path = router.asPath.split("?")[0];
    const publicPaths = ["/"];

    if (!isAuthenticated && !publicPaths.includes(path)) {
      router.push({ pathname: "/" });
    }
  }, [isAuthenticated, router]);

  return props.children;
};

export default RouteGuard;
