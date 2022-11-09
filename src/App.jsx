import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { refreshUserThunk } from 'redux/auth/thunks.auth';
import { selectIsAuth, selectIsFetched } from 'redux/auth/selectors.auth';

import { ToastContainer } from 'react-toastify';
import Header from 'components/Header';
import { Loader } from 'components/Loader/Loader';
const Registration = lazy(() => import('pages/Registration'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const isFetched = useSelector(selectIsFetched);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <>
      {!isFetched && (
        <>
          <Header />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route
                path="register"
                element={
                  !isAuth ? <Registration /> : <Navigate to="/contacts" />
                }
              />
              <Route
                path="login"
                element={!isAuth ? <Login /> : <Navigate to="/contacts" />}
              />

              <Route
                path="contacts"
                element={isAuth ? <Contacts /> : <Navigate to="/login" />}
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </>
      )}
      <ToastContainer />
    </>
  );
};
