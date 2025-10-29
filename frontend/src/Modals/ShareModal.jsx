import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function ShareModal({ showShareModal, setShowShareModal }) {
  const [loading, setLoading] = useState(false);
  const [shareLink, setShareLink] = useState("");
  const navigate = useNavigate()

  const handleShare = async () => {
    const token = localStorage.getItem('SBtoken')
    if (!token) {
      alert("please login first")
      navigate('/login')
    }
    else{
      setLoading(true);
    setShareLink(""); // reset
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/share-link`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })

      if (!res) {
        alert("Failed to generate shareable link")
      }else{
        setShareLink(`${window.location.origin}/shared/${res.data.shared_id}`);
      }
    } catch (err) {
      alert("Internel Server Error")
    } finally {
      setLoading(false);
    }
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink);
    alert("Copied to clipboard!");
  };
  return (
    <>
      <AnimatePresence>
        {showShareModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !loading && setShowShareModal(false)}
          >
            <motion.div
              className="bg-white w-[90%] max-w-md p-6 rounded-2xl shadow-2xl relative text-center"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              {!loading && !shareLink && (
                <button
                  onClick={() => setShowShareModal(false)}
                  className="absolute top-0 right-3 text-gray-500 hover:text-gray-800 text-2xl mb-2"
                >
                  &times;
                </button>
              )}

              {/* confirmation */}
              {!loading && !shareLink && (
                <>
                  <h2 className="text-lg font-semibold mb-4">
                    Do you want to share your posts with the public?
                  </h2>
                  <div className="flex justify-center gap-6">
                    <button
                      onClick={() => setShowShareModal(false)}
                      className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-all"
                    >
                      No
                    </button>
                    <button
                      onClick={handleShare}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                    >
                      Yes
                    </button>
                  </div>
                </>
              )}

              {/* Loading */}
              {loading && (
                <div className="flex flex-col items-center justify-center py-6">
                  <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-3"></div>
                  <p className="text-gray-600 font-medium">Generating link...</p>
                </div>
              )}

              {/* Shareable Link */}
              {!loading && shareLink && (
                <>
                <button
                  onClick={() => setShowShareModal(false)}
                  className="absolute top-0 right-3 text-gray-500 hover:text-gray-800 text-2xl mb-2"
                >
                  &times;
                </button>
                  <h2 className="text-lg font-semibold mb-4">Your Shareable Link</h2>
                  <div className="bg-gray-100 p-3 rounded-lg mb-4 text-sm text-gray-700 break-all">
                    {shareLink}
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-all"
                  >
                    Copy Link
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ShareModal