const MenuItem = ({titulo,preco,imagem,descricao}) => {

    return (
        <article>
            <imgagem src={imagem} alt={titulo} />
            <div>
                <header>
                    <h3>{titulo}</h3>
                    <p>{preco.toFixed(2)}</p>
                </header>
                <p>{descricao}</p>
            </div>
        </article>
    )
}
export default MenuItem;