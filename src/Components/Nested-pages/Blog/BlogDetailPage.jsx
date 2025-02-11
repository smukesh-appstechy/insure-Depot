import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const BlogDetailPage = () => {
    const {id} = useParams();
    useEffect(() =>{
            console.log(id);
    }, [])
  return (
   <>
   hsrthrh
   </>
  )
}

export default BlogDetailPage