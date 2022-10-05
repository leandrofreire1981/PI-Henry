export default function PostRecipes(props) {
   //console.log('estamos en post',   props)
    return (
        <div>
           <h2>
                Nombre: {props.name}
            </h2>
            <img src={props.image} alt='Image not found' /> 
            <h3>Tipo de dieta: {props.diets?.map(r => '"' + r + '" ')}
            </h3>
        </div>
                
    )
}