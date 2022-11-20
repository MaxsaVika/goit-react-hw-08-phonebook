import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  const getClassName = ({ isActive }) => {
    return isActive ? `${css.link} ${css.active}` : `${css.link}`;
  };

  return (
    <nav>
      <NavLink className={getClassName} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={getClassName} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
