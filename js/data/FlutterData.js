var host = "https://leach-chen.github.io/storeflutter1/"

var co= require('./Constant.js');

var dataList = []


var adminname = "admin"
var adminurl =""

var fullFlutterDataList = [
  //{thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Flutter",type:co.FLUTTER_T_FULL,author:"leach-chen",authorurl:"",gitrepo:"blog",byauthor:"admin",byauthorurl:"",from:co.FROM_GITHUB,sold:true},

 {
  thumbUrl: host+"1/flutter1_1_t.jpg",
  previewUrl: host+"1/flutter1_1_p.gif",
  downloadUrl: "https://codeload.github.com/alibaba/flutter-go/zip/master",
  description:"阿里Flutter学习项目，组件丰富",
  type:co.T_FLUTTER_FULL,
  author:"",
  authorurl:"https://github.com/alibaba/",
  gitauthor:"alibaba",
  gitrepo:"flutter-go",
  byauthor:adminname,
  byauthorurl:adminurl,
  sold:true
},

];


function getFlutterAllData()
{
  dataList = fullFlutterDataList
  return dataList
}

export
{
  fullFlutterDataList,
  getFlutterAllData
}
