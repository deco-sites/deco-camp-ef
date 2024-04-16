import { signal, useSignal } from "@preact/signals";
import Icon from "deco-sites/deco-camp-ef/components/ui/Icon.tsx";
import { useEffect, useState } from "preact/hooks";

export interface Props {
  productId: number;
}

function LikeBtn({ productId }: Props) {
    // const [liked, setLiked] = useState(false);
    // const [likes, setLikes] = useState(0);
    // const [loading, setLoading] = useState(false);


    // const handleClick = (e: MouseEvent) => {
    //     setLikes(likes + 1);
    // };
    
    // return (
    //     <button
    //     className="flex items-center gap-2"
    //     onClick={(e) => handleClick(e)}
    //     >
    //         {liked ? (  // If liked is true then render MoodCheck icon  else render MoodSmile icon
    //             <Icon id="MoodCheck" width={50} height={50} />
    //         ) : (
    //             <Icon id="MoodSmile" width={50} height={50} />
    //         )}
    //     <span>{likes}</span>
    //     </button>
    // );

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
        You pressed me {count} times
        </button>
    );
}

export default LikeBtn;