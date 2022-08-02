import React, {useEffect, useState} from 'react';
import {Search} from './Search';
import {CustomSelect} from './CustomSelect';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const options = [
    {value: 'Africa', label: 'Africa'},
    {value: 'Americas', label: 'Americas'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
]

type ControlsType = {
    searchHandle: (search: string, region: string) => void
}

export const Controls: React.FC<ControlsType> = ({searchHandle}) => {
    const [search, setSearch] = useState('')
    const [region, setRegion] = useState<{ value: string, label: string } | null>(null)

    useEffect(() => {
        searchHandle(search, region ? region.value : '')
    }, [search, region])

    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch}/>
            <CustomSelect options={options}
                          placeholder='Filter by Region'
                          isClearable
                          isSearchable={false}
                          value={region}
                // @ts-ignore
                          onChange={setRegion}
            />
        </Wrapper>
    );
}