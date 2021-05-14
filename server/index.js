const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const projectsRouter = require('./routers/projects');
const employeesRouter = require('./routers/employees');
const otherRouter = require('./routers/other');

app.use('/projects', projectsRouter);
app.use('/employees', employeesRouter);
app.use('/other', otherRouter);


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});