import StyledCarrinhoHeader from "../../Styles/Header/Carrinho";
import StyledHeader from "../../Styles/Header/Header";
import StyledHeaderH2 from "../../Styles/Header/Title";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FilmeReducer } from "Types/FilmeReducer";

export default function Header() {
  const navigate = useNavigate();
  const quantidadeItensCarrinho: number = useSelector(
    (store: { filmes: FilmeReducer }) => store.filmes.itens
  );
  function redirecionarInicio() {
    navigate("");
  }
  function redirecionarCarrinho() {
    navigate("/carrinho");
  }
  return (
    <StyledHeader>
      <StyledHeaderH2 onClick={redirecionarInicio}>WeMovies</StyledHeaderH2>
      <StyledCarrinhoHeader onClick={redirecionarCarrinho}>
        <span>{quantidadeItensCarrinho} itens</span>
        <img src="/src/assets/icons/cesta.svg" />
      </StyledCarrinhoHeader>
    </StyledHeader>
  );
}
