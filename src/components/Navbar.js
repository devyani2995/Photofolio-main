function Navbar() {
  return (
    <nav className="navbar">
       {/* Logo Image */}
      <img src={"https://mellow-seahorse-fc9268.netlify.app/assets/logo.png"} alt="logo" style={{ height: "7vh", width: "4vw" }} />
      {/* Navbar Title */}
      <span style={{color: "#CECFD3",fontWeight:"900",marginLeft:"1rem"}}>PhotoFolio</span>
    </nav>
  );
}

export default Navbar;
