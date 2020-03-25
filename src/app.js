/* becodeorg/stream
 *
 * /src/app.js - main entry point
 *
 * coded by leny@BeCode
 * started at 25/03/2020
 */

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import {ApolloProvider} from "react-apollo";
import apolloClient from "./core/apollo";

import RootComponent from "./components/root";

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <RootComponent />
    </ApolloProvider>,
    document.querySelector("#app"),
);
