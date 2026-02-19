'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// กำหนด type สำหรับ review data
interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
  date: string;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/reviews')
      .then(res => res.json())
      .then(data => {
        setReviews(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
        setLoading(false);
      });
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-400"}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="flex flex-col h-fit p-5 text-center w-full gap-5 z-10">
      <h1 className=" not-sm:text-[1.2rem] sm:text-[2.5rem] font-bold text-lime-400">Reviews</h1>
      
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-[#252525] rounded-lg p-4 h-64 animate-pulse">
              <div className="flex justify-between items-center mb-3">
                <div className="h-4 bg-gray-600 rounded w-1/3"></div>
                <div className="h-4 bg-gray-600 rounded w-1/4"></div>
              </div>
              <div className="h-20 bg-gray-600 rounded mb-3"></div>
              <div className="h-4 bg-gray-600 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="backdrop-blur-3xl border-2 border-[#ffffff1f] bg-[rgba(255,255,255,0.1)] rounded-lg p-4 text-white shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              {/* ชื่อและ rating */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-lg">{review.name}</h3>
                <div className="flex not-sm:hidden">
                  {renderStars(review.rating)}
                </div>
              </div>
              
              {/* คำ review */}
              <p className="text-gray-300 text-sm mb-3 text-left">
                "{review.comment}"
              </p>
              
              {/* วันที่ */}
              <p className="text-gray-400 text-xs text-right">
                {new Date(review.date).toLocaleDateString('th-TH')}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}