import Botao from "@components/Botao/Botao";
import { formatoMonetario } from "@services/FormataMonetario";
import StyledCard from "@styles/Card/Card";
import { addToCart } from "@util/redux/reducers/filmes";
import { CardProps } from "Types/CardProps";
import { useDispatch } from "react-redux";

export default function Card({ filme }: CardProps) {
  const dispatch = useDispatch();

  const adicionarNoCarrinho = () => {
    dispatch(addToCart(filme));
  };
  return (
    <StyledCard>
      <img src={filme.image} alt="capa do filme" className="capaFilme" />
      <div className="informacoesFilme">
        <h5>{filme.title}</h5>
        <span>{formatoMonetario(filme.price)}</span>
      </div>
      <Botao
        texto="Adicionar ao carrinho"
        quantidade={filme.quantidade}
        onClick={adicionarNoCarrinho}
      />
    </StyledCard>
  );
}
