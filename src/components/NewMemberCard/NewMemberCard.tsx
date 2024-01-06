import { Form, Button, FormGroup, Spinner } from "react-bootstrap"
import * as formik from 'formik';
import * as yup from 'yup';
import { useState } from "react";

export const NewMemberCard: React.FC<{ group_id: number, close: () => void }> = ({ group_id, close }) => {

  const { Formik } = formik;
  const [isLoading, setLoading] = useState(false)
  
  interface Data extends yup.InferType<typeof schema> {
  }
  
  const url = `http://localhost:8000/members/${group_id}`
  const sendRequest = async (data: Data) => {
    setLoading(true)

    if (data.birthday == "") {
      delete data.birthday
    }

    if (data.solo_debut == "") {
      delete data.solo_debut
    }

    console.log(data);
    console.log("Sending");
    
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
      body: JSON.stringify(data),
    })
    .then((responce) => {
      if (responce.ok) {
        alert ("Member added created")
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
    stage_name: yup.string().required("Name is required field"),
    image_url: yup.string(),
    real_name: yup.string(),
    birthday: yup.string(),
    position: yup.string(),
    ex_member: yup.bool(),
    solo: yup.bool(),
    solo_debut: yup.string()
  });

  return(
    <Formik
      validationSchema={schema}
      onSubmit={sendRequest}
      initialValues={{
        stage_name: '',
        image_url: '',
        real_name: '',
        birthday: '',
        position: '',
        ex_member: false,
        solo: false,
        solo_debut: ''
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (        
        <Form noValidate onSubmit={handleSubmit}>
          <FormGroup className="mt-3" controlId="validationFormik01">
            <Form.Label>Stage Name</Form.Label>
            <Form.Control 
              type="text"
              name="stage_name"
              value={values.stage_name}
              onChange={handleChange}
              isInvalid={!!errors.stage_name && touched.stage_name}
              placeholder="Enter stage name" 
            />
            <Form.Control.Feedback type="invalid">{errors.stage_name}</Form.Control.Feedback>
          </FormGroup>
          <FormGroup className="mt-1" controlId="validationFormik02">
            <Form.Label>Image URL</Form.Label>
            <Form.Control 
              type="text"
              name="image_url"
              value={values.image_url}
              onChange={handleChange}
              isInvalid={!!errors.image_url}
              placeholder="Enter image URL" 
            />
            <Form.Control.Feedback type="invalid">{errors.image_url}</Form.Control.Feedback>
          </FormGroup>
          <FormGroup className="mt-1" controlId="validationFormik03">
            <Form.Label>Real Name</Form.Label>
            <Form.Control 
              type="text"
              name="real_name"
              value={values.real_name}
              onChange={handleChange}
              isInvalid={!!errors.real_name}
              placeholder="Enter real name" 
            />
            <Form.Control.Feedback type="invalid">{errors.real_name}</Form.Control.Feedback>
          </FormGroup>
          <Form.Group className="mt-2" controlId="validationFormik04">
            <Form.Label>Birthday</Form.Label>
            <Form.Control 
              type="date"
              name="birthday"
              value={values.birthday}
              onChange={handleChange}
              isInvalid={!!errors.birthday} 
            />
            <Form.Control.Feedback type="invalid">{errors.birthday}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mt-2" controlId="validationFormik05">
            <Form.Label>Position</Form.Label>
            <Form.Control 
              type="text"
              name="position"
              value={values.position}
              onChange={handleChange}
              isInvalid={!!errors.position} 
              placeholder="Enter position" 
            />
            <Form.Control.Feedback type="invalid">{errors.position}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mt-2">
            <Form.Check
                name="ex_member"
                label="EX member"
                onChange={handleChange}
                id="validationFormik06"
              />            
          </Form.Group>
          <Form.Group className="mt-2">
            <Form.Check
                name="solo"
                label="Debuted solo"
                onChange={handleChange}
                id="validationFormik07"
              />            
          </Form.Group>
          { values.solo && 
            <Form.Group className="mt-2" controlId="validationFormik08">
              <Form.Label>Solo debut date</Form.Label>
              <Form.Control 
                type="date"
                name="solo_debut"
                value={values.solo_debut}
                onChange={handleChange}
                isInvalid={!!errors.solo_debut} 
              />
              <Form.Control.Feedback type="invalid">{errors.solo_debut}</Form.Control.Feedback>
            </Form.Group>
          }
          <div className="d-flex gap-3 mt-4">
            <Button type="submit">Add member</Button>
            <Button type="reset" variant="danger" onClick={close}>Reset</Button>
          </div>
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