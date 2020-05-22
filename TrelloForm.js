import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Container, Col } from "reactstrap";
import axios from "axios";

const styles = {
  container: {
    width: "90vw",
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
    height: "200px",
    width: "100%",
  },
  inputTitle: {
    height: "25px",
  },
  text: {
    fontSize: "13px",
  },
  text2: {
    fontSize: "13px",
    float: "right",
  },
  submitButton: {
    marginTop: "3%",
  },
  header: {
    fontSize: "20px",
  },
};

const TrelloForm = (props) => {
  const [limit, setLimit] = useState(1000);
  const [char, setChar] = useState(50);
  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");
  
  const handleTitleChange = (event) => {
    setTitleInput(event.target.value);

    let count = event.target.value.length
    setChar(50 - count)
  };

  const handleDescChange = (event) => {
    setDescInput(event.target.value);
    let count = event.target.value.length
    setLimit(1000 - count)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleInput;
    const description = descInput;
    const listId = "5eb79eefecc831684564d6f8";
    const pos = "top";

    if (title.includes("DEV")) {
      const idLabels = "5eb79eef7669b225494bc374";
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
      const idLabels = "5eb79eef7669b225494bc378";
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
              <Label style={styles.header}>Title</Label>
              <p style={styles.text}>Max 50 characters</p>
              <textarea
                style={styles.inputTitle}
                onChange={handleTitleChange}
                value={titleInput}
                maxLength="50"
                name="title"
              />
            </FormGroup>
            <p style={styles.text2}>Characters left: {char}</p>
          </Col>
          <Col>
            <FormGroup style={styles.description}>
              <Label style={styles.header}>Description</Label>
              <p style={styles.text}>Max 1000 characters</p>
              <textarea
                style={styles.input}
                onChange={handleDescChange}
                value={descInput}
                maxLength="1000"
                name="description"
              />
            </FormGroup>
            <p style={styles.text2}>Characters left: {limit}</p>
          </Col>
          <Button style={styles.submitButton} type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default TrelloForm;
