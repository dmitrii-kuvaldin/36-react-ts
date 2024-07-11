import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import EmployeeForm from './components/employeeForm/EmployeeForm';
import FakeStore from './components/FakeStore/FakeStore';
import HomePage from './components/homePage/HomePage';
import Layout from './components/layout/Layout';
import MyForm from './components/myForm/MyForm';
import Product from './components/product/Product';
import TestParams from './components/testParams/TestParams';
import { UserProvider } from './components/userContext/UserContext';
import BrotherHood from './homeworks/homework_08/brotherhood/BrotherHood';
import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <UserProvider>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<HomePage />} />
          <Route path='/login-form' element={<MyForm />} />
          <Route path='/brotherhood' element={<BrotherHood />} />
          <Route path='/employee-form' element={<EmployeeForm />} />
          <Route path='/shop-page' element={<FakeStore />} />
          <Route path='/shop-page/:id' element={<Product />} />
          <Route path='/:name/:lastname' element={<TestParams />} />
          <Route path='*' element={<h1>Error 404 😵</h1>} />
        </Route>
      </Routes>
    </HashRouter>
  </UserProvider>
);


