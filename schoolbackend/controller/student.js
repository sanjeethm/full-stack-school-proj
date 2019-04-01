var db_connect = require("../common/connection");

var student = {};

// var morgan = require("morgan");

//get all student

student.all = async function(req, res) {
  console.log("in student.all request------");

  try {
    var query = `select * from student`;
    var students = await db_connect.query(query);

    res.send(students);
  } catch (err) {
    throw new Error(err);
  }
};

//get by id student

student.byId = async function(req, res) {
  console.log("in student.byId request------");

  try {
    var student_id = req.params.student_id;
    var query = `select * from student where student_id=:student_id`;

    var students = await db_connect.query(query, {
      student_id: student_id
    });

    res.send(students);
  } catch (err) {
    throw new Error(err);
  }
};

//search name

student.search = async function(req, res) {
  console.log("in student.search  request------");

  try {
    var student_name = req.params.student_name;
    //var query = `select * from student where student_name LIKE {student_name}%`;
    var students = await db_connect.query(
      "SELECT * from student where student_name LIKE '%{req.params.student_name}%'"
    );

    res.send(students);
  } catch (err) {
    throw new Error(err);
  }
};

//create student

student.create = async function(req, res) {
  console.log("in student.create  request------");

  try {
    var student = req.body;
    console.log("student details" + student);
    var query = `insert into student (
      student_name,
      student_email,
      teacher_name,
      teacher_email
        ) values (
            :student_name,
            :student_email,
            :teacher_name,
            teacher_email
          )`;

    var result = await db_connect.query(query, {
      student_name: student.student_name,
      student_email: student.student_email,
      teacher_name: student.teacher_name,
      teacher_email: student.teacher_email
    });

    res.send({
      status: "success",

      result: result
    });
  } catch (err) {
    throw new Error(err);
  }
};

//update student

student.update = async function(req, res) {
  console.log("in student.update  request------");

  try {
    var student_id = req.params.student_id;
    var student = req.body;
    console.log("student_id" + student_id + "name:" + student.student_name);

    var query = `update student set 
    student_name=:student_name,
    student_email=:student_email,
    teacher_name=:teacher_name,
    teacher_email=:teacher_email
            where student_id=:student_id`;

    var result = await db_connect.query(query, {
      student_name: student.student_name,
      student_email: student.student_email,
      teacher_name: student.teacher_name,
      teacher_email: student.teacher_email
    });

    res.send({
      status: "success",

      result: result
    });
  } catch (err) {
    throw new Error(err);
  }
};

//delete student

student.delete = async function(req, res) {
  console.log("in student.delete  request------");

  try {
    var student_id = req.params.student_id;
    var query = `delete from student where student_id=:student_id`;
    var result = await db_connect.query(query, {
      student_id: student_id
    });

    res.send({
      status: "success",

      result: result
    });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = student;
