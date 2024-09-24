import React from "react";
import PropTypes from "prop-types";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <>
      {/* Follow on instagram*/}
      <div className="footer-section bg-slate-500 py-16 mt-20">
        <div className="container mx-auto">
        <img
                className="w-10"
                src="https://i.ibb.co.com/Vw1bm1H/logo1.png"
                alt=""
              />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
             
              <h1
                className="text-3xl sm:text-3xl font-bold mt-3"
                style={{ color: "#331A15" }}
              >
                Follow on Instagram
              </h1>
              <p className="text-black text-lg leading-normal mb-5">
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best companion.
              </p>
              <div></div>

              <div className="flex gap-2 mb-5">
                <FaFacebook style={{ color: "#331A15" }} />
                <FaXTwitter style={{ color: "#331A15" }} />
                <FaInstagram style={{ color: "#331A15" }} />
                <FaLinkedin style={{ color: "#331A15" }} />
              </div>
              <h1
                className="text-3xl sm:text-3xl font-bold my-3"
                style={{ color: "#331A15" }}
              >
                Get in Touch
              </h1>
              <div>
                <p
                  className="flex gap-3 text-base"
                  style={{ color: "#331A15" }}
                >
                  <FaPhoneAlt /> +88 01533 333 333
                </p>
                <p
                  className="flex gap-3 text-base"
                  style={{ color: "#331A15" }}
                >
                  <MdOutlineEmail /> info@gmail.com
                </p>
                <p
                  className="flex gap-3 text-base"
                  style={{ color: "#331A15" }}
                >
                  <FaMapMarkerAlt /> 72, Wall street, King Road, Dhaka
                </p>
              </div>
            </div>

            <div>
              <h1
                className="text-3xl sm:text-3xl font-bold my-3"
                style={{ color: "#331A15" }}
              >
                Connect with Us
              </h1>

              <form action="" className="gird md:grid-cols-1">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full max-w-xs mb-2"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-full max-w-xs mb-2"
                />
                {/* sm */}
                <textarea
                  placeholder="Message"
                  className="textarea textarea-bordered textarea-sm w-full max-w-xs"
                ></textarea>
<div>
<button className="btn bg-orange-300">Send Message</button>
</div>

              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom py-2 text-xl">
        <p className="text-center text-white">Copyright Espresso Emporium ! All Rights Reserved</p>
      </div>
    </>
  );
};

Footer.propTypes = {};

export default Footer;
