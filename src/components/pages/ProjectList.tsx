import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsAction, resetProjectsAction } from '../../redux/actions/project-actions/actions';
import { IProject } from '../../types/projectTypes';
import { IRootState } from '../../types/reducerTypes';
import AddProjectModalContent from '../projects/AddProjectModalContent';
import CompleteProjectModalContent from '../projects/CompleteProjectModalContent';
import ProjectCardContent from '../projects/ProjectCardContent';
import ProjectStatusFilter from '../projects/ProjectStatusFilter';
import ProjectTeamModalContent from '../projects/ProjectTeamModalContent';
import Button from '../shared/Button';
import Card from '../shared/Card';
import Modal from '../shared/Modal';

const ProjectList: React.FC = () => {
    const dispatch = useDispatch();
    const filteredProjects = useSelector<IRootState, IProject[]>(state => state.projects.filteredProjects);
    const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState<boolean>(false);
    const [isCompleteProjectModalOpen, setIsCompleteProjectModalOpen] = useState<boolean>(false);
    const [isProjectTeamModalOpen, setIsProjectTeamModalOpen] = useState<boolean>(false);

    const closeModal = () => {
        setIsAddProjectModalOpen(false);
        setIsCompleteProjectModalOpen(false);
        setIsProjectTeamModalOpen(false);
    };

    useEffect(() => {
        dispatch(getProjectsAction());

        return () => {
            dispatch(resetProjectsAction());
        }
    }, [dispatch]);

    useEffect(() => {
        closeModal()
    }, [filteredProjects]);

    return <div className="main-content">
        <Modal isOpen={isAddProjectModalOpen} 
            title="Create a new project" 
            className="" 
            onClose={closeModal}>
            <AddProjectModalContent />
        </Modal>

        <Modal isOpen={isCompleteProjectModalOpen} 
            title="Complete project" 
            className="modal-content-small" 
            onClose={closeModal}>
                <CompleteProjectModalContent onConfirm={closeModal}/>
        </Modal>

        <Modal isOpen={isProjectTeamModalOpen} 
            title="Project team" 
            className="" 
            onClose={closeModal}>
            <ProjectTeamModalContent onEdit={closeModal} />
        </Modal>
        <div className="flex-row-container mb-3">
            <div className="flex-85">                
                <ProjectStatusFilter />
            </div>

            <div className="flex-15 text-right">
                <Button className="w-75 pt-1 pb-1 button-green button-rectangular font-size-large" 
                    title="Create"
                    onClick={() => setIsAddProjectModalOpen(true)}
                />
            </div>
        </div>

        <div>
            {filteredProjects.map((p, i) => {
                return <Card key={p.id} className="list-card list-card-min-height" shouldDisplay={true}>
                    <ProjectCardContent project={p} openTeamModal={() => setIsProjectTeamModalOpen(true)} onComplete={() => setIsCompleteProjectModalOpen(true)}/>
                </Card>
            })}
        </div>
    </div>
};

export default ProjectList;