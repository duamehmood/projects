
import React from 'react'
import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <div className='message  d-flex justify-content-center'>
      <div className="container">
        <div className="p-lg-5 p-md-3 ">
        <div className='top-link'>
         <Link className='link' to="/messages">Messages</Link>  &gt; John Doe &gt;
        </div>

        <div className="msgs my-3 p-md-4 p-sm-3 p-0 d-flex flex-column gap-2">

          <div className="item d-flex gap-sm-3 gap-2">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="msg-pp-image" />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure mollitia perspiciatis officiis voluptate? Sequi quae officia possimus, iusto labore alias mollitia eveniet nemo placeat laboriosam nisi animi! Error, tenetur!</p>

          </div>


          <div className="item-owner align-self-end flex-row-reverse d-flex gap-sm-3 gap-2">
            <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure mollitia perspiciatis officiis voluptate? Sequi quae officia possimus, iusto labore alias mollitia eveniet nemo placeat laboriosam nisi animi! Error, tenetur!</p>

          </div>

           <div className="item d-flex gap-sm-3 gap-2">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="msg-pp-image" />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure mollitia perspiciatis officiis voluptate? Sequi quae officia possimus, iusto labore alias mollitia eveniet nemo placeat laboriosam nisi animi! Error, tenetur!</p>

          </div>


          <div className="item-owner align-self-end flex-row-reverse d-flex gap-sm-3 gap-2">
            <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure mollitia perspiciatis officiis voluptate? Sequi quae officia possimus, iusto labore alias mollitia eveniet nemo placeat laboriosam nisi animi! Error, tenetur!</p>

          </div>

           <div className="item d-flex gap-sm-3 gap-2">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="msg-pp-image" />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure mollitia perspiciatis officiis voluptate? Sequi quae officia possimus, iusto labore alias mollitia eveniet nemo placeat laboriosam nisi animi! Error, tenetur!</p>

          </div>

          <div className="item d-flex gap-sm-3 gap-2">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="msg-pp-image" />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure mollitia perspiciatis officiis voluptate? Sequi quae officia possimus, iusto labore alias mollitia eveniet nemo placeat laboriosam nisi animi! Error, tenetur!</p>

          </div>


          <div className="item-owner align-self-end flex-row-reverse d-flex gap-sm-3 gap-2">
            <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure mollitia perspiciatis officiis voluptate? Sequi quae officia possimus, iusto labore alias mollitia eveniet nemo placeat laboriosam nisi animi! Error, tenetur!</p>

          </div>

           <div className="item-owner align-self-end flex-row-reverse d-flex gap-sm-3 gap-2">
            <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure mollitia perspiciatis officiis voluptate? Sequi quae officia possimus, iusto labore alias mollitia eveniet nemo placeat laboriosam nisi animi! Error, tenetur!</p>

          </div>

          <div className="item d-flex gap-sm-3 gap-2">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="msg-pp-image" />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure mollitia perspiciatis officiis voluptate? Sequi quae officia possimus, iusto labore alias mollitia eveniet nemo placeat laboriosam nisi animi! Error, tenetur!</p>

          </div>


          <div className="item-owner align-self-end flex-row-reverse d-flex gap-sm-3 gap-2">
            <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure mollitia perspiciatis officiis voluptate? Sequi quae officia possimus, iusto labore alias mollitia eveniet nemo placeat laboriosam nisi animi! Error, tenetur!</p>

          </div>

        </div>
          <hr />

        <div className="msg-input d-flex justify-content-between align-items-center gap-md-0 gap-3 flex-sm-row flex-column">
          <textarea name="" placeholder="write a message" cols="30" rows="5" ></textarea>
          <button>Send</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Message
