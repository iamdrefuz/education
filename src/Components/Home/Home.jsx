import React from 'react';
import Navbar from '../Navbar';
import Maincontent from './Maincontent';
import MostPopularCouce from './MostPopularCource';
import Shape1 from '../Assets/Vector.png'
import Shape2 from '../Assets/Group 96.png'
import '../../Style/_home.scss'
const Home = () => {
    return (
         <>
             <Navbar/>
             <Maincontent/>
             <div className='cources container'>
             <div className='title'>
             <div className='shape-lin'><img src={Shape1}/></div>
                 Most <br/> <sapn className="text-prim">Popular</sapn> <br/>
                <span className='text-prim'>Course</span>
             </div>
             <MostPopularCouce/>

             </div>
         </>
    );
};
export default Home;