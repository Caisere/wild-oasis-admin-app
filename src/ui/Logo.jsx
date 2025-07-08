import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogoLink = styled(NavLink)`
    text-align: center;
`;

const Img = styled.img`
    height: 9.6rem;
    width: auto;
`;

function Logo() {
    return (
        <StyledLogoLink to='/dashboard'>
            <Img src="/logo-light.png" alt="Logo" />
        </StyledLogoLink>
    );
}

export default Logo;
