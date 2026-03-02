interface SubtitleProps {
    text: string;
}

export function Subtitle({ text }: SubtitleProps) {
    return <p className="text-gray-300 text-md font-normal md:text-lg">{text}</p>;
}
