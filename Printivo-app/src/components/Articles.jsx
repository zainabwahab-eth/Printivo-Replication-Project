import React from 'react'
import techCrunch from "../assets/techcrunch.svg";
import techCabal from "../assets/techcabal.svg";
import techPoint from "../assets/techpoint.png";
import cnn from "../assets/cnn.svg";
import forbes from "../assets/forbes.svg";

function Articles() {
  return (
    <div className="flex flex-col bg-[#f7f6f4] px-20 py-12 gap-8">
        <h1 className="font-semibold text-2xl">Our amazing work got noticed by:</h1>
        <div className="flex items-start justify-between gap-4">
            <div>
                <img src={techCrunch} alt="TechCruch Logo" />

                <a href="#">Read the article here</a>
            </div>

            <div>
                <img src={techCabal} alt="TechCabal Logo" />

                <a href="#">Read the article here</a>
            </div>

            <div>
                <img src={techPoint} alt="TechPont Logo" />

                <a href="#">Read the article here</a>
            </div>

            <div>
                <img src={cnn} alt="CNN Logo" />

                <a href="#">Read the article here</a>
            </div>

            <div>
                <img src={forbes} alt="Forbes Logo" />

                <a href="#">Read the article here</a>
            </div>
        </div>
    </div>
  )
}

export default Articles