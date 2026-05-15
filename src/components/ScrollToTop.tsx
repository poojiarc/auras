import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component handles resetting the scroll position to the top of the page
 * whenever the route (pathname) changes. This ensures a consistent user experience
 * in a Single Page Application (SPA).
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // We use behavior: "instant" to jump to the top immediately upon route change,
    // which is the standard behavior expected in most web applications.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as ScrollBehavior,
    });
  }, [pathname]);

  // This component doesn't render any UI
  return null;
}
