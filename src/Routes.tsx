import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Pages/Inicio/Inicio";
import Carrinho from "@pages/Carrinho/Carrinho";
import Template from "@pages/Template";
import CompraRealizada from "@pages/CompraRealizada/CompraRealizada";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<Inicio />} />
          <Route path="carrinho" element={<Carrinho />} />
          <Route path="compra-realizada" element={<CompraRealizada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
