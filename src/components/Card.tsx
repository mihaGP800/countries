import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: var(--colors-bg);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;

`

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);

`

const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`

const CardTitle = styled.h3`
  font-size: var(--fs-md);
  font-weight: var(--fw-bolt);
`

const CardList = styled.ul`
  list-style: none;
  padding: 1rem 0 0;
`

const CardListItem = styled.li`
  font-size: var(--fs-md);
  font-weight: var(--fw-light);
  line-height: 1.5;

  & > b {
    font-weight: var(--fw-bolt);
  }

`

type CardItemType = {
    title: string
    description: number | string
}

type CardType = {
    name: string
    img: string
    info: CardItemType[]
    onClick: () => void
}

export const Card: React.FC<CardType> = ({name, img, info = [], onClick}) => {
    return (
        <Wrapper onClick={onClick}>
            <CardImage src={img} alt='name'/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    {info.map(el => <CardListItem key={el.title}>
                        <b>{el.title}:</b> {el.description}
                    </CardListItem>)}
                </CardList>
            </CardBody>
        </Wrapper>
    );
}