import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { MdContactPhone } from 'react-icons/md';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  const getClassName = ({ isActive }) => {
    return isActive ? `${css.link} ${css.active}` : `${css.link}`;
  };

  return (
    <nav>
      <div className={css.navLogo}>
        <MdContactPhone className={css.navLogoIcon} />
        <h4 className={css.navLogoName}>PHONEBOOK</h4>
      </div>

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
