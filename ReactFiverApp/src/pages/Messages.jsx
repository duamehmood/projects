
import React from 'react'
import { Link } from 'react-router-dom'

const Messages = () => {

  const message = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consectetur asperiores odio deleniti eveniet nesciunt, est cumque itaque officiis ullam. Deleniti tempore amet laudantium quis delectus, neque fugit harum architecto! '

  return (
    <div className='messages'>
      <div className="container">
        <div className='d-flex justify-content-center py-5 flex-column'>

          <h1>Messages</h1>

          <table>
            <tr>
              <th>Buyer</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>

            <tr className='active'>
              <td>Charley Sharp	</td>
              <td><Link className='text-decoration-none link' to="/message/123">{message.substring(0,100)}</Link>...</td>
              <td>1 hour ago</td>
              <td><button>Mark as Read</button></td>
            </tr>

            <tr className='active'>
              <td>John Doe</td>
              <td><Link className='text-decoration-none link' to="/message/123">{message.substring(0,100)}</Link>...</td>
              <td>2 hours ago	</td>
              <td><button>Mark as Read</button>
              </td>
            </tr>

            <tr>
              <td>Elinor Good	</td>
              <td><Link className='text-decoration-none link' to="/message/123">{message.substring(0,100)}</Link>...</td>
              <td>1 day ago</td>
              <td></td>
            </tr>

            <tr>
              <td>Garner David</td>
              <td><Link className='text-decoration-none link' to="/message/123">{message.substring(0,100)}</Link>...</td>
              <td>2 days ago</td>
              <td></td>
            </tr>

            <tr>
              <td>Troy Oliver	</td>
              <td><Link className='text-decoration-none link' to="/message/123">{message.substring(0,100)}</Link>...</td>
              <td>1 week ago</td>
              <td></td>
            </tr>

          </table>
        </div>
      </div>

    </div>
  )
}

export default Messages
