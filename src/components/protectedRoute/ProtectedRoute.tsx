import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';

interface IProps {
  component: JSX.Element;
}

export default function ProtectedRoute({ component }: IProps) {
  const { user } = useAppSelector(store => store.user);

  if (user.username) {
    return component;
  }
  return (<Navigate to="../login" />);
}

