"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { config } from "@/wagmi";
import "@rainbow-me/rainbowkit/styles.css";
import { Web3Provider } from "@/contexts/web3Context";
const client = new QueryClient();

export default function RootProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider
          coolMode={true}
          theme={darkTheme({
            accentColor: "#824B3D",
            accentColorForeground: "#dbdbcf",
            borderRadius: "small",
          })}
        >
          <Web3Provider>{children}</Web3Provider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
