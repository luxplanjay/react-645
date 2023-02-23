import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { Form, FormField, ErrorMessage } from './RecipeForm.styled';

const RecipeSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  image: Yup.string().min(3, 'Too Short!').required('Required'),
  time: Yup.number().positive('!!! > 0 !!!').required('Required'),
  servings: Yup.number().positive('!!! > 0 !!!').required('Required'),
  calories: Yup.number().positive('!!! > 0 !!!').required('Required'),
  difficulty: Yup.string()
    .oneOf(['easy', 'medium', 'hard'])
    .required('Required'),
});

export const RecipeForm = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        image: '',
        time: 0,
        servings: 0,
        calories: 0,
        difficulty: 'easy',
      }}
      validationSchema={RecipeSchema}
      onSubmit={(values, actions) => {
        onSave({
          ...values,
          id: nanoid(),
        });
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField>
          Image
          <Field name="image" />
          <ErrorMessage name="image" component="span" />
        </FormField>
        <FormField>
          Time
          <Field name="time" type="number" />
          <ErrorMessage name="time" component="span" />
        </FormField>
        <FormField>
          Servings
          <Field name="servings" type="number" />
          <ErrorMessage name="servings" component="span" />
        </FormField>
        <FormField>
          Calories
          <Field name="calories" type="number" />
          <ErrorMessage name="calories" component="span" />
        </FormField>
        <FormField>
          Difficulty
          <Field as="select" name="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Field>
          <ErrorMessage name="difficulty" component="span" />
        </FormField>
        <button type="submit">Save recipe</button>
      </Form>
    </Formik>
  );
};
