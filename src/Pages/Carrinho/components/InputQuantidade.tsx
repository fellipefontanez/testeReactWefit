import StyledInputQuantidade from "@styles/Carrinho/InputQuantidade";
import {
  decreaseQuantidadeById,
  increaseQuantidadeById,
  setQuantidadeById,
} from "@util/redux/reducers/filmes";
import { useDispatch } from "react-redux";
interface Props {
  filmeId: number;
  quantidade: number;
}
export default function InputQuantidade({ quantidade, filmeId }: Props) {
  const dispatch = useDispatch();
  return (
    <StyledInputQuantidade>
      <img
        src="/src/assets/icons/menos.svg"
        alt="-"
        onClick={() => dispatch(decreaseQuantidadeById(filmeId))}
      />
      <input
        type="number"
        step={1}
        value={quantidade}
        onChange={(e) =>
          dispatch(
            setQuantidadeById({ id: filmeId, quantidade: +e.target.value })
          )
        }
      />
      <img
        src="/src/assets/icons/mais.svg"
        alt="+"
        onClick={() => dispatch(increaseQuantidadeById(filmeId))}
      />
    </StyledInputQuantidade>
  );
}
