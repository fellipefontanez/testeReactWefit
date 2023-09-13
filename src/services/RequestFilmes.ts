import api from "@util/api";
import { Filme } from "Types/Filme";

const getFilmes = async () => {
  try {
    const response = await api.get<Filme[]>("products");
    for (const filme of response.data) {
      filme.quantidade = 0;
    }
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
export default getFilmes;
