import {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const RecipePage = () => {
  const {id} = useParams();
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTap] = useState("instructions");
  useEffect(() => {
    fetchDetails(id);
  }, [id])
  const fetchDetails = async (id) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const recipe = await data.json();
    setRecipe(recipe);
  };
  return (
    <DetailWrapper animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} transition={{duration: 0.5}}>
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTap('instructions')}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTap('ingredients')}>Ingredients</Button>
        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{__html: recipe.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{__html: recipe.instructions}}></h3>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {recipe.extendedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled(motion.div)`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background-image: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background-color: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`;
const Info = styled.div`
  margin-left: 10rem;
`;

export default RecipePage;