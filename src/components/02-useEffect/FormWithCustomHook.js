import React, {useEffect} from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css'

export const FormWithCustomHook = () => {
    const [formValues, hadleInputChange] = useForm({
        name:'',
        email:'',
        password:''
    });

    const {name, email, password}=formValues;

    useEffect(()=>{
        console.log('Email cambió')
    },[email]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formValues)
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr/>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={hadleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={hadleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="********"
                    value={password}
                    onChange={hadleInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Guardar
            </button>
        </form>
    )
}
