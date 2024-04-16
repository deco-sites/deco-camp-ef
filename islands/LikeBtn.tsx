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
      console.log(selected);
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
      },[]);
    

    const handleClick = async (e: MouseEvent) => {
        e.preventDefault();
        selected.value = !selected.value;

        await invoke["deco-sites/deco-camp-ef"].actions.sendLikes({
        productId: productId,
        });

        const totalLikes = await invoke["deco-sites/deco-camp-ef"].loaders
        .totalLikes();

        total.value = totalLikes.total;

        const totalLikesProduct = await invoke["deco-sites/deco-camp-ef"].loaders
        .totalLikesProduct({ productId });

        quantity.value = totalLikesProduct.product;

        console.log(selected);
    };


    
    return (
      <>
        <button
        className="flex items-center gap-2"
        onClick={(e) => handleClick(e)}
        >
        {selected
          ? <Icon id="MoodSmile" width={24} height={24} />
          : <Icon id="MoodCheck" width={24} height={24} />
        }
        </button>
        <span>{quantity}</span>
      </>
    );
}
