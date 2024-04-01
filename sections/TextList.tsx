export interface Props {
    text: string[];
}

export default function TextList(props: Props) {
    const { text } = props;
    return (
        <div class="flex flex-col gap-2">
            {text.map((t) => <p class="text-lg lg:text-xl">{t}</p>)}
        </div>
    );
}