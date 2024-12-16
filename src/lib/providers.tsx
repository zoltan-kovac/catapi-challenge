import CatsView from "@/app/cats";
import CatDetail from "@/components/cat-detail";
import Layout from "@/components/layout";
import { system } from "@/theme";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

export function Providers() {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" loader={async () => redirect("cats")} />
              <Route path="cats" element={<Layout />}>
                <Route index element={<CatsView />} />
                <Route path=":catId" element={<CatDetail />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
}
