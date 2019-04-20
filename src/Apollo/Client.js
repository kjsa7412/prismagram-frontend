import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

// Apollo Client
export default new ApolloClient({
  uri: "http://localhost:4000",
  clientState: {
    defaults,
    resolvers
  }
});
