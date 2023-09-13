import { formatoMonetario } from "@services/FormataMonetario";
import StyledSubtotal from "@styles/Carrinho/Subtotal";
import { SubtotalProps } from "Types/SubtotalProps";

export default function Subtotal({ valor }: SubtotalProps) {
  return (
    <StyledSubtotal>
      <span className="title">SUBTOTAL</span>
      <span className="price">{formatoMonetario(valor)}</span>
    </StyledSubtotal>
  );
}
