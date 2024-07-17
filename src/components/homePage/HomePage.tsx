import { useAppSelector } from '../../app/hooks';


export default function HomePage() {
  const { user } = useAppSelector(store => store.user);

  return (
    <div>
      {user.firstName ?
        <h2>Welcome home 🏡</h2> : <h2>Пройдите авторизацию 🔐</h2>
      }
    </div>
  );
}

