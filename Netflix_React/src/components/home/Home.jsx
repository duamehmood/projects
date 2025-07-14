import "./Home.css"
import Navbar from "../Navbar/Navbar";
import Featured from "../Featured/Feature";
import List from "../List/List";


 
const Home = () => {
  return (
      <div className="home">
      <Navbar/>
      <Featured/>
      <List/>
      <List/>
      <List/>
      <List/>
       

      </div>
  )
}

export default Home
