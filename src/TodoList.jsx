import React from "react";
import "./TodoList.css";

function TodoList() {
    return (
        <>
            <h1>Lista de Tarefas</h1>
            <form action="">
                <input type="text" placeholder="Adicione uma tarefa"/>
                <button className="add" type="submit">Add</button>
            </form>

            <div className="listaTarefas">
                <div className="item">
                    <span>Tarefa exemplo</span>
                    <button>Deletar</button>
                </div>

                <div className="item completo">
                    <span>Tarefa exemplo</span>
                    <button>Deletar</button>
                </div>
            </div>
        </>
    )
}

export default TodoList