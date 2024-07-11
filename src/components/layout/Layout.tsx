import { useContext } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { UserContext } from '../userContext/UserContext';
import styles from './layout.module.css';
import { links } from './links';

export default function Layout() {
  const { user } = useContext(UserContext);

  const location = useLocation();
  console.log('где это я?', location.pathname);


  return (
    <div className={styles.page}>
      <header className={styles.header}>
        {user.firstName && (
          <div className={styles.credentials}>
            <span>🤖: №{user.firstName}</span>
            <span>создатель: {user.lastName}</span>
            <span>email: {user.email}</span>
          </div>)}

        {links.map((el,index) => (
            <Link key={index} className={location.pathname === el.pathname ? styles.active : ''} to={el.pathname}>{el.title}</Link>
          ))}

      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

