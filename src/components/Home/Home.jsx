import React from 'react'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import arya from '../../assets/arya-college-of-engineering-it-jaipur-227465.jpg'
import Layout from '../Layout/Layout';

const Home = () => {
  const swiper = new Swiper('.swiper', {
    // // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    autoplay: {
      delay: 4000,
    }
  });

  return (
    <Layout>
      <section id="home">
        <div className='flex flex-col mt-28 md:mt-40 md:flex-row mx-10'>
          <div className='md:mt-20 md:mr-10 md:ml-14'>
            <h1 className='animate-bounce'>
              <span className='text-[#4db5ff]'>Old</span> Arya connect!
            </h1>
            <h2 className='max-w-[200px] text-white font-italic mb-6'>"College is a place where the books are opened, and minds are expanded, where friendships flourish, and futures begin." - Unknown</h2>

            ---------------------------
            <h2 className='max-w-[200px]  mt-6  text-white'>"Get ready to ace uni life with amazing notes, tips, share epic memories, and gear up for placements! Your go-to Old Arya Connect!."</h2>
          </div>
          <div class="swiper max-w-[310px] mt-16 md:my-0 md:max-w-[800px]">
            <div class="swiper-wrapper autoplay-play"> 
              <img class="swiper-slide rounded-lg aspect-auto" src={arya} alt='' />
              <img class="swiper-slide rounded-lg" src={arya} alt='' />
              <img class="swiper-slide rounded-lg" src={arya} alt='' />
              <img class="swiper-slide rounded-lg" src={arya} alt='' />
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-scrollbar"></div>
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default Home