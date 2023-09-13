import Card from "@components/Card/Card";
import Loading from "@components/Loading/Loading";
import getFilmes from "@services/RequestFilmes";
import { setAll } from "@util/redux/reducers/filmes";
import { Filme } from "Types/Filme";
import { FilmeReducer } from "Types/FilmeReducer";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Inicio() {
  const filmes: Filme[] = useSelector(
    (store: { filmes: FilmeReducer }) => store.filmes.lista
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (!filmes.length)
      getFilmes().then((filme) => dispatch(setAll(filme || [])));
  }, []);

  return filmes.length ? (
    filmes.map((filme, index) => <Card filme={filme} key={index} />)
  ) : (
    <Loading />
  );
}
