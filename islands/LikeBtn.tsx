import { signal, useSignal } from "@preact/signals";
import { total } from "deco-sites/deco-camp-ef/sdk/useTotalLikes.ts";
import { invoke } from "deco-sites/deco-camp-ef/runtime.ts";
import Icon from "deco-sites/deco-camp-ef/components/ui/Icon.tsx";
import { useState, useEffect } from "preact/hooks";

export interface Props {
  productId: string;
}


export default function LikeBtn({ productId }: Props) {
    const selected = useSignal(false);
    const quantity = useSignal(0);

    useEffect(() => {
        const updateTotals = async () => {
          const totalVotes = await invoke["deco-sites/deco-camp-ef"].loaders
            .totalLikes();
    
          const totalVotesProduct = await invoke["deco-sites/deco-camp-ef"].loaders
            .totalLikesProduct({ productId });
    
          total.value = totalVotes.total;
          quantity.value = totalVotesProduct.product;
          console.log(totalVotes.total);
        };
    
        updateTotals();
      });
    

    const handleClick = async (e: MouseEvent) => {
        e.preventDefault();
        console.log(selected, quantity.value);
        selected.value = true;
        quantity.value = quantity.value + 1;
        console.log(selected, quantity.value);
    };


    
    return (
        <button
        className="flex items-center gap-2"
        onClick={(e) => handleClick(e)}
        >
        {!selected.value
          ? <Icon id="MoodSmile" width={24} height={24} />
          : <Icon id="MoodCheck" width={24} height={24} />
        }
        <span>{quantity}</span>
        </button>
    );
}
