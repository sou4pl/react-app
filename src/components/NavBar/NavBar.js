import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Container>
        <div className={styles.flexWrapper}>
          <a className={styles.icon} href="\"><span className="fa fa-tasks" /></a>
          <ul className={styles.menu}>
            <li><a className={styles.link} href="/">Home</a></li>
            <li><a className={styles.link} href="/favorite">Favorite</a></li>
            <li><a className={styles.link} href="/about">About</a></li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;