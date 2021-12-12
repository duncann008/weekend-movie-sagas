import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useState } from 'react';

function AddMovie() {

    const dispatch = useDispatch();
    const genres = useSelector(store => store.genres);
    const history = useHistory();

    const [movieToAdd, setMovieToAdd] = useState({title: '', url: '', description: '', genreId: 0});

    const handleTitleAdd = (event) => {
        setMovieToAdd({
          ...movieToAdd,
          title: event.target.value,
        });
      }
    
      const handleUrlAdd = (event) => {
        setMovieToAdd({
          ...movieToAdd,
          url: event.target.value,
        });
      }
    
      const handleDescriptionAdd = (event) => {
        setMovieToAdd({
          ...movieToAdd,
          description: event.target.value,
        });
      }
    
      const handleGenreAdd = (event) => {
        setMovieToAdd({
          ...movieToAdd,
          genreId: event.target.value,
        });
        console.log(movieToAdd);
      }

    console.log('On AddMovie');
    console.log(genres);

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' })
    }, []); 

    const saveButton = () =>  {
        // history.push('/');
        console.log(movieToAdd);
    }

    const cancelButton = () =>  {
        history.push('/');
    }

    return (
        <div>
        <h1>Add A Movie!</h1>
        <form onSubmit={saveButton}>
            <input onChange={handleTitleAdd} placeholder="Title"/><br />
            <input onChange={handleUrlAdd} placeholder="Movie poster image URL"/><br />
            <textarea onChange={handleDescriptionAdd} placeholder="Movie Description"/><br />          
            <select  onChange={(event) => handleGenreAdd(event)}>
                <option disabled value='0'>Pick A Genre</option>
                {genres.map((genre) =>  {
                    return  (
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                    )
                })}
            </select><br />
        <button>Save</button>
    </form>
    <button onClick={cancelButton}>Cancel</button>
    </div>          
    );
}

export default AddMovie;