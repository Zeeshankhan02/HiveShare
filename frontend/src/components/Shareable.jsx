import React, { useEffect, useState } from 'react'
import { HomeNavbar } from './Navbar'
import PageContent from './PageContent'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

function Shareable() {
 const [loader, setLoader] = useState(true)
  const { shared_id } = useParams()
  const [data, setData] = useState([])

  async function fetchData() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/shared-link/${shared_id}`,{
        withCredentials: true,
        headers: {
          'Accept': 'application/json',
        },
      })
      if (!response) {
        toast.error("failed to Fetch data")
      } else {
        setLoader(false)
        setData(response.data.posts)
        console.log(response);
        
      }

    } catch (error) {
      setLoader(false)
    }
  }  

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='overflow-y-auto h-screen'>
      <HomeNavbar />
      <PageContent data={data} loader={loader} />
    </div>
  )
}

export default Shareable