var androidData= require('./AndroidData.js');
var iosData= require('./IosData.js');
var flutterData= require('./FlutterData.js');
var h5Data= require('./H5Data.js');
var vueData= require('./VueData.js');
var gameData= require('./GameData.js');
var toolData= require('./ToolData.js');

/*******************Android数据***********************/
function getAndroidAllData()
{
    return androidData.getAndroidAllData()
}

function getAndroidFullData()
{
    return androidData.fullAndroidDataList
}

/*******************IOS数据***********************/
function getIosAllData()
{
    return iosData.getIosAllData()
}

function getIosFullData()
{
    return iosData.fullIosDataList
}

/*******************Flutter数据***********************/
function getFlutterAllData()
{
    return flutterData.getFlutterAllData()
}

function getFlutterFullData()
{
    return flutterData.fullFlutterDataList
}


/*******************H5数据***********************/

function getH5AllData()
{
    return h5Data.getH5AllData()
}

function getH5CssData()
{
    return h5Data.cssDataList
}

function getH5JekyllData()
{
    return h5Data.jekyllDataList
}

function getH5HexoData()
{
    return h5Data.hexoDataList
}


function getH5PhpData()
{
    return h5Data.phpDataList
}


/*******************Vue数据***********************/
function getVueAllData()
{
    return vueData.getVueAllData()
}

function getVueFullData()
{
    return vueData.fullVueDataList
}

/*******************Game数据***********************/
function getGameAllData()
{
    return gameData.getGameAllData()
}

function getGameShootData()
{
    return gameData.shootGameDataList
}

/*******************Tool数据***********************/
function getToolAllData()
{
    return toolData.getToolAllData()
}

function getToolPracticalData()
{
    return toolData.fullPracticalDataList
}

export
{
/*******************Android数据***********************/
getAndroidAllData,

getAndroidFullData,
/*******************IOS数据***********************/
getIosAllData,

getIosFullData,

/*******************Flutter数据***********************/
getFlutterAllData,

getFlutterFullData,

/*******************H5数据***********************/

getH5AllData,

getH5CssData,

getH5JekyllData,

getH5HexoData,


getH5PhpData,

/*******************Vue数据***********************/
getVueAllData,

getVueFullData,

/*******************Game数据***********************/
getGameAllData,

getGameShootData,

/*******************Tool数据***********************/
getToolAllData,

getToolPracticalData,
}