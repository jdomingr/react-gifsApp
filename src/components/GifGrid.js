import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ( {category} ) => {

    const { data: images, loading} = useFetchGifs( category );
    
    // const getGifs = async() => {
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=Zz7rPDaFxDxFCrYMyght8ht9I20YnXOO`;
    //     const resp = await fetch(url);
    //     const { data } = await resp.json();

    //     const gifs = data.map( img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     })

    //     console.log(gifs)
    //     setImages(gifs);

    // }

    

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }
            <div className="card-grid">   
                {
                images.map( img =>
                    <GifGridItem key={img.id} { ...img } />)
                }      
            </div>
        </>
    )
}
