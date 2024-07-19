import React from 'react';
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import Router from "./Router.jsx";


export function render ({ path }) {
    const html = ReactDOMServer.renderToString(
      <React.StrictMode>
          <StaticRouter location={ path }>
            <Router />
          </StaticRouter>
      </React.StrictMode>
    )
    return { html }
}