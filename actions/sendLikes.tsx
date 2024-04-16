import { AppContext } from "deco-sites/deco-camp-ef/apps/site.ts";

export interface sendLikesProps {
  productID: string;
}

export default async function sendLikes(
  props: sendLikesProps,
  _req: Request,
  _ctx: AppContext,
) {
  const data = { productId: props.productID };

  console.log("data", data);

  const response = await fetch("https://camp-api.deco.cx/event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "deco-camp-ef",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}