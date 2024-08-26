import React from "react";
import ReactDOM from "react-dom/client";
import Characters from "./Characters.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a QueryClient instance
const queryClient = new QueryClient();

// Setup Tanstack Query below
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap your application with QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <Characters />
    </QueryClientProvider>
  </React.StrictMode>
);
