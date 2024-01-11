import "reflect-metadata"
import { buildSchema } from "type-graphql"
import express from "express"
import { graphqlHTTP } from "express-graphql"

import { UsersResolver } from "./users/resolvers"