type SectionProps = {
  id: string;
  title: string;
  highlight?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  title,
  highlight,
  description,
  children,
  className = '',
}: SectionProps) {
  return (
    <section id={id} className={`section-container ${className}`.trim()}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title} {highlight ? <span className="gradient-text">{highlight}</span> : null}
          </h2>
          {description ? (
            <p className="text-muted-foreground max-w-3xl mx-auto">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
