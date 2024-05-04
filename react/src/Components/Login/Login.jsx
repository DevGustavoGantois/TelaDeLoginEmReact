import {FaUser, FaLock} from 'react-icons/fa';

import { useState } from 'react';


import "./Login.css";

const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        //Mostarndo o envio do formulário de forma ativa, aí para chegar no e-mail, precisaria de um backEnd...
        //Podemos utilizar um fetch API ou um axios para a utilização de APIs assyncs
        alert("Enviando os dados do(a) " + userName + "-" + password)
    }
  return (
    <div className="container">
     <form onSubmit={handleSubmit}>
        <h1>Acesse o Sistema</h1>
        <div className="input-field">
        <input type="text" placeholder="e-mail"  
        onChange={(e) => setUserName(e.target.value)} required />
         <FaUser className='icon' />
        </div>
        <div className="input-field">
        <input type="password" placeholder="Senha" 
        onChange={(e) => setPassword(e.target.value)} required />
        <FaLock className='icon' />
        </div>

        <div className="recall-forget">
            <label htmlFor="">
                <input type="checkbox" />
                Lembre de mim
            </label>
            <a href="#">Esqueceu a senha?</a>
        </div>
        <button>Entrar</button>

        <div className="signup-link">
            <p>
                Não tem uma conta? <a href="#">Registrar</a>
            </p>
        </div>
    </form> 
    </div>
  )
}

export default Login
