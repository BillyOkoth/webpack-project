import '../styles/index.scss';
import Recipes from './recipes'

import React from 'react'

const  App = ()=> {
    return (
        <>
        <section className = "hero"></section>
        <main>
         <section>
             <h1>Hi Reactss!</h1>
        </section>    
        </main>        
        <Recipes/> 
        </>
    );
};

export default App;
