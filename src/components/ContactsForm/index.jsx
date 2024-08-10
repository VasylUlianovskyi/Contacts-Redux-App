import { ErrorMessage, Field, Form, Formik } from "formik";
import { CONTACTS_VALIDATION_SCHEMA } from "../../utils/validationsSchemas";
import { connect } from "react-redux";
import { createContacts } from "../../store/slices/contactsSlice";

function ContactsForm({ create }) {
  const initialValues = { fullName: "", phoneNumber: "" };
  const submitHandler = (values, { resetForm }) => {
    create(values);
    resetForm();
  };

  return (
    <section>
      <h2>ContactsForm</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={CONTACTS_VALIDATION_SCHEMA}
      >
        <Form>
          <label>
            <span>Full name:</span>
            <Field
              type="text"
              name="fullName"
              placeholder="Test Testovych"
              autoFocus
            />
            <ErrorMessage name="fullName" component="div" />
          </label>
          <label>
            <span>Full name:</span>
            <Field type="text" name="phoneNumber" placeholder="+380XXXXXXXXX" />
            <ErrorMessage name="phoneNumber" component="div" />
          </label>
          <button type="submit">Add</button>
        </Form>
      </Formik>
    </section>
  );
}

const mapDispatchToProps = (dispatch) => ({
  create: (values) => dispatch(createContacts(values)),
});

export default connect(null, mapDispatchToProps)(ContactsForm);
