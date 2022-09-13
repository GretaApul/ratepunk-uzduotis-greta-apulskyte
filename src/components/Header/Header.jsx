import { Link } from 'react-router-dom';
import scss from './Header.module.scss';
import ContainerDiv from '../../UI/ContainerDiv/ContainerDiv';
import IconAwesome from '../../UI/IconAwesome/IconAwesome';
// import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header>
      <ContainerDiv>
        <Link className={scss.headerLogo} to="/">
          <img className={scss.logo} src="/assets/Group 12.svg" alt="Logo" />
        </Link>
        {/* <Navigation /> */}
        <IconAwesome
          extraStyle={scss.hamburger}
          onClick={() => console.log('you clicked')}
          iconName={'bars'}
        />
      </ContainerDiv>
    </header>
  );
}

export default Header;
