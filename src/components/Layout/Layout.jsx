import React from "react";
import './Layout.scss'
import { Link } from "react-router-dom"
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
                  Câu Trả Lời
              </a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <Link className="nav-link" to="/Cau1">
                    Câu1
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/Cau2">
                    Câu2
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/Cau3">
                    Câu 3
                  </Link>
                </li>
              </ul>
            </li>
            <li className="">
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

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
