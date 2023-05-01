import React, { useContext } from "react";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { AuthContext, FirebaseContext } from "../../store/Context";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <Link to={"/"}>
            <OlxLogo />
          </Link>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {user ? (
            <span>{`Hi  ${user.displayName}`}</span>
          ) : (
            <Link to={"/login"}>
              <span className="login-button">Login</span>
            </Link>
          )}
          <hr />
        </div>

        {user && (
          <span
            className="logout-button"
            onClick={() => {
              firebase.auth().signOut();
              navigate("login");
            }}
          >
            Logout
          </span>
        )}
        <div className="sellMenu">
          <Link to={"/Create"}>
          <SellButton></SellButton>
            <div className="sellMenuContent">
              <SellButtonPlus></SellButtonPlus>
              <span className="sell-button">SELL</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
