import Button from "../Button";
import styled from "styled-components"
import React, { useState } from "react";
import { ITarefa } from "../../types/task";
import {v4 as uuidv4} from "uuid";

const StyledForm = styled.div`
    .novaTarefa {
        display:block;
        /* flex-direction: column; */
        grid-area: nova-tarefa;
        background-color: #7687A1;
        border-radius: 10px;
        box-shadow: 2px 4px 4px #0000009F;
        padding: 12px;

        .inputContainer {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-bottom: 16px;

            label {
                margin-bottom: 8px;
                font-size: 1.25rem;
            }

            input {
                width: 100%;
                padding: 8px 12px 4px;
                box-sizing: border-box;
                border: unset;
                border-radius: 5px;
                background-color: #5D677C;
                box-shadow: 0px 2px 4px #2D2B2B9F inset;
                
                &::placeholder {
                color: #BFBFBF;
                }
            }
        }

        @media screen and (min-width: 1280px) {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            font-size: 2.25rem;
            padding: 24px;
            box-sizing: border-box;

            .inputContainer {
                /* width: calc(60% - 12px); */

                &:last-of-type {
                width: 40%;
                }

                label {
                font-size: 2rem;
                }

                input {
                height: 100%;
                font-size: 1.75rem;
                }
            }
        }
    }
`;


export default function Form({setTasks}: {setTasks: React.Dispatch<React.SetStateAction<ITarefa[]>>}) {
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("00:00:00");

    function addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const task = { title, time }
        setTasks(oldTasks => 
            [
                ...oldTasks, 
                {
                    ...task,
                    selected: false,
                    finished: false,
                    id: uuidv4()
                }
            ]
        );
        setTitle("");
        setTime("00:00")
    }

    return(
        <StyledForm>
            <form className="novaTarefa" action="" onSubmit={addTask}>
                <div className="inputContainer">
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="O que você quer estudar"
                        required 
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                        type="time" 
                        step="1"
                        name="tempo"
                        id="tempo"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button type="submit">
                    Adicionar
                </Button>
            </form>
        </StyledForm>
    );
}