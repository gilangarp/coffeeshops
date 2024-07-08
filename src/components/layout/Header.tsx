import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo-primary.png";

import {
  Bars3BottomRightIcon,
  BarsArrowUpIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/16/solid";
import { useStoreSelector } from "../../redux/hook";
import { authAction } from "../../redux/slice/authContext";
import { useDispatch } from "react-redux";

export default function Header() {
  const { token } = useStoreSelector((state) => state.auth);
  const dispatch = useDispatch();
  const Page = [
    { name: "Home", link: "/" },
    { name: "Product", link: "/product" },
  ];
  const [isOpen, setisOpen] = useState(false);

  return (
    <header className="py-2 z-50 px-5 md:px-10 lg:px-14 bg-black bg-opacity-80 shadow-md w-full fixed top-0 left-0 lg:flex lg:justify-between lg:items-center">
      {/* logoBrand & Navigation links */}
      <div className=" flex justify-between items-center gap-4 ">
        {/* logoBrand  */}
        <div className="flex items-center">
          {/* logo */}
          <img
            className="filter brightness-0 invert w-6 h-auto"
            src={logo}
            alt="..."
          />

          {/* Brand */}
          <h1 className="text-xl pl-2 text-white">coffee Shop</h1>
        </div>

        {/* Navigation links */}
        <nav className="text-sm flex gap-4 items-center list-none text-white">
          {Page.map((link) => (
            <Link className="hidden lg:block" to={link.link}>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* btn responsive */}
      <div
        onClick={() => setisOpen(!isOpen)}
        className="absolute right-8 top-2 cursor-pointer lg:hidden">
        {isOpen ? (
          <div className="w-6 h-6 text-white">
            <Bars3BottomRightIcon />
          </div>
        ) : (
          <div className="w-6 h-6 text-white">
            <BarsArrowUpIcon />
          </div>
        )}
      </div>

      {/* navigation */}
      <nav>
        {/* mobile */}
        <div
          className={`grid gap-4 py-4 lg:items-center w-full transition-all ease-in duration-500 ${
            isOpen ? "hidden" : "block"
          } lg:hidden `}>
          {/* navigation links */}
          {Page.map((link) => (
            <Link
              className="text-sm flex gap-4 items-center list-none text-white"
              to={link.link}>
              {link.name}
            </Link>
          ))}

          {/* search icon */}
          <Link to="/">
            <div className="w-6 h-6 text-white">
              <MagnifyingGlassIcon />
            </div>
          </Link>

          {/* shopping cart icon */}
          <Link to="/">
            <div className="w-6 h-6 text-white">
              <ShoppingCartIcon />
            </div>
          </Link>

          {token ? (
            <div className="grid gap-4">
              {/* Sign In */}
              <Link to="/login">
                <button className="navbar-nav sign-in rounded-lg px-6 py-2 border border-white bg-transparent text-white text-sm">
                  Sign In
                </button>
              </Link>

              {/* Sign Up */}
              <Link to="/register">
                <button className="navbar-nav sign-up rounded-lg px-6 py-2 bg-primary opacity-100 border-none text-sm">
                  Profile
                </button>
              </Link>
            </div>
          ) : (
            <div className="grid gap-4">
              {/* Sign In */}
              <Link to="/login">
                <button className="navbar-nav sign-in rounded-lg px-6 py-2 border border-white bg-transparent text-white text-sm">
                  Logout
                </button>
              </Link>

              {/* Sign Up */}
              <Link to="/register">
                <button className="navbar-nav sign-up rounded-lg px-6 py-2 bg-primary opacity-100 border-none text-sm">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* desktop */}
        <div className="hidden gap-4 lg:flex  lg:items-center w-full">
          {/* search icon */}
          <Link to="/">
            <div className="w-5 h-5 text-white">
              <MagnifyingGlassIcon />
            </div>
          </Link>

          {/* shopping cart icon */}
          <Link to="/">
            <div className="w-5 h-5 text-white">
              <ShoppingCartIcon />
            </div>
          </Link>

          {token ? (
            <div className="flex gap-4">
              {/* Sign In */}
              <Link to="/login">
                <button className="navbar-nav sign-in rounded-lg px-6 py-2 border border-white bg-transparent text-white text-sm">
                  Profile
                </button>
              </Link>

              {/* Logout */}
              <button
                onClick={() => {
                  dispatch(authAction.logout()); // Dispatch logout action
                  // Additional logout logic can go here
                }}
                className="navbar-nav logout rounded-lg px-6 py-2 border border-white bg-transparent text-white text-sm">
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              {/* Sign In */}
              <Link to="/login">
                <button className="navbar-nav sign-in rounded-lg px-6 py-2 border border-white bg-transparent text-white text-sm">
                  Sign In
                </button>
              </Link>

              {/* Sign Up */}
              <Link to="/register">
                <button className="navbar-nav sign-up rounded-lg px-6 py-2 bg-primary opacity-100 border-none text-sm">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
