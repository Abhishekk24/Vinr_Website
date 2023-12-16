'use client'
import Link from "next/link"
import { Button } from './ui/button'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
import ProjectCard from "./ProjectCard"

const projectData = [
  {
    image: '/work/cable.png',
    category: 'Cable',
    name: 'Product name',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nulla quae itaque corporis blanditiis, beatae assumenda quos reprehenderit similique laboriosam quam esse labore aliquid voluptatum nemo ducimus. Reiciendis, soluta aspernatur!',
    link: '',
    site: '',
  },
  {
    image: '/work/optic_patchcord.png',
    category: 'Cable',
    name: 'Product name',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nulla quae itaque corporis blanditiis, beatae assumenda quos reprehenderit similique laboriosam quam esse labore aliquid voluptatum nemo ducimus. Reiciendis, soluta aspernatur!',
    link: '',
    site: '',
  },
  {
    image: '/work/cat_cable (2).png',
    category: 'Cable',
    name: 'Product name',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nulla quae itaque corporis blanditiis, beatae assumenda quos reprehenderit similique laboriosam quam esse labore aliquid voluptatum nemo ducimus. Reiciendis, soluta aspernatur!',
    link: '',
    site: '',
  },
  {
    image: '/work/blutooth_adapter.png',
    category: 'Blutooth',
    name: 'Product name',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nulla quae itaque corporis blanditiis, beatae assumenda quos reprehenderit similique laboriosam quam esse labore aliquid voluptatum nemo ducimus. Reiciendis, soluta aspernatur!',
    link: '',
    site: '',
  },
  {
    image: '/work/rack.png',
    category: 'Rack',
    name: 'Rack',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nulla quae itaque corporis blanditiis, beatae assumenda quos reprehenderit similique laboriosam quam esse labore aliquid voluptatum nemo ducimus. Reiciendis, soluta aspernatur!',
    link: '',
    site: '',
  },
  {
    image: '/work/router.png',
    category: 'Roter&switch',
    name: 'Product name',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nulla quae itaque corporis blanditiis, beatae assumenda quos reprehenderit similique laboriosam quam esse labore aliquid voluptatum nemo ducimus. Reiciendis, soluta aspernatur!',
    link: '',
    site: '',
  },
  {
    image: '/work/wifi.png',
    category: 'Roter&switch',
    name: 'Product name',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nulla quae itaque corporis blanditiis, beatae assumenda quos reprehenderit similique laboriosam quam esse labore aliquid voluptatum nemo ducimus. Reiciendis, soluta aspernatur!',
    link: '',
    site: '',
  },
  {
    image: '/work/switch.png',
    category: 'Roter&switch',
    name: 'Product name',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nulla quae itaque corporis blanditiis, beatae assumenda quos reprehenderit similique laboriosam quam esse labore aliquid voluptatum nemo ducimus. Reiciendis, soluta aspernatur!',
    link: '',
    site: '',
  },
]


function Work() {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center
        xl:items-start">
          <h2 className="section-title mb-4">Latest Products</h2>
          <p className="subtitle mb-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe corrupti repudiandae </p>
          <Link href='/products'>
            <Button>All Products</Button>
          </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0 ">
          <Swiper className="h-[480px]  " slidesPerView={1} 
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}

          >
            {projectData.slice(0,4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work