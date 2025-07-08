import styled, { css } from "styled-components";

const vertical = css`
    flex-direction: column;
    gap: 1.6rem;
`


const Row = styled.div`
    display: flex;

    ${props => props.type === 'horizontal' 
        ? 
            css`
                justify-content: space-between;
                align-items: center;
            `
        :
            vertical
    }

    /* ${props => props.type === 'vertical' && 
        css`
            flex-direction: column;
            gap: 1.6rem;
        `    
    } */
`

export default Row