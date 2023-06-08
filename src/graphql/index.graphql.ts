import PostResolver from "./Posts/PostsResolver";
import { buildSchema } from "type-graphql";

export const buildSchemasFunction = async () => {
  const schemas = await buildSchema({
    resolvers: [PostResolver],
  });

  return schemas;
};
