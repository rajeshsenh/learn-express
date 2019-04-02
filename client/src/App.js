import React, { Component } from 'react';
import './App.css';

import AddTasks from "./components/AddTasks";
import EditTasks from "./components/EditTasks";
import DeleteTask from "./components/DeleteTasks";
import ListItem from "./components/ListItem";

class App extends Component {

    constructor(props) {
        super(props);

        this.handleAddTaskModal = this.handleAddTaskModal.bind(this);
        this.handleEditTaskModal = this.handleEditTaskModal.bind(this);
        this.handleDeleteTaskModal = this.handleDeleteTaskModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleAddTaskForm = this.handleAddTaskForm.bind(this);
        this.handleChangeEvent = this.handleChangeEvent.bind(this);

        this.state = {
            /*todo_data : [
                 {
                     taskItemText: "Write A Detailed Mock of the Screen",
                     categoryText: "office"
                 }, 
                 {
                     taskItemText: "Divide The App Into Components",
                     categoryText: "office"
                 }, 
                 {
                     taskItemText: "List State and Actions For Each Component",
                     categoryText: "office"
                 }, 
                 {
                     taskItemText: "Create Action Creators For Each Action",
                     categoryText: "office"
                 }, 
                 {
                     taskItemText: "Write Reducers For Each Action",
                     categoryText: "office"
                 }, 
                 {
                     taskItemText: "Implement Every Presentational Component",
                     categoryText: "office"
                 }, 
                 {
                     taskItemText: "Create Container Component For Some/All Presentational Component",
                     categoryText: "office"
                 }, 
                 {
                     taskItemText: "Finally Bring Them All Together",
                     categoryText: "office"
                 }
             ],*/
            todo_data : [],
            add_task_modal: false,
            edit_task_modal: false,
            delete_task_modal: false,

            taskItemText: '',
            categoryText: '',
            id: ''
        };
    }

    componentDidMount() {
        setTimeout(() =>{
            fetch('/gettaskstodisplay', {
                    method: "GET"
                })
                .then((resp) => {
                    return resp.json();
                })
                .then((data) => {
                    let arr = [...data];
                    console.log("db_data: ", arr)
                    this.setState({todo_data: arr});
                })
                .catch((err) => {
                    console.log(err);
                });
            },3000);
    }

    handleClose() {
        this.setState({
            show: false,
            add_task_modal: false,
            edit_task_modal: false,
            delete_task_modal: false
        });
    }

    handleChangeEvent(e) {
    }

    handleAddTaskForm(e) {
        e.preventDefault();
        this.setState({ todo_data: [...this.state.todo_data, e.target.taskItemText.value] });
        //console.log('taskItemText::- ' + e.target.taskItemText.value + " categoryText ::- " + e.target.categoryText.value);
        this.setState({ add_task_modal: false });
    }

    handleEditTaskForm(e) {
        e.preventDefault();
        console.log(e.target.taskItemText.id + " " + e.target.taskItemText.value);

        const newItem = e.target.taskItemText.value, newId = e.target.taskItemText.id;

        const new_todo_data = [];
        new_todo_data[newId] = newItem
        this.setState({
            new_todo_data: [...this.state.todo_data, newItem],
            todo_data: new_todo_data,
            edit_task_modal: false
        });
    }

    handleDeleteTaskForm(e) {
        e.preventDefault();
        console.log(e.target.id)
        let id_of_record = e.target.id;
        fetch('/deletetaks' , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 'deleterecordid' : id_of_record }) 
        })
        .then( ( resp ) => {
            console.log( resp.body );
            //$('.chiostaskblock__maintasklist > li[data-database-id='+ id_of_record +']').remove();       
        })
        .catch( ( err ) => {
            console.log( err );                
        });
    }

    handleAddTaskModal() {
        this.setState({ add_task_modal: true });
    }

    handleEditTaskModal(e) {
        this.setState({ edit_task_modal: true });
        //console.log('Edit task modal start')
        //console.log(e.target.id);
        this.setState({
            taskItemText: this.state.todo_data[e.target.id],
            id: e.target.id
        })
    }

    handleDeleteTaskModal(e) {
        this.setState({ delete_task_modal: true });
        console.log(e.target.id);
        this.setState({
          id: e.target.id  
        })
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron shadow p-3 mb-5 bg-white rounded">
                        <h4 className="text-center">YOUR TASKS</h4>
                        <div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="sort_catg"
                                    id="home_tag"
                                    value="home" />
                                <label className="form-check-label" htmlFor="home_tag">HOME</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="sort_catg"
                                    id="office_tag"
                                    value="office" />
                                <label className="form-check-label" htmlFor="office_tag">OFFICE</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="sort_catg"
                                    id="buylist_tag"
                                    value="buylist" />
                                <label className="form-check-label" htmlFor="buylist_tag">BUYLIST</label>
                            </div>
                        </div>
                        <div className="list-container">
                            <ListItem
                                handleEditTaskModal={this.handleEditTaskModal}
                                handleDeleteTaskModal={this.handleDeleteTaskModal}
                                handleClose={this.handleClose}
                                edit_task_modal={this.state.edit_task_modal}
                                delete_task_modal={this.state.delete_task_modal}
                                todo_data={this.state.todo_data}
                            />
                        </div>
                        <div className="btn-container">
                            <button
                                type="button"
                                className="btn btn-primary"
                                id="add_task"
                                onClick={this.handleAddTaskModal}
                            >Add Task</button>
                        </div>
                    </div>

                    <AddTasks
                        add_task_modal={this.state.add_task_modal}
                        handleClose={this.handleClose}
                        handleAddTaskForm={this.handleAddTaskForm}
                        handleChangeEvent={this.handleChangeEvent}
                    />
                    <EditTasks
                        edit_task_modal={this.state.edit_task_modal}
                        handleClose={this.handleClose}
                        taskItemText={this.state.taskItemText}
                        handleEditTaskForm={this.handleEditTaskForm}
                        id={this.state.id}
                    />

                    <DeleteTask
                        delete_task_modal={this.state.delete_task_modal}
                        handleClose={this.handleClose}
                        taskItemText={this.state.taskItemText}
                        id={this.state.id}
                        handleDeleteTaskForm={this.handleDeleteTaskForm}
                    />
                </div>
            </div>
        );
    }
}

export default App;
