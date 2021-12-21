import React from 'react'
import MovieCard from './MovieCard'


function MovieList({moviedata}) {
   
    return (
        <div >
            <section className='movies-section'>
            {moviedata.map((movie)=> <MovieCard key={movie.id} title={movie.title} url={movie.posterUrl} rate={movie.rate} description={movie.description} trailer={movie.trailer}></MovieCard>)}
            </section>
        </div>
    )
}

export default MovieList
