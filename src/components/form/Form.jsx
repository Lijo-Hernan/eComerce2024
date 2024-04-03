import React from 'react';
import { useForm, useFormContext } from "react-hook-form";
import classes from "./form.module.css";


const Form = ({onSubmit}) => {

    const { register, handleSubmit } = useFormContext();

    onSubmit = (data) => {
        console.log("Formulario enviado:", data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <article className={classes.form__data}>
                    <label htmlFor="nombre">Nombre:{" "}
                        <input type="text" id="nombre" required placeholder="Ingrese su Nombre" {...register("nombre")}/>
                    </label>
                    <label htmlFor="apellido">Apellido:{" "}
                        <input type="text" id="apellido" required placeholder="Ingrese su Apellido" {...register("apellido")} />
                    </label>
                    <label htmlFor="email" className={classes.form__email}> email:{" "}
                        <input type="email" id="email" required placeholder="Ingrese su e-mail" {...register("email")} />
                    </label>
                </article>
                <article className={classes.form__btn}>
                    <button type="submit" className="btn btn-success btn-lg" >Generar orden de compra</button>
                </article>
            </form>
        </div>
    );
};

export default Form;