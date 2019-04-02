import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
class DeleteTask extends Component {

    render() {
        return (
            <Modal show={this.props.delete_task_modal} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Task</Modal.Title>
                </Modal.Header>
                <form onSubmit={this.props.handleDeleteTaskForm} id={this.props.id}>
                    <Modal.Body>
                        <div className="form-group">
                            {/*<textarea readOnly
                                id={this.props.id}
                                name="taskItemText"
                                type="text"
                                className="form-control"
                                placeholder="Enter your awesome task"
                                defaultValue={this.props.task}
                            />*/}
                            <p>Do you want to delete the task</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="btn-container">
                            <button className="btn btn-danger" id="add_task" type="submit">Delete Task</button>
                        </div>
                    </Modal.Footer>
                </form>
            </Modal>
        );
    }
}
export default DeleteTask;