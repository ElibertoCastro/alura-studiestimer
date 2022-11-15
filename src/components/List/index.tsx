import { useState } from "react";
import styled from "styled-components";
import { ITarefa } from "../../types/task";
import Item from "./Item";

const StyledList = styled.div`
.listaTarefas {
  grid-area: tarefas;
  height: 100%;

  h2 {
    font-size: 1.25rem;
    margin-bottom: 12px;
  }

  ul {
    max-height: 350px;
    overflow-y: scroll;
  	scrollbar-width: thin;
  }

  @media screen and (min-width:1280px) {
    
    h2{
      text-align: center;
      font-size: 2.25rem;
      margin-bottom: 24px;
    }

    ul {
      overflow: auto;
      max-height: 500px;
    }
  }
}
`;

interface Props {
  tasks: ITarefa[],
  selectTask: (selectedTask: ITarefa) => void
}

export function List({tasks, selectTask}: Props) {
    
    return (
        <StyledList>
            <aside className="listaTarefas">
                <h2>Estudos do dia</h2>
                <ul>
                    {tasks.map((task) => (
                        <Item 
                          key={task.id} 
                          selectTask={selectTask}
                          {...task} 
                        />
                    ))}
                </ul>
            </aside>
        </StyledList>
    );
}