import React from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Confirm from "./Confirm";

import "./styles.scss";

const Appointment = (props) => {
  console.log(props);
  const [add, setAdd] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const { socket } = props;
  const { interviewers } = props;
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    setEdit(false);
    props.bookInterview(interview);
  }
  return (
    <article className="appointment">
      <Header time={props.time} />
      {props.interview ? (
        isDeleting ? (
          <Confirm
            message={"Are you sure you want to delete?"}
            onCancel={() => {
              setIsDeleting(false);
            }}
            onConfirm={() => {
              props.deleteInterview(props.id);
              console.log("Deleting confirmation");
              socket.emit("cancel_interview", props.id);
              setIsDeleting(false);
            }}
          />
        ) : edit ? (
          <Form
            student={props.interview.student}
            interviewer={props.interview.interviewer}
            interviewers={interviewers}
            onSave={save}
            onCancel={() => setEdit(false)}
          />
        ) : (
          <Show
            student={props.interview.student}
            interviewer={props.interview.interviewer}
            interviewers={interviewers}
            onEdit={() => setEdit(true)}
            onDelete={() => setIsDeleting(true)}
          />
        )
      ) : add ? (
        <Form
          interviewers={interviewers}
          onSave={save}
          onCancel={() => {
            alert("works");
            console.log(props.cancelInterview);

            setAdd(false);
          }}
        />
      ) : (
        <Empty onAdd={() => setAdd(true)} />
      )}
    </article>
  );
};

export default Appointment;
