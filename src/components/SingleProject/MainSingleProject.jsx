'use client'
import React, {useEffect, useState} from 'react';
import axios from "axios";

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
        <>
            <h1>{project.title}</h1>
        </>
    );
};

export default MainSingleProject;