import { extractIframeSrc, extractYoutubeId, getInstagramEmbedUrl } from '../utils/extractId.js'
import { DeleteIcon, Instagram, IsFavorite, IsNotFavorite, LinkedIn, Twitter, Youtube } from '../svgs/icons.jsx';

function Posts({ post_id, title, desc, link, platform, fav, category, onDelete }) {

  const videoId = platform === "youtube" ? extractYoutubeId(link) : null
  const iframeSrc = platform === "linkedin" ? extractIframeSrc(link) : null;
  return (
    <>
      <div className="break-inside-avoid p-4 bg-white rounded-xl shadow-md border border-gray-200">
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2 ">
            {platform === "youtube" && <Youtube />}
            {platform === "twitter" && <Twitter />}
            {platform === "instagram" && <Instagram />}
            {platform === "linkedin" && <LinkedIn />}
            <span className="font-bold">{title}</span>
          </div>
          {(location.href == `${location.origin}/saved/all` || location.href == `${location.origin}/saved/${category}`) || location.href == `${location.origin}/saved/favorites` ? <div className='flex gap-3' >
            <div>
              {fav === true ? <IsFavorite className={"fill-red-600"} /> : <IsNotFavorite />}
            </div>
            <div>
              <DeleteIcon post_id={post_id} onDelete={onDelete} />
            </div>
          </div> : null}
        </div>

        {desc && <p className="font-medium mb-3 text-gray-700">{desc}</p>}

        {/* Embeds */}
        <div className='flex justify-center'>
          {platform === "youtube" && (
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


          {platform === "twitter" && (
            <div className='w-full'>
              <blockquote className="twitter-tweet"><a href={`${link.replace("/x.com/", "/twitter.com/")}?ref_src=twsrc%5Etfw`}></a></blockquote>
            </div>

          )}

          {platform === "instagram" && (
            <iframe
              src={getInstagramEmbedUrl(link)}
              width="100%"
              height="480"
              frameBorder="0"
              scrolling="no"
              allowtransparency="true"
              allowFullScreen
              className="rounded-md"
            />
          )}


          {platform === "linkedin" && (
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