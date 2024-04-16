import { AppContext } from "deco-sites/deco-camp-ef/apps/site.ts";

export interface totalLikesProductProps {
    productId: string;
}

export default async function totalLikesProduct(
  props: totalLikesProductProps,
  _req: Request,
  _ctx: AppContext,
) {
  const response = await fetch(
    `https://camp-api.deco.cx/event/${props.productId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "deco-camp-ef",
      },
    },
  );

  return response.json();
}