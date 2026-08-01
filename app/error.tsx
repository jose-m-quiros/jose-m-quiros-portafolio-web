'use client';

import Link from 'next/link';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="section-container flex min-h-screen items-center justify-center">
        <div className="max-w-xl rounded-xl border bg-card p-8 shadow-sm">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
            Runtime boundary
          </p>
          <h1 className="mb-4 text-3xl font-bold">No se pudo renderizar esta vista.</h1>
          <p className="mb-6 text-muted-foreground">
            La interfaz capturó el error y mantuvo la aplicación aislada. Puedes reintentar la
            renderización o volver al inicio.
          </p>
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={reset} className="btn-primary">
              Reintentar
            </button>
            <Link href="/" className="btn-secondary">
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
