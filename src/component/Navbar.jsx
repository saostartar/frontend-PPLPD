import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../img/Logosiatlet.png";
import Dispora from "../img/Dispora.png";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import Sidebarres from "./SidebarRes";

const Navbar = () => {
  const isMobile = useMediaQuery({ query: "(max-device-width: 768px)" });
  const { user } = useSelector((state) => state.auth);
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <nav
        className={`navbar is-fixed-top has-shadow has-background-`}
        role="navigation"
        aria-label="main navigation"
        style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)" }}>
        <div className="navbar-brand">
          {isMobile && (
            <div
              className="is-flex is-justify-content-space-between "
              style={{ minWidth: "100%" }}>
              <div className="">
                <button
                  className={`navbar-burger burger ${
                    isActive ? "is-active" : ""
                  }`}
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
                  onClick={handleBurgerClick} //
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </button>
              </div>
              <div
                id="navbarBasicExample"
                className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                <div className="navbar-start">
                  <NavLink className="navbar-item" to="/dashboard">
                    Dashboard
                  </NavLink>

                  <NavLink className="navbar-item" to="/forum">
                    Forum
                  </NavLink>

                  <NavLink className="navbar-item" to="/datadiriatlet">
                    Data Atlet
                  </NavLink>

                  <NavLink className="navbar-item" to="/clubatlet">
                    Club
                  </NavLink>
                  <NavLink
                    className="navbar-item"
                    to={`/perkembangan-latihan/${user && user.id_atlet}`}>
                    Perkembangan Latihan
                  </NavLink>
                  <NavLink
                    className="navbar-item"
                    to={`/cabor/program/${
                      user && user.Cabor && user.Cabor.id_cabor
                    }`}>
                    Program Latihan
                  </NavLink>
                </div>
              </div>

              {user && user.role === "Atlet" && (
                <div className="columns is-mobile is-vcentered mr-4">
                  <div className="column is-narrow">
                    <figure className="image is-48x48">
                      <img
                        className="is-rounded"
                        src={user && user.url}
                        alt=""
                      />
                    </figure>
                  </div>
                  <div className="column ml-2">
                    <Link
                      to={"/datadiriatlet"}
                      className="has-text-dark is-size-7-mobile">
                      {user && user.name_awal} {user && user.nama_tengah}{" "}
                      {user && user.nama_akhir} -{" "}
                    </Link>
                    <label className="label ml-1 is-size-7-mobile">
                      {" "}
                      Atlet
                    </label>
                  </div>
                </div>
              )}
              {user && user.role === "Admin" && (
                <div className=" is-flex is-align-items-center mr-4">
                  <p>{user.nama} -</p>
                  <label htmlFor="" className="label ml-1">
                    {" "}
                    Admin
                  </label>
                </div>
              )}
            </div>
          )}
        </div>

        {!isMobile && (
          <div className="navbar-menu p=2">
            <img
              className="ml-2"
              src={Logo}
              alt=""
              width={80}
              style={{ objectFit: "cover" }}
            />
            <div className="navbar-end">
              <div className="navbar-item is-flex is-align-items-center p-0">
                {user && user.role === "Atlet" && (
                  <div className=" is-flex is-align-items-center mr-4">
                    <img
                      className="mr-2"
                      style={{
                        borderRadius: "50%",
                        objectFit: "cover",
                        aspectRatio: "1/1",
                      }}
                      src={user && user.url}
                      alt=""
                    />
                    <Link to={"/datadiriatlet"} className="has-text-dark">
                      {user && user.name_awal} {user && user.nama_tengah}{" "}
                      {user && user.nama_akhir} -{" "}
                    </Link>
                    <label className="label ml-1 "> Atlet</label>
                  </div>
                )}
                {user && user.role === "Admin" && (
                  <div className=" is-flex is-align-items-center mr-4">
                    <p>{user.nama} -</p>
                    <label htmlFor="" className="label ml-1">
                      {" "}
                      Admin
                    </label>
                  </div>
                )}
                <img src={Dispora} alt="" />
              </div>
            </div>
          </div>
        )}
      </nav>
      {isActive && <Sidebarres />}
    </div>
  );
};

export default Navbar;
