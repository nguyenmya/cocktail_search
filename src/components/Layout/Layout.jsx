import React from "react";
import './Layout.scss'

export default function Layout() {

  return (
    <div>
      <input type="checkbox" id="nav-toggle" />
      <div className="sidebar">
        <div className="sidebar-brand">
          <h2>
            <span className="" />{" "}

          </h2>
        </div>
        <div className="sidebar-menu">
      
          <ul>
            <li>
              <a href className="active">
                <span className="las la-home" />
                <span>Xin chào</span>
              </a>
            </li>
            <li className="active">
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle">
                User Managemen              </a>

              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <a  href="...">
                  User Managemen{" "}
                  </a>
                </li>
                <li>
                  <a  href="...">Add Movie</a>
                </li>
                <li>
                  <a href="...">Delete </a>
                </li>
                <li>
                  <a href="...">Edit </a>
                </li>
              </ul>
            </li>
            <li className="">
              <a
                href="#homeUserSubMenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle">
                User Management
              </a>

              <ul className="collapse list-unstyled" id="homeUserSubMenu">
                <li>
                  <a className="nav-link" to="/Admin/UserManagement">
                    User Management
                  </a>
                </li>
              </ul>
            </li>


          </ul>
        </div>
      </div>

      <div div className="main-content">
        <header>
          <h2>
            <label htmlFor="nav-toggle">
              <span className="las la-bars" />
            </label>{" "}
            Management
          </h2>
          <div className="user-wrapper">
            <small>Super Admin</small>
            <div>
            </div>
          </div>
        </header>
        <main>
          <div className="cards1">
            <div className="card-single1">
              {/* <MovieManager/> */}

              {/* <AddMovie/> */}
              {/* <EditMovie/> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
