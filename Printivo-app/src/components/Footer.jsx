import React from "react";
import facebookIcon from "../assets/facebook.svg";
import twitterIcon from "../assets/twitter-footer.svg";
import linkedInIcon from "../assets/linkedin.svg";
import instagramIcon from "../assets/instagram.svg";
import payments from "../assets/payment.png";
import delivery from "../assets/delivery.png";

function Footer() {
  return (
    <div className="flex justify-between bg-[#384a62] text-[#fafafa] text-[14px] px-20 py-12 gap-8 font-medium">
      <div className="flex flex-col gap-[8px]">
        <h4 className="py-2 text-[18px] text-[#e7eadf]">Printivo</h4>
        <p>About us</p>
        <p>Contact</p>
        <p>Track Order</p>
        <p>Printivo Promise</p>
        <p>Printivo Blog</p>
        <p>Career</p>
      </div>

      <div className="flex flex-col gap-[8px]">
        <h4 className="py-2 text-[18px] text-[#e7eadf]">
          Help and Information
        </h4>
        <p>Paper Quality</p>
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
        <p>Font License</p>
        <p>Shipping and Delivery</p>
      </div>

      <div className="flex flex-col gap-[8px]">
        <h4 className="py-2 text-[18px] text-[#e7eadf]">Make Money</h4>
        <p>Refer a friend & earn N1,000</p>
        <p>Become a Reseller</p>
        <p>Sell your Designs</p>
        <p>Merch Store</p>
      </div>

      <div className="flex flex-col gap-[8px]">
        <div className="flex flex-col gap-[8px]">
          <h4 className="py-2 text-[18px] text-[#e7eadf]">Follow us</h4>
          <div className="flex align-center gap-2">
            <img src={facebookIcon} alt="Facebook book" />

            <img src={twitterIcon} alt="Twitter book" />

            <img src={linkedInIcon} alt="LinkedIn book" />

            <img src={instagramIcon} alt="Instagram book" />
          </div>
        </div>

        <div className="flex flex-col gap-[8px]"></div>
        <h4 className="py-2 text-[18px] text-[#e7eadf]">Accepted Payments</h4>

        <img src={payments} alt="Payment Logos" className="h-[20px]" />

        <div className="flex flex-col gap-[8px]"></div>
        <h4 className="py-2 text-[18px] text-[#e7eadf]">Delivery</h4>

        <img src={delivery} alt="delivery logos" className="h-[20px]" />
      </div>

      
    </div>
  );
}

export default Footer;
