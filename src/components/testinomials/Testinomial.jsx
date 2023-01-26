import React from 'react'
import './Testinomial.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.png'
import AVTR4 from '../../assets/avatar6.png'

import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Himanshu Shekher',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quisquam omnis reprehenderit eaque voluptatum molestiae fugiat saepe accusantium, blanditiis harum nulla expedita earum. Ducimus impedit non perspiciatis, iusto fuga molestias. Vero ut suscipit voluptate, optio ratione expedita molestiae facere temporibus, repudiandae minus laudantium quo, reiciendis aliquid ipsa aliquam magnam tempore.',
  },
  {
    avatar: AVTR2,
    name: 'Harry Pole',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quisquam omnis reprehenderit eaque voluptatum molestiae fugiat saepe accusantium, blanditiis harum nulla expedita earum. Ducimus impedit non perspiciatis, iusto fuga molestias. Vero ut suscipit voluptate, optio ratione expedita molestiae facere temporibus, repudiandae minus laudantium quo, reiciendis aliquid ipsa aliquam magnam tempore.',
  },
  {
    avatar: AVTR3,
    name: 'Naitik Raj',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quisquam omnis reprehenderit eaque voluptatum molestiae fugiat saepe accusantium, blanditiis harum nulla expedita earum. Ducimus impedit non perspiciatis, iusto fuga molestias. Vero ut suscipit voluptate, optio ratione expedita molestiae facere temporibus, repudiandae minus laudantium quo, reiciendis aliquid ipsa aliquam magnam tempore.',
  },
  {
    avatar: AVTR4,
    name: 'Raman Patel',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quisquam omnis reprehenderit eaque voluptatum molestiae fugiat saepe accusantium, blanditiis harum nulla expedita earum. Ducimus impedit non perspiciatis, iusto fuga molestias. Vero ut suscipit voluptate, optio ratione expedita molestiae facere temporibus, repudiandae minus laudantium quo, reiciendis aliquid ipsa aliquam magnam tempore.',
  },
    
]



const Testinomial = () => {
  return (
    
    <section id='testinomial'>
      <h5>Review From Clients</h5>
      <h2>Testinomial</h2>

      <Swiper className="container testinomial__container"
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
       
        pagination={{ clickable: true }}>
          {
          data.map(({avatar,name,review},index)=>{
            return (
              <SwiperSlide key={index}className="testinomial">
          <div className="client__avatar">
            <img src={avatar} />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'> {review}</small>
           
           
        </SwiperSlide>
            )
          })
        }

        
      </Swiper>
    </section>
)
}



       

        
    

export default Testinomial
