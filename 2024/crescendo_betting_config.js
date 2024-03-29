var config_data = `
{
  "dataFormat": "tsv",
  "title": "Betting PASS 2024",
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
      "code": "ae",
      "type": "radio",
      "required": "true",
      "choices": {
        "Blue": "Blue<br>",
        "Red": "Red<br>"
      } 
    },
    { "name": "Match Number",
      "code": "mn",
      "type": "counter",
      "required": "true"
    },
    { "name": "Competition",
      "code": "cp",
      "type": "radio",
      "required": "true",
      "choices": {
        "Durham2024": "Durham2024<br>",
        "Waterloo2024": "Waterloo2024<br>",
        "DCMP2024": "DCMP2024<br>"
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

