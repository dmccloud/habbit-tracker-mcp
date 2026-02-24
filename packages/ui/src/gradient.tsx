export function Gradient({
  className,
  small,
}: {
  small?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`ui:absolute ui:mix-blend-normal ui:will-change-[filter] ui:rounded-[100%] ${
        small ? "ui:blur-[32px]" : "ui:blur-[75px]"
      } ui:bg-warm-tan/40 ${className ?? ""}`}
    />
  );
}
