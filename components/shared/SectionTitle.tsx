import { cn } from "@/lib/utils";

export default function SectionTitle({
  text,
  accentText,
  color = "#d1d5dc",
  accentColor = "#E26A2C",
  className,
}: {
  text: string;
  accentText: string;
  color?: string;
  accentColor?: string;
  className?: string;
}) {
  return (
    <h2 className={cn("text-h1  relative w-fit  pb-6", className)}>
      {text}{" "}
      <span style={{ color: accentColor }} className=" font-extrabold">
        {accentText}
      </span>
      <span
        style={{ color: color, background: color }}
        className="w-full bottom-0 left-0 absolute h-px bg-gray-300"
      />
    </h2>
  );
}
