import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useState } from 'react';
import './AddMovie.css';

function AddMovie() {

    const dispatch = useDispatch();
    const genres = useSelector(store => store.genres);
    const history = useHistory();

    const [movieToAdd, setMovieToAdd] = useState({title: '', poster: '', description: '', genre_id: 0});

    const handleTitleAdd = (event) => {
        setMovieToAdd({
          ...movieToAdd,
          title: event.target.value,
        });
      }
    
      const handlePosterAdd = (event) => {
        setMovieToAdd({
          ...movieToAdd,
          poster: event.target.value,
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
          genre_id: event.target.value,
        });
      }

    

      useEffect(() => {
          dispatch({ type: 'FETCH_GENRES' })
      }, []); 

      const saveButton = () =>  {
          dispatch({
              type: 'ADD_MOVIE',
              payload: movieToAdd
          })
          history.push('/');
          console.log(movieToAdd);
      }

      const cancelButton = () =>  {
          console.log('clicked Cancel');
          let okay = confirm("If you cancel, you will lose all of your progress.");
          if (okay === true)   {
            history.push('/');
            console.log('Cancel');
          }
          else {
              return;
          }
      }

    return (
        <div>
          <h1>Add A Movie!</h1>
          <div className="addMovieForm">
            <h2>Movie Info:</h2>
            <form onSubmit={saveButton}>
              <label for="title">Title</label>
              <input type="text" id="title" onChange={handleTitleAdd} placeholder="Title"/><br />
              <label for="PosterURL">Poster URL</label>
              <input type="text" id="PosterURL" onChange={handlePosterAdd} placeholder="Movie poster image URL"/><br />
              <label for="description">Description</label>
              <textarea type="text" id="description" onChange={handleDescriptionAdd} placeholder="Movie Description"/><br />          
                <select onChange={(event) => handleGenreAdd(event)}>
                    <option>Pick A Genre</option>
                    {genres.map((genre) =>  {
                        return  (
                            <option key={genre.id} value={genre.id}>{genre.name}</option>
                        )
                    })}
                </select><br />
            <button className="saveButton" type="submit">Save</button>
            </form>
            <button className="cancelButton" onClick={() => cancelButton(event)}>Cancel</button>
          </div>
          <div>
            <h2>Preview:</h2>
            <div className="previewDiv">
              <p>{movieToAdd.title}</p>
              <img src={movieToAdd.poster} className="previewImage"/>
              <p>{movieToAdd.description}</p>
            </div>
          </div>
        </div>          
    );
}

export default AddMovie;