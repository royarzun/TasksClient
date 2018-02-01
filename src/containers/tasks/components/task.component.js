import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';

import SnoozingButton from './snoozing-button.component';
import TaskDetails from './task-details.component';

import {
    red500,
} from 'material-ui/styles/colors';
import moment from 'moment'


const style = {
    list: {
        itemHeader: {padding: '5px 0px 15px'},
        item: {padding: 0}
    },
    error: {
        p: {
            color: red500,
            textAlign: 'justify'
        }
    }
};
moment.locale('es');


export default class Task extends Component {

    constructor(props) {
        super(props);

        this.state = {
            snoozed: this.props.taskDetail.is_snoozed,
            nodge: false,
            panelDepth: 0,
            expanded: false,
            action: undefined,
            hasErrors: false
        };
    };

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.snoozed !== this.props.taskDetail.is_snoozed)
            this.setState({snoozed: this.props.taskDetail.is_snoozed});
        if (prevProps.active && !this.props.active)
            this.setState({panelDepth: 0});
        if (this.props.active && !prevProps.active)
            this.setState({panelDepth: 2});
    };

    activate = id => {
        this.props.activateFunc(id);
        this.setState({panelDepth: 3});
    };

    render() {
        const task = this.props.taskDetail;

        return (
            <Paper
                onClick={() => this.activate(task.id)}
                zDepth={this.state.panelDepth}
                className={this.state.snoozed
                    ? 'task-snoozed'
                    : `task-wrapper ${task.workflow.priority <= 100 ? " high-priority": ""}`}
            >
                <List>
                    <ListItem
                        disabled={true}
                        innerDivStyle={style.list.itemHeader}
                    >
                        <div
                            className={task.workflow.priority <= 100 ? "task-creation-date-high-priority" : "task-creation-date"}
                        >{moment.utc(this.props.taskDetail.created).local().format('LLL')}</div>
                        <b>#{task.id} - {task.workflow.name}</b>
                        <div className="task-snoozed-drop" >
                        {task.workflow.snoozing.length > 0 || this.state.snoozed ?
                            <SnoozingButton
                                isSnoozed={this.state.snoozed}
                                snoozedSlots={this.task.snoozing}
                                snoozeTaskCb={this.snoozeTask}
                                unSnoozeTaskCb={this.unSnoozeTask}/> : ''}
                        </div>
                    </ListItem>
                    {this.props.active
                        ? <ListItem innerDivStyle={style.list.item} disabled={true}>
                            <TaskDetails detail={task.workflow.description}/>
                            {this.state.hasErrors ?
                                <p className="task-p-error">
                                    {this.state.hasErrors}
                                </p> : <div/>
                            }
                        </ListItem> : <div />
                    }
                    {this.state.snoozed ? '' :
                        !this.props.active ? '' :
                        <div>
                            <ListItem innerDivStyle={style.list.item} disabled={true}>
                                Action
                            </ListItem>
                        </div>
                    }
                </List>
            </Paper>
        );
    };
}
