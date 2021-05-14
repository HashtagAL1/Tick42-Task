const shortid = require('shortid');
const { getEmployeeById } = require('./employees');
const { getDbCollection, setDbCollection } = require('./shared');

const extractProjects = () => {
    try {
        const rawProjects = getDbCollection('projects');
        if (Object.keys(rawProjects).length === 0) {
            throw new Error('ISE');
        } else {
            return rawProjects.projects;
        }
    } catch(e) {
        throw new Error('ISE');
    }
};

const getEmployeeActiveProjects = (employeeId) => {
    const projects = extractProjects();
    let result = projects.filter(p => p.employees.indexOf(employeeId) > -1 && p.status === 'in_progress');

    result = result.map((p) => {
        return { id: p.id, name: p.name }
    });
    
    return result;
};

const addProject = (project) => {
    const projects = extractProjects();
    if (isProjectExisting(project, projects)) {
        throw new Error('DUPL_PROJECT')
    } else {
        const newProject = {...project, 
            employees: extractEmployeeIds(project.employees), 
            status: 'on_hold', 
            revenue: null,
            id: shortid.generate()
        };

        try {
            setDbCollection('projects', [...projects, newProject]);
            return newProject; 
        } catch(e) {
            throw new Error('ISE')
        }
    }
};

const startProject = (projectId) => {
    const projects = extractProjects();
    const targetProjectIndex = projects.findIndex(p => p.id === projectId);
    if (targetProjectIndex < 0) {
        throw new Error('NOT_FOUND_PROJECT');
    } else {
        projects[targetProjectIndex] = {...projects[targetProjectIndex], status: 'in_progress'};
        setDbCollection('projects', projects);
        return projects[targetProjectIndex];
    }
};

const completeProject = (projectId, revenue) => {
    const projects = extractProjects();
    const targetProjectIndex = projects.findIndex(p => p.id === projectId);
    if (targetProjectIndex < 0) {
        throw new Error('NOT_FOUND_PROJECT');
    } else {
        projects[targetProjectIndex] = {...projects[targetProjectIndex], status: 'completed', revenue: revenue};
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
        for (let e of targetProject.employees) {
            try {
                const emp = getEmployeeById(e);
                projectTeam.push(emp);
            } catch(e) {

            }
        }

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
    const projects = extractProjects();
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
    const projects = extractProjects();
    const completedProjects = projects.filter(p => p.status === 'completed');
    const onHoldProjects = projects.filter(p => p.status === 'on_hold');
    const inProgressProjects = projects.filter(p => p.status === 'in_progress');
    const profitableProjects = completedProject.filter(p => p.revenue >= p.expectedRevenue);
    const nonProfitableProjects = completedProjects.filter(p => p.revenue < p.expectedRevenue);
    const totalRevenue = completedProjects.reduce((a, b) => a.revenue + b.revenue, 0);
    const totalExpectedRevenue = completedProjects.reduce((a, b) => a.expectedRevenue + b.expectedRevenue, 0);

    return {
        employees: employees.length,
        projects: projects.length,
        completedProjects: completedProjects.length,
        onHoldProjects: onHoldProjects.length,
        inProgressProjects: inProgressProjects.length,
        profitableProjects: profitableProjects.length,
        nonProfitableProjects: nonProfitableProjects,
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
    getEmployeeActiveProjects,
    deleteProject,
    getDashboardInfo
};