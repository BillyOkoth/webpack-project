import {useState} from 'react';


const elevenShieldRecipe = 
    {
        leatherStripe:2,
        ironIngot:1,
        refinedMoonstone:4
    }
const twelveShieldRecipe = {
    ...elevenShieldRecipe,
    leather:9,
    refinedMoonstone:30
};




const Recipe =()=>{
    const [recipe, setRecipe] = useState({});
    return(
        <div>
        <h1>Current Recipe:</h1>
        <button onClick={()=>setRecipe(elevenShieldRecipe)}>Eleven Sheild Recipe</button>
        <button onClick={()=>setRecipe(twelveShieldRecipe)}>Twelve Shield Recipe</button>
        <ul>
            {
                Object.keys(recipe).map((material)=>(
                    <li key={material}>
                        {material}:{recipe[material]}
                    </li>
                ))
            }
        </ul>
    </div>
    );
    }
export default Recipe;