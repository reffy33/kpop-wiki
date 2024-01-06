import { Form, Button, FormGroup, Spinner } from "react-bootstrap"
import * as formik from 'formik';
import * as yup from 'yup';
import { useState } from "react";

export const CreateGroupPage: React.FC = () => {

  const { Formik } = formik;
  const [isLoading, setLoading] = useState(false)
  
  interface Data extends yup.InferType<typeof schema> {
  }
  
  const url = 'http://localhost:8000/groups/'
  const sendRequest = async (data: Data) => {
    setLoading(true)
    console.log(data);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
      body: JSON.stringify(data),
    })
    .then((responce) => {
      if (responce.ok) {
        alert ("Group created")
      }
      else {
        return responce.json()
      }
    })
    .then((json) => console.log(json))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
  }

  const schema = yup.object().shape({
    name: yup.string().required("Name is required field"),
    fandom_name: yup.string().required("Fandom name is required field"),
    agency: yup.string().required("Agency is required field"),
    type: yup.string().required("Type is required field"),
    image_url: yup.string(),
    hangul_name: yup.string(),
    debut_date: yup.string(),
    additional_info: yup.string()
  });

  return(
    <Formik
      validationSchema={schema}
      onSubmit={sendRequest}
      initialValues={{
        name: '',
        fandom_name: '',
        agency: '',
        type: '',
        image_url: '',
        hangul_name: '',
        debut_date: '',
        additional_info: ''
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <FormGroup className="mt-4" controlId="validationFormik01">
            <Form.Label>Group name</Form.Label>
            <Form.Control 
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              isInvalid={!!errors.name && touched.name}
              placeholder="Enter group name" 
            />
            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
          </FormGroup>
          <FormGroup className="mt-2" controlId="validationFormik02">
            <Form.Label>Fandom name</Form.Label>
            <Form.Control 
              type="text"
              name="fandom_name"
              value={values.fandom_name}
              onChange={handleChange}
              isInvalid={!!errors.fandom_name && touched.fandom_name}
              placeholder="Enter fandom name" 
            />
            <Form.Control.Feedback type="invalid">{errors.fandom_name}</Form.Control.Feedback>
          </FormGroup>
          <FormGroup className="mt-2" controlId="validationFormik03">
            <Form.Label>Agency</Form.Label>
            <Form.Control 
              type="text"
              name="agency"
              value={values.agency}
              onChange={handleChange}
              isInvalid={!!errors.agency && touched.agency}
              placeholder="Enter fandom name" 
            />
            <Form.Control.Feedback type="invalid">{errors.agency}</Form.Control.Feedback>
          </FormGroup>
          <FormGroup className="mt-2" controlId="validationFormik04">
            <Form.Label>Group type</Form.Label>
            <Form.Select
                name="type"
                value={values.type}
                onChange={handleChange}
                isInvalid={!!errors.type && touched.type}
              >
                <option value="" label="Select a group type">
                  Select a color
                </option>
                <option value="male" label="Boy group">
                  Boy group
                </option>
                <option value="female" label="Girl group">
                  Girl group
                </option>
                <option value="co-ed" label="Co-ed group">
                  Co-ed group
                </option>
              </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.type}</Form.Control.Feedback>
          </FormGroup>
          <Form.Group className="mt-2" controlId="validationFormik05">
            <Form.Label>Image URL</Form.Label>
            <Form.Control 
              type="text"
              name="image_url"
              value={values.image_url}
              onChange={handleChange}
              isInvalid={!!errors.image_url && touched.image_url}
              placeholder="Paste here group's image URL" 
            />
            <Form.Control.Feedback type="invalid">{errors.image_url}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mt-2" controlId="validationFormik06">
            <Form.Label>Hangul name</Form.Label>
            <Form.Control
              type="text"
              name="hangul_name"
              value={values.hangul_name}
              onChange={handleChange}
              isInvalid={!!errors.hangul_name && touched.hangul_name}
              placeholder="Enter group hangul name" 
            />
            <Form.Control.Feedback type="invalid">{errors.hangul_name}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mt-2" controlId="validationFormik07">
            <Form.Label>Debut date</Form.Label>
            <Form.Control 
              type="date"
              name="debut_date"
              value={values.debut_date}
              onChange={handleChange}
              isInvalid={!!errors.debut_date && touched.debut_date} 
            />
            <Form.Control.Feedback type="invalid">{errors.debut_date}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mt-2" controlId="validationFormik08">
            <Form.Label>Additional info</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              placeholder="Add any info here"
              name="additional_info"
              value={values.additional_info}
              onChange={handleChange}
              isInvalid={!!errors.additional_info && touched.additional_info}
            />
            <Form.Control.Feedback type="invalid">{errors.additional_info}</Form.Control.Feedback>
          </Form.Group>
          <Button className="mt-2" type="submit">Submit form</Button>
          {isLoading && 
            <div className="mt-3">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          }
        </Form>
      )}
    </Formik>
  )
}