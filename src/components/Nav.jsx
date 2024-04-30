const Nav = () => {
  return (
    <nav className="container">
          <div className="logo">
            <img src="./images/brand_logo.png" alt="logo" />
          </div>

          <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">about</li>
            <li href="#">contact</li>
          </ul>

          <a href="" className="mini-cart-icon">
            <img src="./icon-cart.svg" alt="cart-icon" />
            <span className="pro-count">2</span>
          </a>
        </nav>
  )
}

export default Nav;
