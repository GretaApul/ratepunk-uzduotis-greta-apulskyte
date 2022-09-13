import { Link } from 'react-router-dom';
import scss from './Header.module.scss';
import ContainerDiv from '../../UI/ContainerDiv/ContainerDiv';
import IconAwesome from '../../UI/IconAwesome/IconAwesome';
import Navigation from '../Navigation/Navigation';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
// import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header>
      <ContainerDiv class={scss.wrapper}>
        <Link className={scss.headerLogo} to="/">
          <img className={scss.logo} src="/assets/Group 12.svg" alt="Logo" />
        </Link>
        <Navigation />
        <MobileNavigation />
      </ContainerDiv>
    </header>
  );
}

export default Header;
