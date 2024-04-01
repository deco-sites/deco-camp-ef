export interface Props {
    text: string[];
}

export default function NewSection(props: Props) {
    const { text } = props;
    return (
        <div class="flex flex-col gap-2">
            <h1>OPAAA</h1>
            {text.map((t) => <p class="text-lg lg:text-xl">{t}</p>)}
        </div>
    );
}