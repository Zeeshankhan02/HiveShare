import { motion } from 'framer-motion'
import Posts from './Posts';


function PageContent({data,loader }) {
  return (
    <main className="flex-1 p-6 overflow-y-auto">
      {loader ? (
        <p className="text-xl font-medium animate-bounce [animation-duration:0.5s]">
          <span className="animate-pulse [animation-duration:0.3s]">
            loading...
          </span>
        </p>
      ) : data.length > 0 ? (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {data.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ delay: idx * 0.04 }}
              viewport={{ once: true }}
              key={idx}
            >
              <Posts
                title={item.title}
                desc={item.description}
                link={item.link}
                category={item.category}
                // data={data}
                // setData={setData}
                fav={item.fav}
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
            Nothing to show here {location.href ==`${location.origin}/saved/all`|| location.href == `${location.origin}/saved/${category}` ?<span>please add something...🥲</span>:null}
          </p>
         </div>
        </div>
      )}
    </main>
  )
}

export default PageContent