import PropTypes from 'prop-types';
import axios from 'axios';
import { Form, Field } from 'react-final-form';

const SignupForm = ({ path }) => {
    const onSubmit = (formData) => {
        axios.post(`/api/v1${path}`, formData)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const validate = (values) => {
        const errors = {};
        if (!values.first_name) {
            errors.first_name = 'Required';
        }
        if (!values.last_name) {
            errors.last_name = 'Required';
        }
        if (!values.email) {
            errors.email = 'Required';
        }
        if (!values.type_id) {
            errors.type_id = 'Required';
        }
        if (!values.document_id) {
            errors.document_id = 'Required';
        }
        if (!values.age) {
            errors.age = 'Required';
        }
        if (!values.password) {
            errors.password = 'Required';
        }
        return errors;
    };

    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
                <form className="max-w-screen-lg mx-auto mt-12" onSubmit={handleSubmit}>
                    <div className="relative z-0 w-full mb-5 group">
                        <Field name="first_name">
                            {({ input, meta }) => (
                                <div>
                                    <input
                                        {...input}
                                        type="text"
                                        id="first_name"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="first_name"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >Nombres</label>
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <Field name="last_name">
                            {({ input, meta }) => (
                                <div>
                                    <input
                                        {...input}
                                        type="text"
                                        id="last_name"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="last_name"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >Apellidos</label>
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <Field name="email">
                            {({ input, meta }) => (
                                <div>
                                    <input
                                        {...input}
                                        type="email"
                                        id="email"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="email"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >Email</label>
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <Field name="type_id">
                            {({ input, meta }) => (
                                <div>
                                    <input
                                        {...input}
                                        type="text"
                                        id="type_id"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="type_id"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >Tipo de Documento</label>
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <Field name="document_id">
                            {({ input, meta }) => (
                                <div>
                                    <input
                                        {...input}
                                        type="text"
                                        id="document_id"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="document_id"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >Número de Documento</label>
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <Field name="age">
                            {({ input, meta }) => (
                                <div>
                                    <input
                                        {...input}
                                        type="number"
                                        id="age"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="age"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >Edad</label>
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <Field name="password">
                            {({ input, meta }) => (
                                <div>
                                    <input
                                        {...input}
                                        type="password"
                                        id="password"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="password"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >Contraseña</label>
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                    >Submit</button>
                </form>
            )}
        />
    );
};

SignupForm.propTypes = {
    path: PropTypes.string.isRequired,
};

export default SignupForm;
