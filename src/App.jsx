import { useEffect, useState } from "react";
import Home from "./pages/Home.jsx";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return <Home isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />;
}
