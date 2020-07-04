import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragom Ball'];
    //Los set pueden recibir un callback con el estado anterior
    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = () => {

    //     //setCategories( ['One Piece', ...categories] ); inicio
    //     //setCategories( [...categories, 'One Piece'] ); final
    //     setCategories( (cats) => [...categories, 'One Piece'] );
    // }

    return (
        <>  
           <h2>GifExpertApp</h2>

            <AddCategory setCategories = { setCategories } />

           <hr /> 
            
            
           <ol>
               {
                   categories.map( category => (
                       <GifGrid key={category} category={category} />
                    ))
               }
           </ol>
        </>
    )
}
