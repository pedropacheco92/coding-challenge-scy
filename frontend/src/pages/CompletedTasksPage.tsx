import React from 'react';
import { useSelector } from 'react-redux';
import Menu from '../components/Menu';

const CompletedTasksPage = (props: any) => {

    const tasks = useSelector((state: any) => state.task);

	return <div>
        <Menu />
    </div>;
};

export default CompletedTasksPage;
