import { createSchema, createYoga } from "graphql-yoga";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { createServer } from "http";

const yoga = createYoga({
    schema: createSchema({ typeDefs, resolvers })
})

createServer(yoga).listen(4000, () => {
    console.log("Graphql is reading on http://localhost:4000/graphql")
})