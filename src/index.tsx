import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { Container } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-vv56j5skcswxbfmp.us.auth0.com"
      clientId="8JjPHpSxGLglHU6NJu0yhWYsrpVxavzV"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Container maxWidth="lg">
        <App />
      </Container>
    </Auth0Provider>
  </React.StrictMode>
);
