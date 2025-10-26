import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AddLinkModal({showModal,setShowModal,}) {
  // const [showModal, setShowModal] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const [link, setLink] = useState("");

  const tags = [
    { name: "Instagram", color: "bg-pink-500" },
    { name: "Facebook", color: "bg-blue-600" },
    { name: "LinkedIn", color: "bg-sky-700" },
    { name: "YouTube", color: "bg-red-600" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ link, category: selectedTag });
    setShowModal(false);
    setLink("");
    setSelectedTag(null);
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
                    Paste your link
                  </label>
                  <input
                    type="url"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="https://example.com/your-post"
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
                    Add
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
