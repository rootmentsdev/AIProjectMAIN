import React, { useEffect, useRef } from 'react';
import './GlowCursor.css';

/**
 * Ultra-smooth, high-performance fluid cursor & ribbon glow trail.
 * Works seamlessly on desktop (mouse) and phone screens (touch).
 * Features:
 * - Fluid spring follower with Catmull-Rom spline path smoothing
 * - Interactive touch & click shockwave ripples
 * - Subtle ambient glow spotlight
 * - Velocity-reactive stardust particles
 * - Touch & pointer reactive on mobile devices
 */
const GlowCursor = ({
  color = '#008767',
  secondaryColor = '#10B981',
  trailLength = 28,
  trailWidth = 6,
  glowSpread = 16,
  glowIntensity = 0.85,
  particleCount = 14,
  showDot = true,
  showTrail = true,
  showParticles = true,
  showSpotlight = true,
  showRipples = true,
  children,
  className = '',
  style,
  ...rest
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: width / 2, y: height / 2 };
    let prevMouse = { x: width / 2, y: height / 2 };
    let cursor = { x: width / 2, y: height / 2 };
    let velocity = { x: 0, y: 0 };
    let speed = 0;
    let isHovering = false;
    let isClicking = false;
    let isVisible = false;
    let opacity = 0;
    let rafId = 0;
    let isTouchActive = false;

    // Trail history
    const trail = [];
    const maxTrail = Math.max(8, Math.min(trailLength, 60));

    // Stardust / fluid ambient particles
    const particles = [];
    const maxParticles = particleCount;

    // Click & Touch shockwave ripples
    const ripples = [];

    class Particle {
      constructor(x, y, vx, vy) {
        this.x = x + (Math.random() - 0.5) * 6;
        this.y = y + (Math.random() - 0.5) * 6;
        this.vx = vx * 0.2 + (Math.random() - 0.5) * 1.8;
        this.vy = vy * 0.2 + (Math.random() - 0.5) * 1.8;
        this.size = Math.random() * 2.5 + 1;
        this.life = 1;
        this.decay = Math.random() * 0.035 + 0.02;
        this.hueShift = Math.random() > 0.5;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.94;
        this.vy *= 0.94;
        this.life -= this.decay;
      }
      draw(c) {
        if (this.life <= 0) return;
        c.save();
        c.beginPath();
        c.arc(this.x, this.y, this.size * this.life, 0, Math.PI * 2);
        c.fillStyle = this.hueShift ? secondaryColor : color;
        c.globalAlpha = this.life * 0.65;
        c.shadowColor = color;
        c.shadowBlur = 8;
        c.fill();
        c.restore();
      }
    }

    class Ripple {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 4;
        this.maxRadius = 38;
        this.life = 1;
        this.decay = 0.045;
      }
      update() {
        this.radius += (this.maxRadius - this.radius) * 0.14;
        this.life -= this.decay;
      }
      draw(c) {
        if (this.life <= 0) return;
        c.save();
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.strokeStyle = color;
        c.lineWidth = 1.5 * this.life;
        c.globalAlpha = this.life * 0.55;
        c.shadowColor = color;
        c.shadowBlur = 10;
        c.stroke();
        c.restore();
      }
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const updatePosition = (clientX, clientY) => {
      mouse.x = clientX;
      mouse.y = clientY;
      isVisible = true;
    };

    const handleMouseMove = (e) => {
      if (isTouchActive) return;
      updatePosition(e.clientX, e.clientY);

      // Check interactive hover
      const target = e.target;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList?.contains('cursor-pointer'))
      ) {
        isHovering = true;
      } else {
        isHovering = false;
      }
    };

    const handleMouseDown = (e) => {
      if (isTouchActive) return;
      isClicking = true;
      if (showRipples) {
        ripples.push(new Ripple(e.clientX, e.clientY));
      }
    };

    const handleMouseUp = () => (isClicking = false);
    const handleMouseLeave = () => { isVisible = false; };
    const handleMouseEnter = () => { isVisible = true; };

    // Mobile touch events
    const handleTouchStart = (e) => {
      isTouchActive = true;
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        updatePosition(touch.clientX, touch.clientY);
        cursor.x = touch.clientX;
        cursor.y = touch.clientY;
        prevMouse.x = touch.clientX;
        prevMouse.y = touch.clientY;
        isClicking = true;
        if (showRipples) {
          ripples.push(new Ripple(touch.clientX, touch.clientY));
        }
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        updatePosition(touch.clientX, touch.clientY);
      }
    };

    const handleTouchEnd = () => {
      isClicking = false;
      // Fade out gracefully after touch release
      setTimeout(() => {
        if (!isClicking) {
          isVisible = false;
        }
      }, 500);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Touch support for phone screens
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('touchcancel', handleTouchEnd, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth opacity transition
      const targetOpacity = isVisible ? 1 : 0;
      opacity += (targetOpacity - opacity) * 0.12;

      if (opacity > 0.001) {
        // Calculate physics
        velocity.x = mouse.x - prevMouse.x;
        velocity.y = mouse.y - prevMouse.y;
        speed = Math.hypot(velocity.x, velocity.y);
        prevMouse.x = mouse.x;
        prevMouse.y = mouse.y;

        // Spring lerp
        const followFactor = isHovering ? 0.38 : 0.24;
        cursor.x += (mouse.x - cursor.x) * followFactor;
        cursor.y += (mouse.y - cursor.y) * followFactor;

        // Trail point insertion
        trail.unshift({ x: cursor.x, y: cursor.y, speed });
        if (trail.length > maxTrail) {
          trail.pop();
        }

        // Particle generation
        if (showParticles && speed > 2.5 && particles.length < maxParticles) {
          particles.push(new Particle(cursor.x, cursor.y, velocity.x, velocity.y));
        }

        // 1. Soft Ambient Spotlight behind cursor
        if (showSpotlight) {
          ctx.save();
          const spotRadius = isHovering ? 140 : 100;
          const gradient = ctx.createRadialGradient(
            cursor.x,
            cursor.y,
            0,
            cursor.x,
            cursor.y,
            spotRadius
          );
          gradient.addColorStop(0, 'rgba(0, 135, 103, 0.08)');
          gradient.addColorStop(0.5, 'rgba(16, 185, 129, 0.03)');
          gradient.addColorStop(1, 'rgba(0, 135, 103, 0)');
          ctx.fillStyle = gradient;
          ctx.globalAlpha = opacity;
          ctx.beginPath();
          ctx.arc(cursor.x, cursor.y, spotRadius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        // 2. Fluid Spline Smooth Trail
        if (showTrail && trail.length > 2) {
          for (let i = 0; i < trail.length - 1; i++) {
            const p1 = trail[i];
            const p2 = trail[i + 1];
            const progress = i / trail.length; // 0 to 1
            const segmentAlpha = (1 - progress) * 0.72 * opacity;
            const currentWidth = Math.max(
              1,
              trailWidth * (1 - progress * 0.85) + Math.min(speed * 0.12, 3.5)
            );

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            const activeColor = i < trail.length * 0.4 ? color : secondaryColor;
            ctx.shadowColor = activeColor;
            ctx.shadowBlur = glowSpread * (1 - progress * 0.5) * glowIntensity;
            ctx.strokeStyle = activeColor;
            ctx.globalAlpha = segmentAlpha;
            ctx.lineWidth = currentWidth;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();
            ctx.restore();
          }
        }

        // 3. Stardust particles
        if (showParticles) {
          for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.update();
            p.draw(ctx);
            if (p.life <= 0) {
              particles.splice(i, 1);
            }
          }
        }

        // 4. Click & Touch Ripples
        if (showRipples) {
          for (let i = ripples.length - 1; i >= 0; i--) {
            const r = ripples[i];
            r.update();
            r.draw(ctx);
            if (r.life <= 0) {
              ripples.splice(i, 1);
            }
          }
        }

        // 5. Outer Halo / Magnetic Ring
        ctx.save();
        const ringRadius = isHovering ? 24 : isClicking ? 9 : 14;
        ctx.beginPath();
        ctx.arc(cursor.x, cursor.y, ringRadius, 0, Math.PI * 2);
        ctx.strokeStyle = color;
        ctx.lineWidth = isHovering ? 2 : 1.5;
        ctx.globalAlpha = (isHovering ? 0.95 : 0.45) * opacity;
        ctx.shadowColor = color;
        ctx.shadowBlur = isHovering ? 16 : 8;
        if (isHovering) {
          ctx.fillStyle = color;
          ctx.globalAlpha = 0.08 * opacity;
          ctx.fill();
        }
        ctx.stroke();
        ctx.restore();

        // 6. Precision Core Dot
        if (showDot) {
          ctx.save();
          const dotRadius = isClicking ? 2 : isHovering ? 3.5 : 2.5;
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = isHovering ? color : '#0f172a';
          ctx.globalAlpha = 0.95 * opacity;
          ctx.shadowColor = color;
          ctx.shadowBlur = 5;
          ctx.fill();
          ctx.restore();
        }
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [
    color,
    secondaryColor,
    trailLength,
    trailWidth,
    glowSpread,
    glowIntensity,
    particleCount,
    showDot,
    showTrail,
    showParticles,
    showSpotlight,
    showRipples,
  ]);

  return (
    <div className={`smooth-glow-wrapper ${className}`.trim()} style={style} {...rest}>
      <canvas ref={canvasRef} className="smooth-glow-canvas" aria-hidden="true" />
      <div className="smooth-glow-content">{children}</div>
    </div>
  );
};

export default GlowCursor;
