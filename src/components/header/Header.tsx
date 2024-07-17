import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { links } from '../header/links';
import styles from './header.module.css';

export default function Header() {
  const location = useLocation();
  const { user } = useAppSelector(store => store.user);

  return (
    <header className={styles.header}>
      {user.username ? (
          <>
          <div className={styles.credentials}>
            <span>user: {user.firstName}</span>
            <span>lastname: {user.lastName}</span>
            <span>email: {user.email}</span>
          </div>

          {links.map((el, index) => (
            <Link key={index} className={location.pathname === el.pathname ? styles.active : ''} to={el.pathname}>{el.title}</Link>
          ))}
          
          </>
      ) : (
        <Link to='/login'>Login</Link>
      )}
    </header>
  );
}
