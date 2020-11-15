import React from 'react'
import { useForm } from 'react-hook-form'

const EditUserForm = ({ currentUser, updateUser}) => {

    const { register, errors, handleSubmit, setValue } = useForm({
        defaultValues: currentUser
    })

    setValue('name', currentUser.name);
    setValue('username', currentUser.username);

    const onSubmit = (data, e) => {
        console.log(data);
        data.id = currentUser.id
        updateUser(currentUser.id, data)
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

            <button>Edit User</button>
        </form>
    )
}

export default EditUserForm
