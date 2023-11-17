import React, { useState } from "react";
import styled from "styled-components";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Nav>
        <Logo src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg" />

        <NavMenuIcon onClick={handleToggleMenu} isMenuOpen={isMenuOpen}>
          {isMenuOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </NavMenuIcon>

       <a href="/login"><UserImg
          src="https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/feature/profile/13.png"
          onClick={handleToggleMenu}
        /></a> 
      </Nav>
      <Menu>
      <a href="/">
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </a>
        <a href="/search">
          <i className="fa-solid fa-search"></i>
          <span>Search</span>
        </a>
        <a href="/tv">
            <i class="fa-solid fa-tv "  ></i><span>TV</span>
            </a>
            <a href="/detail">
            <i class="fa-solid fa-film "  ></i><span>Movies</span>
            </a>
            <a href="/wishlist">
            <div className='Icon'><i class="fa-solid fa-plus "  ></i></div><span>WatchList</span>
            </a>
            <a href="/">
            <i class="fa-regular fa-star "  ></i><span>Originals</span>
            </a>
 
      </Menu>
      <NavMenu isOpen={isMenuOpen}>
      
      <a href="/login" className="loginme">
      <i className="fa-solid fa-circle-user"></i>
          <span>Login</span>
        </a>
      <a href="/search">
          <i className="fa-solid fa-search"></i>
          <span>Search</span>
        </a>
        <a href="/">
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </a>
        <a href="/tv">
            <i class="fa-solid fa-tv "  ></i><span>TV</span>
            </a>
            <a href="/detail">
            <i class="fa-solid fa-film "  ></i><span>Movies</span>
            </a>

            <a href="/wishlist">
            <div className='Icon'><i class="fa-solid fa-plus "  ></i></div><span>WatchList</span>
            </a>
            <a href="/">
            <i class="fa-regular fa-star "  ></i><span>Originals</span>
            </a>
 

      </NavMenu>
    </>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #09031b;
  display: flex;
  align-items: center;
  padding: 0 36px;
  justify-content: space-between;
  overflow-x:hidden;
  overflow-y:hidden;
  @media screen and (max-width: 899px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top:10px;

  }
}
.loginme {
  text-decoration:none;
}
`;

const Logo = styled.img`
  width: 80px;
  @media screen and (max-width: 899px) {
    margin-top:-13px;
  }
`;

const NavMenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 899px) {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    font-size: 1.8rem;
    color: #fff;
    margin-top:-43px;
    margin-left: auto;

  }
  
  @media screen and (min-width: 900px) {
    flex-direction: row;
    align-items: center;

  i {
    transition: transform 0.3s ease;
    transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(45deg)' : 'none')};
  }
`;

const UserImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
  @media screen and (max-width: 899px) {

  display:none;
  }
`;

const NavMenu = styled.div`
  color: #fff;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 70px;
  left: 0;
  background: #000;
  width: 100%;
  text-align: center;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 899px) {
    flex-direction: column;
    position: relative;
    top: 0;
    width: 100%;
  
  }
  
  a {
    color: white;
    display: flex;
    align-items: center;
    padding: 12px;
    text-decoration: none;
    width: 100%;
  }

  a:hover {
    font-weight: bold;
    float: right;
  }

  span {
    letter-spacing: 1.42px;
    padding: 12px;
    position: relative;
  }
  .space {
    height:30px;
  }
  @media screen and (min-width: 899px) {
  display:none;
  }
`;

const Menu = styled.div`
.fa-house {
  margin-left:111px;
}
display:flex;
flex-direction:row;
align-items:center;
a {
  color: white;
    display: flex;
    margin-left:25px;
    margin-top:-55px;
    flex-direction:row;
    align-items: center;
    text-decoration: none;
}
a:hover {
  font-weight: bold;
  float: right;
}
span {
  letter-spacing: 1.42px;
  padding: 12px;
  position: relative;
}
@media screen and (max-width:900px) {
  display:none;
  }
`