import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Resource = props => (
    <tr>
        <td className={props.resource.res_completed ? 'completed' : ''}>{props.resource.res_description}</td>
        <td className={props.resource.res_completed ? 'completed' : ''}>{props.resource.res_link}</td>
        <td className={props.resource.res_completed ? 'completed' : ''}>{props.resource.res_priority}</td>
        <td>
            <Link to={"/edit/"+props.resource._id}>Edit</Link>
        </td>
    </tr>
)

export default class ResourceList extends Component {
    constructor(props) {
        super(props);
        this.state = {resources: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/resource/')
            .then(response => {
                this.setState({ resources: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    resourceList() {
        return this.state.resources.map(function(currentResource, i){
            return <Resource resource={currentResource} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Resource List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Link</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.resourceList() }
                    </tbody>
                </table>
            </div>
        )
    }
}