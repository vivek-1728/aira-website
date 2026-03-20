interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  gradient = true,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`space-y-4 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight ${
          gradient ? "gradient-text" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
