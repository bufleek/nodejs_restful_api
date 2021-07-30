const express = require('express');
const app = express();

const courses = [
    {id: 1, name: "Course1"},
    {id: 2, name: "Course2"},
    {id: 3, name: "Course3"}
];

app.get("/", (req, res) => {
    res.send("Home");
});

app.get("/api/courses", (req, res) => {
    res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
    const id = req.params.id;
    const course = courses.find(c => c.id === parseInt(id))
    if(!course) res.status(404).send("Course not found");
    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));