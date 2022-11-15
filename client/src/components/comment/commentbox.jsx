import React from "react";
import "../comment/commentbox.css"
function Comment({ commentPerson,pComment }) {
    return(
        <div className="col-12">
        <div className="container d-flex justify-content-start">
          <div className="card w-100 card-white post">
            <div className="post-heading">
                <div className="float-left meta">
                    <div className="title h5">
                      <a href="/aa"><b>{commentPerson}</b></a>
                    </div>
                    <h6 className="text-muted time">1 minute ago</h6>
                </div>
            </div> 
            <div className="post-description"> 
              <p>{pComment}</p>
            </div>
          </div>
        </div>
        </div>
    )
}
export default Comment