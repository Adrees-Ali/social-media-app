import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">

        {/* -- Left Sidebar ---vh= Viewport Height , p-3 = padding 16px according to bootstrap scale, border end= right side border lage ga*/}
        <div className="col-2 bg-light vh-100 p-3 border-end"> 
          <h5>Friendify</h5>
          <ul className="nav flex-column">   {/* container k ander jo items hain unhen  upper se neeach fit kerna */}
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard"> Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/friends"> Friends</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/messages"> Messages</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile"> Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/settings"> Settings</Link>
            </li>
          </ul>
        </div>

        
        <div className="col-7 p-3">

          {/*  Post container */}
          <div className="card mb-3 card mb-3 shadow-sm"> {/* mb-3= margin bottom, shadow-sm= small shaddow under  */}
            <div className="card-body">
              <textarea
                className="form-control mb-2"
                placeholder="What's on your mind?"
              />
              <button className="btn btn-primary btn-sm">Post</button>
            </div>
          </div>

         
          <div className="card mb-3 shadow-sm">
            <div className="card-body">
              <h6> Ali</h6>
              <p>This is my first post on Friendify!</p>
              <button className="btn btn-outline-primary btn-sm me-2">Like</button>
              <button className="btn btn-outline-secondary btn-sm">Comment</button>
            </div>
          </div>

          <div className="card mb-3 shadow-sm">
            <div className="card-body">
              <h6> Sara</h6>
              <p>Enjoying my weekend </p>
              <button className="btn btn-outline-primary btn-sm me-2">Like</button>
              <button className="btn btn-outline-secondary btn-sm">Comment</button>
            </div>
          </div>
          <div className="card mb-3 shadow-sm">
            <div className="card-body">
              <h6> Adrees Ali</h6>
              <p>Bulid My Social Media App</p>
              <button className="btn btn-outline-primary btn-sm me-2" >Like</button> {/* btn-sm= small button, me-2= margin-end=8px */}
              <button className="btn btn-outline-secondary btn-sm">Comment</button>
            </div>
          </div>
        </div>
       

        {/* Right container */}
        <div className="col-3 bg-light vh-100 p-3 border-start"> 
          <h6> Friend Suggestions</h6>
          <ul className="list-group mb-3">
            <li className="list-group-item">Usman <button className="btn btn-sm btn-success float-end">Add</button></li>
            <li className="list-group-item">Hina <button className="btn btn-sm btn-success float-end">Add</button></li>
            <li className="list-group-item">Adrees Ali<button className="btn btn-success btn-sm float-end">Add</button></li>
          </ul>

          <h6>Trending</h6>
          <ul className="list-group">
            <li className="list-group-item">#ReactJS</li>
            <li className="list-group-item">#Friendify</li>
            <li className="list-group-item">#WeekendVibes</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
