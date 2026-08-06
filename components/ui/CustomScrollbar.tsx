'use client';

import { useEffect, useRef, useState } from "react";

const THUMB_COLOR = "#B95E3C";
const THUMB_HOVER_COLOR = "#9C4E30";
const TRACK_WIDTH = 8;
const MIN_THUMB_HEIGHT = 40;

export default function CustomScrollbar() {
  const [thumb, setThumb] = useState({ height: 0, top: 0, visible: false });
  const [hover, setHover] = useState(false);
  const draggingRef = useRef(false);
  const dragStartRef = useRef({ mouseY: 0, scrollY: 0 });

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const scrollHeight = doc.scrollHeight;
      const clientHeight = doc.clientHeight;
      const scrollTop = doc.scrollTop || document.body.scrollTop;

      if (scrollHeight <= clientHeight) {
        setThumb((t) => ({ ...t, visible: false }));
        return;
      }

      const height = Math.max(
        (clientHeight / scrollHeight) * clientHeight,
        MIN_THUMB_HEIGHT
      );
      const maxScroll = scrollHeight - clientHeight;
      const maxTop = clientHeight - height;
      const top = maxScroll > 0 ? (scrollTop / maxScroll) * maxTop : 0;

      setThumb({ height, top, visible: true });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!draggingRef.current) return;
      const doc = document.documentElement;
      const clientHeight = doc.clientHeight;
      const scrollHeight = doc.scrollHeight;
      const maxScroll = scrollHeight - clientHeight;
      const maxTop = clientHeight - thumb.height;
      const deltaY = e.clientY - dragStartRef.current.mouseY;
      const deltaScroll = maxTop > 0 ? (deltaY / maxTop) * maxScroll : 0;
      window.scrollTo({
        top: dragStartRef.current.scrollY + deltaScroll,
        behavior: "auto",
      });
    };

    const onMouseUp = () => {
      draggingRef.current = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [thumb.height]);

  if (!thumb.visible) return null;

  return (
    <div
      className="fixed top-0 right-0 z-[200] hidden md:block"
      style={{ width: TRACK_WIDTH, height: "100vh" }}
    >
      <div
        onMouseDown={(e) => {
          e.preventDefault();
          draggingRef.current = true;
          dragStartRef.current = {
            mouseY: e.clientY,
            scrollY: document.documentElement.scrollTop,
          };
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="absolute right-0 rounded-none cursor-pointer"
        style={{
          width: 6,
          height: thumb.height,
          top: thumb.top,
          backgroundColor: hover ? THUMB_HOVER_COLOR : THUMB_COLOR,
          transition: "background-color 150ms ease-out",
        }}
      />
    </div>
  );
}
