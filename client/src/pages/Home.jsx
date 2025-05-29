import React from 'react'
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion'
function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <Helmet>
        <title>Home </title>
        <meta
          name='description'
          content='Welcome to NYB infotech'
        />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className='text-4xl font-bold text-blue-600'>
          Welcome to NYB infotech
        </h1>
        <p className='mt-4 text-gray-700'>
          We provide software development, web development and It consulting services.
        </p>
      </motion.div>
    </div>
  );
}

export default Home