import { type } from "os";
import styled from "styled-components"

const StyledButton = styled.div`
    text-align: center;
   .botao {
        align-self: center;
        justify-self: center;
        background-color: #88bcd1;
        border-radius: 10px;
        box-shadow: 2px 4px 4px #0000009F;
        color: #272626;
        cursor: pointer;
        font-size: 1.25rem;
        padding: 16px;
        width: 150px;
        
        &:active {
            background-color: #7CA6B7;
            box-shadow: 2px 2px 4px #0000009F inset;
        }
        }

        @media screen and (min-width: 1280px) {
        .botao {
            grid-column-start: span 2;
            justify-self: center;
            width: 200px;
            font-size: 2.25rem;
        }
    }
`;

interface Props {
    type?: "button" | "submit" | "reset" | undefined;
    children?: React.ReactNode;
    onClick?: () => void; 
}

export default function Button({type, children, onClick}: Props) {
    return (
        <StyledButton>
            <button onClick={onClick} type={type} className="botao">{children}</button>
        </StyledButton>
    );
}