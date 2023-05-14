import React, { useState } from 'react';

export default function LoginForm() {
  // const [stateCar, setStateCar] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const encenderApagar = () => {
    setStateCar(!stateCar);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === '123456') {
      alert('Usuario autenticado correctamente');
    } else {
      alert('Credenciales inválidas');
    }
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <label>
          usuario:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          clave:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Enviar</button>
      </form>

      {/* <h3>El coche está: {stateCar ? 'encendido' : 'apagado'}</h3>
      <button onClick={encenderApagar}>Encender / Apagar</button>
      <Header titulo="HTML" contenido="Tema para practicar" />
      <Header contenido="En este espacio encontrarás" /> */}
    </div>
  );
} 