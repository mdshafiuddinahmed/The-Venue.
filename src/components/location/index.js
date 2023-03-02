import React from "react";

const Location = () =>{
    return(
        <div className="location_wrapper">
         <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!
                      2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1
                      !3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2
                      C%20USA!5e0!3m2!1sen!2sin!4v1674578988402!5m2!1sen!2sin" 
                      width="100%" 
                      height="500px" 
                      frameBorder='0'
                      title="gglemps"
                      allowfullscreen
          ></iframe>
          <div classname="location_tag">
            <div>
                Location
            </div>

          </div>
        </div>
    )
}
export default Location;
