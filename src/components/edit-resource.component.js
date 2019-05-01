import React, { Component } from 'react';
import axios from 'axios';


export default class EditResource extends Component {
    constructor(props) {
        super(props);

        this.onChangeResDescription = this.onChangeResDescription.bind(this);
        this.onChangeResLink = this.onChangeResLink.bind(this);
        this.onChangeResPriority = this.onChangeResPriority.bind(this);
        this.onChangeResCompleted = this.onChangeResCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            res_description: '',
            res_link: '',
            res_priority: '',
            res_completed: false
        }

    }

    componentDidMount() {
        axios.get('http://localhost:4000/resource/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    res_description: response.data.res_description,
                    res_link: response.data.res_link,
                    res_priority: response.data.res_priority,
                    res_completed: response.data.res_completed
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
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

    onChangeResCompleted(e) {
        this.setState({
            res_completed: !this.state.res_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            res_description: this.state.res_description,
            res_link: this.state.res_link,
            res_priority: this.state.res_priority,
            res_completed: this.state.res_completed
        };
        console.log(obj);
        axios.post('http://localhost:4000/resource/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
            <h3 align="center">Update Resource</h3>
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
                <div className="form-check">
                    <input  className="form-check-input"
                            id="completedCheckbox"
                            type="checkbox"
                            name="completedCheckbox"
                            onChange={this.onChangeResCompleted}
                            checked={this.state.res_completed}
                            value={this.state.res_completed}
                            />
                    <label className="form-check-label" htmlFor="completedCheckbox">
                        Completed
                    </label>                        
                </div>

                <br />

                <div className="form-group">
                    <input type="submit" value="Update Resource" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )

    }
}