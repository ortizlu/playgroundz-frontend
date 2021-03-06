import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css';

class Header extends Component {

  render() {
    return (
      <div>
        <div className="MuiToolbar-root-47 MuiToolbar-regular-49 MuiToolbar-gutters-48 MuiButton-contained-ezy MuiAppBar-colorPrimary-18 MikeLink1">
          <Link to="/" style={{ textDecoration: 'none' }}><h6 className="MuiTypography-root-69 PickupGames-header MuiTypography-h6-86 MuiTypography-colorInherit-98 MuiTypography-noWrap-95 PrimarySearchAppBar-title-4">
            Pickup Games
          </h6></Link>
          <div className="PrimarySearchAppBar-search-5">
            <div className="PrimarySearchAppBar-searchIcon-6">
              <svg
                className="MuiSvgIcon-root-60"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                role="presentation"
              >
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                <path fill="none" d="M0 0h24v24H0z" />
              </svg>
            </div>
            {/* // Search Bar */}
            <div className="MuiInputBase-root-104 PrimarySearchAppBar-inputRoot-7">
              <input
                className="MuiInputBase-input-114 PrimarySearchAppBar-inputInput-8"
                placeholder="Search…"
                type="text"
              />
            </div>
          </div>
          <div className="PrimarySearchAppBar-grow-2" />
          <div className="PrimarySearchAppBar-sectionMobile-10">
            <button
              className="MuiButtonBase-root-57 MuiIconButton-root-51 MuiIconButton-colorInherit-52"
              type="button"
              aria-haspopup="true"
            >
              <span className="MuiIconButton-label-56">
                <svg
                  className="MuiSvgIcon-root-60"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </span>
              <span className="MuiTouchRipple-root-130" />
            </button>
          </div>

          {this.props.isLoggedIn ? (
            <div>
              <Link to="/create-event" >
                <button
                  className="MuiButtonBase-root-155 MuiIconButton-root-149 MuiIconButton-colorInherit-150 MuiButton-contained-ezy MuiAppBar-colorPrimary-18 juan-noborder"
                  tabIndex="0"
                  type="button"
                  aria-haspopup="true"
                >
                  <span className="MuiIconButton-label-154" />
                  <span className="MuiTouchRipple-root-246" />
                  + Event
            </button>
              </Link>
              <Link to="/" >
                <button
                  onClick={this.props.handleLogOut}
                  class="MuiButtonBase-root-155 MuiIconButton-root-149 MuiIconButton-colorInherit-150 MuiButton-contained-ezy MuiAppBar-colorPrimary-18 juan-noborder"
                  tabindex="0"
                  type="button"
                  aria-haspopup="true"
                >
                  <span class="MuiIconButton-label-154" />
                  <span class="MuiTouchRipple-root-246" />
                  Logout
              </button>
              </Link>
            </div>
          ) : (
              <div>
                <Link to="/signup">
                  <button
                    className="MuiButtonBase-root-155 MuiIconButton-root-149 MuiIconButton-colorInherit-150 MuiButton-contained-ezy MuiAppBar-colorPrimary-18 juan-noborder"
                    tabIndex="0"
                    type="button"
                    aria-haspopup="true"
                  >
                    <span className="MuiIconButton-label-154" />
                    <span className="MuiTouchRipple-root-246" />
                    SignUp
                </button>
                </Link>
                <Link to="/login">
                  <button
                    className="MuiButtonBase-root-155 MuiIconButton-root-149 MuiIconButton-colorInherit-150 MuiButton-contained-ezy MuiAppBar-colorPrimary-18 juan-noborder"
                    tabIndex="0"
                    type="button"
                    aria-haspopup="true"
                  >
                    <span className="MuiIconButton-label-154" />
                    <span className="MuiTouchRipple-root-246" />
                    Login
                </button>
                </Link>
              </div>
            )}
        </div>
      </div>
    )

  }
}

export default Header;
