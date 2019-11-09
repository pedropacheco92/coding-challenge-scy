import React from 'react';
import { useSelector } from 'react-redux';

const CompletedTasksPage: React.FC = (props: any) => {

    const tasks = useSelector((state: any) => state.task);
    console.log(tasks)

	return <div>list</div>;
};

export default CompletedTasksPage;
