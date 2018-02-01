import React, {Component} from 'react';

import Paper from 'material-ui/Paper';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import {csApi} from '../../helpers/api.helpers';
import Task from './components/task.component';
import {red500} from 'material-ui/styles/colors';
import {reduce, remove, findIndex} from 'lodash';

import './tasks.css';


const getTasksFromApi = (api, context) => {
    return api.get('v1/tasks', {})
        .then(response => context.setState({loadingTasks: false, tasks: response.data}));
};

const styles = {
    noTasks:{
        color: 'rgba(0, 0, 0, 0.541176)',
        fontSize: 16,
        padding: 16,
        textAlign: 'center'
    }
};


class TasksContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            activeId: undefined,
            tasksWithAlert: new Set(),
        };
    }

    componentWillMount() {
        csApi('v1/tasks')
        /*
        getTasksFromApi(csApi, this).then(() => this.setState({loading: false}));
        setInterval(() => getTasksFromApi(csApi, this), 60000);
        */
    }

    componentDidUpdate(prevProps, prevState) {
        let alert = false;
        this.props.tasks.forEach((task) => {
            if (task.priority <= 50) {
                if (!this.state.tasksWithAlert.has(task.id)) alert = true;
                this.state.tasksWithAlert.add(task.id)
            }
        });
        if (alert) {
            // Here we alert!!!
        }
    }

    unSnoozeTask = id =>
        csApi.post(`v1/tasks/${id}/unsnooze`)
            .then(getTasksFromApi(csApi, this));

    snoozeTask = (slot, id) =>
        csApi.post(`v1/tasks/${id}/snooze`, {
            task_id: id,
            time_window: slot})
            .then(getTasksFromApi(csApi, this));

    mutateTaskWithAction = (action, body, task) => {
        let actionBody = {
            task_id: task.id,
            action_id: action.id,
            step_id: task.step.id,
            values: body ? reduce(body, (acc, field) => (acc.concat(field)), []) : []
        };

        return csApi.post(`v1/tasks/${task.id}`, actionBody)
            .then(res => {
                if (res.status === 204 || res.data.hasOwnProperty('snooze')) {
                    this.setState({
                        tasks: remove(this.props.tasks, el => (
                            el.id !== task.id
                        ))
                    });
                    return null;
                }
                if (res.status === 200) {
                    return res.data
                }
                let indexOfTask = findIndex(this.props.tasks, {id: task.id});

                this.setState(prevState => {
                    let snapOfTasks = prevState.tasks;
                    let newStateOfTasks = snapOfTasks.splice(indexOfTask, 0, res.data);
                    return {...prevState, task: newStateOfTasks};
                });
            })
    };

    setActiveTask = id => {
        if (id !== this.state.activeId) this.setState({activeId: id});
        else this.setState({activeId: null});
    };

    render() {
        //const tasks = this.state.snoozed ? this.props.tasks : filter(this.props.tasks, {is_snoozed: false});
        const tasks = this.props.tasks;

        return (
            <div className="tasks-container">
                <Paper zDepth={0} transitionEnabled={false}>
                    {this.state.loading
                        ? <RefreshIndicator
                            size={50}
                            status="loading"
                            loadingColor={red500}
                            />
                        : <div/>
                    }
                    {!this.props.tasks.length ?
                        <div style={styles.noTasks}>
                            Por el momento no tienes tareas para resolver, sírvete una taza de café :)
                        </div> : <div/>}
                    <div>
                    {tasks.map(task =>
                        <Task
                            key={task.id}
                            taskDetail={task}
                            active={this.state.activeId === task.id}
                            activateFunc={this.setActiveTask}
                            snoozeThisTaskCb={this.snoozeThisTask}
                            unSnoozeThisTaskCb={this.unSnoozeThisTask}
                            mutateTaskWithActionCb={this.mutateTaskWithAction}

                        />
                    )}
                    </div>
                </Paper>
            </div>
        )
    }
}


export default TasksContainer;
