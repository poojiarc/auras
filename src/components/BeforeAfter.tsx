import { useState, useRef, useEffect } from "react";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
}

export function BeforeAfter({ beforeImage, afterImage }: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none touch-none shadow-soft"
      onMouseDown={() => setIsDragging(true)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchStart={() => setIsDragging(true)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      <img src={afterImage} alt="After" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      
      <div 
        className="absolute inset-0 overflow-hidden" 
        style={{ width: `${sliderPosition}%` }}
      >
        <img src={beforeImage} alt="Before" className="absolute inset-0 h-full w-[calc(100vw)] object-cover max-w-none" style={{ width: containerRef.current?.offsetWidth || '100%' }} draggable={false} />
      </div>

      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-md">
          <MoveHorizontal className="h-4 w-4 text-primary" />
        </div>
      </div>
      
      <div className="absolute bottom-4 left-4 glass-light px-3 py-1 rounded-full text-xs font-semibold text-white/90">Before</div>
      <div className="absolute bottom-4 right-4 glass-light px-3 py-1 rounded-full text-xs font-semibold text-white/90">After</div>
    </div>
  );
}
