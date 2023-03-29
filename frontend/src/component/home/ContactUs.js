import React from "react";
import { GiBookshelf, GiRotaryPhone } from "react-icons/gi";
import { FaMailBulk } from "react-icons/fa";

function ContactUs() {
  return (
    <>
      <section className="contact-banner">
        <div className="container">
          <div className="col-md-12">
            <div className="contact-text">
              <h3>Contact Us <GiBookshelf color="#57b6a4" size={30}/></h3>
              <h4 className="text-muted">If you have any questions, comments, or suggestions we would love to hear from you.</h4>
            </div>
          </div>
          <hr></hr>
          <div className="contactinfo"> 
            <div className="contact-icons">
              <div className="emailcontact">
                <div className="icon">
                  <span className="text-muted"><FaMailBulk size={30} color="#F6B07E" className="icon"/> wormlibrarian@bookwormlibrary.com</span>
                </div>
              </div>
              <div className="phonecontact">
                <div className="icon">
                  <span className="text-muted"><GiRotaryPhone size={30} color="#F6B07E" className="icon"/> 1-800-222-2222</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ContactUs;