import React from 'react'
import { Link } from 'react-router-dom'

const MyGigs = () => {
  return (
    <div className='my-gigs'>
      <div className="container">
        <div className='d-flex justify-content-center py-5 flex-column'>
        <div className="title d-flex align-items-center justify-content-between">
          <h1>Gigs</h1>
          <Link to="/add" className='text-decoration-none'><button>Add New Gig</button></Link>
        </div>

        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>

          <tr>
            <td><img src="./src/assets/gig1.webp" alt="gigs-image"/></td>
            <td>Stunning concept art</td>
            <td>59.<sup>99</sup></td>
            <td>13</td>
            <td><img className='delete' src="./src/assets/delete.png" alt="Delete-image"/></td>
          </tr>

           <tr>
            <td><img src="./src/assets/gig1.webp" alt="gigs-image"/></td>
            <td>Ai generated concept art</td>
            <td>120.<sup>99</sup></td>
            <td>41</td>
            <td><img className='delete' src="./src/assets/delete.png" alt="Delete-image"/></td>
          </tr>

           <tr>
            <td><img src="./src/assets/gig1.webp" alt="gigs-image"/></td>
            <td>High quality digital character	</td>
            <td>79.<sup>99</sup></td>
            <td>55</td>
            <td><img className='delete' src="./src/assets/delete.png" alt="Delete-image"/></td>
          </tr>
           <tr>
            <td><img src="./src/assets/gig1.webp" alt="gigs-image"/></td>
            <td>Illustration hyper realistic painting	</td>
            <td>119.<sup>99</sup></td>
            <td>29</td>
            <td><img className='delete' src="./src/assets/delete.png" alt="Delete-image"/></td>
          </tr>
           <tr>
            <td><img src="./src/assets/gig1.webp" alt="gigs-image"/></td>
            <td>Original ai generated digital art	</td>
            <td>59.<sup>99</sup></td>
            <td>34</td>
            <td><img className='delete' src="./src/assets/delete.png" alt="Delete-image"/></td>
          </tr>
           <tr>
            <td><img src="./src/assets/gig1.webp" alt="gigs-image"/></td>
            <td>Text based ai generated art	</td>
            <td>110.<sup>99</sup></td>
            <td>16</td>
            <td><img className='delete' src="./src/assets/delete.png" alt="Delete-image"/></td>
          </tr>

        </table>
</div>
      </div>
    </div>
  )
}

export default MyGigs
