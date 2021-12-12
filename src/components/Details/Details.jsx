import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';


function Details(){

    const dispatch = useDispatch();
    const history = useHistory();

    const singleMovie = useSelector(store => store.singleMovie);

    const singleMovieTitle = [];
    const singleMovieDescription = [];
    const singleMoviePoster = [];

    singleMovie.map(movie => {
        return (
            singleMovieTitle.push(movie.title)
        )})

    singleMovie.map(movie => {
        return (
            singleMovieDescription.push(movie.description)
        )})

    singleMovie.map(movie => {
        return (
            singleMoviePoster.push(movie.poster)
        )})

    const backToListButton = () =>  {
        history.push('/');
    }
 
    return (
        
        <div>
            <h1>Details</h1>
            <p>{singleMovieTitle[0]}</p>
            <img src={singleMoviePoster[0]} />
            <p>{singleMovieDescription[0]}</p>
            <p>
                <div className="genre">Genres:</div>
                {singleMovie.map(singleMovie => {
                return (
                    <>
                        <div className="genre">{singleMovie.name}</div>
                    </>
                )
            })}
            </p>
            <button onClick={backToListButton}>HOME</button>
        </div>
    )
}



export default Details;