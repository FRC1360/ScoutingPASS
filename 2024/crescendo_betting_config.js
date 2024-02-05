var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "bettingConfig": "true",
  "prematch": [
    { "name": "Member Name",
      "code": "bm",
      "type": "text",
      "size": 30,
      "maxSize": 30,
      "required": "true"
    },
    { "name": "Bet Amount",
      "code": "ba",
      "type": "counter",
      "required": "true"
    },
    { "name": "Alliance",
      "code": "tpu",
      "type": "radio",
      "required": "true",
      "choices": {
        "s": "Blue<br>",
        "f": "Red<br>"
      } 
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;

