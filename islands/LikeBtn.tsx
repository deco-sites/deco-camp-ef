import { signal, useSignal } from "@preact/signals";
import { totalLikes } from "deco-sites/deco-camp-ef/sdk/useTotalLikes.ts";
import Icon from "deco-sites/deco-camp-ef/components/ui/Icon.tsx";
import { useState } from "preact/hooks";

export interface Props {
  productId: number;
}

function LikeBtn({ productId }: Props) {
    const selected = useSignal(false);
    const quantity = useSignal(0);

    const handleClick = async (e: MouseEvent) => {
        e.preventDefault();
        selected.value = !selected.value;
        quantity.value = quantity.value + 1;
        console.log(quantity.value);
    };
    
    
    return (
        <button
        className="flex items-center gap-2"
        onClick={(e) => handleClick(e)}
        >
            {!selected.value 
                ? <Icon id="MoodCheck" width={50} height={50} />
                : <Icon id="MoodSmile" width={50} height={50} />
            }
        <span>{quantity.value}</span>
        </button>
    );
}

export default LikeBtn;