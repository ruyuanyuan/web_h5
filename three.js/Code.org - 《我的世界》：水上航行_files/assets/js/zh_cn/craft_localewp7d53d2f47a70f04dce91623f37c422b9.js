var craft_locale = {lc:{"ar":function(n){
  if (n === 0) {
    return 'zero';
  }
  if (n == 1) {
    return 'one';
  }
  if (n == 2) {
    return 'two';
  }
  if ((n % 100) >= 3 && (n % 100) <= 10 && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 99 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"en":function(n){return n===1?"one":"other"},"bg":function(n){return n===1?"one":"other"},"bn":function(n){return n===1?"one":"other"},"ca":function(n){return n===1?"one":"other"},"cs":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"da":function(n){return n===1?"one":"other"},"de":function(n){return n===1?"one":"other"},"el":function(n){return n===1?"one":"other"},"es":function(n){return n===1?"one":"other"},"et":function(n){return n===1?"one":"other"},"eu":function(n){return n===1?"one":"other"},"fa":function(n){return "other"},"fi":function(n){return n===1?"one":"other"},"fil":function(n){return n===0||n==1?"one":"other"},"fr":function(n){return Math.floor(n)===0||Math.floor(n)==1?"one":"other"},"ga":function(n){return n==1?"one":(n==2?"two":"other")},"gl":function(n){return n===1?"one":"other"},"he":function(n){return n===1?"one":"other"},"hi":function(n){return n===0||n==1?"one":"other"},"hr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"hu":function(n){return "other"},"id":function(n){return "other"},"is":function(n){
    return ((n%10) === 1 && (n%100) !== 11) ? 'one' : 'other';
  },"it":function(n){return n===1?"one":"other"},"ja":function(n){return "other"},"ko":function(n){return "other"},"lt":function(n){
  if ((n % 10) == 1 && ((n % 100) < 11 || (n % 100) > 19)) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 9 &&
      ((n % 100) < 11 || (n % 100) > 19) && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"lv":function(n){
  if (n === 0) {
    return 'zero';
  }
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  return 'other';
},"mk":function(n){return (n%10)==1&&n!=11?"one":"other"},"mr":function(n){return n===1?"one":"other"},"ms":function(n){return "other"},"mt":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || ((n % 100) >= 2 && (n % 100) <= 4 && n == Math.floor(n))) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 19 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"nl":function(n){return n===1?"one":"other"},"no":function(n){return n===1?"one":"other"},"pl":function(n){
  if (n == 1) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || n != 1 && (n % 10) == 1 ||
      ((n % 10) >= 5 && (n % 10) <= 9 || (n % 100) >= 12 && (n % 100) <= 14) &&
      n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"pt":function(n){return n===1?"one":"other"},"ro":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || n != 1 && (n % 100) >= 1 &&
      (n % 100) <= 19 && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"ru":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sk":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"sl":function(n){
  if ((n % 100) == 1) {
    return 'one';
  }
  if ((n % 100) == 2) {
    return 'two';
  }
  if ((n % 100) == 3 || (n % 100) == 4) {
    return 'few';
  }
  return 'other';
},"sq":function(n){return n===1?"one":"other"},"sr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sv":function(n){return n===1?"one":"other"},"ta":function(n){return n===1?"one":"other"},"te":function(n){return n===1?"one":"other"},"th":function(n){return "other"},"tr":function(n){return n===1?"one":"other"},"uk":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"ur":function(n){return n===1?"one":"other"},"vi":function(n){return "other"},"zh":function(n){return "other"}},
c:function(d,k){if(!d)throw new Error("MessageFormat: Data required for '"+k+"'.")},
n:function(d,k,o){if(isNaN(d[k]))throw new Error("MessageFormat: '"+k+"' isn't a number.");return d[k]-(o||0)},
v:function(d,k){craft_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){craft_locale.c(d,k);return d[k] in p?p[d[k]]:(k=craft_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){craft_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).craft_locale = {
"absolute":function(d){return "绝对"},
"agentGenericFailureMessage":function(d){return "继续编码！记得使用吉祥物来帮忙。"},
"agentTooFewBlocksFailureMessage":function(d){return "尝试每次只添加一个方块，来让吉祥物抵达正确的地点。"},
"at":function(d){return "在"},
"agentDiamondPathCongrats":function(d){return "恭喜你找到钻石之路了！您到目前为止已经收集了"+craft_locale.p(d,"count",0,"zh",{"one":"1","other":craft_locale.n(d,"count")})+"颗钻石 ! "},
"blockActionAdd":function(d){return "添加"},
"blockActionAttack":function(d){return "攻击"},
"blockActionClone":function(d){return "复制模块"},
"blockActionCloneFiltered":function(d){return "仅复制"},
"blockActionCollect":function(d){return "收集"},
"blockActionCollectAll":function(d){return "收集所有"},
"blockActionDestroyEntity":function(d){return "消失"},
"blockActionDetect":function(d){return "检测"},
"blockActionDetectRedstone":function(d){return "检测红石"},
"blockActionDrop":function(d){return "掉落"},
"blockActionDropAll":function(d){return "丢弃所有的"},
"blockActionExecute":function(d){return "执行命令"},
"blockActionExplodeEntity":function(d){return "爆炸"},
"blockActionFill":function(d){return "填充"},
"blockActionFlashEntity":function(d){return "闪烁"},
"blockActionGetItemCount":function(d){return "获取物品数量"},
"blockActionGetItemCountInSlotNumber":function(d){return "获得槽号中的物品数量"},
"blockActionGetItemDetail":function(d){return "获得物品的详情"},
"blockActionGetItemDetailInSlotNumber":function(d){return "获得槽号中的物品信息"},
"blockActionGetItemSpace":function(d){return "获得物品的空间"},
"blockActionGetItemSpaceInSlotNumber":function(d){return "获得槽号中的物品空间"},
"blockActionGive":function(d){return "给"},
"blockActionInspect":function(d){return "查看"},
"blockActionInspectData":function(d){return "查看数据"},
"blockActionKill":function(d){return "杀死目标"},
"blockActionMove":function(d){return "移动"},
"blockActionMoveAway":function(d){return "远离"},
"blockActionMoveForward":function(d){return "向前移动"},
"blockActionMoveRandom":function(d){return "随机移动"},
"blockActionMoveTo":function(d){return "移动至"},
"blockActionMoveToward":function(d){return "向目标移动一步"},
"blockActionPlaySound":function(d){return "播放声音"},
"blockActionRepeat":function(d){return "重复"},
"blockActionRepeatRandom":function(d){return "重复随机"},
"blockActionSetBlock":function(d){return "设置模块"},
"blockActionSpawn":function(d){return "生成"},
"blockActionSummon":function(d){return "召唤"},
"blockActionTeleport":function(d){return "传送目标"},
"blockActionTeleportToPlayer":function(d){return "传送到玩家"},
"blockActionTestForBlock":function(d){return "测试模块类型"},
"blockActionTestForBlocks":function(d){return "测试模式"},
"blockActionToScore":function(d){return "得分"},
"blockActionTransfer":function(d){return "传输"},
"blockActionWait":function(d){return "等待"},
"blockActionWith":function(d){return "与"},
"blockData":function(d){return "模块数据"},
"blockDestroyBlock":function(d){return "摧毁方块"},
"blockIf":function(d){return "如果"},
"blockIfLavaAhead":function(d){return "如果前面有熔岩"},
"blockIs":function(d){return "是"},
"blockMove":function(d){return "移动"},
"blockMoveBackward":function(d){return "向后移动"},
"blockMoveForward":function(d){return "向前移动"},
"blockPlace":function(d){return "放置"},
"blockPlaceTorch":function(d){return "放下火把"},
"blockPlaceXAheadAhead":function(d){return "前面"},
"blockPlaceXAheadPlace":function(d){return "放置"},
"blockPlaceXPlace":function(d){return "放置"},
"blockPlantCrop":function(d){return "种植作物"},
"blockShear":function(d){return "修剪"},
"blockTill":function(d){return "直到"},
"blockTillSoil":function(d){return "耕地"},
"blockTurn":function(d){return "转向"},
"blockTurnLeft":function(d){return "向左转"},
"blockTurnRight":function(d){return "向右转"},
"blockType":function(d){return "方块类型"},
"blockTypeBedrock":function(d){return "基岩"},
"blockTypeBricks":function(d){return "方块"},
"blockTypeClay":function(d){return "粘土块"},
"blockTypeClayHardened":function(d){return "带釉陶瓦"},
"blockTypeCobblestone":function(d){return "圆石"},
"blockTypeDirt":function(d){return "泥土"},
"blockTypeDirtCoarse":function(d){return "砂土"},
"blockTypeDoorIron":function(d){return "铁门"},
"blockTypeEmpty":function(d){return "空"},
"blockTypeFarmlandWet":function(d){return "耕地"},
"blockTypeGlass":function(d){return "玻璃"},
"blockTypeGlowstone":function(d){return "荧石"},
"blockTypeGrass":function(d){return "草"},
"blockTypeGravel":function(d){return "砂砾"},
"blockTypeIce":function(d){return "冰"},
"blockTypeLava":function(d){return "熔岩"},
"blockTypeLogAcacia":function(d){return "金合欢原木"},
"blockTypeLogBirch":function(d){return "桦树木"},
"blockTypeLogJungle":function(d){return "丛林木"},
"blockTypeLogOak":function(d){return "橡树木"},
"blockTypeLogSpruce":function(d){return "云杉木"},
"blockTypeNetherBrick":function(d){return "地狱砖"},
"blockTypeNetherrack":function(d){return "地狱岩"},
"blockTypeOreCoal":function(d){return "煤矿石"},
"blockTypeOreDiamond":function(d){return "钻石矿石"},
"blockTypeOreEmerald":function(d){return "绿宝石矿石"},
"blockTypeOreGold":function(d){return "金矿石"},
"blockTypeOreIron":function(d){return "铁矿石"},
"blockTypeOreLapis":function(d){return "青金石矿石"},
"blockTypeOreRedstone":function(d){return "红石矿石"},
"blockTypePlanksAcacia":function(d){return "金合欢木板"},
"blockTypePlanksBirch":function(d){return "桦木板"},
"blockTypePlanksJungle":function(d){return "丛林木板"},
"blockTypePlanksOak":function(d){return "橡木板"},
"blockTypePlanksSpruce":function(d){return "云杉木板"},
"blockTypePressurePlateUp":function(d){return "压力板"},
"blockTypeRail":function(d){return "铁轨"},
"blockTypeRailsRedstoneTorch":function(d){return "红石火把"},
"blockTypeRedstoneWire":function(d){return "红石电路"},
"blockTypeSand":function(d){return "沙子"},
"blockTypeSandstone":function(d){return "沙石"},
"blockTypeSnow":function(d){return "雪块"},
"blockTypeStone":function(d){return "石头"},
"blockTypeTnt":function(d){return "TNT"},
"blockTypeTree":function(d){return "树"},
"blockTypeWater":function(d){return "水"},
"blockTypeWool":function(d){return "羊毛"},
"blockTypeWoolBlue":function(d){return "蓝色羊毛"},
"blockTypeWoolMagenta":function(d){return "品红色羊毛"},
"blockTypeWoolOrange":function(d){return "橙色羊毛"},
"blockTypeWoolPink":function(d){return "粉红色羊毛"},
"blockTypeWoolRed":function(d){return "红色羊毛"},
"blockTypeWoolYellow":function(d){return "黄色羊毛"},
"blockWhileXAheadAhead":function(d){return "前面"},
"blockWhileXAheadDo":function(d){return "执行"},
"blockWhileXAheadWhile":function(d){return "当"},
"cancel":function(d){return "取消"},
"cloneMode":function(d){return "克隆模式"},
"cloneModeForce":function(d){return "强制"},
"cloneModeMove":function(d){return "移动"},
"cloneModeNormal":function(d){return "正常"},
"connectToCodeConnection":function(d){return "在《我的世界：教育版》中运行这个项目，请使用代码连接程序。"},
"destination":function(d){return "目的"},
"directionBack":function(d){return "返回"},
"directionDown":function(d){return "向下"},
"directionForward":function(d){return "前进"},
"directionLeft":function(d){return "向左"},
"directionMiddle":function(d){return "中"},
"directionRight":function(d){return "向右"},
"directionUp":function(d){return "向上"},
"downloadButton":function(d){return "下载"},
"entityType":function(d){return "实体类型"},
"entityTypeChicken":function(d){return "鸡"},
"entityTypeCow":function(d){return "牛"},
"entityTypeCreeper":function(d){return "爬行者"},
"entityTypeIronGolem":function(d){return "铁傀儡"},
"entityTypePlayer":function(d){return "玩家"},
"entityTypeSheep":function(d){return "羊"},
"entityTypeZombie":function(d){return "僵尸"},
"eventTypeWhenAttacked":function(d){return "当攻击时"},
"eventTypeWhenDay":function(d){return "当白天时"},
"eventTypeWhenNight":function(d){return "当夜晚时"},
"eventTypeWhenRun":function(d){return "当运行时"},
"eventTypeWhenSpawned":function(d){return "当生成时"},
"eventTypeWhenTouched":function(d){return "当触摸时"},
"eventTypeWhenUsed":function(d){return "当使用时"},
"forever":function(d){return "永远"},
"from":function(d){return "来自"},
"generatedCodeDescription":function(d){return "通过在这个谜题中拖移和放置方块，您便以一种名为 Javascript 的计算机语言创建了一系列的指示。这个代码会告诉计算机在屏幕上显示什么。您在 我的世界 中看到和所做的一切，都是从这样的计算机代码开始的。"},
"getdataof":function(d){return "获得数据"},
"getnameof":function(d){return "获得名字"},
"houseSelectChooseFloorPlan":function(d){return "为您的房子选择平面图。"},
"houseSelectEasy":function(d){return "简单"},
"houseSelectHard":function(d){return "困难"},
"houseSelectLetsBuild":function(d){return "我们来建造一幢房子吧。"},
"houseSelectMedium":function(d){return "中"},
"import":function(d){return "导入"},
"importShareLinkBody":function(d){return "输入你的编程一小时分享链接并点击“导入”将你的代码复制到《我的世界》"},
"importShareLinkHeader":function(d){return "导入一个分享链接"},
"inSlotNumber":function(d){return "在槽位序号"},
"itemTypeBlock":function(d){return "方块"},
"itemTypeDecoration":function(d){return "装饰"},
"itemTypeMiscellaneous":function(d){return "其它"},
"itemTypeTool":function(d){return "工具"},
"items":function(d){return "物品"},
"itemsOfBlockType":function(d){return "物品的方块类型"},
"level10FailureMessage":function(d){return "盖住熔岩走过去，然后在对面开采两个铁方块。"},
"level11FailureMessage":function(d){return "如果前面有熔岩，一定要放置圆石。这样才能让你安全采到这排资源。"},
"level12FailureMessage":function(d){return "一定要采 3 块红石块。这能将你从建造房屋和使用\"如果\"语句避免掉入岩浆中学到的东西组合到一起。"},
"level13FailureMessage":function(d){return "沿着泥土路放置\"铁轨\"，从您门口一路延伸到地图边缘。"},
"level1FailureMessage":function(d){return "您需要使用命令才能走到羊的边上。"},
"level1TooFewBlocksMessage":function(d){return "试试用更多命令，走到羊的边上。"},
"level2FailureMessage":function(d){return "要想砍树，先走到树干边，然后使用\"摧毁方块\"命令。"},
"level2TooFewBlocksMessage":function(d){return "试试用更多命令，砍倒这棵树。先走到树干边，然后使用\"摧毁方块\"命令。"},
"level3FailureMessage":function(d){return "要从两只羊身上采集羊毛，走到每只羊身边，使用\"修剪\"命令。记住使用转向命令，到达羊边。"},
"level3TooFewBlocksMessage":function(d){return "试试用更多命令，从两只羊身上采集羊毛。走到每只羊身边，使用\"修剪\"命令。"},
"level4FailureMessage":function(d){return "您必须对三根树干分别使用\"摧毁方块\"命令。"},
"level5FailureMessage":function(d){return "将方块放在泥土轮廓上，建造一面墙。粉红色的\"重复\"命令会运行放置在其中的命令，比如\"放置方块\"和\"向前移动\"。"},
"level6FailureMessage":function(d){return "将方块放在房屋的泥土轮廓上，就能完成谜题。"},
"level7FailureMessage":function(d){return "使用\"种植\"命令将农作物种植在每块黑色耕地上。"},
"level8FailureMessage":function(d){return "如果您碰到爬行者，它就会爆炸。悄悄绕过它们，进入房屋。"},
"level9FailureMessage":function(d){return "别忘了至少放置 2 个火把，照亮您的路，并至少开采 2 块煤炭。"},
"maskMode":function(d){return "遮盖模式"},
"maskModeMasked":function(d){return "已遮盖"},
"maskModeReplace":function(d){return "替换"},
"minecraftBlock":function(d){return "方块"},
"minecraftNotConnected":function(d){return "《我的世界》未连接"},
"miniBlockBricks":function(d){return "方块"},
"miniBlockBucketLava":function(d){return "岩浆桶"},
"miniBlockBucketWater":function(d){return "水桶"},
"miniBlockCarrots":function(d){return "胡萝卜"},
"miniBlockCoal":function(d){return "煤炭"},
"miniBlockCobblestone":function(d){return "圆石"},
"miniBlockDiamond":function(d){return "钻石"},
"miniBlockDirt":function(d){return "泥土"},
"miniBlockDirtCoarse":function(d){return "砂土"},
"miniBlockEgg":function(d){return "鸡蛋"},
"miniBlockEmerald":function(d){return "绿宝石"},
"miniBlockGravel":function(d){return "砂砾"},
"miniBlockGunPowder":function(d){return "火药"},
"miniBlockIngotGold":function(d){return "金锭"},
"miniBlockIngotIron":function(d){return "铁锭"},
"miniBlockLapisLazuli":function(d){return "青金石"},
"miniBlockLogAcacia":function(d){return "金合欢原木"},
"miniBlockLogBirch":function(d){return "桦树木"},
"miniBlockLogJungle":function(d){return "丛林木"},
"miniBlockLogOak":function(d){return "橡树木"},
"miniBlockLogSpruce":function(d){return "云杉木"},
"miniBlockMilk":function(d){return "牛奶"},
"miniBlockPlanksAcacia":function(d){return "金合欢木板"},
"miniBlockPlanksBirch":function(d){return "桦木板"},
"miniBlockPlanksJungle":function(d){return "丛林木板"},
"miniBlockPlanksOak":function(d){return "橡木板"},
"miniBlockPlanksSpruce":function(d){return "云杉木板"},
"miniBlockPoppy":function(d){return "罂粟"},
"miniBlockPotato":function(d){return "马铃薯"},
"miniBlockRedstoneDust":function(d){return "红石粉"},
"miniBlockSand":function(d){return "沙子"},
"miniBlockSandstone":function(d){return "沙石"},
"miniBlockSheep":function(d){return "羊"},
"miniBlockWheat":function(d){return "小麦"},
"miniBlockWool":function(d){return "羊毛"},
"nextLevelMsg":function(d){return "谜题 "+craft_locale.v(d,"puzzleNumber")+" 已完成。恭喜！"},
"oldBlockHandling":function(d){return "旧方块在"},
"oldBlockHandlingsDestroy":function(d){return "摧毁"},
"oldBlockHandlingsKeep":function(d){return "保持"},
"oldBlockHandlingsReplace":function(d){return "替换"},
"onBehalfOf":function(d){return "代表"},
"playerSelectChooseCharacter":function(d){return "选择您的角色。"},
"playerSelectChooseSelectButton":function(d){return "选择"},
"playerSelectLetsGetStarted":function(d){return "我们开始吧。"},
"quantity":function(d){return "数量"},
"reinfFeedbackMsg":function(d){return "你可以按\"继续游戏\"，返回继续玩游戏。"},
"relative":function(d){return "相对"},
"runAgent":function(d){return "运行吉祥物"},
"score":function(d){return "分数"},
"seconds":function(d){return "秒"},
"selectChooseButton":function(d){return "选择"},
"soundTypeBump":function(d){return "碰撞"},
"soundTypeChickenBawk":function(d){return "鸡咯咯叫"},
"soundTypeChickenHurt":function(d){return "鸡受伤"},
"soundTypeCollectedBlock":function(d){return "方块收集"},
"soundTypeCowHuff":function(d){return "牛发怒"},
"soundTypeCowHurt":function(d){return "牛受伤"},
"soundTypeCowMoo":function(d){return "牛哞哞叫"},
"soundTypeCowMooLong":function(d){return "牛哞哞叫"},
"soundTypeCreeperHiss":function(d){return "爬行者嘶嘶声"},
"soundTypeDig_wood1":function(d){return "木头折断"},
"soundTypeDoorOpen":function(d){return "开门声"},
"soundTypeExplode":function(d){return "爆炸"},
"soundTypeFailure":function(d){return "通关失败"},
"soundTypeFall":function(d){return "摔落"},
"soundTypeFizz":function(d){return "嘶嘶声"},
"soundTypeFuse":function(d){return "导火线"},
"soundTypeIronGolemHit":function(d){return "铁傀儡击打"},
"soundTypeMetalWhack":function(d){return "金属重击"},
"soundTypeMinecart":function(d){return "矿车"},
"soundTypePlaceBlock":function(d){return "放置方块"},
"soundTypePunch":function(d){return "冲击"},
"soundTypeSheepBaa":function(d){return "羊咩咩叫"},
"soundTypeStepFarmland":function(d){return "农田脚步声"},
"soundTypeStepGrass":function(d){return "草地脚步声"},
"soundTypeStepGravel":function(d){return "砂砾脚步声"},
"soundTypeStepStone":function(d){return "石头脚步声"},
"soundTypeStepWood":function(d){return "木头脚步声"},
"soundTypeSuccess":function(d){return "通关成功"},
"soundTypeZombieBrains":function(d){return "僵尸呻吟"},
"soundTypeZombieGroan":function(d){return "僵尸咆哮"},
"soundTypeZombieHurt":function(d){return "僵尸受伤"},
"target":function(d){return "目标"},
"testModeAll":function(d){return "所有"},
"testModeMasked":function(d){return "已遮盖"},
"tileData":function(d){return "平铺数据"},
"timeDay":function(d){return "日"},
"timeLong":function(d){return "长"},
"timeMedium":function(d){return "中"},
"timeNight":function(d){return "夜"},
"timeRandom":function(d){return "随机"},
"timeSet":function(d){return "时间设置"},
"timeShort":function(d){return "短"},
"timeVeryLong":function(d){return "很长"},
"timeVeryShort":function(d){return "很短"},
"to":function(d){return "至"},
"toSlotNumber":function(d){return "到槽位序号"},
"tooManyBlocksFail":function(d){return "谜题 "+craft_locale.v(d,"puzzleNumber")+" 已完成。恭喜！用 "+craft_locale.p(d,"numBlocks",0,"zh",{"one":"1 个方块","other":craft_locale.n(d,"numBlocks")+" 个方块"})+" 也可以完成哦。"},
"turnRandom":function(d){return "随机转向"},
"useArrowKeys":function(d){return "你不需要添加任何模块！用箭头来移动，并且按下空格或点击游戏板来使用项目。"},
"weather":function(d){return "天气"},
"weatherTypeClear":function(d){return "晴朗"},
"weatherTypeRain":function(d){return "下雨"},
"weatherTypeThunder":function(d){return "雷电"}};
