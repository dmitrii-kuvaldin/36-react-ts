import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../button/Button';
import Input from '../input/Input';
import styles from './employeeForm.module.css';

interface IFormValues {
  name: string;
  surname: string;
  age: string;
  position: string;
  agreement: boolean;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Обязательное поле').min(2, 'минимум 2 знакa').max(50, 'максимум 50 знаков'),
  surname: Yup.string().required('Обязательное поле').min(2, 'минимум 2 знакa').max(50, 'максимум 15 знаков'),
  age: Yup.number()
    .required('Обязательное поле')
    .typeError('это должно быть число')
    .min(18, '18+ 🔞')
    .test('check length', 'вряд ли вам больше 1000 лет', (value) => String(value).length <= 3),
  position: Yup.string().required('Обязательное поле').max(30, 'максимум 50 знаков'),
  agreement: Yup.boolean().oneOf([true], 'Примите соглашение')
});


export default function EmployeeForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      age: '',
      position: '',
      agreement: false
    } as IFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: IFormValues) => {
      console.log(values);
    }
  });

  const agreementError = formik.errors.agreement

  return (
    <form onSubmit={formik.handleSubmit} className={styles.container}>
      <Input value={formik.values.name} name='name' onChange={formik.handleChange} placeholder='name' error={formik.errors.name} />
      <Input value={formik.values.surname} name='surname' onChange={formik.handleChange} placeholder='surname' error={formik.errors.surname} />
      <Input value={formik.values.age} name='age' onChange={formik.handleChange} placeholder='age' error={formik.errors.age} />
      <Input value={formik.values.position} name='position' onChange={formik.handleChange} placeholder='position' error={formik.errors.position} />
      <div>
        <label htmlFor="">Я согласен 😅</label>
        <input checked={formik.values.agreement} name='agreement' onChange={formik.handleChange} type="checkbox" id="" />
        <span className={styles.error}>{agreementError && agreementError}</span>
      </div>
      <Button disabled={!formik.values.agreement} name='да' type='submit' />
    </form>
  );
}
