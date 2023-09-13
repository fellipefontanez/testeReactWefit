export interface BotaoComponent {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  quantidade?: number;
  texto: string;
  height?: number;
  width?: number;
}
