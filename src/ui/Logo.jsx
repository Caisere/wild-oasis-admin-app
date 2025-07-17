import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogoLink = styled(NavLink)`
    text-align: center;
`;

const Img = styled.img`
    height: 9.6rem;
    width: auto;
`;

function Logo() {
    const {isDarkMode} = useDarkMode()

    const src = isDarkMode ? '/logo-dark.png' : "/logo-light.png"

    return (
        <StyledLogoLink to='/dashboard'>
            <Img src={src} alt="Logo" />
        </StyledLogoLink>
    );
}

export default Logo;
