import store from "@/store";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoadingBar from "react-top-loading-bar";

import { PrimeReactProvider } from "primereact/api";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { useRouter } from "next/router";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    router.events.on("routeChangeStart", (url) => {
      setProgress(50);
    });
    router.events.on("routeChangeComplete", (url) => {
      setProgress(100);
    });
  }, [router.events]);

  /* useEffect(() => {
    const authToken = localStorage.getItem("auth-token");
    if (authToken && router.pathname.includes("auth")) {
      router.push("/");
    }
    if (!authToken && !router.pathname.includes("auth")) {
      router.push("/auth/login");
    }
  }, [router]); */

  return (
    <Provider store={store}>
      <LoadingBar
        color="#574EFA"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        waitingTime={400}
      />
      <PrimeReactProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </PrimeReactProvider>
    </Provider>
  );
}
