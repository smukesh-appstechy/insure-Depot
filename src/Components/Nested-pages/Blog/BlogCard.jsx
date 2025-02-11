import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogCard = ({image, lastupdated, title, shortDis, category, readTime,id}) => {
    const navigate = useNavigate();
  return (
    <>
    <div className="card-wrapper bg-white rounded-lg">
        <img onClick={() => (navigate(`/blogs/${id}`))} className='w-full' src={image} alt="" />
        <div className="cardtxt-wrapper flex flex-col gap-4 p-4 ">
            <p className='last-date text-sm text-[#7E7E7E] mt-3'>{lastupdated}</p>
            <h2 className='lg:text-2xl text-xl font-bold'>{title}</h2>
            <p className="para text-[#7E7E7E] lg:text-lg text-base">{shortDis}</p>
            <div className="bottom-txt flex justify-between items-center ">
                <p className='bg-[#E9EFF4] py-1 px-3 text-sm rounded-lg'>{category}</p> 
                <p className='text-sm text-[#A6A19E]'>{readTime}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default BlogCard