import Header from '../Header/Header'
import Dcards from './HomePage'
import Footer from './footer'
import Graph from './graph'
import Ads from './ads.js'

function Home() {
    return (
        <div className="Home">
            
            <Header />
            <Ads />
            <Dcards/>
            
            <Graph/>
            <Footer/>
            

        </div>
    );
}

export default Home;
