const shortid = require('shortid');
const { getEmployeeById, extractEmployees } = require('./employees');
const { getDbCollection, setDbCollection } = require('./shared');

const extractProjects = (shouldAddEmployees) => {
    try {
        const rawProjects = getDbCollection('projects');
        if (rawProjects.projects.length === 0) {
            throw new Error('ISE');
        } else {

            if(shouldAddEmployees) {
                let projects = rawProjects.projects
                for (let p of projects) {
                    let empl = p.employees.map(e => getEmployeeById(e))
                    p.employees = [...empl];
                }
                
                return projects;
            } else {
                return rawProjects.projects;
            }
            
        }
    } catch(e) {
        throw new Error('ISE');
    }
};

// const getEmployeeActiveProjects = (employeeId) => {
//     const projects = extractProjects();
//     let result = projects.filter(p => p.employees.indexOf(employeeId) > -1 && p.status === 'In Progress');

//     result = result.map(p => p.name);
    
//     return result;
// };

const addProject = (project) => {
    const projects = extractProjects(false);
    if (isProjectExisting(project, projects)) {
        throw new Error('DUPL_PROJECT')
    } else {
        const newProject = {...project, 
            employees: extractEmployeeIds(project.employees),
            status: 'On hold', 
            revenue: null,
            id: shortid.generate()
        };

        try {
            setDbCollection('projects', [...projects, newProject]);
            return newProject; 
        } catch(e) {
            console.log(e);
            throw new Error('ISE')
        }
    }
};

const startProject = (projectId) => {
    const projects = extractProjects(false);
    const targetProjectIndex = projects.findIndex(p => p.id === projectId);
    if (targetProjectIndex < 0) {
        throw new Error('NOT_FOUND_PROJECT');
    } else {
        projects[targetProjectIndex] = {...projects[targetProjectIndex], status: 'In Progress'};
        setDbCollection('projects', projects);
        return projects[targetProjectIndex];
    }
};

const completeProject = (projectId, revenue) => {
    const projects = extractProjects(false);
    const targetProjectIndex = projects.findIndex(p => p.id === projectId);
    if (targetProjectIndex < 0) {
        throw new Error('NOT_FOUND_PROJECT');
    } else {
        projects[targetProjectIndex] = {...projects[targetProjectIndex], status: 'Completed', revenue: revenue};
        setDbCollection('projects', projects);
        return projects[targetProjectIndex];
    }
};

const getProjectTeam = (projectId) => {
    const projects = extractProjects();
    const targetProject = projects.find(p => p.id === projectId);
    if (!targetProject) {
        throw new Error('NOT_FOUND_PROJECT');
    } else {
        let projectTeam = [];
        // for (let e of targetProject.employees) {
        //     try {
        //         const emp = getEmployeeById(e);
        //         projectTeam.push(emp);
        //     } catch(e) {

        //     }
        // }

        return projectTeam;
    }
};

const editProjectTeam = (projectId, newTeam) => {
    const projects = extractProjects();
    const targetProjectIndex = projects.findIndex(p => p.id === projectId);
    if (targetProjectIndex < 0) {
        throw new Error('NOT_FOUND_PROJECT');
    } else {
        projects[targetProjectIndex] = {...projects[targetProjectIndex], employees: extractEmployeeIds(newTeam)};
        setDbCollection('projects', projects);
        return newTeam;
    }
};

const deleteProject = (id) => {
    const projects = extractProjects(false);
    const filteredProjects = projects.filter(p => p.id !== id);
    if (projects.length === filteredProjects.length) {
        throw new Error('NOT_FOUND_PROJECT')
    } else {
        try {
            setDbCollection('projects', filteredProjects);
            return null;
        } catch(e) {
            throw new Error('ISE');
        }
    }
};

const getDashboardInfo = () => {
    const employees = extractEmployees();
    const projects = extractProjects(false);
    const completedProjects = projects.filter(p => p.status === 'Completed');
    const onHoldProjects = projects.filter(p => p.status === 'On hold');
    const inProgressProjects = projects.filter(p => p.status === 'In Progress');
    const profitableProjects = completedProjects.filter(p => p.revenue >= p.expectedRevenue);
    const nonProfitableProjects = completedProjects.filter(p => p.revenue < p.expectedRevenue);
    const totalRevenue = completedProjects.reduce((acc, p) => acc + p.revenue, 0);
    const totalExpectedRevenue = completedProjects.reduce((acc, p) => acc + p.expectedRevenue, 0);

    return {
        employees: employees.length,
        projects: projects.length,
        completedProjects: completedProjects.length,
        onHoldProjects: onHoldProjects.length,
        inProgressProjects: inProgressProjects.length,
        profitableProjects: profitableProjects.length,
        nonProfitableProjects: nonProfitableProjects.length,
        totalRevenue,
        totalExpectedRevenue
    }
};

const isProjectExisting = (targetProject, projects) => {
    return projects.filter(p => p.name === targetProject.name).length > 0;
};

const extractEmployeeIds = (employees) => {
    return employees.map(e => e.id);
};

module.exports = {
    extractProjects,
    addProject,
    startProject,
    completeProject,
    editProjectTeam,
    getProjectTeam,
    deleteProject,
    getDashboardInfo
};