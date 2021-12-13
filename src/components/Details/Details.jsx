import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import './Details.css';

function Details(){

    const history = useHistory();

    const singleMovie = useSelector(store => store.singleMovie);

    const singleMovieTitle = [];
    const singleMovieDescription = [];
    const singleMoviePoster = [];

    // Workaround to get title only once
    singleMovie.map(movie => {
        return (
            singleMovieTitle.push(movie.title)
        )})
    // Workaround to get description only once
    singleMovie.map(movie => {
        return (
            singleMovieDescription.push(movie.description)
        )})
    // Workaround to get poster only once
    singleMovie.map(movie => {
        return (
            singleMoviePoster.push(movie.poster)
        )})

    const backToListButton = () =>  {
        history.push('/');
    }
 
    return (
        
        <div>
            <h1>{singleMovieTitle[0]}</h1>
            <img src={singleMoviePoster[0]} />
            <p> 
                <div className="genresColon">Genres:</div>
                {singleMovie.map(singleMovie => {
                return (
                    <>
                        <div className="genre">{singleMovie.name}</div>
                    </>
                )
            })}
            </p>
            <p className="description">{singleMovieDescription[0]}</p>
            
            <button onClick={backToListButton} className="homeButton">HOME</button>
        </div>
    )
}



export default Details;