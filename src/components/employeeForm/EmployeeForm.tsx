
import { useFormik } from "formik";
import * as Yup from 'yup';
import Button from '../button/Button';
import Input from '../input/Input';
import styles from './employeeForm.module.css';

interface IEmployeeFormValues {
  name: string,
  surname: string,
  age: string,
  position: string,
  agreement: boolean;
}



const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Обязательное поле')
    .min(2, 'минимум 2 символа')
    .max(50, 'максимум 50 символов'),
  surname: Yup.string()
    .required('Обязательное поле')
    .min(2, 'минимум 2 символа')
    .max(15, 'максимум 15 символов'),
  age: Yup.number()
    .typeError('Это должно быть число')
    .required('Обязательное поле')
    .min(18, 'минимальный возраст18 лет')
    .test('check length', 'не больше 3 символов', (value) => String(value).length <= 3)
  ,
  position: Yup.string().max(30, 'максимум 30 символов').required('Обязательное поле'),
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
    } as IEmployeeFormValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: (values: IEmployeeFormValues, { resetForm }) => {
      console.log(values);
      // resetForm();
    }
  });


  const agreementError = formik.errors.agreement;

  return (
    <>
      <form className={styles.container} onSubmit={formik.handleSubmit}>
        <Input
          error={formik.errors.name}
          name={'name'}
          placeholder={'name'}
          onChange={formik.handleChange}
          value={formik.values.name}
          type={'text'}
          label={'введите имя'} />
        <Input
          error={formik.errors.surname}
          name={'surname'}
          placeholder={'surname'}
          onChange={formik.handleChange}
          value={formik.values.surname}
          type={'text'}
          label={'введите фамилию'} />
        <Input
          error={formik.errors.age}
          name={'age'}
          placeholder={'age'}
          onChange={formik.handleChange}
          value={formik.values.age}
          type={'text'}
          label={'введите возраст'} />
        <Input
          error={formik.errors.position}
          name={'position'}
          placeholder={'position'}
          onChange={formik.handleChange}
          value={formik.values.position}
          type={'text'}
          label={'введите позицию'} />
        <div className={styles.checkboxWrapper}>
          <label htmlFor="agree">I Agree</label>
          <input
            onChange={formik.handleChange}
            checked={formik.values.agreement}
            type="checkbox"
            name='agreement'
            id="agreement" />

          <span className={styles.error}>{agreementError && agreementError}</span>
        </div>


        <Button
          type='submit'
          name='подтвердить ввод'
          disabled={!formik.values.agreement}
        />
      </form>

    </>
  );
}
