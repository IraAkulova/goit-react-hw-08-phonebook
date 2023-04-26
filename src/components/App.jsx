import { Routes, Route } from 'react-router-dom';
import SharedLayout from './sharedLayout/Sharedlayout';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import RegisterView from 'pages/RegisterView';
import LoginView from 'pages/LoginView';
import NotFound from 'pages/NotFound';

export const App = () => {
    return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
          {/* <Route path="logout" element={<LogoutView />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
  }
