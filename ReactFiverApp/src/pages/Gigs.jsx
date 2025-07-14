
import { RiArrowDownSLine } from '@remixicon/react';
import GigCards from '../components/GigCards';
import { gigs } from '../data';
import { useState } from 'react';




const Gigs = () => {

  const [sort, setSort] = useState("sales")
  const [minValue, setMinValue] = useState("")
  const [maxValue, setMaxValue] = useState("")

  const reSort = (type) => {
    setSort(type)

  }


  return (
    <div className='gigs'>
      <div className="container">
        <div>
          <span className='top pt-3'>fiverr &gt; Graphics &amp; Design &gt;</span>
          <h1 className='py-2 mb-0'>AI Artists</h1>
          <p className='mb-0'>Explore the boundaries of art and technology with fiverr's AI artists</p>

          <div className=" d-flex  flex-md-row flex-column-reverse gap-md-3 gap-1 justify-content-between">

            <div className=" mt-md-3 mb-md-5 mb-3 gap-2  d-flex flex-sm-row flex-column align-items-sm-center">
              <span>Budget</span>
              <input type="text" placeholder='min' 
              onChange={(e) => setMinValue(e.target.value)} />
              <input type="text" placeholder='max'
              onChange={(e) => setMaxValue(e.target.value)} />
              <button>Apply</button>
            </div>

            <div>
              <span>SortBy</span>
              <select className='sortType'>
                <option value="">Best Selling</option>
                <option onClick={() => reSort("createdAt")} value="">Newest</option>
                <option onClick={() => reSort("sales")} value="">Popular</option>
              </select>

            </div>
          </div>
        </div>

        <div className="row gy-4">
          {gigs.map(card => (
            <div className="col-xl-3 col-lg-4 col-md-6" key={card.id}>
              <GigCards item={card} />
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Gigs
