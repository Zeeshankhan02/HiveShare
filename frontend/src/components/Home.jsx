import { href, Link } from "react-router-dom"
import Card from "./Card"
import { motion } from 'framer-motion';
import Navbar from "./Navbar"
import { Bookmarks } from "./svgs/Boomark";
import { Youtube } from "./svgs/Youtube";
import { LinkedIn } from "./svgs/LinkedIn";

function Home() {

  const features = [
    {
      title: 'Add Links Instantly',
      desc: 'Just paste the link of any post or video and Second Brain will fetch and save it for you.',
      src: <Bookmarks />,
    },
    {
      title: 'Categorize by Platform',
      desc: 'Organize your content by platforms like YouTube, Instagram, Facebook, and LinkedIn.',
      src: <Youtube />,
    },
    {
      title: 'Add Notes & Titles',
      desc: 'Give each post a title and personal note to remember why you saved it.',
      src: <LinkedIn />,
    }
  ]
  const testimonials = [
    {
      title: 'Amaan Ur Rahman',
      desc: 'As someone who consumes content across multiple platforms, having everything in one place is a game-changer',
      href: "https://media.istockphoto.com/id/480585465/photo/who-is-the-boss.jpg?s=612x612&w=0&k=20&c=6HGMxKLOZWJmwDEF0Gb16C0BcnMmY7bvAy3NKmrOW6A="
    },
    {
      title: 'Categorize by Platform',
      desc: 'Industry insights from LinkedIn, competitor analysis from Twitter, and tutorial videos from YouTube - all organized by project',
      href: "https://thumbs.dreamstime.com/b/orangutan-baby-funny-face-months-old-31287963.jpg"
    },
    {
      title: 'Add Notes & Titles',
      desc: 'Finally stopped losing those "watch later" items across different platforms',
      href: "https://media.istockphoto.com/id/986720632/photo/close-up-snowy-owl-eye-with-wooden-background.webp?b=1&s=612x612&w=0&k=20&c=iNCPJWyoIBgOjnzTX3v05ECEBB79vqfBKkNjzgFOxOw="
    }
  ]
  return (
    <>
      <div className="overflow-x-hidden absolute -z-10 inset-0 h-full w-full 
bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] 
bg-[size:10px_10px]">
        <Navbar />

        {/* Hero */}
        <div className="h-[35%] flex justify-center items-center w-full">
          <div className="text-center flex justify-center items-center gap-4 flex-col">
            <motion.h1 initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl font-extrabold">Second Brain🧠</motion.h1>
            <motion.h4
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-500 text-xl font-medium transition-opacity duration-700">
              Save, organize, and rediscover your favorite posts and videos from anywhere - all in one smart space.</motion.h4>
            <motion.div className="mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} >
              <Link to={'sign-up'} className="py-2 px-6 rounded-2xl  bg-cyan-500 text-white text-lg font-semibold hover:bg-cyan-600 transition-all" >Get Started</Link>
            </motion.div>
          </div>
        </div>

        {/* Features */}
        <div className="flex justify-center items-center flex-col gap-8">
          <h1 className="text-4xl font-bold tracking-wide underline">Features</h1>
          <div className="flex justify-center gap-8 mt-4">
            {features.map((f, i) => <motion.div key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}>
              <Card src={f.src} title={f.title} desc={f.desc} href={f.href} className={'w-80 h-60'} />
            </motion.div>
            )}
          </div>
        </div>

        {/* Testimonials */}
        <div className="flex justify-center items-center flex-col gap-8 mt-4">
          <h1 className="text-4xl font-bold mt-6 tracking-wide underline">Testimonials</h1>
          <div className="flex justify-center gap-8 mt-4">
            {testimonials.map((f, i) => <motion.div key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}>
              <Card src={f.src} title={f.title} desc={f.desc} href={f.href} className={'w-70 h-80 '} />
            </motion.div>
            )}
          </div>
        </div>
        {/* Footer */}
        <div className="relative flex justify-center text-lg font-mono items-center tracking-wide h-10 mt-8">
          <div className="absolute top-0">
            Created With Love💕
          </div>

        </div>
      </div>

    </>
  )
}

export default Home