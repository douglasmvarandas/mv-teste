//Utilização do apisauce para chamadas api, bem simples a utilização
//e se a necessidade de muita configuração
import { create } from "apisauce";

//definição da url base para chamadas da api do backend

const api = create({
  baseURL: "http://localhost/mv-teste/api",
});

export default api;
