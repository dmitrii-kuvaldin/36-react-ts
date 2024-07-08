import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './layout.module.css'

export default function Layout() {

  const location = useLocation()
  console.log('где это я?', location.pathname);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link className={location.pathname === '/' ? styles.active : ''} to={'/'}>home</Link>
        <Link className={location.pathname === '/login-form' ? styles.active : ''}  to={'/login-form'}>login form</Link>
        <Link className={location.pathname === '/brotherhood' ? styles.active : ''} to={'/brotherhood'}>brotherhood</Link>
        <Link className={location.pathname === '/brotherhood' ? styles.active : ''} to={'/employee-form'}>employee form</Link>
        <Link className={location.pathname === '/shop-page' ? styles.active : ''} to={'/shop-page'}>shop page</Link>
      </header>
      <main className={styles.main}>
        <Outlet/>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

