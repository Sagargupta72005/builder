import React from 'react'
import Blog from '../components/Blog'
import Sponser from '../components/Sponser'
import Testimonials from '../components/Testimonials'
import NewsBlog from '../components/NewsBlog'
import WeMake from '../components/WeMake'

const BlogPage = () => {
  return (
    <div>
            <Blog/>
            <Testimonials/>
            <WeMake/>
            <NewsBlog/>
            <Sponser/>
    </div>
  )
}

export default BlogPage
