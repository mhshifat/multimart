import { ThemeContext } from "@/components/providers/theme-provider";
import { useContext } from "react";

export default function useTheme() {
  const res = useContext(ThemeContext);
  if (!res) throw new Error("Please wrap your component with 'ThemeProvider' to use the hook!");
  return res;
}