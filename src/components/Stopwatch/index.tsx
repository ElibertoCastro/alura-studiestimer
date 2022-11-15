import Button from "../Button";
import Clock from "./Clock";
import styled from "styled-components"
import { timeToSeconds } from "../../common/utils/time";
import { ITarefa } from "../../types/task";
import { useEffect, useState } from "react";

const StyledStopwatch = styled.div`
    .cronometro {
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-area: cronometro;

        .relogioWrapper {
            align-items: center;
            background-color: #7687A1;
            border-radius: 10px;
            box-shadow: 2px 4px 4px #0000009F;
            box-sizing: border-box;
            display: flex;
            font-size: 5rem;
            justify-content: center;
            margin-bottom: 24px;
            padding: 16px 12px;
            width: 100%;
        }

        .titulo {
            font-size: 2rem;
        }

        button {
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
            cursor: auto;
            }
        }

        @media screen and (min-width:1280px) {
            
            .relogioWrapper{
                font-size: 10rem;
                padding: 30px;
            }

            p {
                font-size: 2rem;
                margin-bottom: 16px;
            }

            button {
                grid-column-start: span 2;
                justify-self: center;
                width: 200px;
                font-size: 2.25rem;
            }
        }
    }
`;

interface Props {
    selected: ITarefa | undefined;
    finishTask: () => void;
}

export default function Stopwatch({selected, finishTask}: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selected?.time) {
            setTime(timeToSeconds(selected.time))
        }
    }, [selected]);
    
    function regressive(count: number = 0) {
        setTimeout(()=>{
            if(count > 0) {
                setTime(count - 1)
                return regressive(count - 1);
            }
            finishTask();
        },1000);
    }

    return(
        <StyledStopwatch>
            <div className="cronometro">
                <p className="titulo">Escolha um card e inicie o cronômetro</p>
                <div className="relogioWrapper">
                    <Clock time={time} />
                </div>
                <Button onClick={() => regressive(time)} >Começar</Button>
            </div>
        </StyledStopwatch>
    );
}

