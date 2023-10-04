CREATE TABLE "day" (
  "id" SERIAL PRIMARY KEY,
  "day_title" VARCHAR(10),
);

CREATE TABLE "interviewer" (
  "id" SERIAL PRIMARY KEY,
  "interviewer_name" VARCHAR(100),
  "interviewer_img" VARCHAR(500)
);

CREATE TABLE "appointment" (
  "id" SERIAL PRIMARY KEY,
  "schedule_time_from" TIME,
  "schedule_time_to" TIME,
  "day_id" INT,
  CONSTRAINT "FK_appointment.day_id"
    FOREIGN KEY ("day_id")
      REFERENCES "day"("id")
);

CREATE TABLE "available_interviewer" (
  "id" SERIAL PRIMARY KEY,
  "interviewer_id" INT,
  "is_available" BOOLEAN,
  "appointment_id" INT,
  CONSTRAINT "FK_available_interviewer.interviewer_id"
    FOREIGN KEY ("interviewer_id")
      REFERENCES "interviewer"("id"),
  CONSTRAINT "FK_available_interviewer.appointment_id"
    FOREIGN KEY ("appointment_id")
      REFERENCES "appointment"("id")
);

CREATE TABLE "interview" (
  "id" SERIAL PRIMARY KEY,
  "interviewee_name" VARCHAR(50),
  "interviewer_id" INT,
  "appointment_id" INT,
  CONSTRAINT "FK_interview.appointment_id"
    FOREIGN KEY ("appointment_id")
      REFERENCES "appointment"("id"),
  CONSTRAINT "FK_interview.interviewer_id"
    FOREIGN KEY ("interviewer_id")
      REFERENCES "interviewer"("id")
);
