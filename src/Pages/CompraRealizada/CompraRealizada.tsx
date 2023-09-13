import Botao from "@components/Botao/Botao";
import CompraContainer from "@styles/CompraRealizada/Container";
import { useNavigate } from "react-router-dom";

export default function CompraRealizada() {
  const navigate = useNavigate();
  return (
    <CompraContainer>
      <span className="title">Compra realizada com sucesso!</span>
      <img src="/src/assets/vetores/compra-finalizada.svg" alt="parabens" />
      <Botao
        texto="Voltar"
        onClick={() => navigate("/")}
        height={40}
        width={180}
      />
    </CompraContainer>
  );
}
