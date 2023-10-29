import "./Header.css";
import logoUrl from "../assets/logo.jpg";
import UserIcon from "../assets/icons/usericon.svg?react";
const Header = ({ user }) => {
  return (
    <header>
      <div className="header-logo">
        <img src={logoUrl} className="image-logo" />
      </div>
      <div className="header-profile">
        <UserIcon />
        <div className="profile-menu-content">
          <ul>
            {user && (
              <li>
                <a href="/logout">Logout</a>
              </li>
            )}
            {!user && (
              <li>
              <a href="/register">Sign up or sign in</a>
            </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

/*
if (user) {
    return (
      <div>
        <p>Current User: {user.user.email}</p>
        <button
          onClick={() => {}}
          className="btn btn-primary btn-lg mx-3 px-5 py-3 mt-2"
        >
          Log out
        </button>
      </div>
    );
  }
  return <button onClick={()=>{}} >Log in in</button>;
*/
