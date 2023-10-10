import React, { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

import "./App.scss";

import DayList from "./components/DayList";
import Appointment from "./components/Appointment";

const socket = io("http://localhost:8080");

export default function Application() {
  const [day, setDay] = useState("Monday");
  const [days, setDays] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [availableInterviewers, setAvailableInterviewers] = useState([]);
  useEffect(() => {
    socket.on("book_interview", (data) => {
      console.log(data);
      const { appointment_id, interview } = data;
      if (appointments[appointment_id]) {
        bookInterview(appointment_id, interview);
      }
    });

    return () => {
      // socket.off("cancel_interview");
      socket.off("book_interview", (data) => {
        console.log(data);
        const { appointment_id, interview } = data;
        if (appointments[appointment_id]) {
          bookInterview(appointment_id, interview);
        }
      });
    };
  }, [day, appointments]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/days")
      .then((res) => res.data)
      .then((days) => {
        setDays(days);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/schedule/${day}`)
      .then((res) => res.data)
      .then((appointments) => {
        setAppointments(appointments);
      });
  }, [day]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/schedule/interviewers/${day}`)
      .then((res) => res.data)
      .then((availableInterviewers) => setAvailableInterviewers(availableInterviewers));
  }, [day]);

  function bookInterview(id, interview) {
    const isEdit = appointments[id].interview;
    if (isEdit) {
      axios
        .put(`http://localhost:8080/schedule/${id}`, {
          interviewee_name: interview.student,
          interviewer_id: interview.interviewer.id,
          appointment_id: id,
        })
        .then((response) => {
          console.log("success", response);
        })
        .catch((error) => {
          console.error("error", error);
        });
    } else {
      axios
        .post("http://localhost:8080/schedule/", {
          interviewee_name: interview.student,
          interviewer_id: interview.interviewer.id,
          appointment_id: id,
        })
        .then((response) => {
          console.log("success", response);
        })
        .catch((error) => {
          console.error("error", error);
        });
    }

    setAppointments((prev) => {
      const appointment = {
        ...prev[id],
        interview: { ...interview },
      };
      const updatedAppointments = {
        ...prev,
        [id]: appointment,
      };
      console.log(appointment);
      console.log(updatedAppointments);
      socket.emit("book_interview", updatedAppointments);
      return updatedAppointments;
    });
    if (!isEdit) {
      setDays((prev) => {
        const updatedDay = {
          ...prev[day],
          spots: prev[day].spots - 1,
        };
        const days = {
          ...prev,
          [day]: updatedDay,
        };
        return days;
      });
    }
  }
  function deleteInterview(id) {
    axios
      .delete(`http://localhost:8080/schedule/${id}`)
      .then((response) => {
        console.log("success", response);
      })
      .catch((error) => {
        console.error("error", error);
      });
    setAppointments((prev) => {
      const updatedAppointment = {
        ...prev[id],
        interview: null,
      };

      delete updatedAppointment.interview;
      const updatedAppointments = {
        ...prev,
        [id]: updatedAppointment,
      };
      console.log(updatedAppointment);
      console.log(updatedAppointments);
      socket.emit("book_interview", updatedAppointments);
      return updatedAppointments;
    });
    setDays((prev) => {
      const updatedDay = {
        ...prev[day],
        spots: Number(prev[day].spots) + 1,
      };
      const updatedDays = {
        ...prev,
        [day]: updatedDay,
      };
      return updatedDays;
    });
  }
  return (
    <main className="layout">
      <section className="sidebar">
        <img className="sidebar--centered" src="images/logo.png" alt="Interview Scheduler" />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={days} value={day} onChange={setDay} />
        </nav>
      </section>
      <section className="schedule">
        {Object.values(appointments).map((appointment) => (
          <Appointment
            key={appointment.id}
            {...appointment}
            bookInterview={(interview) => {
              bookInterview(appointment.id, interview);
            }}
            deleteInterview={deleteInterview}
            socket={socket}
            interviewers={availableInterviewers[appointment.id]}
          />
        ))}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
