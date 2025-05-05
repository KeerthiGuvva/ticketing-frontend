import React from 'react';
import styles from '../styles/Sidebar.css';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Dashboard</NavLink>
      <NavLink to="/tickets" className={({ isActive }) => isActive ? styles.active : ''}>Tickets</NavLink>
      <NavLink to="/teams" className={({ isActive }) => isActive ? styles.active : ''}>Teams</NavLink>
      <NavLink to="/analytics" className={({ isActive }) => isActive ? styles.active : ''}>Analytics</NavLink>
    </aside>
  );
}

export default Sidebar;
