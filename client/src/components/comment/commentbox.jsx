import React from "react";
import "../comment/commentbox.css"
function Comment({ commentPerson,pComment,Date }) {
    return(
        <div className="col-12">
        <div className="container d-flex justify-content-start">
          <div className="card w-100 card-white post">
            <div className="post-heading">
                <div className="float-left meta">
                    <div className="title h5">
                      <a className="px-2">user: <b>{commentPerson}</b></a>
                    </div>
                    <h6 className="px-2 text-muted time">Date: {Date.substring(0,10)}</h6>
                </div>
            </div> 
            <div className="post-description">
            <div className="card-heading px-2 pt-2 pb-1">
              <p>{pComment}</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}
export default Comment