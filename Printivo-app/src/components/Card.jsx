import React from "react";

function Card({ object, name }) {
  return (
    <div className="flex flex-col px-20 py-12 gap-12 bg-[#f7f6f4]">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-2xl">Popular {name}</h3>
        <a className="font-semibold text-sm text-[#d87f81]" href="#">
          See all {name}
        </a>
      </div>
      <div className="flex flex-wrap gap-6 items-center justify-start">
        {object.map((obj, index) => (
          <div key={index}>
            <img src={obj.image} className="w-3xs h-60 object-cover" />
            <div className="flex flex-col items-start bg-[#fff] text-[#384b52] font-semibold p-4 gap-2 text-sm">
              <h3 className="text-base">{obj.name}</h3>
              <p className="text-[#6b7282]">STARTING AT</p>
              <span className="text-lg">
                #{obj.price}{" "}
                <span className="text-[#6b7282]">per {obj.per}</span>
              </span>
              <button className="bg-[#d87f81] px-3 py-3 rounded-md text-sm text-left text-[#ffffff]">
                Browse{" "}
                {obj.name.length > 20
                  ? obj.name.slice(0, 20) + "..."
                  : obj.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
