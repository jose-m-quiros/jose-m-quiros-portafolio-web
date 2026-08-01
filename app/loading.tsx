export default function Loading() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="section-container flex min-h-screen items-center justify-center">
        <div className="w-full max-w-3xl space-y-6" aria-label="Loading portfolio content">
          <div className="h-4 w-40 animate-pulse rounded bg-primary/30" />
          <div className="h-12 w-full animate-pulse rounded bg-muted" />
          <div className="h-12 w-4/5 animate-pulse rounded bg-muted" />
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="h-20 animate-pulse rounded-lg border bg-card" />
            <div className="h-20 animate-pulse rounded-lg border bg-card" />
            <div className="h-20 animate-pulse rounded-lg border bg-card" />
          </div>
        </div>
      </div>
    </main>
  );
}
