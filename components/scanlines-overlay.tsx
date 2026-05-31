"use client"

// CHANGE 5: Scanlines overlay - covers entire page
// Position fixed, inset 0, z-index 9999, pointer-events none
// Repeating linear gradient: transparent 0-3px, rgba(200,148,62,0.02) 3-4px
export function ScanlinesOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 9999,
        background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(200,148,62,0.02) 3px, rgba(200,148,62,0.02) 4px)',
      }}
      aria-hidden="true"
    />
  )
}
