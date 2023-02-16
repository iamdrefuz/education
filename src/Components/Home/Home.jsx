import React from 'react';
import Navbar from '../Navbar';
import Maincontent from './Maincontent';
import MostPopularCouce from './MostPopularCource';
import Shape1 from '../Assets/Vector.png'
import Shape2 from '../Assets/Group 96.png'
import '../../Style/_home.scss'
import MostPopularCategories from './MostPopularCategories';
import Instructors from './Instructors.jsx';
const Home = () => {
    return (
         <>
             <Navbar/>
             <Maincontent/>
             <div className='cources'>
             <div className='title pl-15'>
             <div className='shape-lin'><img src={Shape1}/></div>
                 Most <br/> <sapn className="text-prim">Popular</sapn> <br/>
                <span className='text-prim'>Course</span>
             </div>
             <MostPopularCouce/>
             </div>
             <MostPopularCategories/>
             <div className='container instructors'><Instructors/></div>
         </>
    );
};
export default Home;