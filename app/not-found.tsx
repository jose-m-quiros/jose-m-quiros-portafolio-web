import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="section-container flex min-h-screen items-center justify-center">
        <div className="max-w-xl rounded-xl border bg-card p-8 text-center shadow-sm">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">404</p>
          <h1 className="mb-4 text-3xl font-bold">Ruta no encontrada</h1>
          <p className="mb-6 text-muted-foreground">
            Esta página no existe o fue movida durante la evolución del portafolio.
          </p>
          <Link href="/" className="btn-primary">
            Volver al inicio
          </Link>
        </div>
      </section>
    </main>
  );
}
