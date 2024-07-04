import ReactDOM from 'react-dom/client';
import EmployeeForm from './components/employeeForm/EmployeeForm';
import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <main>
    {/* <Lesson13 /> */}
    <EmployeeForm />
  </main>
);


