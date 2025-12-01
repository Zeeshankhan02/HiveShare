import { motion } from "framer-motion";
import Posts from "./Posts";
import { useEffect, useRef } from "react";

function PageContent({ data, setData, loader, category, menuOpen }) {
  const mainRef = useRef(null);

  useEffect(() => {
    // Scroll to top whenever category changes
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Reload Twitter embeds if present
    window.twttr?.widgets?.load();
  }, [category, data]);

  return (
    <main 
    ref={mainRef}
    className="flex-1 p-4 lg:p-6 overflow-y-auto [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
      {loader ? (
        <p className="text-xl font-medium animate-bounce [animation-duration:0.5s]">
          <span className="animate-pulse [animation-duration:0.3s]">
            loading...
          </span>
        </p>
      ) : data.length > 0 ? (
        <div className={`columns-1 sm:${menuOpen?"columns-1":"columns-2"}
        md:${!menuOpen?"columns-2":"columns-1"} lg:columns-2 xl:columns-3 space-y-6 gap-2`}>
          {data.map((item, idx) => (
            <motion.div
              key={item.post_id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ delay: idx * 0.04 }}
              viewport={{ once: true }}
            >
              <Posts
                post_id={item.post_id}
                title={item.title}
                desc={item.description}
                link={item.url}
                platform={item.platform.toLowerCase()}
                setData={setData}
                fav={item.is_favourite}
                category={category}
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center w-80 text-center">
          <img
            className="w-full rounded-2xl"
            src="https://media.tenor.com/kQPucvx-gccAAAAM/it%27s-empty-om-nom.gif"
            alt="Empty Gif"
          />
          <div className="mt-2 text-2xl text-center">
            <p>
              Nothing to show here{" "}
              {location.href === `${location.origin}/saved/all` ||
              location.href === `${location.origin}/saved/${category}` ? (
                <span>please add something...🥲</span>
              ) : null}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export default PageContent;
