import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const submitHandler = e => {
    e.preventDefault();
    console.log("Submitted");
    navigate(`/searched/${input}`);
  }
  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch/>
        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
  margin: 0 20rem;
  div {
    width: 100%;
    position: relative;
  }
  input {
    border: none;
    background-image: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    width: 100%;
    color: #fff;
    padding: 1rem 3rem;
    border-radius: 1rem;
  }
  svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(100%, -50%);
    color: #fff;
  }
`;

export default Search;