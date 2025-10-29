import React, { useEffect, useState } from 'react'
import { HomeNavbar } from './Navbar'
import PageContent from './PageContent'
import { useParams } from 'react-router-dom'

function Shareable() {

  const { user_id } = useParams()
  const [data, setData] = useState([])

  async function fetchData() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/shared-link/${user_id}`)
      if (!response) {
        alert("failed to Fetch data")
      } else {
        setData(response.data)
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='overflow-y-auto h-screen'>
      <HomeNavbar />
      <PageContent data={data} />
    </div>
  )
}

export default Shareable