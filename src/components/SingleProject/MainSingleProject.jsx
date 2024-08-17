'use client'
import React, {useEffect, useState} from 'react';
import axios from "axios";
import Status from "@/components/general/Status";
import ChangeStatus from "@/components/SingleProject/ChangeStatus";

const MainSingleProject = ({projectId}) => {
    const [project, setProject] = useState({});

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`/api/projects/${projectId}`);
            setProject(data);
        })();
    }, [projectId]);
    console.log(project)
    return (
        <main className="p-2 sm:p-6">
            <div className="flex items-center gap-3 sm:gap-5">
                <h1 className="text-2xl sm:text-3xl font-bold">{project.title}</h1>
                <ChangeStatus currentStatus={project.status}/>
            </div>
        </main>
    );
};

export default MainSingleProject;