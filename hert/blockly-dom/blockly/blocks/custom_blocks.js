Blockly.Blocks['move_start'] = {
  init: function() {
    this.jsonInit({
      "message0": '当运行时',
      "nextStatement": "Action",
      "colour": 45,
      "tooltip": "开始移动",
      "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
    });
  }
};
Blockly.Blocks['move_up'] = {
  init: function() {
    this.jsonInit({
      "message0": '向前移动',
      "nextStatement": "Action",
      "previousStatement": "Action",
      "colour": 135,
      "tooltip": "向前移动",
      "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
    });
  }
};
Blockly.Blocks['move_left'] = {
  init: function() {
    this.jsonInit({
      "message0": '向前移动',
      "nextStatement": "Action",
      "colour": 160,
      "tooltip": "Returns number of letters in the provided text.",
      "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
    });
  }
};
