import CarrinhoContainer from "@styles/Carrinho/Container";
import StyledCarrinhoVazio from "@styles/Carrinho/Vazio";
import { FilmeReducer } from "Types/FilmeReducer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FinalizarCompra from "./components/FinalizarCompra";
import Lista from "./components/Lista";
import { useEffect, useState } from "react";
import { Filme } from "Types/Filme";
import Colunas from "@styles/Carrinho/Colunas";
import Botao from "@components/Botao/Botao";

export default function Carrinho() {
  const [subtotal, setSubtotal] = useState<number>(0);
  const [listaCarrinho, setListaCarrinho] = useState<Filme[]>([]);
  const navigate = useNavigate();
  const filmes: FilmeReducer = useSelector(
    (store: { filmes: FilmeReducer }) => store.filmes
  );

  useEffect(() => {
    fillListaCarrinho();
  }, [filmes]);

  function fillListaCarrinho() {
    const filmeList: Filme[] = [];
    for (const filme of filmes.lista) {
      if (filme.quantidade) filmeList.push(filme);
    }

    setListaCarrinho(filmeList);
    getSubtotal(filmeList);
  }

  function getSubtotal(filmes: Filme[]) {
    let total = 0;
    for (const filme of filmes) {
      if (!filme.quantidade) continue;
      total += filme.quantidade * filme.price;
    }
    setSubtotal(total);
  }

  if (!filmes.itens)
    return (
      <StyledCarrinhoVazio>
        <span className="title">
          Parece que não <br /> há nada por aqui :(
        </span>
        <img src="/src/assets/vetores/vazio.svg" alt="vazio" />
        <hr />
        <Botao
          texto="Voltar"
          onClick={() => navigate("/")}
          height={40}
          width={180}
        />
      </StyledCarrinhoVazio>
    );
  return (
    <CarrinhoContainer>
      <Colunas>
        <span>PRODUTO</span>
        <span>QTD</span>
        <span>SUBTOTAL</span>
      </Colunas>
      <Lista lista={listaCarrinho} />
      <hr />
      <FinalizarCompra valor={subtotal} />
    </CarrinhoContainer>
  );
}
