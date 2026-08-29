/**
 * Root loading UI — Next.js automatically renders this while a route
 * segment (and any of its data dependencies) is loading, wrapping the
 * page in a Suspense boundary behind the scenes. Kept intentionally
 * calm and minimal (a single pulsing accent bar), consistent with the
 * Animation System's "calm over energetic" principle — no spinners or
 * skeleton screens needed for a static, SSG-first site where this will
 * rarely be visible for more than a moment.
 */
export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="flex min-h-[60vh] items-center justify-center"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="h-1 w-24 overflow-hidden rounded-full bg-border">
          <div className="h-full w-1/3 animate-loading-bar rounded-full bg-accent" />
        </div>
        <span className="sr-only">Loading…</span>
      </div>
    </div>
  );
}
