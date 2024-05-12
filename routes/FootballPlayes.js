//Importamos express
const express = require('express');

const router = express.Router();

const RandomPlayers=[
    {
        "id": 1,
        "name": "Lionel Messi",
        "position": "Forward",
        "nationality": "Argentina",
        "age": 34,
        "club": "Paris Saint-Germain",
        "goals": 35
    },
    {
        "id": 2,
        "name": "Cristiano Ronaldo",
        "position": "Forward",
        "nationality": "Portugal",
        "age": 37,
        "club": "Manchester United",
        "goals": 25
      },
      {
        "id": 3,
        "name": "Kevin De Bruyne",
        "position": "Midfielder",
        "nationality": "Belgium",
        "age": 30,
        "club": "Manchester City",
        "assists": 15
      },
      {
        "id": 4,
        "name": "Virgil van Dijk",
        "position": "Defender",
        "nationality": "Netherlands",
        "age": 30,
        "club": "Liverpool",
        "clean_sheets": 18
      },
      {
        "id": 5,
        "name": "Kylian Mbappé",
        "position": "Forward",
        "nationality": "France",
        "age": 23,
        "club": "Paris Saint-Germain",
        "goals": 28
      },
      {
        "id": 6,
        "name": "N'Golo Kanté",
        "position": "Midfielder",
        "nationality": "France",
        "age": 31,
        "club": "Chelsea",
        "tackles": 70
      }
];

router.get('/', (req, res, next)=>{
    res.json({RandomPlayers});
});

router.get('/:pid', (req, res, next)=>{
    console.log(req.params.pid);

    const players = RandomPlayers.find(p=>{
        return p.id == req.params.pid;
    });
    res.json({players});
})

module.exports = router;