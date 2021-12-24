import React from 'react';
import Rating from './rating';
import MovieReview from './moviereview';

// let id = 0;

// document.getElementById("add").addEventListener("click", (e) => {
//     e.preventDefault();
//     let table = document.getElementById("cards");
//     const index = table.rows.length;
//     let row = table.insertRow(index);
//     row.insertCell().innerHTML = index - 1;
//     row.insertCell().innerHTML = document.getElementById("rate").value;
//     row.insertCell().innerHTML = document.getElementById("comment").value;
// });
// class MovieReview extends React.Component

export default class ReviewList extends React.Component {
    render() {
        return (
        <div className='row row-cols-1 row-cols-sm-2 g-1'>    
            <div id='reviewList' className='container'>
                 <div className='col'>
                   <div className='card-header'>
                        Username
                    </div>
                    <div class='card-body'>
                        <blockquote className='blockquote sm-2'>
                            <p>I dun loved that ish.  Got me excited.</p>
                        <footer class='blockquote-footer'>
                            <Rating />
                        </footer>
                        </blockquote>
                    </div> 
                </div> 
            </div>
        </div>);
//         <table class="table-sm">
//   <thead class="table-light-muted">
//     <tr>
//       <th scope="col" id="uname">Username</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr id="rate">
//         <td><Rating /></td>
//     </tr>
//     <tr id="comment">
//         <td>Review commentary</td>
//     </tr>
//   </tbody>
// </table> )
         }
}