import {useForm} from "react-hook-form";
import './contacto.css';

const Contacto = () => {

    const { register, handleSubmit } = useForm();

        const enviar = (data) => {
            console.log(data);
        }


    return (
        <div className="container-contacto">
            <h1 className='main-title-contacto'>Contacto</h1>
            <form className='formulario' onSubmit={handleSubmit(enviar)}>

                <input type="text" placeholder='Ingresá tu nombre' {...register("nombre")} />
                <input type="email" placeholder='Ingresá tu e-mail' {...register("email")} />
                <input type="phone" placeholder='Ingresá tu teléfono' {...register("telefono")} />

                <button className='enviar' type='submit'>Enviar</button>

            </form>

        </div>
        
        
    )
}

export default Contacto