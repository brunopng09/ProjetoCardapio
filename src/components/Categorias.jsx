const Categorias = ({categorias,filtroItems}) => {

 const produtos =(opcao)=>{
    switch(opcao.toLowerCase()){
        case "acao":
            return;
        case "terror":
            return;
        case "esporte":
            return;
        default:
            return null;
    }
 }

  return (
    <nav>
        {categorias.map((opcao,index)=>(
            <button key={index} onClick={()=>filtroItems(opcao)}>
                {produtos(opcao)}
                {opcao}
            </button>
        ))}

    </nav>
  )
}

export default Categorias;