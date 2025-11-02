import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";

export default function AddLinkModal({ showModal, setShowModal, onAdd }) {
  const [loader, setLoader] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const titleRef = useRef();
  const descRef = useRef();
  const linkRef = useRef();

  const tags = [
    { name: "Instagram", color: "bg-pink-500" },
    { name: "Twitter", color: "bg-neutral-900" },
    { name: "LinkedIn", color: "bg-sky-700" },
    { name: "Youtube", color: "bg-red-600" },
  ];

  const data = {
    title: titleRef.current?.value,
    description: descRef.current?.value,
    url: linkRef.current?.value,
    platform: selectedTag,
  };

  const handleSubmit = async (e) => {
    const token = localStorage.getItem("SBtoken");
    e.preventDefault();
    setLoader(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/posts`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      if (!res) {
        alert("Failed to Add post");
        setLoader(false);
      } else {
        setLoader(false);
        setShowModal(false);
        toast.success(res.data.message);
        titleRef.current.value = "";
        descRef.current.value = "";
        linkRef.current.value = "";
        setSelectedTag(null);
        onAdd();
      }
    } catch (error) {
      toast.error(error.message);
      setLoader(false)
      toast.error(error.data.message);
    }
  };

  return (
    <>
      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            onClick={() => setShowModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white w-[90%] max-w-md p-6 rounded-2xl shadow-2xl relative"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl"
              >
                &times;
              </button>

              {/* Modal Title */}
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Add a New Link
              </h2>

              {/* Input Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-gray-600 mb-1 block">
                    Post title
                  </label>
                  <input
                    ref={titleRef}
                    type="text"
                    placeholder="title"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                  />
                  <label className="text-sm font-medium text-gray-600 mb-1 block">
                    Paste description
                  </label>
                  <input
                    type="text"
                    ref={descRef}
                    placeholder="description"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                  />
                  <label className="text-sm font-medium text-gray-600 mb-1 block">
                    Paste your link
                  </label>
                  <input
                    type="text"
                    ref={linkRef}
                    placeholder="https://example.com"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600 mb-2 block">
                    Select category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <button
                        key={tag.name}
                        type="button"
                        onClick={() => setSelectedTag(tag.name)}
                        className={`px-4 py-2 text-sm rounded-full text-white font-medium transition-all ${
                          selectedTag === tag.name
                            ? `${tag.color} ring-2 ring-offset-2 ring-gray-700`
                            : `${tag.color} opacity-70 hover:opacity-100`
                        }`}
                      >
                        {tag.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-900 transition-all"
                  >
                    {!loader ? (
                      <p>Add</p>
                    ) : (
                      <p className="animate-pulse">Adding...</p>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
