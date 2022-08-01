import React, {ChangeEvent} from 'react';
import styled from 'styled-components'
import {IoSearch} from "react-icons/io5";

const InputBox = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    width: 310px;
    margin-bottom: 0;
  }
`

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country...'
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--colors-text);
  background-color: var(--colors-ui-base);

`

type SearchType = {
    search: string
    setSearch: (search: string) => void
}


export const Search: React.FC<SearchType> = ({search, setSearch}) => {
    const searchHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    };
    return (
        <InputBox>
            <IoSearch/>
            <Input value={search} onChange={searchHandle}/>
        </InputBox>
    );
}

