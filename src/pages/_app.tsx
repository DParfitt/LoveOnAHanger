import "@blockle/blocks-v2/src/reset.css";
import type { AppProps } from "next/app";
import { BlocksProvider } from "@blockle/blocks-v2";
import { momotaroTheme } from "@blockle/blocks-v2/src/Themes/Momotaro";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BlocksProvider theme={momotaroTheme} spriteUrl="">
      <Component {...pageProps} />
    </BlocksProvider>
  );
}

export default MyApp;
