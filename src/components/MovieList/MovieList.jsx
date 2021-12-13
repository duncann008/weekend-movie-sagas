import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import {useHistory} from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();
    // Renders the movies on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // Gets us to the Add a Movie form
    const goToForm = () =>  {
        history.push('/AddMovie');
    }
    // Gets us to Details for the clicked movie
    const routeToDetails = (id) => {
        dispatch({
            type: 'FETCH_SINGLE_MOVIE',
            payload:id
        });
        history.push('/details')
    }

    return (
        <main>
            <h1>Movie List</h1>
            <button className="addButton" onClick={goToForm}>+ Add Movie</button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div className="movieListDiv" key={movie.id} onClick={() => routeToDetails(movie.id)}>
                            <h3>{movie.title}</h3>
                            <img
                                src={movie.poster} 
                                alt={movie.title}
                                />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;