import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';

const Button = styled.button`
  position: relative;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0);
  border: 0px solid red;
  box-shadow: none;
`;

const ThemeSelector = ({ theme, toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>
      {theme === 'light' ? (
        <HiMoon size={20} />
      ) : (
        <CgSun size={20} color={'#FAFAFA'} />
      )}
    </Button>
  );
};

ThemeSelector.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default ThemeSelector;
