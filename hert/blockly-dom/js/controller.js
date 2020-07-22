const runCoder = document.getElementById('runCoder')
const resetCoder = document.getElementById('resetCoder')
const numCoder = document.getElementById('numCoder')
const jsCoder = document.getElementById('jsCoder')
const pyCoder = document.getElementById('pyCoder')

const workspace = Blockly.inject('blocklyDiv',
{
  media: '../../media/',
  toolbox: document.getElementById('toolbox')
})
const xml_txt= '<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox">\n' +
      '          <block type="move_start" disabled="true" movable="false"></block>\n' +
      '        </xml>';
const xml = Blockly.Xml.textToDom(xml_txt);
Blockly.Xml.domToWorkspace(xml, workspace); 

//运行
runCoder.onclick=function(e){
  alert('run')
  
}
//重置
resetCoder.onclick=function(){
  workspace.clear();
  Blockly.Xml.domToWorkspace(xml, workspace);
}
//获取块数
numCoder.onclick=function(){
  
  alert('blocks')
}
//js代码
jsCoder.onclick=function(){
  let code = Blockly.JavaScript.workspaceToCode(workspace);
  console.log(code)
  alert(code)
}
//python代码
pyCoder.onclick=function(){
  let code = Blockly.Python.workspaceToCode(workspace);
  alert(code)
}
