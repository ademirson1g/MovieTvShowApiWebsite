import './App.css';
import Searchbar from './components/Searchbar';
import "./CSS/Searchbar.css"
import Navbar from './Navbar/Navbar';
import "./CSS/Navbar.css"
import Buttons from './components/Buttons';
import "./CSS/Buttons.css"
import "./CSS/Page.css"
import Card from './components/Cards';
import  './CSS/Card.css';
import { MovieProvider } from './services/context';
import TVShowCards from './components/TVShowCards';
import { TvShowProvider } from "./services/TvShowContext"


function App() {
  
  return (
    <>
    <Navbar/>
    

    <div className="App">

      <MovieProvider>
      <TvShowProvider>      
        
        <Searchbar/>
        <Buttons/>
        <TVShowCards/>
        
        <Card/>
       
        </TvShowProvider>
      </MovieProvider>
     
      
   </div>
   

   

    </>
  );
}

export default App;
