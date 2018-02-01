import React, {Component} from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/header.component';
import TasksContainer from './containers/tasks';

import './tasks-client.css';


const muiTheme = getMuiTheme({
    fontFamily: 'Avenir Next, Avenir, sans-serif',
    menuItem: {
        height: 40
    },
    canvasColor: "white",
    toolbar: {
        backgroundColor: "white"
    },
    paper: {
        container: {
            borderRadius: "25px"
        }
    }
});

class TasksClient extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showingSnoozed: true,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.data !== nextProps.data) {
            clearTimeout(this.timeout);
            // Optionally do something with data
            if (!nextProps.isFetching) this.startPoll();
        }
    }

    componentWillMount() {

    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    startPoll = () => {
        this.timeout = setTimeout(() => this.props.dataActions.dataFetch(), 60000);
    };

    toggleSnoozedTasks = () => this.setState({showingSnoozed: !this.state.showingSnoozed});

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="main">
                    <Header
                        user={this.props.user}
                        showingSnoozed={this.state.showingSnoozed}
                        toggleFunc={this.toggleSnoozedTasks}
                    />
                    <TasksContainer showingSnoozed={this.state.showingSnoozed} tasks={this.props.tasks}/>
                    <div className="fadeout"/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default TasksClient;
