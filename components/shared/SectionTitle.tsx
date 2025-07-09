export default function SectionTitle({
  text,
  accentText ,
  color = "#000",
  accentColor = "#E26A2C"
}: {
  text: string;
  accentText: string;
  color?:string;
  accentColor?:string
}) {
  return (
    <h2 className="text-h1 relative w-fit  pb-6">
      {text}{" "}
      <span style={{color:accentColor}} className=" font-extrabold">{accentText}</span>
      <span style={{color:color}} className="w-full bottom-0 left-0 absolute h-px bg-gray-300" />
    </h2>
  );
}
