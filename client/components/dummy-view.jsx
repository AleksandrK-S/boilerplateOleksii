import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dummy = () => (
  <>
    <Head title="Hello" />
    <div className="my-3 mx-3 fixed top-0 right-0">
      <Link
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        to="/dashboard"
      >
        Go to dashboard
      </Link>
    </div>
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center bg-indigo-800 p-10 rounded-xl select-none">
        <img alt="wave" src="images/logo-new-text.png" />
        <span className="text-white text-right font-semibold">Boilerplate</span>
      </div>
    </div>
  </>
)

Dummy.propTypes = {}

export default React.memo(Dummy)
