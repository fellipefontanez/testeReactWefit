import { Filme } from "./Filme";

export interface FilmeReducer {
  itens: number;
  lista: Filme[];
}
export type ListaFilmes = Pick<FilmeReducer, "lista">;
