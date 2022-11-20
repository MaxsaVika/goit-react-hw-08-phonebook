import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.loginBox}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className={css.userBox}>
          <input type="text" name="name" required />
          <label>Username</label>
        </div>
        <div className={css.userBox}>
          <input type="email" name="email" required />
          <label>Email</label>
        </div>
        <div className={css.userBox}>
          <input type="password" name="password" required />
          <label>Password</label>
        </div>
        <button className={css.userBoxBtn} type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Register
        </button>
      </form>
    </div>
  );
};

/* <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form> */
