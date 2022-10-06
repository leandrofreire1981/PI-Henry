export default function PostRecipes(props) {
   
    let mensage = 'Tipo de dieta: '
    let name = 'Nombre: '
    if(!props.diets.length){
        mensage = ''
        name=''
    }
       
    return (
        <div>
           <h2>
                {name} {props.name}
            </h2>
            <img src={props.image} alt='Image not found' /> 
            <h3>{mensage} {props.diets?.map(r => '"' + r + '" ')}
            </h3>
        </div>
                
    )
}