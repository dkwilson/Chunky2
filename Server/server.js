const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const resRoutes = express.Router();
const PORT = 4000;

let Resource = require('./model/res.model');

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://127.0.0.1:27017/resources', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

resRoutes.route('/').get(function(req, res) {
    Resource.find(function(err, resources) {
        if (err) {
            console.log(err);
        } else {
            res.json(resources);
        }
    });
});

resRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Resource.findById(id, function(err, resources) {
        res.json(resources);
    });
});

resRoutes.route('/add').post(function(req, res) {
    let resource = new Resource(req.body);
    resource.save()
        .then(resource => {
            res.status(200).json({'resource': 'resource added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new resource failed');
        });
});

resRoutes.route('/update/:id').post(function(req, res) {
    Resource.findById(req.params.id, function(err, resource) {
        if (!resource)
            res.status(404).send("data is not found");
        else
            resource.res_description = req.body.res_description;
            resource.res_link = req.body.res_link;
            resource.res_priority = req.body.res_priority;
            resource.res_completed = req.body.res_completed;

            resource.save().then(resource => {
                res.json('Resource updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/resource', resRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});