const router = require('express').Router()
const Todo = require("../models/Todo")


//routes
router.post("/add/todo" ,(req , res) => {
    const todo = req.body.todo;
    const newTodo = new Todo({
        todo : todo
    })

    //save the todo

    newTodo.save()
    return res.redirect("/")
    console.log(todo)
})

router.get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
      .then(() => {
        return res.redirect('/');
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
        return res.redirect('/');
      });
  });


module.exports = router