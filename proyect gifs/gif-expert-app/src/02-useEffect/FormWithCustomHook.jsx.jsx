import { useEffect} from "react"
import {useForm} from '../hooks/useForm'


export const FormWithCustomHook =()=>{

    const {formState, onResetForm, onInputChange}=useForm({
        username:'',
        email:'',
        password:''
    });

    const {username, email, password}= formState

    return(
        <>
            <h1>Formulario con Custom Hook</h1>
            <hr/>

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control "
                placeholder="email"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control "
                placeholder="password"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm}  className="btn">Borrar</button>
        </>
    )
}