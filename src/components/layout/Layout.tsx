import { Outlet } from 'react-router-dom';
import styles from './layout.module.css';
import Header from '../header/Header';

export default function Layout() {

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

