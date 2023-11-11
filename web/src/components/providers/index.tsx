import { PropsWithChildren } from "react";
import ThemeProvider from "./theme-provider";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}