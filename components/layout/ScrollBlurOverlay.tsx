export default function ScrollBlurOverlay() {
  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-40 pointer-events-none backdrop-blur-md"
      style={{
        height: 96,
        maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
      }}
    />
  );
}
