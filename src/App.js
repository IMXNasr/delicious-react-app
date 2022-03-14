import Category from './components/Category';
import Pages from './pages/Pages';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Search from './components/Search';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav>
          <GiKnifeFork/>
          <Logo to="/">delicious</Logo>
        </Nav>
        <Search/>
        <Category/>
        <Pages/>
      </Router>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  color: black;
  font-family: 'Lobster', 'Montserrat', sans-serif;
`;
const Nav = styled.nav`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
