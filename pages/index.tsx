import Form from "../src/components/Form";
import { List } from "../src/components/List";
import { ResetCSS } from "../src/components/ResetCSS";
import styled from "styled-components"
import Stopwatch from "../src/components/Stopwatch";
import { useState } from "react";
import { ITarefa } from "../src/types/task";

const StyledApp = styled.div`
    .AppStyle {
        display: grid;
        /* grid-template-rows: min-content min-content auto; */
        grid-template-areas: 
        "cronometro"
        "nova-tarefa"
        "tarefas"
        ;
        row-gap: 24px;
        min-width: 320px;
        min-height: calc(100vh - 32px);
        width: 100%;
        padding: 32px;
        box-sizing: border-box;
        border-radius: 10px;
        background-color: #171717;

        @media screen and (min-width:1280px)  {
            grid-template-areas: 
            "nova-tarefa tarefas"
            "cronometro tarefas"
            ;
            column-gap: 64px;
            /* grid-template-rows: min-content min-content; */
            grid-template-columns: 750px 300px;
            justify-content: center;
            align-content: center;
            padding: 64px;
        }
    }
`;

export default function Homepage() {
    const [tasks, setTasks] = useState<ITarefa[]>([]);
    const [selected, setSelected] = useState<ITarefa>();

    function selectTask(selectedTask: ITarefa) {
        setSelected(selectedTask);
        setTasks(oldTasks => oldTasks.map(t => ({
            ...t,
            selected: t.id === selectedTask.id ? true : false
        })));
    }

    function finishTask() {
        if(selected) {
            setSelected(undefined);
            setTasks(oldTasks => oldTasks.map(t => {
                if(t.id === selected.id) {
                    return {
                        ...t,
                        selected: false,
                        finished: true
                    }
                }
                return t;
            }))
        }
    }

    return(
        <>
            <ResetCSS />
            <StyledApp>
                <div className="AppStyle">
                    <Form setTasks={setTasks}/>
                    <List tasks={tasks} selectTask={selectTask}/>
                    <Stopwatch selected={selected} finishTask={finishTask}/>
                </div>
            </StyledApp>
        </>
    );
}