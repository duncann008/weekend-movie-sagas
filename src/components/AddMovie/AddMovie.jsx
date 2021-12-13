import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useState } from 'react';
import './AddMovie.css';

function AddMovie() {

    const dispatch = useDispatch();
    const genres = useSelector(store => store.genres);
    const history = useHistory();

    // State for our dispatch payload
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

    
      // GETs us the genres in the dropdown
      useEffect(() => {
          dispatch({ type: 'FETCH_GENRES' })
      }, []); 

      // Conditional for input validation, then dispatches payload to index.js and routes to home page
      const saveButton = () =>  {
        if (movieToAdd.title === '' ||
            movieToAdd.poster === '' ||
            movieToAdd.description === ''
        ) {
          alert('Please fill out all of the input fields.')
        } 
        else if (movieToAdd.genre_id === 0) {
          alert('Please select a genre.')
        }
        else  {        
          dispatch({
              type: 'ADD_MOVIE',
              payload: movieToAdd
          })
          history.push('/');
        }
      }

      // Confirm option to route back to home page or continue adding movie
      const cancelButton = () =>  {
          console.log('clicked Cancel');
          let okay = confirm("If you cancel, you will lose all of your progress. Click OK to redirect to the home page or Cancel to continue adding a movie.");
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
              <input type="text" id="title" onChange={handleTitleAdd} placeholder="Title" /><br />
              <label for="PosterURL">Poster URL</label>
              <input type="text" id="PosterURL" onChange={handlePosterAdd} placeholder="Movie poster image URL" /><br />
              <label for="description">Description</label>
              <textarea type="text" id="description" onChange={handleDescriptionAdd} placeholder="Movie Description" /><br />          
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
            <button className="cancelButton" onClick={(event) => cancelButton(event)}>Cancel</button>
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