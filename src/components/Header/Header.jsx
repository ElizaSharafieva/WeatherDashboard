import SearchForm from '../SearchForm/SearchForm';
import Button from '../Button/Button';
import ThemeCheckbox from '../ThemeCheckbox/ThemeCheckbox';
import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <ThemeCheckbox />
      <SearchForm />
      <Button />
    </header>
  );
}

export default Header;