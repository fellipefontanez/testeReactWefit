import Botao from "@components/Botao/Botao";
import { formatoMonetario } from "@services/FormataMonetario";
import FinalizarCompraContainer from "@styles/Carrinho/FinalizarCompra";
import { clearCarrinho } from "@util/redux/reducers/filmes";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface Props {
  valor: number;
}

export default function FinalizarCompra({ valor }: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function finalizarCompra() {
    dispatch(clearCarrinho());
    navigate("/compra-realizada");
  }
  return (
    <FinalizarCompraContainer>
      <div className="totalCompra">
        <span className="titulo">Total</span>
        <span className="valor">{formatoMonetario(valor)}</span>
      </div>
      <div className="buttonHolder">
        <Botao texto="Finalizar pedido" onClick={finalizarCompra} height={40} />
      </div>
    </FinalizarCompraContainer>
  );
}
