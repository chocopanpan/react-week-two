import React from 'react';
import { useState } from 'react';
import Rating from './rating';

// export default class MovieReview extends React.Component {
        function Form() {
        const [username, setUsername] = useState('');
        const [movieTitle, setMovieTitle] = useState('');
        const [review, setReview] = useState('');   

    
        const handleSubmit = (e) => {
            console.log(`
            Username: ${username}
            Movie Title: ${movieTitle}
            Review: ${review}`);
            e.preventDefault();
        }

        return (
        <div id='movieReview'>
            <form onSubmit={handleSubmit}>
                <div className='form-group row'>
                    <label for="uname" className='col-sm-12'>Username:</label>
                    <div className='col-sm-10'>
                        <input type="text" id="uname" name="uname" placeholder="username..." onChange={e => setUsername(e.target.value)} />
                    </div>
                </div>
                <br/>
                <div className='form-group row'>
                    <label for="mtitle" className='col-sm-12'>Movie Title:</label>
                    <div className='col-sm-10'>
                        <input type="text" id="mtitle" name="mtitle" placeholder="movie title..." onChange={e => setMovieTitle(e.target.value)}/>
                    </div>
                </div>
                <br/>
                <div className="col-sm-12">
                    <Rating />
                </div>
                <br/>
                <div className='form-group row'>
                    <label for="review" className='col-sm-12'>Review:</label>
                    <div className='col-sm-12'>
                        <textarea id='review' name='review' rows='12' cols='30' onChange={e => setReview(e.target.value)}></textarea>
                    </div>
                </div>
                {/* <br/> */}
                <div className='form-group row'>
                    <div className='col-sm-12'>
                        <button type='submit' id='submit' class='btn btn-success'>Submit</button>
                    </div>
                </div>
            </form>
            <br/>
        </div>);
        }

export default Form;