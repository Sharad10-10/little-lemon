import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {

    const userReviews = [

        {
            imageUrl : 'src/assets/Alicia.jpg',
            userName : 'Alicia',
            userReview: 'Excellent Service and food. Recommended!!',
            userRating : '⭐⭐⭐⭐⭐'
        },

        {
            imageUrl : 'src/assets/Christina.jpg',
            userName : 'Christina',
            userReview: 'Hot and fresh and on time. Wonderful restaurant setting as well as service',
            userRating : '⭐⭐⭐⭐⭐'
        },

        {
            imageUrl : 'src/assets/Martinez.jpg',
            userName : 'Martinez',
            userReview: 'One of the best restaurants in town. Always amazed from their service',
            userRating : '⭐⭐⭐⭐⭐'
        },

        {
            imageUrl : 'src/assets/Rahul.jpg',
            userName : 'Rahul',
            userReview: 'Great customer service plus food and drinks!!',
            userRating : '⭐⭐⭐⭐⭐'
        }


    ]

  return (
    <div className='bg-[rgb(72,94,88)] py-8 mt-8' id='testimonials'>

        <div>
            <h1 className='text-3xl text-center mt-8'>Testimonials</h1>
        </div>

        <Swiper modules={[Pagination, Autoplay]} spaceBetween={20} slidesPerView={1} loop={true} autoplay={{delay: 3000}} pagination={{clickable: true}}>
            {userReviews.map((userReview, index)=> {
                return (
                    <SwiperSlide key={index}>
                        <div className='p-6 rounded-2xl shadow-lg text-center'>

                            <img src={userReview.imageUrl} alt={userReview.userName} className='w-40 h-40 rounded-full mx-auto object-cover'/>
                            <h3 className='text-2xl mt-4'>{userReview.userName}</h3>
                            <p className='text-xl'>{userReview.userReview}</p>
                            <p className='text-4xl'>{userReview.userRating}</p>
                        </div>
                    </SwiperSlide>
                )
            })}

        </Swiper>

    </div>
  )
}

export default Testimonials