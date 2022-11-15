import styled from "styled-components"

const SyledClock = styled.div`
    .relogioNumero {
        background-color: #5D677C;
        box-shadow: 2px 2px 4px #2B2B2B inset;
        height: 5.6rem;
        width: 3rem;
        padding: 8px 4px;
        border-radius: 10px;

        @media screen and (min-width:1280px) {
            height: 8.8rem;
            width: 9rem;
            font-size: 12.8rem;
            padding: 10px 20px;
        }
    }

    .relogioDivisao {
        height: 4.2rem;

        @media screen and (min-width:1280px) {
            height: 12.6rem;
        }
    }
`;

interface Props {
    time: number | undefined;
}

export default function Clock({time = 0}: Props) {
    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    const [decMinutes, unMinutes] = String(minutes).padStart(2,"0");
    const [decSeconds, unSeconds] = String(seconds).padStart(2,"0");

    return(
        <SyledClock>
            <span className="relogioNumero">{decMinutes}</span>
            <span className="relogioNumero">{unMinutes}</span>
            <span className="relogioDivisao">:</span>
            <span className="relogioNumero">{decSeconds}</span>
            <span className="relogioNumero">{unSeconds}</span>
        </SyledClock>
    );
}