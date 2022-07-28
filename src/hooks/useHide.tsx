import { useEffect, useRef } from "react";


const useHide = (hideFn: () => void) => {

  const domRef = useRef() as React.MutableRefObject<HTMLDivElement>;;

  useEffect(() => {
    function handler(): void;
    function handler(e?: React.MouseEvent<HTMLElement>): void {
      if (e) {
        const target = e.target as HTMLElement;
        if (!domRef.current.contains(target)) {
          hideFn();
        }
      }
    }

    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);

    };
  })

  return domRef 

}

export default useHide;