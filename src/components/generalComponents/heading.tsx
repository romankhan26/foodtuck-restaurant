import { Great_Vibes } from "next/font/google";

const great_vibes = Great_Vibes({
  weight:"400",
  variable: "--font-great-vibes",

});


export function Heading({
    text,
    colorOfInitial,
  }: {
    text: string;
    colorOfInitial: boolean;
  }) {
    return (
      <h1
        className={` md:text-[36px] text-[20px]  font-bold leading-tight`}
      >
        {colorOfInitial ? (
          <span className="text-[#FF9F0D]">{text.slice(0, 2)}</span>
        ) : (
          text.slice(0, 2)
        )}
        {text.slice(2)}
      </h1>
    );
  }

export function HeadingGreatVibes({ className, text }: { className: string; text: string }) {
  return (
    <h1 className={`${great_vibes.className} text-[#FF9F0D] text-[20px] md:text-[30px] ${className}`}>{text}</h1>
  );
}
