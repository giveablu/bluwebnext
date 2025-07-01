import React, { useState } from 'react';
import { motion, AnimatePresence, useAnimation, useMotionValue, useTransform } from 'framer-motion';

const SwipeCard = ({ recipient, onSwipeLeft, onSwipeRight, isExiting }) => {
  const [isDragging, setIsDragging] = useState(false);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-30, 30]);
  const opacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5]);

  const cardVariants = {
    initial: { scale: 1, x: 0, rotate: 0 },
    exitLeft: { 
      x: -500,
      rotate: -30,
      transition: { duration: 0.3 }
    },
    exitRight: { 
      x: 500,
      rotate: 30,
      transition: { duration: 0.3 }
    }
  };

  const handleDragEnd = async (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    
    if (Math.abs(velocity) >= 500 || Math.abs(offset) > 100) {
      const direction = offset > 0 ? 'right' : 'left';
      await controls.start({
        x: direction === 'right' ? 500 : -500,
        transition: { duration: 0.2 }
      });
      if (direction === 'right') {
        onSwipeRight();
      } else {
        onSwipeLeft();
      }
    } else {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 20 } });
    }
    setIsDragging(false);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <AnimatePresence>
        <motion.div
          key={recipient.id || recipient.name}
          className="relative w-full mx-auto h-[32rem] touch-none"
          variants={cardVariants}
          initial="initial"
          animate={isExiting ? (onSwipeLeft ? "exitLeft" : "exitRight") : controls}
          exit={isExiting ? (onSwipeLeft ? "exitLeft" : "exitRight") : "initial"}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          style={{ x, rotate, opacity }}
        >
        <div className="relative h-full">
          {/* Recipient Image */}
          <div className="absolute inset-0">
            <img
              src={recipient.image || '/images/receiver-home.png'}
              alt={recipient.name}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>

          {/* Recipient Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">{recipient.name}</h2>
            <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 mb-4">
              <p className="text-lg mb-2">Requested Help:</p>
              <p className="text-sm opacity-90">{recipient.requested_help}</p>
            </div>
          </div>

          {/* Swipe Indicators */}
          <motion.div
            className="absolute top-8 left-8 bg-red-500 text-white px-4 py-2 rounded-full font-bold"
            style={{ opacity: useTransform(x, [-100, 0], [1, 0]) }}
          >
            PASS
          </motion.div>
          <motion.div
            className="absolute top-8 right-8 bg-green-500 text-white px-4 py-2 rounded-full font-bold"
            style={{ opacity: useTransform(x, [0, 100], [0, 1]) }}
          >
            DONATE
          </motion.div>
        </div>
      </motion.div>
      </AnimatePresence>

      {/* Mobile Instructions */}
      <div className="absolute -bottom-12 left-0 right-0 text-center text-sm text-gray-500 dark:text-gray-400">
        Swipe right to donate, left to pass
      </div>
    </div>
  );
};

export default SwipeCard; 