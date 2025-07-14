import React from "react"
import { Link } from "react-router-dom"

 const Orders = () => {

  const currentUser = {
    id:1,
    username: "Anna",
    isSeller: true
  }


   return (
     <div className='orders'>
        <div className="container">
        <div className='d-flex justify-content-center py-5 flex-column'>

          <h1>Orders</h1>

        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>

          <tr>
            <td><img src="./src/assets/gig1.webp" alt="gigs-image"/></td>
            <td>Stunning concept art</td>
            <td>59.<sup>99</sup></td>
            <td>Maria Anders</td>
            <td><img className="msg" src="./src/assets/message.png" alt="Message-image" /></td>
          </tr>

           <tr>
            <td><img src="./src/assets/gig1.webp" alt="gigs-image"/></td>
            <td>Ai generated concept art</td>
            <td>79.<sup>99</sup></td>
            <td>Francisco Chang</td>
            <td><img className="msg" src="./src/assets/message.png" alt="Message-image" /></td>
          </tr>

           <tr>
            <td><img src="./src/assets/gig1.webp" alt="gigs-image"/></td>
            <td>High quality digital character	</td>
            <td>110.<sup>99</sup></td>
            <td>Roland Mendel</td>
            <td><img className="msg" src="./src/assets/message.png" alt="Message-image" /></td>
          </tr>

           <tr>
            <td><img src="./src/assets/gig1.webp" alt="gigs-image"/></td>
            <td>Illustration hyper realistic painting	</td>
            <td>39.<sup>99</sup></td>
            <td>Helen Bennett</td>
            <td><img className="msg" src="./src/assets/message.png" alt="Message-image" /></td>
          </tr>

           <tr>
            <td><img src="./src/assets/gig1.webp" alt="gigs-image"/></td>
            <td>Original ai generated digital art	</td>
            <td>119.<sup>99</sup></td>
            <td>Yoshi Tannamuri</td>
            <td><img className="msg" src="./src/assets/message.png" alt="Message-image" /></td>
          </tr>

           <tr>
            <td><img src="./src/assets/gig1.webp" alt="gigs-image"/></td>
            <td>Text based ai generated art	</td>
            <td>49.<sup>99</sup></td>
            <td>Giovanni Rovelli</td>
            <td><img className="msg" src="./src/assets/message.png" alt="Message-image" /></td>
          </tr>

        </table>
</div>
      </div>
       
     </div>
   )
 }
 
 export default Orders
 