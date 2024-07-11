import { useContext } from 'react';
import { UserContext } from '../userContext/UserContext';
import styles from './homePage.module.css'

export default function HomePage() {
  const {user, message} = useContext(UserContext)

  return (
    <div>
      <h2>Homepage 🏡</h2>
      {user.firstName && (
        <div className={styles.info}>
          <p>🤖: №{user.firstName}</p>
          <p><span>создатель:</span> {user.lastName}</p>
          <p><span>email:</span> {user.email}</p>
          <p><span>message:</span> {message}</p>
        </div>)}
    </div>
  );
}

