import React from 'react';
import { categories } from '../data_components/Categories';
import '../../Style/_mostpopularcategories.scss'
import {BsArrowUpRight ,BsCheck2Circle} from 'react-icons/bs'
import {CiNoWaitingSign} from 'react-icons/ci'

const MostPopularCategories = () => {
    return (
        <div className='categories container'>
            <div className='title'>Most <span className='text-prim'>Popular Categorys</span></div>
            <p className='desc mb-5'>
            Various versions have evolved over the years, sometimes by accident,
            </p>
            <div className='category-cards'>
                 {categories.map((item)=>{
                      return <CategoryCard id={item.id} empty={item.empty} title={item.title} link={item.link}/>
                 })}
                 
            </div>
            <div className='cat-hel'></div>
        </div>
    );
};
export const CategoryCard = (props)=>{
     return(
        <div className='category-card' key={props.id}>
              <div className='icon-category'>{props.empty ? <BsCheck2Circle className='true icon'/> : <CiNoWaitingSign className='false icon'/> }</div>
                   <div className='title-category'>{props.title}</div>
              <div className='link-category'><a href={props.link} className='cource-link'><BsArrowUpRight/></a></div>
        </div>
     )
}
export default MostPopularCategories;