const fs = require('fs');
const path = require('path');

const getDbCollection = (collectionName) => {
    const collectionPath = path.join(__dirname, `../db/${collectionName}.json`);
    let rawData = {};
    try {
        rawData = fs.readFileSync(collectionPath);
        return JSON.parse(rawData);
    } catch(e) {
        throw new Error({ msg: 'Internal server error', status: 500 })
    }
};

const setDbCollection = (collectionName, data) => {
    const collectionPath = path.join(__dirname, `../db/${collectionName}.json`);
    const content = JSON.stringify({ [collectionName]: data });
    try {
        const success = fs.writeFileSync(collectionPath, content);
        return success;
    } catch(e) {
        throw new Error('ISE');
    }
};

const mapErrorMsgToResponse = (msg) => {
    let error;
    switch (msg) {
        case 'DUPL_EMPL': error = { msg: 'An employee with the given name already exists', status: 409 }; break;
        case 'DUPL_PROJECT': error = { msg: 'A project with the provided name already exists', status: 409 }; break;
        case 'NOT_FOUND_EMPL': error = { msg: 'No such employee was found', status: 404 }; break;
        case 'NOT_FOUND_PROJECT': error = { msg: 'No such project was found', status: 404 }; break;
        default: error = { msg: 'Internal Server Error', status: 500 };
    }

    return error;
};

module.exports = {
    getDbCollection, 
    setDbCollection,
    mapErrorMsgToResponse
}