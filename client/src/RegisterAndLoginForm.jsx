import { useState ,useContext } from "react"
import axios from "axios"
import { UserContext } from "./UserContext";
export default function RegisterAndLoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setUsername:setLoggedInUsername,setId} = useContext(UserContext);
    const [isLoginOrRegister, setisLoginOrRegister] = useState('login')
    async function handleSubmit(ev) {
        ev.preventDefault();
        const url = isLoginOrRegister === 'register' ? 'register' : 'login';
        const {data} = await axios.post(url,{username,password});
        console.log(data);
        setLoggedInUsername(username)
        setId(data.id);
    }
    return (
        <div className="bg-blue-50 h-screen flex items-center">
            <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
                <input value={username} 
                    onChange={ev => setUsername(ev.target.value)} 
                    type="text" placeholder="帳號" className="block w-full rounded-sm p-2 mb-2 border"/>
                <input value={password} 
                    onChange={ev => setPassword(ev.target.value)}
                    type="text" placeholder="密碼" className="block w-full rounded-sm p-2 mb-2 border"/>
                <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
                    {isLoginOrRegister === 'register' ? '註冊' : '登入'}
                </button>
                <div className="text-center mt-2">
                    {isLoginOrRegister === 'register' && (
                        <div>
                            已經有帳號?
                            <button className="ml-1" onClick={() => setisLoginOrRegister('login')}>
                                登入
                            </button>
                        </div>
                    )}
                    {isLoginOrRegister === 'login' && (
                        <div>
                            還沒有帳號?
                            <button className="ml-1" onClick={() => setisLoginOrRegister('register')}>
                                註冊
                            </button>
                        </div>
                    )}
                </div>
            </form>
        </div>
    )
}