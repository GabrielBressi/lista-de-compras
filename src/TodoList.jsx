import { useState, useEffect } from "react";
import "./TodoList.css";

import Icon from './assets/icon.webp'


function TodoList() {
    const storageList = localStorage.getItem('List');

    const [list, setList] = useState(storageList ? JSON.parse(storageList) : []);
    const [newItem, setNewItem] = useState("");

    useEffect(() => {
        localStorage.setItem('List', JSON.stringify(list));
    }, [list])

    function addItem(form) {
        form.preventDefault();
        if(!newItem) {
            return;
        }
        setList([...list, {text: newItem, isCompleted: false}]);
        setNewItem("");
        document.getElementById('input-shopping').focus();
    }

    function completeShopping(index) {
        const auxList = [...list];
        auxList[index].isCompleted = !auxList[index].isCompleted

        setList(auxList);
    }

    function deleteShopping(index) {
        const auxList = [...list];
        auxList.splice(index, 1);
        setList(auxList);
    }

    function deleteAll() {
        setList([]);
    }

    return (
        <>
            <h1>Lista de Compras</h1>
            <form onSubmit={addItem}>
                <input 
                id="input-shopping"
                type="text" 
                value={newItem}
                onChange={(e) => {setNewItem(e.target.value)}}
                placeholder="Adicione um item"/>
                <button className="add" type="submit">Add</button>
            </form>

            <div className="listaCompras">
                <div style={{ textAlign: 'center' }}>
                {
                    list.length < 1 
                    ?
                    <img className="icon" src={Icon} alt="" />
                    :
                    list.map((item, index) => (
                        <div 
                        key={index}
                        className={item.isCompleted ? "item completo" : "item"}
                        >
                            <span onClick={() => {
                                completeShopping(index)
                            }}>{item.text}</span>
                            <button 
                            onClick={() => {
                                deleteShopping(index)
                            }}
                            className="del">Deletar</button>
                        </div>
                    ))
                }
                {
                    list.length > 0 && 
                    <button
                    onClick={() => {
                        deleteAll()
                    }}
                    className="deleteAll">Deletar todas</button>               
                }

                </div>  	
            </div>
        </>
    )
}

export default TodoList