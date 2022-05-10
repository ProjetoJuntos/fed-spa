import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate('/');
            } else {
                alert('usuário e/ou senha inválido!')
            }
        }
    }
    return (
        <div>
            <h2>Login</h2>
            <form>
                <div>
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Digite seu e-mail"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Digite sua senha"
                    />
                </div>
            </form>
            <button onClick={handleLogin}>Acessar</button>
        </div>
    )
}