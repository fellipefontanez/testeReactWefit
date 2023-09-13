import StyledLista, { ItemLista } from "@styles/Carrinho/Lista";
import { Filme } from "Types/Filme";
import InputQuantidade from "./InputQuantidade";
import Subtotal from "./Subtotal";
import { formatoMonetario } from "@services/FormataMonetario";
import { useDispatch } from "react-redux";
import { removeFilmeFromId } from "@util/redux/reducers/filmes";

interface Props {
  lista: Filme[];
}

export default function Lista({ lista }: Props) {
  const dispatch = useDispatch();
  return (
    <StyledLista>
      {lista.map((filme) => (
        <ItemLista key={filme.id}>
          <img src={filme.image} alt="capa" />
          <div className="info">
            <div className="row">
              <div className="coreInformation">
                <span>{filme.title}</span>
                <span>{formatoMonetario(filme.price)}</span>
              </div>
              <button onClick={() => dispatch(removeFilmeFromId(filme.id))}>
                <img src="/src/assets/icons/lixo.svg" alt="lixo" />
              </button>
            </div>
            <div className="row">
              <InputQuantidade
                quantidade={filme.quantidade}
                filmeId={filme.id}
              />
              <Subtotal valor={filme.price * filme.quantidade} />
            </div>
          </div>
        </ItemLista>
      ))}
    </StyledLista>
  );
}
