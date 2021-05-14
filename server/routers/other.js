const { getDashboardInfo } = require('../services/projects');
const { mapErrorMsgToResponse } = require('../services/shared');

const router = require('express').Router();

router.get('/dashboard', (req, res) => {
    try {
        const dashboardInfo = getDashboardInfo();
        return res.status(200).json(dashboardInfo);
    } catch(e) {
        console.log(e)
        const error = mapErrorMsgToResponse(e.message);
        return res.status(error.status).json({ msg: error.msg });
    }
});

module.exports = router;