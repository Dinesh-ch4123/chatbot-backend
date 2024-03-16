const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const stepsFolderPath = path.join(__dirname, 'steps');
const webSteps = path.join(__dirname, 'webSteps');
const productSteps = path.join(__dirname, 'productSteps')




app.use(express.json());

app.use(cors());

//Web steps

app.get('/web/:stepName', (req, res) => {
    const stepName = req.params.stepName;
    const filePath = path.join(webSteps, `${stepName}.json`);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(404).json({ error: 'Step not found' });
        }
        const stepData = JSON.parse(data);
        res.json(stepData);
    });
});


//Product Steps
app.get('/productSteps/:stepNumber', (req, res) => {
    const stepNumber = req.params.stepNumber;
    const filePath = path.join(productSteps, `${stepNumber}.json`);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(404).json({ error: 'Step not found' });
        }
        const stepData = JSON.parse(data);
        res.json(stepData);
    });
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
