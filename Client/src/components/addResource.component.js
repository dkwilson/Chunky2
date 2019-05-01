import React, { Component } from '../../node_modules/react';

export default class AddResource extends Component {

    constructor(props) {
        super(props);

        this.onChangeResDescription = this.onChangeResDescription.bind(this);
        this.onChangeResLink = this.onChangeResLink.bind(this);
        this.onChangeResPriority = this.onChangeResPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            res_description: '',
            res_link: '',
            res_priority: '',
            res_completed: false
        }
    }

    onChangeResDescription(e) {
        this.setState({
            res_description: e.target.value
        });
    }

    onChangeResLink(e) {
        this.setState({
            res_link: e.target.value
        });
    }

    onChangeResPriority(e) {
        this.setState({
            res_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Res Description: ${this.state.res_description}`);
        console.log(`Res Link: ${this.state.res_link}`);
        console.log(`Res Priority: ${this.state.res_priority}`);
        
        this.setState({
            res_description: '',
            res_link: '',
            res_priority: '',
            res_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Resource</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.res_description}
                                onChange={this.onChangeResDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Link: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.res_link}
                                onChange={this.onChangeResLink}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={this.state.res_priority==='Low'} 
                                    onChange={this.onChangeResPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked={this.state.res_priority==='Medium'} 
                                    onChange={this.onChangeResPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High" 
                                    checked={this.state.res_priority==='High'} 
                                    onChange={this.onChangeResPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Resource" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}