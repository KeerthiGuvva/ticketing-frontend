import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>SupportDesk</div>
      <ul className={styles.navLinks}>
        <li><NavLink to="/">Dashboard</NavLink></li>
        <li><NavLink to="/tickets">Tickets</NavLink></li>
        <li><NavLink to="/teams">Teams</NavLink></li>
        <li><NavLink to="/chat">Chat</NavLink></li>
        <li><NavLink to="/analytics">Analytics</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
      </ul>
    </nav>
  )
}
