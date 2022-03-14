import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
    getVeggie();
  }, []);
  const getVeggie = async () => {
    const check = localStorage.getItem('veggie');
    if(check){
      setVeggie(JSON.parse(check));
    }else{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
      const data = await api.json();
      localStorage.setItem('veggie', JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  }
  return (
    <div>
      <h1>Vegetarian Picks</h1>
      <Wrapper>
        <Splide options={{perPage: 3, gap: '5rem', arrows: false, pagination: false, drag: 'free'}}>
          {veggie.map((recipe, index) => (
            <SplideSlide key={index}>
              <Card>
                <Link to={`/recipe/${recipe.id}`}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title}/>
                    <Gradient/>
                </Link>
              </Card>
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0;
`;
const Card = styled.div`
  min-height: 25rem;
  overflow: hidden;
  border-radius: 2rem;
  position: relative;
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Gradient = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie;