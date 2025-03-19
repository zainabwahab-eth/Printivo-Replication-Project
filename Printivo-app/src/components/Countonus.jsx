import React from "react";
import fastIcon from "../assets/fast.svg";
import qualityIcon from "../assets/quality.svg";
import serviceIcon from "../assets/service.svg";

function Countonus() {
  return (
    <div className="flex flex-col px-20 py-12 gap-8">
      <h1 className="font-semibold text-2xl">You can count on us for:</h1>
      <div className="flex justify-around py-8 gap-8">
        <div className="flex items-start justify-start gap-[12px]">
          <img src={fastIcon} alt="Fast Turnaround" />
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Fast Turnaround Within Days</h3>
            <p className="text-[#6b7282]">
              Your order gets to you within 3-7 working days via DHL or our very
              own Printivo Direct.
            </p>
          </div>
        </div>

        <div className="flex items-start justify-start gap-[12px]">
          <img src={qualityIcon} alt="Top Quality" />
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">100% Top Quality</h3>
            <p className="text-[#6b7282]">
              Only the finest materials, machines and people will be involved in
              fulfilling your order.
            </p>
          </div>
        </div>

        <div className="flex items-start justify-start gap-[12px]">
          <img src={serviceIcon} alt="Affordable Services" />
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Affordable Services</h3>
            <p className="text-[#6b7282]">
              All products are adequately priced to ensure you get value for
              your money at all times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countonus;
