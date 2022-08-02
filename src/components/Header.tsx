import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {IoMoon, IoMoonOutline} from "react-icons/io5";
import {Container} from './Container';
import {Link} from 'react-router-dom';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

const Title = styled(Link).attrs({
    to: '/'
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bolt);
  text-decoration: none;
`

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bolt);
  text-transform: capitalize;
  cursor: pointer;

`

export const Header = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === 'light'
                            ? <IoMoon size='14px'/>
                            : <IoMoonOutline size='14px'/>}
                        <span style={{marginLeft: '0.75rem'}}>{theme} theme</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
}