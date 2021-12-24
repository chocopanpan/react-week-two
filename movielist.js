import React from 'react';
import Rating from './rating';
import MovieReview from './moviereview';
import ReviewList from './reviewList';



export default class Movielist extends React.Component {
    render() {
        return (
        <div id='movieContainer' className='flexbox-container'>
            <div className='card-group' className='flexbox-item flexbox-item-1'>
                <div className='card'>
                    <img src='https://images-na.ssl-images-amazon.com/images/S/pv-target-images/25cdf7c5b245e70240a6c6e783af07eac16c861d7744844be817cff2b8d4bade._RI_V_TTW_.jpg' className='card-img-top' alt='Interstellar movie poster'/>
                    <div className='card-body'>
                        <h5 className='card-title'>Interstellar</h5>
                        <Rating />
                        <p className='card-text'><small className='text-muted'>A 2014 epic science fiction film co-written, directed and produced by Christopher Nolan.
                        It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, and Michael Caine.
                        Set in a dystopian future where humanity is struggling to survive, 
                        the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for mankind.</small></p>
                    </div>
                </div>
            </div>
            <div className='flexbox-item flexbox-item-2'>
                <ReviewList />
            </div>
            <div className='flexbox-item flexbox-item-3'>
               <MovieReview /> 
            </div>
        </div>
        );
    }
}