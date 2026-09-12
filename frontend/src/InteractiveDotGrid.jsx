import React, { useEffect, useRef } from 'react';

export default function InteractiveDotGrid({ theme = 'light' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    const spacing = 32;
    const baseRadius = 1.3;
    const hoverRadius = 130;
    const maxRepelDistance = 18;

    const isDark = theme === 'dark';
    const baseColor = isDark ? 'rgba(255, 255, 255, 0.16)' : 'rgba(209, 213, 219, 0.9)';

    let dots = [];
    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    let isRunning = false;

    class Dot {
      constructor(x, y) {
        this.originX = x;
        this.originY = y;
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.radius = baseRadius;
        this.color = baseColor;
      }

      update(mouseX, mouseY, mouseActive) {
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let force = 0;
        if (mouseActive && dist < hoverRadius && dist > 0) {
          force = (1 - dist / hoverRadius);
          const angle = Math.atan2(dy, dx);
          // Push dot away from mouse
          const repelX = -Math.cos(angle) * force * maxRepelDistance;
          const repelY = -Math.sin(angle) * force * maxRepelDistance;

          this.vx += (this.originX + repelX - this.x) * 0.18;
          this.vy += (this.originY + repelY - this.y) * 0.18;

          // Scale & Color highlight
          this.radius = baseRadius + force * 1.6;
          if (isDark) {
            const alpha = 0.3 + force * 0.7;
            this.color = `rgba(0, 225, 160, ${alpha})`;
          } else {
            const r = Math.round(209 - force * (209 - 0));
            const g = Math.round(213 - force * (213 - 135));
            const b = Math.round(219 - force * (219 - 103));
            const alpha = 0.85 + force * 0.15;
            this.color = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          }
        } else {
          // Spring back to origin
          this.vx += (this.originX - this.x) * 0.12;
          this.vy += (this.originY - this.y) * 0.12;

          this.radius += (baseRadius - this.radius) * 0.1;
          this.color = baseColor;
        }

        // Apply friction
        this.vx *= 0.8;
        this.vy *= 0.8;

        this.x += this.vx;
        this.y += this.vy;

        // Check if dot is practically at rest
        const isResting =
          Math.abs(this.vx) < 0.01 &&
          Math.abs(this.vy) < 0.01 &&
          Math.abs(this.x - this.originX) < 0.05 &&
          Math.abs(this.y - this.originY) < 0.05 &&
          Math.abs(this.radius - baseRadius) < 0.05;

        return !isResting;
      }

      draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
      }
    }

    const initDots = () => {
      dots = [];
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          dots.push(new Dot(c * spacing, r * spacing));
        }
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      initDots();
      startLoop();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      let anyMoving = false;
      const len = dots.length;

      for (let i = 0; i < len; i++) {
        const dot = dots[i];
        const isMoving = dot.update(mouse.x, mouse.y, mouse.active);
        if (isMoving) anyMoving = true;
        dot.draw(ctx);
      }

      // If mouse is active or any dot is moving, continue loop
      if (mouse.active || anyMoving) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        isRunning = false;
      }
    };

    const startLoop = () => {
      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
      startLoop();
    };

    const handlePointerLeave = () => {
      mouse.active = false;
      startLoop();
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
        mouse.active = true;
        startLoop();
      }
    };

    const handleTouchEnd = () => {
      mouse.active = false;
      startLoop();
    };

    // Attach listeners to parent section
    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('pointermove', handlePointerMove, { passive: true });
      parent.addEventListener('pointerdown', handlePointerMove, { passive: true });
      parent.addEventListener('pointerleave', handlePointerLeave, { passive: true });
      parent.addEventListener('touchmove', handleTouchMove, { passive: true });
      parent.addEventListener('touchstart', handleTouchMove, { passive: true });
      parent.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(canvas);

    resize();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (parent) {
        parent.removeEventListener('pointermove', handlePointerMove);
        parent.removeEventListener('pointerdown', handlePointerMove);
        parent.removeEventListener('pointerleave', handlePointerLeave);
        parent.removeEventListener('touchmove', handleTouchMove);
        parent.removeEventListener('touchstart', handleTouchMove);
        parent.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
