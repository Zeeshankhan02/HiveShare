import React, { useState } from 'react'
import { HomeNavbar } from './Navbar'
import PageContent from './PageContent'
import { useParams } from 'react-router-dom'

function Shareable() {

  const {userId} = useParams()  
    const [data, setData] = useState([
      {
      title: "Elon Musk's take on AI",
      description: "This is how we do it",
      link: "https://x.com/elonmusk/status/1964395588927000801",
      category: "twitter"
    },{
      title: "Elon Musk's take on AI",
      description: "This is how we do it",
      link: "https://x.com/elonmusk/status/1964395588927000801",
      category: "twitter"
    },{
      title: "Former US President",
      description: "This is how we do it",
      link: "https://x.com/BarackObama/status/1981131010894156289",
      category: "twitter"
    },{
      title: "Big Bang Theory",
      description: "This is how we do it",
      link: "https://www.youtube.com/watch?v=-2RAq5o5pwc",
      category: "youtube"
    },{
      title: "Big Bang Theory",
      description: "This is how we do it",
      link: "https://www.youtube.com/watch?v=0WD6vxQz5-I&list=RD0WD6vxQz5-I&start_radio=1",
      category: "youtube"
    },{
      title: "Big Bang Theory",
      description: "This is how we do it",
      link: "https://www.instagram.com/reel/DQJpuaCEl0V/?igsh=ZWszN2Z3Y2NxdW8z",
      category: "instagram",
      fav:true
    },{
      title: "Big Bang Theory",
      description: "This is how we do it",
      link: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7386341166176272384?collapsed=1"title="Embedded post"></iframe>',
      category: "linkedin"
    },{
      title: "Big Bang Theory",
      description: "This is how we do it",
      link: "https://www.instagram.com/p/BT8cmZRlkVJ/",
      category: "instagram"
    }
  ])

  return (
   <div className='overflow-y-auto h-screen'>
   <HomeNavbar/>
   <PageContent data={data} />
   </div>
  )
}

export default Shareable