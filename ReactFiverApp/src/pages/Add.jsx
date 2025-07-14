
import React from 'react'

const Add = () => {
  return (
    <div className='add'>
      <div className="container">
        <div className="row py-md-5 py-2 gy-md-5 gy-3">
            <h1>Add New Gig</h1>

          <div className="col-lg-6 d-flex flex-column gap-2">
            <label htmlFor="title">Title</label>
            <input type="text" placeholder="e.g. I will do something I'm really good at" />

            <label htmlFor="category">Category</label>
            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>

            <label htmlFor="coverImage">Cover Image</label>
            <input type="file" />

            <label htmlFor="uploadImage">Upload Images</label>
            <input type="file" multiple />

            <label htmlFor="desc">Description</label>
            <textarea name="" cols="30" rows="19" placeholder='Breif description to introduce your service to customers'></textarea>
            
          </div>
          <div className="col-lg-6 d-flex flex-column gap-2 ">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder='e.g.One-page web design'/>

            <label htmlFor="">Short Description</label>
            <textarea name="" id="" rows="5" cols="30" placeholder='Short description of your service'></textarea>

            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number" min={1} />

            <label htmlFor="">Revision Number</label>
            <input type="number" min={1} />

            <label htmlFor="">Add Features</label>
            <input type="text" placeholder='e.g.page design'  />
            <input type="text" placeholder='e.g.file uploading' />
            <input type="text" placeholder='e.g.setting up a domain' />
            <input type="text" placeholder='e.g.hosting' />

            <label htmlFor="">Price</label>
            <input type="number" min={1} />

          </div>
            <button>Create</button>

        </div>

      </div>
    </div>
  )
}

export default Add
