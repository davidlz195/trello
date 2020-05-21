import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Col,
} from "reactstrap";
import axios from "axios";

const styles = {
  container: {
    width: "650px",
    marginTop: "3%",
    backgroundColor: "#c6e2ff",
    padding: "1%",
  },
  description: {
    marginTop: "5%",
  },
  title: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    height: "250px",
  },
  inputTitle: {
    height: "30px",
  },
  text: {
    fontSize: "10px",
  },
  text2: {
    fontSize: "10px",
    float: "right",
    },
    submitButton: {
      marginTop: '3%'
  }
};

const TrelloForm = (props) => {
  const [values, setValues] = useState({});
  const [char, setChar] = useState(50);
  const [limit, setLimit] = useState(1000);

  const handleTitleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
      setChar(char - 1)
  };
    
  const handleDescChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
      setLimit(limit - 1)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = values.title;
    const description = values.description;
    const listId = "5eb79eefecc831684564d6f8";
    const pos = "top";

    if (title.includes("DEV")) {
      const idLabels = ["DEV"];
      const due = null;
      axios
        .post(
          "https://api.trello.com/1/cards?key=473378f668b151df4ad3fed7538dc1cf&token=b25458399a5c14fe69cce0bd66aed91bd5a35cde3a2a627c9738cd2abd7df930",
          {
            name: title,
            desc: description,
            idLabels: idLabels,
            idList: listId,
            pos: pos,
            due: due,
          }
        )
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (title.includes("QA")) {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        (today.getDate() + 1);
      const due = date;
      const idLabels = null;
      axios
        .post(
          "https://api.trello.com/1/cards?key=473378f668b151df4ad3fed7538dc1cf&token=b25458399a5c14fe69cce0bd66aed91bd5a35cde3a2a627c9738cd2abd7df930",
          {
            name: title,
            desc: description,
            due: due,
            idLabels: idLabels,
            idList: listId,
            pos: pos,
          }
        )
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      const idLabels = ["GENERAL"];
      const due = null;
      axios
        .post(
          "https://api.trello.com/1/cards?key=473378f668b151df4ad3fed7538dc1cf&token=b25458399a5c14fe69cce0bd66aed91bd5a35cde3a2a627c9738cd2abd7df930",
          {
            name: title,
            desc: description,
            idLabels: idLabels,
            idList: listId,
            pos: pos,
            due: due,
          }
        )
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <>
      <Container style={styles.container}>
        <Form onSubmit={handleSubmit}>
          <Col>
            <FormGroup style={styles.title}>
              <Label>Title</Label>
              <p style={styles.text}>Max 50 characters</p>
              <Input
                style={styles.inputTitle}
                type="title"
                onChange={handleTitleChange}
                value={values.title}
                maxLength="50"
                name="title"
                maxLength="50"
              />
            </FormGroup>
            <p style={styles.text2}>Characters left: {char}</p>
          </Col>
          <Col>
            <FormGroup style={styles.description}>
              <Label>Description</Label>
              <p style={styles.text}>Max 1000 characters</p>
              <Input
                style={styles.input}
                type="description"
                onChange={handleDescChange}
                value={values.description}
                maxLength="1000"
                name="description"
                maxLength="1000"
              />
            </FormGroup>
            <p style={styles.text2}>Characters left: {limit}</p>
          </Col>
                  <Button style={styles.submitButton} type="submit">Submit</Button>
        </Form>
      </Container>
    </>
  );
};

export default TrelloForm;
