const { getDashboardInfo } = require('../services/projects');
const { mapErrorMsgToResponse } = require('../services/shared');

const router = require('express').Router();

router.get('/dashboard', (req, res) => {

    setTimeout(() => {
        try {
            let dashboardInfo = getDashboardInfo();
            return res.status(200).json(dashboardInfo);
        } catch(e) {
            const error = mapErrorMsgToResponse(e.message);
            return res.status(error.status).json({ msg: error.msg });
        }
    }, 1000);
    
});

module.exports = router;