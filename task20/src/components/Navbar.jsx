import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Shoe Store.</h1>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}><a href="#home" style={styles.link}>Home</a></li>
        <li style={styles.navItem}><a href="#categories" style={styles.link}>Categories</a></li>
        <li style={styles.navItem}><a href="#about" style={styles.link}>About Us</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    position: 'fixed', // Keep the navbar fixed at the top
    top: 0, // Align to the top of the page
    left: 0, // Align to the left of the page
    width: '96vw',// Make the navbar span the full width
    height:'4vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    zIndex: 1000, // Ensure the navbar stays on top of other elements
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  navItem: {
    fontSize: '1rem',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: '500',
  },
};

export default Navbar;
