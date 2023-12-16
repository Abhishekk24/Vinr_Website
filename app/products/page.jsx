'use client'
import React, { useState } from 'react'
import {Tabs ,TabsList,TabsContent,TabsTrigger} from '@/components/ui/tabs'
import ProjectCard from '@/components/ProjectCard'


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
const uniqueCategories =[
  'all products',
  ...new Set(projectData.map((item)=>item.category)),
]

const page = () => {
  const[categories , setCategories] = useState(uniqueCategories);

  const[category, setCategory] = useState('all products')

const filterProducts = projectData.filter((product)=>{
  return category === 'all products'
  ? product : product.category === category;
})
  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>Products</h2>
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {
              categories.map((category,index)=>{
                return <TabsTrigger 
                onClick={()=>setCategory(category)}
                value={category} 
                key={index}
                className='capitalize w-[162px] md:w-auto'
                >{category}</TabsTrigger>
              })
            }
          </TabsList>
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filterProducts.map((product ,index)=>{
              return(
                <TabsContent value={category} key={index}>
                  <ProjectCard project={product}/>
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default page