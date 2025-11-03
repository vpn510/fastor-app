import { useEffect, useRef, useState } from 'react';

const OverlayCanvas = ({ imageSrc, logoSrc, width = 600, height = 400 }) => {
  const canvasRef = useRef(null);
  const [logoPosition, setLogoPosition] = useState({ x: width / 2 - 50, y: height / 2 - 50 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const bg = new Image();
    const logo = new Image();

    bg.src = imageSrc;
    logo.src = logoSrc;

    bg.onload = () => {
      canvas.width = width;
      canvas.height = height;
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(bg, 0, 0, width, height);
      logo.onload = () => {
        ctx.drawImage(logo, logoPosition.x, logoPosition.y, 100, 100);
      };
    };
  }, [imageSrc, logoSrc, logoPosition, width, height]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.nativeEvent.offsetX - logoPosition.x,
      y: e.nativeEvent.offsetY - logoPosition.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.nativeEvent.offsetX - offset.x;
    const y = e.nativeEvent.offsetY - offset.y;
    setLogoPosition({ x, y });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <canvas
      ref={canvasRef}
      className="mx-auto block border rounded shadow-md"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    />
  );
};

export default OverlayCanvas;