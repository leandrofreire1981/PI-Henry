import PostRecipes from "./PostRecipes"

export default function Page(props){
const { refresh, currentPage, length } = props

function prevPage(){
    if(currentPage===1)return;
    refresh(currentPage - 1)
    
}

function nextPage(){
    if(currentPage>=length/9)return;
    refresh(currentPage + 1)
}

return (
    <div>
        <h3>Pagina: {currentPage}</h3>

        <button onClick={prevPage}>Pagina previa</button>
        <button onClick={nextPage}>Pagina siguiente</button>


    </div>
)
}
