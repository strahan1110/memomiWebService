import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistroNForm = () => {
    const [nameH, setNameM] = useState('');
    const [nameM, setNameH] = useState('');
    const [dni, setDNI] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [planA, setPlanA] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Nombre de Novio:', nameH);
        console.log('Nombre de Novia:', nameM);
        console.log('DNI:', dni);
        console.log('Email:', mail);
        console.log('Contraseña:', password);
        console.log('Plan Asignado:', planA);
        setNameM('');
        setNameH('');
        setDNI('');
        setMail('');
        setPassword('');
        setPlanA('');
    };

    return (
        <div className="flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">

            <p className='color-marron'>¿Listos para guardar memorias?</p>
                <h2 className="text-2xl font-bold text-center mb-1">Iniciar Sesión</h2>
                <form  onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="mail" className="block text-sm font-medium text-gray-700">Nombre de Novio:</label>
                        <input
                            type="text"
                            id="nameH"
                            value={nameH}
                            onChange={(e) => setNameH(e.target.value)}
                            required
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-red-200"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="mail" className="block text-sm font-medium text-gray-700">Nombre de Novia:</label>
                        <input
                            type="text"
                            id="nameM"
                            value={nameH}
                            onChange={(e) => setNameM(e.target.value)}
                            required
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-red-200"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-red-200"
                        />
                    </div>
                    <button type="submit" className="w-full py-2 px-4 bg-yellow-400 text-white rounded-md hover:bg-red-200">Iniciar Sesión</button>
                </form>
                <div className="mt-4 text-center">
                    <Link to="/registro" className="color-marron hover:underline">¿No tienes cuenta? Regístrate aquí</Link>
                </div>
            </div>
        </div>
    );
};

export default RegistroNForm;
