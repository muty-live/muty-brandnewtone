import { useEffect, useRef } from 'react';
import logoLeft from '../../assets/logo-left.png';
import logoRight from '../../assets/logo-right.png';
import logoText from '../../assets/logo-text.svg';
import './style.css';

export function Loading() {
  const loadingRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLImageElement>(null);
  const rightRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const delay = 500;

    const timer1 = setTimeout(() => {
      leftRef.current?.classList.add('is-action');
      rightRef.current?.classList.add('is-action');

      const timer2 = setTimeout(() => {
        textRef.current?.classList.add('is-action');

        const timer3 = setTimeout(() => {
          loadingRef.current?.classList.add('is-loaded');
        }, 1000);

        return () => clearTimeout(timer3);
      }, 400);

      return () => clearTimeout(timer2);
    }, delay);

    return () => clearTimeout(timer1);
  }, []);

  return (
    <div className="loading" ref={loadingRef}>
      <div className="loading-inner">
        <div className="loading-logo-container">
          <img 
            src={logoLeft} 
            ref={leftRef} 
            className="loading-logo-left" 
            alt="" 
          />
          <img 
            src={logoRight} 
            ref={rightRef} 
            className="loading-logo-right" 
            alt="" 
          />
          <img 
            src={logoText} 
            ref={textRef} 
            className="loading-logo-text" 
            alt="MUTY" 
          />
        </div>
      </div>
    </div>
  );
}