// src/components/MinimalForm.jsx
import React from 'react';
import { Form, Field } from 'react-final-form';

const MinimalForm = () => {
    const onSubmit = (values) => {
        console.log("MinimalForm enviado con datos:", values);
    };

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field name="test_field">
                        {({ input }) => (
                            <div>
                                <input {...input} placeholder="Campo de prueba" />
                            </div>
                        )}
                    </Field>
                    <button type="submit">Enviar</button>
                </form>
            )}
        />
    );
};

export default MinimalForm;
