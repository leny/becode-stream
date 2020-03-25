/* becodeorg/stream
 *
 * /src/core/apollo.js - ApolloClient configuration
 *
 * coded by leny@BeCode
 * started at 25/03/2020
 */

import {ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";
import {HttpLink} from "apollo-link-http";

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: "https://graph.becode.org/",
    headers: {
        Authorization: `Bearer ${process.env.GRAPH_TOKEN}`,
    },
});

const client = new ApolloClient({
    cache,
    link,
});

export default client;
