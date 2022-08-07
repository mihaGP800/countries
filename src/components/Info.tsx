import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {countriesAPI, CountryItem} from '../api/coutriesApi';
import {useNavigate} from 'react-router-dom';

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;

  }
`

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`


const InfoTitle = styled.h1`
  font-weight: var(--fw-normal);
`

const ListBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;

  }
`

const List = styled.ul`
  list-style: none;
`

const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    margin-right: .5rem;
    font-weight: var(--fw-bolt);
    text-transform: capitalize;
  }
`

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  & > b {
    margin-right: .5rem;
    font-weight: var(--fw-bolt);
    text-transform: capitalize;
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.8;
  cursor: pointer;

`


type InfoType = {
    country: CountryItem
    push?: any
}

const Info: React.FC<InfoType> = ({country, push}) => {
    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain,
        currencies = [],
        languages = [],
        borders = [],
    } = country

    const [neighbors, setNeighbors] = useState<string[]>([])

    const navigate = useNavigate()

    useEffect(() => {
       if (borders.length) countriesAPI.getCountriesByCodes(borders)
            .then(data => setNeighbors(data.map(c => c.name)))
    }, [borders])

    const goToCountryHandle = (countryName: string) => {
        navigate(`/country/${countryName}`)
    }

    return (
        <Wrapper>
            <InfoImage src={flag} alt={name}/>
            <div>
                <InfoTitle>{name}</InfoTitle>
                <ListBlock>
                    <List>
                        <ListItem><b>native name:</b>{nativeName}</ListItem>
                        <ListItem><b>population:</b>{population}</ListItem>
                        <ListItem><b>region:</b>{region}</ListItem>
                        <ListItem><b>sub region:</b>{subregion}</ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <b>top level domain:</b>{topLevelDomain.map(d => <span
                            key={d}>{d}</span>)}
                        </ListItem>

                        <ListItem>
                            <b>currency:</b>{currencies.map(c => <span
                            key={c.code}>{c.name} </span>)}
                        </ListItem>

                        <ListItem>
                            <b>languages:</b>{languages.map(l => <span
                            key={l.name}>{l.name} </span>)}
                        </ListItem>

                    </List>
                </ListBlock>
                <Meta>
                    <b>border countries</b>
                    {!borders.length ? (
                        <span>There is no borders countries</span>
                    ) : (
                        <TagGroup>
                            {neighbors.map(b =>
                                <Tag key={b}
                                     onClick={() => goToCountryHandle(b)}>{b}</Tag>)}
                        </TagGroup>
                    )}
                </Meta>

            </div>
        </Wrapper>
    );
};

export default Info;