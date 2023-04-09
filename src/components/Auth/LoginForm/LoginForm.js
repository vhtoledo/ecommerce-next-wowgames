import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./LoginForm.form";


export const LoginForm = () => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        console.log("Formulario enviado");
        console.log(formValue);
      } catch (error) {
        console.error(error);
      }
    },
  });


  return (
    <Form onSubmit={formik.handleSubmit}>
        <Form.Input
            name="indentifier"
            type="text"
            placeholder="Correo electronico o nombre de usuario"
            value={formik.values.identifier}
            onChange={formik.handleChange}
            error={formik.errors.identifier} 
        />
        <Form.Input
            name="password"
            type="password"
            placeholder="Contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.password} 
        />

        <Form.Button type="submit" fluid loading={formik.isSubmitting}>
            Entrar
        </Form.Button>
    </Form>
  )
}
