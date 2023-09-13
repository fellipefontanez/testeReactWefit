import StyledBotaoCard from "@styles/Botao";
import { BotaoComponent } from "Types/BotaoComponent";
export default function Botao({
  texto,
  quantidade,
  onClick,
  height,
  width,
}: BotaoComponent) {
  return (
    <StyledBotaoCard
      onClick={onClick}
      $active={!!quantidade}
      $height={height}
      $width={width}
    >
      {quantidade != undefined && (
        <div>
          <img src="/src/assets/icons/carrinho.svg" alt="cart" />
          <span>{quantidade}</span>
        </div>
      )}
      <span>{texto}</span>
    </StyledBotaoCard>
  );
}
