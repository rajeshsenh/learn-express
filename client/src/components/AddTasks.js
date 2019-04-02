import React, { Component } from 'react'; 
import { Modal } from 'react-bootstrap';

class AddTasks extends Component {
 
  	render() {
	  	return (
	    	<Modal show={this.props.add_task_modal} onHide={this.props.handleClose}>
	            <Modal.Header closeButton>
	                <Modal.Title>Add Task</Modal.Title>
	            </Modal.Header>
	            <form onSubmit={this.props.handleAddTaskForm}>
	                <Modal.Body>
	                    <div className="form-group">
	                        <input 
	                            type="text" 
	                            className="form-control"
	                            name="taskItemText" 
	                            onChange= {this.props.handleChangeEvent}
	                            placeholder="Enter your awesome task" />
	                    </div>
	                    <div>
	                        <div className="form-check form-check-inline">
	                            <input 
	                                className="form-check-input" 
	                                name ="categoryText" 
	                                type="radio"  
	                                id="add_home_tag" 
	                                onChange= {this.props.handleChangeEvent}
	                                value="home" />
	                            <label className="form-check-label" htmlFor="add_home_tag">HOME</label>
	                        </div>
	                        <div className="form-check form-check-inline">
	                            <input 
	                                className="form-check-input" 
	                                type="radio" 
	                                name ="categoryText" 
	                                id="add_office_tag" 
	                                onChange= {this.props.handleChangeEvent}
	                                value="office" />
	                            <label className="form-check-label" htmlFor="add_office_tag">OFFICE</label>
	                        </div>
	                        <div className="form-check form-check-inline">
	                            <input 
	                                className="form-check-input" 
	                                type="radio" 
	                                name ="categoryText" 
	                                id="add_buylist_tag" 
	                                onChange= {this.props.handleChangeEvent}
	                                value="buylist" />
	                            <label className="form-check-label" htmlFor="add_buylist_tag">BUYLIST</label>
	                        </div>
	                    </div>
	                </Modal.Body>
	                <Modal.Footer>
	                    <div className="btn-container">
	                        <button 
	                            type="submit" 
	                            className="btn btn-success " 
	                            id="add_task"
	                           // onClick={this.handleAddTaskItem}
	                        >Add Task</button>
	                    </div>                
	                </Modal.Footer>
	            </form>
	        </Modal>
	  	);
  	}
}

export default AddTasks;
