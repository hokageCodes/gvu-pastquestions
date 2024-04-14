import React from 'react'
import Image from 'next/image'

export default function FaqSection() {
  return (
    <div className="p-8">
    <div className="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
        <h4 className="text-4xl font-bold text-black-800 tracking-widest uppercase text-center">FAQ</h4>
        <p className="text-center text-black-400 text-lg mt-2">Here are some of the frequently asked questions</p>
        <div className="space-y-12 px-2 xl:px-16 mt-12">
            <div className="mt-4 flex">
                <div>
                    <div className="flex items-center h-16 border-l-4 border-yellow-400">
                        <span className="text-4xl text-yellow-400 px-4">Q.</span>
                    </div>
                    <div className="flex items-center h-16 border-l-4 border-black-400">
                        <span className="text-4xl text-black-400 px-4">A.</span>
                    </div>
                </div>
                <div>
                    <div className="flex items-center h-16">
                        <span className="text-lg text-yellow-400 font-bold">When was GVU PQS Created?</span>
                    </div>
                    <div className="flex items-center py-2">
                        <span className="text-black-500">GVU PQS was created in 2023.</span>

                    </div>
                </div>
            </div>

            <div className="mt-4 flex">
                <div>
                    <div className="flex items-center h-16 border-l-4 border-yellow-400">
                        <span className="text-4xl text-yellow-400 px-4">Q.</span>
                    </div>
                    <div className="flex items-center h-16 border-l-4 border-black-400">
                        <span className="text-4xl text-black-400 px-4">A.</span>
                    </div>
                </div>
                <div>
                    <div className="flex items-center h-16">
                        <span className="text-lg text-yellow-400 font-bold">Who is the founder of GVU PQS?</span>
                    </div>
                    <div className="flex items-center py-2">
                        <span className="text-black-500">GVU PQS was created by Jeffery Ken Ogida (400lvl)</span>

                    </div>
                </div>
            </div>

            <div className="mt-4 flex">
                <div>
                    <div className="flex items-center h-16 border-l-4 border-yellow-400">
                        <span className="text-4xl text-yellow-400 px-4">Q.</span>
                    </div>
                    <div className="flex items-center h-16 border-l-4 border-black-400">
                        <span className="text-4xl text-black-400 px-4">A.</span>
                    </div>
                </div>
                <div>
                    <div className="flex items-center h-16">
                        <span className="text-lg text-yellow-400 font-bold">Why was GVU PQS created?</span>
                    </div>
                    <div className="flex items-center py-2">
                        <span className="text-black-500">GVU PQS Was created to help the students of Glorious Vision University in order to assist them get past questions easily</span>

                    </div>
                </div>
            </div>

            <div className="mt-4 flex">
                <div>
                    <div className="flex items-center h-16 border-l-4 border-yellow-400">
                        <span className="text-4xl text-yellow-400 px-4">Q.</span>
                    </div>
                    <div className="flex items-center h-16 border-l-4 border-black-400">
                        <span className="text-4xl text-black-400 px-4">A.</span>
                    </div>
                </div>
                <div>
                    <div className="flex items-center h-16">
                        <span className="text-lg text-yellow-400 font-bold">How fast we reply to messages?</span>
                    </div>
                    <div className="flex items-center py-2">
                        <span className="text-black-500">Our teams are always on ground to assist you so we reply in less than 1hour</span>

                    </div>
                </div>
            </div>

            <div className="mt-4 flex">
                <div>
                    <div className="flex items-center h-16 border-l-4 border-yellow-400">
                        <span className="text-4xl text-yellow-400 px-4">Q.</span>
                    </div>
                    <div className="flex items-center h-16 border-l-4 border-black-400">
                        <span className="text-4xl text-black-400 px-4">A.</span>
                    </div>
                </div>
                <div>
                    <div className="flex items-center h-16">
                        <span className="text-lg text-yellow-400 font-bold">What if i dont see the question i want?</span>
                    </div>
                    <div className="flex items-center py-2">
                        <span className="text-black-500">Click on the contact section and send us detailed information about the passed question</span>

                    </div>
                </div>
            </div>

            <div className="mt-4 flex">
                <div>
                    <div className="flex items-center h-16 border-l-4 border-yellow-400">
                        <span className="text-4xl text-yellow-400 px-4">Q.</span>
                    </div>
                    <div className="flex items-center h-16 border-l-4 border-black-400">
                        <span className="text-4xl text-black-400 px-4">A.</span>
                    </div>
                </div>
                <div>
                    <div className="flex items-center h-16">
                        <span className="text-lg text-yellow-400 font-bold">can i download images?</span>
                    </div>
                    <div className="flex items-center py-2">
                        <span className="text-black-500">All images(past questions) are downloadable to help you study while you are offline</span>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
