import React from 'react'
import { extractIframeSrc, extractYoutubeId } from '../utils/extractId.js'
import { DeleteIcon, Facebook, Instagram, LinkedIn, ShareIcon, Twitter, Youtube } from './svgs/icons';

function Posts({title,desc,link,category}) {

  const videoId = category === "youtube" ? extractYoutubeId(link) : null 
  const iframeSrc = category === "linkedin" ? extractIframeSrc(link) : null;


  return (
    <>
 <div className="break-inside-avoid p-4 bg-white rounded-xl shadow-md border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          {category === "youtube" && <Youtube />}
          {category === "tweet" && <Twitter />}
          {category === "instagram" && <Instagram />}
          {category === "linkedin" && <LinkedIn />}

          <span className="font-bold">{title}</span>
        </div>
          <DeleteIcon  />
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
        

        {category === "tweet" && (
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}

        {category === "instagram" && (
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={link}
            data-instgrm-version="14"
          ></blockquote>
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