import { useState } from "react"
import Menu from  './components/Menu'
import Categorias from  './components/Categorias'
import BD from './data/dados'

// OBTÉM TODAS AS CATEGORIAS UNICAS DO MENU, ADICIONADO "TODOS " NO INICIO DA PÁGINA
const todasCategorias=["todos",...new Set(BD.map((item)=>item.opcao))]

function App() {
 
  //HOOK: useState- manipula o estado da variavel
  const [menuItems,setMenuItems]= useState(BD);
  const [categorias] = useState(todasCategorias);

  //FUNÇÃO FILTRAR ITEMS

  const filtrarItems =(opcao)=>{
    if(opcao ==="todos"){
      setMenuItems(BD); // mostra todos os items
    }else {
      const novoItem = BD.filter((item)=>item.opcao ===opcao);
      setMenuItems(novoItem); // mostra apenas o item filtrado
    }
    
  }

  return (
    <div>
      <header>
        <div>
          <h1>Cardápio de Games</h1>
          <div></div>
        </div>
      </header>
     <main>
      <section>
        <Categorias categorias={categorias} filtroItems={filtrarItems}/>
        <Menu items={menuItems}/>
      </section>
     </main>
     <foote>
        <p>&copy; 2025 todos direitos reservados.</p>
     </foote>
    </div>
  )
}

export default App
