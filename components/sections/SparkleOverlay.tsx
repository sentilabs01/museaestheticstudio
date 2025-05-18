"use client";

import { useEffect, useRef } from "react";

export function SparkleOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Sparkle properties
    const sparkles: Array<{
      x: number;
      y: number;
      size: number;
      velocity: number;
      opacity: number;
    }> = [];

    // Animation
    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw sparkles
      for (let i = sparkles.length - 1; i >= 0; i--) {
        const sparkle = sparkles[i];
        sparkle.y -= sparkle.velocity;
        sparkle.opacity -= 0.01;

        if (sparkle.opacity <= 0) {
          sparkles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${sparkle.opacity})`;
        ctx.fill();
      }

      // Add new sparkles randomly
      if (Math.random() < 0.1 && canvas) {
        sparkles.push({
          x: Math.random() * canvas.width,
          y: canvas.height + 10,
          size: Math.random() * 2 + 1,
          velocity: Math.random() * 2 + 1,
          opacity: 0.8,
        });
      }

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-50"
    />
  );
} 