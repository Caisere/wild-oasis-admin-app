import React from 'react'
import ButtonIcon from '../../ui/ButtonIcon'
import { HiArrowRightOnRectangle } from 'react-icons/hi2'
import { useLogout } from './useLogout'
import SpinnerMini from '../../ui/SpinnerMini'
import styled from 'styled-components'

const Span = styled.span`
    display: flex;
    align-items: center;
    gap: 5px;
`


const Logout = () => {
    const {logout, isLoggingOut} = useLogout()

    return (
        <ButtonIcon disabled={isLoggingOut} onClick={logout}>
            {isLoggingOut ? <SpinnerMini/> : <Span> <HiArrowRightOnRectangle /> Logout</Span> }
        </ButtonIcon>
    )
}

export default Logout