
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import Trusted from '../components/Trusted'
import Slide from '../components/Slide'
import { cards } from '../data';
import SlideCards from '../components/slideCards'
import { projects } from '../data';
import ProductSlide from '../components/ProductSlide';
import ProductCard from '../components/ProductCard'
import Freelance from '../components/Freelance'
import Bussiness from '../components/Bussiness';
import Footer from '../components/Footer';
import Marketplace from '../components/Marketplace';

const Home = () => {
  return (
    <div className='home'>
      
            <Features/>
            <Trusted/>

            <Slide>
               {cards.map(card=>(
          <SlideCards item={card} key={card.id} />
         ))}
            </Slide>

            <Freelance/>
            <Marketplace/>
            <Bussiness/>

           <ProductSlide>
               {projects.map(card=>(
          <ProductCard item={card} key={card.id} />
         ))}
            </ProductSlide>

          

           

    </div>
  )
}

export default Home
