import { createServer, Model } from "miragejs";

export function makeServer() {
  const server = createServer({
    models: {
      transaction: Model,
    },

    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: "Mercado",
            type: "withdrawn",
            amount: 450,
            category: "Compra",
            createdAt: new Date("2021-05-12"),
          },
          {
            id: 2,
            title: "Desenvolvimento web",
            type: "deposit",
            amount: 2500,
            category: "Dev",
            createdAt: new Date("2021-08-12"),
          },
        ],
      });
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/transactions", () => {
        return this.schema.all("transaction");
      });

      this.post("/transactions", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create("transaction", data);
      });

      this.namespace = "";
    },
  });

  return server;
}
