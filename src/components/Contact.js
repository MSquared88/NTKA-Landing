import React from 'react';

export default function Contact() {
  return (
    <form
      method="post"
      action="https://formspree.io/f/meqpknwn"
      className="shadow-md rounde pt-6 pb-8 mb-4 flex flex-col items-center"
    >

      <div className="mb-4 flex flex-col items-center w-3/4 lg:w-1/2">
        <label className="text-white text-left text-xl font-bold mb-2 w-full">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6 flex flex-col items-center w-3/4 lg:w-1/2">
        <label className=" text-white text-left text-xl font-bold mb-2 w-full">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="shadow appearance-none border rounded w-full py-2  text-black leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6 flex flex-col items-center w-3/4 lg:w-1/2">
        <label className="text-white text-left text-xl font-bold mb-2 w-full">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6 flex flex-col items-center w-3/4 lg:w-1/2">
        <label className="text-white text-left text-xl font-bold mb-3 w-full">Message</label>
        <textarea
          name="message"
          id="message"
          rows="5"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="my-10 flex justify-center items-center">
        <button
          type="submit"
          class="mx-4 bg-primeBlue-dark hover:bg-blue-700 text-white text-left font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
        >
          Send
        </button>
        <input
          type="reset"
          value="Clear"
          class="mx-4 bg-primeRed hover:bg-red-800 text-white text-left font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
        />
      </div>
    </form>
  )
}
