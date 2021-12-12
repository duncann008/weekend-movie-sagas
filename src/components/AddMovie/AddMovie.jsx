import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

function AddMovie() {

    const dispatch = useDispatch();
    const genres = useSelector(store => store.genres);
    const history = useHistory();

    console.log('On AddMovie');
    console.log(genres);

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' })
    }, []); 

    const saveButton = () =>  {
        history.push('/');
    }

    const cancelButton = () =>  {
        history.push('/');
    }

    return (
        <div>
        <h1>Add A Movie!</h1>
        <form onSubmit={saveButton}>
            <input placeholder="Title"/><br />
            <input placeholder="Movie poster image URL"/><br />
            <textarea placeholder="Movie Description"/><br />          
            <select>
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