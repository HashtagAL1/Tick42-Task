const router = require('express').Router();
const { extractProjects, addProject, deleteProject, startProject, completeProject, editProjectTeam, getProjectTeam } = require('../services/projects');
const { mapErrorMsgToResponse } = require('../services/shared');

router.get('/all', (req, res) => {
    setTimeout(() => {
        try {
            const projects = extractProjects();
            return res.status(200).json({ projects });
        } catch(e) {
            const error = mapErrorMsgToResponse(e.message);
            return res.status(error.status).json({ msg: error.msg });
        }
    }, 1000)
    
});

router.get('/:id/team', (req, res) => {
    const projectId = req.params.id;
    try {
        const team = getProjectTeam(projectId);
        return res.status(200).json({
            msg: 'Team fetched successfully',
            team
        })
    } catch(e) {
        const error = mapErrorMsgToResponse(e.message);
        return res.status(error.status).json({ msg: error.msg });
    } 
});

router.post('/add', (req, res) => {
    const project = req.body;
    try {
        const newProject = addProject(project);
        return res.status(200).json({ msg: 'Project Added successfully', project: newProject });
    } catch(e) {
        const error = mapErrorMsgToResponse(e.message);
        return res.status(error.status).json({ msg: error.msg });
    }
});

router.delete('/:id', (req, res) => {
    const projectId = req.params.id;
    try {
        deleteProject(projectId);
        return res.status(200).json({ msg: 'Project deleted successfully' });
    } catch(e) {
        const error = mapErrorMsgToResponse(e.message);
        return res.status(error.status).json({ msg: error.msg });
    }
});

router.post('/start', (req, res) => {
    const projectId = req.body.projectId;
    try {
        const startedProject = startProject(projectId);
        return res.status(200).json({
            msg: 'Project started',
            project: startedProject
        })
    } catch(e) {
        const error = mapErrorMsgToResponse(e.message);
        return res.status(error.status).json({ msg: error.msg });
    }
});

router.post('/complete', (req, res) => {
    const { projectId, revenue } = req.body;
    try {
        const completedProject = completeProject(projectId, revenue);
        return res.status(200).json({
            msg: 'Project completed',
            project: completedProject
        });
    } catch(e) {
        const error = mapErrorMsgToResponse(e.message);
        return res.status(error.status).json({ msg: error.msg });
    }
});

router.post('/editTeam', (req, res) => {
    const { projectId, team } = req.body;
    try {
        const editedTeam = editProjectTeam(projectId, team);
        return res.status(200).json({
            msg: 'Project team edited successfully',
            team: editedTeam
        })
    } catch(e) {
        const error = mapErrorMsgToResponse(e.message);
        return res.status(error.status).json({ msg: error.msg });
    }
});

module.exports = router;