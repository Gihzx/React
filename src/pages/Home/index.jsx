import { useRef, useState } from "react";
import { v4 } from "uuid";
import { AddButton } from "./styles"
import { Container, Product, TrashButton } from "./styles" 
function Home() {
  const [produtos, setProdutos] = useState([]);
  const inputRef = useRef()

  function deletarProduto(id){
   setProdutos( produtos.filter(produto => produto.id != id))
  }

  function cliqueiBotao() {
    console.log(v4());
    setProdutos([{ id: v4(), nome: inputRef.current.value }, ...produtos]);
    inputRef.current.value = ''
  }

  return (
    <Container>
      <h1>Lista de compras</h1>
      <input placeholder="produtos..." ref={inputRef} />
      
      <AddButton onClick={cliqueiBotao}>Adicionar</AddButton>
      {produtos.map((produtos) => (
        <Product key={produtos.id}>
          <p>{produtos.nome}</p>
          <TrashButton onClick={()=> deletarProduto(produtos.id)}>🗑️</TrashButton>
        </Product>
      ))}
    </Container>
  );
}

export default Home;
