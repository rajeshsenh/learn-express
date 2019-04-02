import React, { Component } from 'react'; 
import { Modal } from 'react-bootstrap';

class EditTasks extends Component {

    render() {
        return (
            <Modal show={this.props.edit_task_modal} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>
                <form onSubmit={this.props.handleEditTaskForm}>
                    <Modal.Body>
                            <div className="form-group">
                                <textarea 
                                    type="text" 
                                    name="taskItemText" 
                                    className="form-control" 
                                    id={this.props.id}
                                    placeholder="Enter your awesome task" 
                                    defaultValue={this.props.taskItemText}
                                />
                            </div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input 
                                        className="form-check-input" 
                                        name ="add_catg" type="radio"  
                                        id="add_home_tag" value="home" />
                                    <label className="form-check-label" htmlFor="add_home_tag">HOME</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input 
                                        className="form-check-input" 
                                        type="radio" 
                                        name ="add_catg" 
                                        id="add_office_tag" 
                                        value="office" />
                                    <label className="form-check-label" htmlFor="add_office_tag">OFFICE</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input 
                                        className="form-check-input" 
                                        type="radio" 
                                        name ="add_catg" 
                                        id="add_buylist_tag" 
                                        value="buylist" />
                                    <label className="form-check-label" htmlFor="add_buylist_tag">BUYLIST</label>
                                </div>
                            </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="btn-container">
                            <button 
                                type="submit" 
                                className="btn btn-primary" 
                                id="add_task" onClick={this.handleAddTask}
                            >Save Task</button>
                        </div>
                    </Modal.Footer>
                </form>
            </Modal>
        );
    }
}

export default EditTasks;
