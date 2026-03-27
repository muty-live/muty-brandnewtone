import { useRef, useEffect } from 'react';

export function useDragScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.pageX - element.offsetLeft;
      scrollLeft.current = element.scrollLeft;
      element.style.cursor = 'grabbing';
      element.style.userSelect = 'none';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - element.offsetLeft;
      const walk = (x - startX.current) * 2;
      element.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      element.style.cursor = 'grab';
      element.style.userSelect = 'auto';
    };

    const handleMouseLeave = () => {
      if (isDragging.current) {
        isDragging.current = false;
        element.style.cursor = 'grab';
        element.style.userSelect = 'auto';
      }
    };
// 無限ループのためのスクロール位置監視
    const handleScroll = () => {
      if (isDragging.current) return;
      
      const scrollWidth = element.scrollWidth;
      const clientWidth = element.clientWidth;
      const scrollLeft = element.scrollLeft;
      const halfWidth = scrollWidth / 2;

      // 右端に到達したら左側にジャンプ
      if (scrollLeft >= halfWidth - clientWidth) {
        element.scrollLeft = scrollLeft - halfWidth;
      }
      // 左端に到達したら右側にジャンプ
      else if (scrollLeft <= 0) {
        element.scrollLeft = halfWidth;
      }
    };

    
    element.addEventListener('mousedown', handleMouseDown);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseup', handleMouseUp);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('scroll', handleScroll);

    // 初期スクロール位置を中央に設定
    element.scrollLeft = element.scrollWidth / 2;

    return () => {
      element.removeEventListener('mousedown', handleMouseDown);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseup', handleMouseUp);
      element.removeEventListener('mouseleave', handleMouseLeave      element.removeEventListener('scroll', handleScroll);
);
    };
  }, []);

  return scrollRef;
}