import { useEffect } from "react";

export const useDisableZoomAndScroll = ()=>{
  useEffect(() => {
    const viewport = document.querySelector('meta[name="viewport"]');
    const originalViewportContent = viewport?.getAttribute('content') || '';

    if (viewport) {
      viewport.setAttribute(
        'content',
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      );
    }

    document.body.style.overflowX = 'hidden';

    return () => {
      if (viewport) {
        viewport.setAttribute('content', originalViewportContent);
      }
      document.body.style.overflowX = 'auto';
    };
  }, []);
}