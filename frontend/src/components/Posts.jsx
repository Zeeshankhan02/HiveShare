import {
  extractIframeSrc,
  extractYoutubeId,
  getInstagramEmbedUrl,
} from "../utils/extractId.js";
import {
  DeleteIcon,
  Instagram,
  IsFavorite,
  IsNotFavorite,
  LinkedIn,
  Twitter,
  Youtube,
} from "../svgs/icons.jsx";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

function Posts({
  post_id,
  title,
  desc,
  link,
  platform,
  fav,
  category,
  setData,
}) {
  const videoId = platform === "youtube" ? extractYoutubeId(link) : null;
  const iframeSrc = platform === "linkedin" ? extractIframeSrc(link) : null;
  const [loader, setLoader] = useState(false)

  const toggleFavourite = async () => {
    try {
      setLoader(true)
      const token = localStorage.getItem("SBtoken");
      const res = await axios.patch(
        `${import.meta.env.VITE_BACKEND_URL}/posts/${post_id}/favourite`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const updatedFav = res.data.is_favourite;

      setData((prev) =>
        prev.map((p) =>
          p.post_id === post_id ? { ...p, is_favourite: updatedFav } : p
        )
      );
      setLoader(prev => !prev)
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.data.message);
      console.error(error);
    }
  };

  return (
    <div className="break-inside-avoid p-4 bg-white rounded-xl shadow-md border border-gray-200  mx-auto md:mx-2 h-fit max-w-[86rem] ">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          {platform === "youtube" && <Youtube />}
          {platform === "twitter" && <Twitter />}
          {platform === "facebook" && <Facebook />}
          {platform === "instagram" && <Instagram />}
          {platform === "linkedin" && <LinkedIn />}
          <span className="font-bold">{title}</span>
        </div>

        {(location.pathname.includes("/saved") || category) && (
          <div className="flex gap-3 items-center">
            {!loader?<div onClick={toggleFavourite}>
              {fav ? (
                <IsFavorite className="fill-red-600" />
              ) : (
                <IsNotFavorite />
              )}
            </div>:<div
        className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span
        >
      </div>}
            <div>
              <DeleteIcon post_id={post_id} setData={setData} />
            </div>
          </div>
        )}
      </div>

      {desc && <p className="font-medium mb-3 text-gray-700">{desc}</p>}

      {/* Embeds */}
      <div className="flex justify-center">
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
          <div className="w-full overflow-hidden ">
            <blockquote className="twitter-tweet ">
              <a
                width='100%'
                href={`${link.replace(
                  "/x.com/",
                  "/twitter.com/"
                )}?ref_src=twsrc%5Etfw`}
              ></a>
            </blockquote>
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
            className="w-full aspect-[4/5] overflow-hidden"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}
export default Posts;
