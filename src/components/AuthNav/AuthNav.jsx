import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  const getClassName = ({ isActive }) => {
    return isActive ? `${css.link} ${css.active}` : `${css.link}`;
  };

  return (
    <div>
      <NavLink className={getClassName} to="/register">
        Register
      </NavLink>
      <NavLink className={getClassName} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
