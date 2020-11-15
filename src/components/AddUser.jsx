import React from 'react'
import { useForm } from 'react-hook-form'

const AddUser = ({addUser}) => {

    const { register, errors, handleSubmit } = useForm()

    const onSubmit = (data, e) => {
        console.log(data);
        addUser(data)
        e.target.reset()
    }

    const validate = () => (
        register({
            required: { value: true, message: 'Campo requerido' }
        })
    )

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" ref={validate()} />
            <span> {errors?.name?.message}</span>

            <label>Username</label>
            <input type="text" name="username" ref={validate()} />
            <span> {errors?.username?.message}</span>
            <hr />

            <button>Add new user</button>
        </form>
    )
}

export default AddUser
