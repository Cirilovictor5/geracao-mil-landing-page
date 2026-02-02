import { useEffect, useState } from "react";
import App1111 from "./imports/App-1-1111";
import ConfirmacaoPagamentoHotmart from "./components/ConfirmacaoPagamentoHotmart";

export default function App() {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname,
  );

  useEffect(() => {
    // Detectar mudanças na URL
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);
    return () =>
      window.removeEventListener(
        "popstate",
        handleLocationChange,
      );
  }, []);

  // Roteamento simples
  if (
    currentPath === "/confirmacao-pagamento" ||
    currentPath === "/confirmacao-pagamento/"
  ) {
    return <ConfirmacaoPagamentoHotmart />;
  }

  return <App1111 />;
}