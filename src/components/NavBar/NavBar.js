import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Container>
        <div className={styles.flexWrapper}>
          <a className={styles.icon} href="\"><span className="fa fa-tasks" /></a>
          <ul className={styles.menu}>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.link}
          to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.link}
          to="/favorite">Favorite</NavLink></li>          
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.link}
          to="/about">About</NavLink></li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;