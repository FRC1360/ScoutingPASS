var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "checkboxAs": "10",
  "betting": [
    {
      "name": "Member Initials",
      "code": "bm",
      "type": "text",
      "size": 5,
      "maxSize": 5,
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
  ]
}`;
qr = new QRCode(document.getElementById("qrcode"), options)

