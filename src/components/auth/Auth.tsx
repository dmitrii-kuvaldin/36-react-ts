// import styles from './auth.module.css'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useAppDispatch } from '../../app/hooks';
import { loginUser } from '../../features/auth/authAction';
import { getProducts } from '../../features/reduxProducts/reduxProductsAction';
import Button from '../button/Button';
import Input from '../input/Input';
import styles from './auth.module.css';




export interface IFormValues {
  username: string;
  password: string;
}

export interface IUserData {
  id: number;
  username: string;
  gender: string;
  email: string;
  image: string;
  firstName: string;
  lastName: string;
  refreshToken: string;
  token: string;
}

const schema = Yup.object().shape({
  username: Yup
    .string()
    .required('обязательное поле')
    .min(2, 'минимум 2 символа')
    .max(20, 'максимум 20 символов'),
  password: Yup
    .string()
    .required('обязательное поле')
    .min(2, 'минимум 2 символа')
    .max(20, 'максимум 20 символов'),
});


export default function Auth() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: 'emilys',
      password: 'emilyspass'
    } as IFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: async (values: IFormValues, { resetForm }) => {
      dispatch(loginUser(values));
      dispatch(getProducts());
      resetForm();
      navigate('/');
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={styles.container}>
        <Input error={formik.errors.username} name='username' placeholder='username' onChange={formik.handleChange} value={formik.values.username} type="text" />
        <Input error={formik.errors.password} name='password' placeholder='password' onChange={formik.handleChange} value={formik.values.password} type='password' />
        <Button type={'submit'} name='log in' />
      </form>
    </div>
  );
}




