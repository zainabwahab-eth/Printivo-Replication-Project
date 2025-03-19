import React from "react";
import twitterLogo from "../assets/twitter.svg";

function Testimonial() {
  const testi = [
    {
      name: "Amina Ebele",
      username: "DeliciousAmina",
      words:
        "I am now the unofficial @Printivo ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!",
    },
    {
      name: "Oluwatosin",
      username: "tosingirlfx",
      words:
        "@Printivo delivered my mugs in 24hrs. Thank you so much! It's nice doing business with you. More to come.",
    },
    {
      name: "Oluwatosin",
      username: "olgablark",
      words:
        "These guys @Printivo are really awesome and affordable. Excellent customer service and delivery too. Thank you.",
    },
  ];
  return (
    <div className="flex flex-col bg-[#edf6fd] px-20 py-12 gap-8">
      <h1 className="font-semibold text-2xl">What Customers Say About Us 🙌🏾</h1>
      <div className="flex items-start justify-between gap-4">
        {testi.map((t) => (
          <div className="flex pl-20 pr-4 py-6 border border-[#d7d7d7] rounded-sm h-40 relative bg-[#ffffff]">
            <div className="border rounded-full border-[#d7d7d7] p-2 absolute top-4.5 left-7">
              <img src={twitterLogo} className="w-4" />
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-semibold text-sm">
                {t.name} <span className="text-[#6d9ce0]">@{t.username}</span>
              </span>
              <p className="text-sm text-[#6b7282]">{t.words}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
