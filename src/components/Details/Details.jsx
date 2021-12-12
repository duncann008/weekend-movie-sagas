import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';


function Details(){

    const dispatch = useDispatch();
    const history = useHistory();

    const singleMovie = useSelector(store => store.singleMovie);

    const singleMovieTitle = [];
    const singleMovieDescription = [];
    singleMovie.map(movie => {
        return (
            singleMovieTitle.push(movie.title)
        )})

    singleMovie.map(movie => {
        return (
            singleMovieDescription.push(movie.description)
        )})

    const backToListButton = () =>  {
        history.push('/');
    }
 
    return (
        
        <div>
            <h1>Details</h1>
            <p>{singleMovieTitle[0]}</p>
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