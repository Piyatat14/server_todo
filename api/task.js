var mysql = require('mysql'),
    strQuery = "",
    connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "admin",
      database: "todo"
    });

connection.connect();

//view all items in the list.
exports.getAllTasks = function(req, res) {
  strQuery = "SELECT * FROM task";
  connection.query(strQuery, function(err, rows){
    if(err) {
      console.log(err);
      return;
    }
    res.send(rows);
  })
}

//view a single task in the list. 
exports.getTaskById = function(req, res) {
  id = req.params.taskId;

  strQuery = "SELECT * FROM task WHERE todo_id = " + id;
  connection.query(strQuery, function(err, rows){
    if(err) {
      console.log(err);
      return;
    }
    res.send(rows);
  })
}

//add a task to the list.
exports.addTask = function(req, res) {
  var data = {
    name: req.body.name,
    description: req.body.description,
    status: req.body.status
  }

  strQuery = "INSERT INTO task SET ?";
  connection.query(strQuery, data, function(err) {
    if(err) {
      console.log(err);
      return;
    }
    res.send("Insert task success");
  })
}

//edit task name only.
exports.editNameById = function(req, res) {
  id = req.params.taskId;

  var data = {
    name: req.body.name
  }

  strQuery = "UPDATE task SET ? WHERE todo_id = " + id;
  connection.query(strQuery, data, function(err, rows) {
    if(err) {
      console.log(err);
      return;
    }

    res.send("Update name success");
  })
}

//edit task description only.
exports.editDescById = function(req, res) {
  id = req.params.taskId;

  var data = {
    description: req.body.description
  }

  strQuery = "UPDATE task SET ? WHERE todo_id = " + id;
  connection.query(strQuery, data, function(err, rows) {
    if(err) {
      console.log(err);
      return;
    }

    res.send("Update description success.")
  })
}

//edit task status only.   set the task status
exports.editStatusById = function(req, res) {
  id = req.params.taskId;

  var data = {
    status: req.body.status
  }

  strQuery = "UPDATE task SET ? WHERE todo_id = " + id;
  connection.query(strQuery, data, function(err, rows) {
    if(err) {
      console.log(err);
      return;
    }

    res.send("Update status success.")
  })
}

//edit task all data.
exports.editTaskById = function(req, res) {
  id = req.params.taskId;

  var data = {
    name: req.body.name,
    description: req.body.description,
    status: req.body.status
  }

  strQuery = "UPDATE task SET ? WHERE todo_id = " + id;
  connection.query(strQuery, data, function(err, rows) {
    if(err) {
      console.log(err);
      return;
    }

    res.send("Update task success.")
  })
}

//delete a task from the list.
exports.deleteTaskById = function(req, res) {
  id = req.params.taskId;

  strQuery = "DELETE FROM task WHERE todo_id = " + id;
  connection.query(strQuery, function(err, rows) {
    if(err) {
      console.log(err);
      return;
    }

    res.send("Delete task success.");
  })
}














