import React from "react";
import whatsappLogo from "../assets/whatsapp.svg";

function Nav() {
  return (
    <nav className="box-border flex bg-[#f7f6f4] text-[#6b7282] px-20 py-2 justify-between items-center text-sm font-medium">
      <ul className="flex items-center gap-12">
        <li>Cost Calculator</li>
        <li>Discover Stores</li>
        <li>Track Orders</li>
      </ul>
      <div className="flex items-center gap-12">
        <div>
          <p>Need help? Call:</p>
          <p className="text-[#53a0ce]">+2347069000083 or +2349035000505</p>
        </div>
        <img src={whatsappLogo} />
        <div className="border rounded-full py-2 px-4 border-[#d7d7d7]">Nigeria</div>
      </div>
    </nav>
  );
}

export default Nav;
