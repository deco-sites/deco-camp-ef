import { Picture, Source } from "apps/website/components/Picture.tsx";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";

export interface Props {
    title: string;
    images: Images[];
    quantity: number;
}

export interface Images {
    src: ImageWidget;
    alt: string;
}

export default function PartialImageGallery({
    images,
    quantity,
    title
}: Props) {
    return (
        <div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {images?.slice(0, quantity).map((image, index) => {
                return (
                    <img src={image.src} alt={image.alt} key={index} />
                )
            }
            )}

        </div>

        {quantity < images.length && (
            <div className="flex justify-center items-center">
            <button
                className="btn btn-primary"
                {...usePartialSection({
                mode: "replace",
                props: { quantity: quantity + 1 },
                })}
            >
                Ver mais
            </button>
            </div>
        )}
        </div>
    );
}
