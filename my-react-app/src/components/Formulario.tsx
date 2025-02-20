import React, { useState } from "react";

const Formulario: React.FC = () => {
    const [nombre, setNombre] = useState<string>(""); // Estado tipado

    // Manejar el cambio en el input
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNombre(event.target.value);
    };

    // Manejar el envío del formulario
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`Hola, ${nombre}!`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre: </label>
            <input type="text" value={nombre} onChange={handleChange} />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;