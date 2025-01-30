import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="w-[760px] lg:w-[1441px] h-[429px] ml-24 lg:ml-0">
      {/* Newsletter Section */}
      <div className="max-w-[1240px] h-[280px] lg:h-[180px] rounded-3xl mx-auto bg-black text-white pt-14 pl-16 z-20 mt-16">
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
          <h2 className="text-4xl font-black mb-4 lg:mb-0">
            STAY UP TO DATE ABOUT<br/> OUR LATEST OFFERS
          </h2>
          <div className="flex flex-col space-y-4 pr-20 w-[349px] h-[108px]">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded-2xl w-full lg:w-auto"
            />
            <button className="bg-white text-gray-900 px-6 py-2 rounded-2xl font-semibold hover:bg-gray-100">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="w-[1441px] h-[499px] pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="font-black text-xl">SHOP.CO</h3>
            <p className="text-gray-400 mt-2">
              We have clothes that suit your style and which you &apos; re proud to
              wear. From women to men.
            </p>
            <div className="flex space-x-3 mt-4">
              <Facebook />
              <Twitter />
              <Instagram />
              <Linkedin />
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 mt-4">
            <div>
                <h4 className="font-semibold">COMPANY</h4>
                <ul className="text-gray-400 space-y-2 mt-2">
                    <li>About</li>
                    <li>Features</li>
                    <li>Works</li>
                    <li>Career</li>
                </ul>
            </div>

            <div>
                <h4 className="font-semibold">HELP</h4>
                <ul className="text-gray-400 space-y-2 mt-2">
                    <li>Customer Support</li>
                    <li>Delivery Details</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold">FAQ</h4>
                <ul className="text-gray-400 space-y-2 mt-2">
                    <li>Account</li>
                    <li>Manage Deliveries</li>
                    <li>Orders</li>
                    <li>Payments</li>
                </ul>
            </div>

            <div>
                <h4 className="font-semibold">RESOURCES</h4>
                <ul className="text-gray-400 space-y-2 mt-2">
                    <li>Free eBooks</li>
                    <li>Development Tutorial</li>
                    <li>How To - Blog</li>
                    <li>YouTube Playlist</li>
                </ul>
            </div>
          </div>
        </div>
                
          

        {/* Copyright Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm border-t">
          <p className="mr-96 pr-36 lg:ml-24 mt-10">Shop.co © 2000-2023. All Rights Reserved</p>
          <div className="flex space-x-4 mt-10 mr-96 pr-36 lg-pr-0 lg:mr-36">
            <Image src="/images/visa-logo.webp" alt="Visa" width={50} height={50} />
            <Image src="/images/Mastercard-Logo.png" alt="Mastercard" width={70} height={50} />
            <Image src="/images/paypal.svg" alt="Paypal" width={50} height={50} />
            <Image src="/images/google-pay-2.svg" alt="Apple Pay" width={50} height={50} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
