import styled from "styled-components"
import { ITarefa } from "../../../types/task";


const StyledItem = styled.div`
   
.item {
  background-color: #4D4D4D;
  border-radius: 8px;
  box-shadow: 2px 4px 4px #0000009F;
  padding: 12px;
  margin-bottom: 8px;
  position: relative;
  cursor: pointer;

  h3 {
    margin-bottom: 8px;
    word-break: break-all;
  }

  span {
    color: #D0D0D0;
  }

  @media screen and (min-width:1280px) {
    font-size: 1.8rem;
  }
}

.itemSelecionado {
  background-color: #292929;
  box-shadow: 2px 4px 4px #0000009F inset;
}

.itemCompletado {
  background-color: #566F42;
  cursor: auto;

  .concluido {
    display: block;
    background-image: url("https://raw.githubusercontent.com/alura-cursos/alura-studies/Aula6/src/assets/img/check-mark.svg");
    background-repeat: no-repeat;
    background-size: 38px 38px;
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    width: 42px;
    height: 43px;
  }
}
`;

interface Props extends ITarefa {
  selectTask: (selectedTask: ITarefa) => void
}

export default function Item({
    title, 
    time, 
    selected, 
    finished, 
    id,
    selectTask} : Props) {
      return(
          <StyledItem>
              <li 
                className={`item ${selected ? 'itemSelecionado' : ''} ${finished ? 'itemCompletado' : ''}`} 
                onClick={() => !finished && selectTask(
                  {
                    title,
                    time, 
                    selected, 
                    finished, 
                    id
                  })}
              >
                  <h3>{title}</h3>
                  <span>{time}</span>
                  {finished && <span className="concluido" aria-label="tarefa completada"></span>}
              </li>
          </StyledItem>
      );
}