const explorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
    res.json({message: "FizzBuzz API Welcome!"});
});

app.get("/v1/explorers/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersInMission = explorerController.getExplorersByMission(mission);
    res.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersAmountInMission = explorerController.getExplorersAmountByMission(mission);
    res.json({mission:req.params.mission, amountOfExplorers:explorersAmountInMission});
});

app.get("/v1/explorers/usernames/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersUsernamesInMission = explorerController.getExplorersUsernamesByMission(mission);
    res.json({mission:req.params.mission, usernameOfExplorers:explorersUsernamesInMission});
});

app.get("/v1/fizzbuzz/:number", (req, res) => {
    const number = req.params.number;
    const trickOfNumber = explorerController.getValidationInNumber(number);
    res.json({score:req.params.number, trick:trickOfNumber});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});
