import { rest } from "msw";

const handlers = [
  rest.get("/api/products", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(4000),
      ctx.json({
        items: [{ name: "product-1" }, { name: "product-2" }],
      })
    );
  }),
];

export default handlers;
