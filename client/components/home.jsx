import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Head from './head'
// import wave from '../assets/images/wave.jpg'

const Home = () => {
  const [counter, setCounterNew] = useState(0)

  const resetCounter = () => {
    setCounterNew(0)
  }

  return (
    <div>
      <div className="my-3 mx-3">
        <Link
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          to="/"
        >
          Go to root
        </Link>
      </div>
      <div className="flex items-center justify-center h-screen flex flex-col">
        <Head title="Dashboard" />
        {/* <img alt="wave" src="images/wave.jpg" /> */}
        <div className="flex flex-row">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold m-1 py-2 px-4 rounded transition duration-300"
            type="button"
            onClick={() => setCounterNew(counter + 1)}
          >
            updateCounter&nbsp;
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold m-1 py-2 px-4 rounded transition duration-300"
            type="button"
            onClick={() => setCounterNew(counter - 1)}
          >
            updateCounterInOtherWay&nbsp;
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold m-1 py-2 px-4 rounded transition duration-300"
            type="button"
            onClick={resetCounter}
          >
            resetCounter
          </button>
        </div>
        <div className="bg-yellow-200 py-2 px-4 rounded"> Hello World Dashboard {counter} </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
