// src/App.tsx

import { ApolloProvider } from "@apollo/client"; // ApolloProvider
import AppRouter from "./routing/AppRouter"; // Tus rutas
import client from "./api/graphql-client";

function App() {
  return (
    <ApolloProvider client={client}>
      <AppRouter /> {/* Aquí es donde tu aplicación usará Apollo Client */}
    </ApolloProvider>
  );
}

export default App;
