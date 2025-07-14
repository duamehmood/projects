import {RiSearchLine} from '@remixicon/react';

const Hero = ({search, setSearch, onSearch}) => {

  return (
    <div className='hero'>
        <div className="hero-content d-flex flex-column justify-content-center align-items-center">
            <img src="./src/assets/logo.svg" alt="logo" />
            <img src="./src/assets/hero-img.png" alt="hero-image" />
            <h1 className="pt-4">Find <span>Movies</span> You’ll Love </h1>
            <h1 className="pb-4" >Without the Hassle</h1>
            <div className="input-content">
                <RiSearchLine className="search-icon" />
            <input type="text" placeholder=" Search through 300+ movies online" value={search} onCchange={e=> setSearch(e.target.value)} onKeyDown={e => e.key === "Enter" && onSearch()} />
            <button onClick={onSearch}>Search</button>
            </div>
        </div>

      
    </div>
  )
}

export default Hero
