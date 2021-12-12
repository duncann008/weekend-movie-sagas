import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import {useHistory} from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const goToForm = () =>  {
        history.push('/AddMovie');
    }

    const routeToDetails = (id) => {
        dispatch({
            type: 'FETCH_SINGLE_MOVIE',
            payload:id
        });
        history.push('/details')
    }

    return (
        <main>
            <h1>MovieList</h1>
            <button onClick={goToForm}>Add Movie</button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img 
                                src={movie.poster} 
                                alt={movie.title}
                                onClick={() => routeToDetails(movie.id)}
                                />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;