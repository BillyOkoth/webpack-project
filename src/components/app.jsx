import React from 'react'
import '../styles/index.scss';
import Recipes from './recipes';
import sword from '../images/billy.jpeg'



const  App = ()=> {
    return (
        <>
        <section className = "hero"></section>
        <main>
         <section>
             <h1>Hi Reactss!</h1>
        </section>    
        <img src = {sword} alt = "sword" width = "250"/>
        </main>        
        <Recipes/> 
        </>
    );
};

export default App;
