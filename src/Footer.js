import React from "react";

export default function Footer() {
  return (
    <>
      <div className="App-footer ">
        <div className="container container-fluid titleWrapper  ">
          <div className=" row justify-content-md-center">
            <div className=" col-auto text-end h-25 ">
              <spam>About Us</spam> |<spam>Contact Us</spam> |
              <spam>Privacy Policy</spam>
            </div>
          </div>
          <div className=" row justify-content-md-center">
            <div className="col-auto ">
              <p>Created by: Claudia, Danny and Jugesh</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
