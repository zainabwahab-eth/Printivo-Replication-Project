import React from 'react'
import Logos from "../assets/logo-proofs.png";

function Proof() {
  return (
    <div className="flex flex-col px-20 py-12 gap-8">
        <div className='flex flex-col gap-[8px]'>
        <h1 className="font-semibold text-2xl">Nigeria's No. 1 online print shop👑</h1>
        <p className="font-semibold text-xl text-[#6b7282] w-[700px]">Our print services and solutions are trusted by these brands and over 15,000 other businesses in Nigeria.</p>
        </div>

        <img src={Logos} alt="All Logos"/>
    </div>
  )
}

export default Proof