import { useEffect } from "react";
import { useIsMobile } from "./useIsMobile";

export const useMobilePreventContextMenu = () => {
  const isMobile = useIsMobile();
  useEffect(() => {
    if (!isMobile) return; 
    const disableTouchContextMenu = (e: TouchEvent | MouseEvent) => {
      e.preventDefault();
    };

    if (isMobile) {
      window.addEventListener('touchstart', disableTouchContextMenu);
      window.addEventListener('contextmenu', disableTouchContextMenu);
    }

    return () => {
      window.removeEventListener('touchstart', disableTouchContextMenu);
      window.removeEventListener('contextmenu', disableTouchContextMenu);
    };
  }, [isMobile]);
};
