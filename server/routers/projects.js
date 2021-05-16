const router = require('express').Router();
const { extractProjects, addProject, deleteProject, startProject, completeProject, editProjectTeam, getProjectTeam } = require('../services/projects');
const { mapErrorMsgToResponse } = require('../services/shared');

router.get('/all', (req, res) => {
    setTimeout(() => {
        try {
            const projects = extractProjects(true);
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
    const {project} = req.body;
    setTimeout(() => {
        try {
            const newProject = addProject(project);
            return res.status(200).json({ msg: 'Project Added successfully', project: newProject });
        } catch(e) {
            const error = mapErrorMsgToResponse(e.message);
            return res.status(error.status).json({ msg: error.msg });
        }
    }, 1000)
});

router.delete('/:id', (req, res) => {
    const projectId = req.params.id;
    setTimeout(() => {
        try {
            deleteProject(projectId);
            return res.status(200).json({ msg: 'Project deleted successfully', projectId });
        } catch(e) {
            const error = mapErrorMsgToResponse(e.message);
            return res.status(error.status).json({ msg: error.msg });
        }
    }, 1000)
});

router.post('/start', (req, res) => {
    const projectId = req.body.projectId;
    setTimeout(() => {
        try {
            const { id, status } = startProject(projectId);
            return res.status(200).json({
                msg: 'Project started',
                projectId: id,
                status
            })
        } catch(e) {
            const error = mapErrorMsgToResponse(e.message);
            return res.status(error.status).json({ msg: error.msg });
        }
    }, 1000)
});

router.post('/complete', (req, res) => {
    const { projectId, revenue } = req.body;
    setTimeout(() => {
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
    }, 1000)
});

router.post('/editTeam', (req, res) => {
    const { projectId, team } = req.body;
    setTimeout(() => {
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
    }, 1000)
});

module.exports = router;