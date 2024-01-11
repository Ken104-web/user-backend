import "reflect-metadata"
import { buildSchema } from "type-graphql"
import express from "express"
import { graphqlHTTP } from "express-graphql"

import { UsersResolver } from "./users/resolvers"

async function  main() {
    const schema = await buildSchema({
        resolvers: [UsersResolver],
        emitSchemaFile: true,
    })

    const app = express()

    app.use(
        "/user",
        graphqlHTTP({
            schema: schema,
            graphiql: true
        })
    )

    app.listen(8000)

    console.log("Plz bro run server at http://localhost:8000/graphql")
    
}
main()
