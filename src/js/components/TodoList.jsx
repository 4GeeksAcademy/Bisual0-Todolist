import React, { useEffect, useState } from "react";

const TodoList = () => {

    const [tareas, setTareas] = useState([])

    const [nuevaTarea, setNuevaTarea] = useState("")

    const [hover, SetHover] = useState(false)

    const [visibleX, SetVisibleX] = useState()

    const escucharTeclado = (e) => {

        if (e.key === "Enter" && nuevaTarea.trim() !== "") {

            setTareas([...tareas, nuevaTarea]);
            setNuevaTarea("");
        }
    }

    const eliminarTarea = (indexAEliminar) => {

        const tareasFiltradas = tareas.filter((_, index) => index !== indexAEliminar)

        setTareas(tareasFiltradas)
    };

    return (
        <div className="container-fluid d-flex flex-column align-items-center">
            <div className="row m-auto mt-5">
                <h1 style={{ fontWeight: "200", color: "rgb(184, 144, 165)", fontSize: "85px" }}>todos</h1>
            </div>
            <div className="container-box border w-50 shadow rounded">
                <input
                    className="form-control form-control-lg border-0 rounded-0 bg-white fs-3 px-4 py-3"
                    type="text"
                    placeholder="Agrega una tarea..."
                    style={{ borderBottom: "1px solid #ededed", fontWeight: "200" }}
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                    onKeyDown={(escucharTeclado)}
                />
                {tareas.map((tarea, index) => (
                    <div
                        className="border-bottom border-top fs-3 px-4 d-flex w-100 align-items-center justify-content-between"
                        style={{ borderBottom: "1px solid #ededed", fontWeight: "200" }}
                        onMouseEnter={() => SetVisibleX(index)}
                        onMouseLeave={() => SetVisibleX("")}>
                        <p className="mt-2">{tarea}</p>

                        {visibleX === index ? (<div className={hover ? "text-danger" : "text-secondary"}
                            onMouseEnter={() => SetHover(true)}
                            onMouseLeave={() => SetHover(false)}
                            style={{ cursor: "pointer" }}
                            onClick={() => eliminarTarea(index)}>
                            X
                        </div>) : (<div></div>)}
                    </div>
                ))}
                <div className="d-flex px-4 w-100" style={{ borderTop: "1px solid #ededed" }}>
                    <p className=""
                        style={{ fontWeight: "200", fontSize: "15px" }}
                    >{tareas.length === 0 ? "No hay tareas, crea una..." : `Tareas: ${tareas.length}`}</p>
                </div>

            </div>
        </div>
    )
}

export default TodoList