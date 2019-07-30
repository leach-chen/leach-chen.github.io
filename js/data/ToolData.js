var host = "https://www.leachchen.com/storetool1/"

var co= require('./Constant.js');

var dataList = []

var adminname = "admin"
var adminurl =""

var fullPracticalDataList = [
  //{thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Tool",type:co.T_TOOL_FULL,author:"leach-chen",authorurl:"",gitrepo:"blog",byauthor:"admin",byauthorurl:"",from:co.FROM_GITHUB,sold:true},
  {
    thumbUrl: host+"1/tool1_1_t.jpg",
    previewUrl: host+"1/tool1_1_p.gif",
    downloadUrl: "https://atom.io/",
    description:"强大的ATOM编辑器，支持多种语言，插件丰富，推荐使用",
    type:co.T_TOOL_FULL,
    author:"",
    authorurl:"https://atom.io/",
    gitauthor:"atom",
    gitrepo:"atom",
    byauthor:adminname,
    byauthorurl:adminurl,
    sold:true
  },
];


function getToolAllData()
{
  dataList = fullPracticalDataList
  return dataList
}

export
{
  fullPracticalDataList,
  getToolAllData
}