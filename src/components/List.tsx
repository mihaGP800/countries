import React, {ReactNode} from 'react';
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  padding: 2rem 0;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  
  @media (min-width: 767px){
    padding: 2.5rem 0;

    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
   
  @media (min-width: 1024px){
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
  
`

type ListType = {
    children: ReactNode
}

export const List: React.FC<ListType> = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}