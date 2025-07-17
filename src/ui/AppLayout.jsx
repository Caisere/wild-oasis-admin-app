import React from 'react'
import { Outlet } from 'react-router-dom'

// import Heading from './Heading'
import Sidebar from './Sidebar'
import Header from './Header'
import styled from 'styled-components'

const StyledAppLayOut = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: 26rem 1fr;
    grid-auto-rows: auto 1fr;
` 


const Main = styled.main`
    background-color: var(--color-grey-50);
    padding: 4rem 4.6rem 6.4rem;
    /* overflow: scroll; */
    /* height: 100vh; */
`


const Container = styled.div`
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`

const AppLayout = () => {
    return (
        <StyledAppLayOut> 
            <Header />
            <Sidebar />
            <Main>
                <Container>
                    <Outlet />
                </Container>
            </Main>
        </StyledAppLayOut>
    )
}

export default AppLayout