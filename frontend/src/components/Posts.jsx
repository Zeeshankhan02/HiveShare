import React, { useEffect } from 'react'
import { extractIframeSrc, extractYoutubeId } from '../utils/extractId.js'
import { DeleteIcon, Facebook, Instagram, LinkedIn, ShareIcon, Twitter, Youtube } from './svgs/icons';

function Posts({ title, desc, link, category, data,setData }) {

  const videoId = category === "youtube" ? extractYoutubeId(link) : null
  const iframeSrc = category === "linkedin" ? extractIframeSrc(link) : null;


  return (
    <>
      <div className="break-inside-avoid p-4 bg-white rounded-xl shadow-md border border-gray-200">
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            {category === "youtube" && <Youtube />}
            {category === "twitter" && <Twitter />}
            {category === "instagram" && <Instagram />}
            {category === "linkedin" && <LinkedIn />}

            <span className="font-bold">{title}</span>
          </div>
          <DeleteIcon  data={data} setData={setData} />
        </div>

        {desc && <p className="font-medium mb-3 text-gray-700">{desc}</p>}

        {/* Embeds */}
        <div className='flex justify-center w-full'>
          {category === "youtube" && (
            <iframe
              className="w-full rounded-md aspect-video"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}


          {category === "twitter" && (
              <div className='w-full'>
                <blockquote className="twitter-tweet"><a href={`${link.replace("/x.com/","/twitter.com/")}?ref_src=twsrc%5Etfw`}></a></blockquote>
              </div>
              
          )}

          {category === "instagram" && (
            <iframe
              src={`https://www.instagram.com/p/${link.split("/p/")[1].split("/")[0]}/embed`}
              width="100%"
              height="480"
              frameBorder="0"
              scrolling="no"
              allowtransparency="true"
              allowFullScreen
              className="rounded-md"
            />
          )}


          {category === "linkedin" && (
            <iframe
              src={iframeSrc}
              title="Embedded post"
              className='w-full aspect-[4/5] overflow-hidden'
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
        </div>

      </div>

    </>
  )
}

export default Posts;