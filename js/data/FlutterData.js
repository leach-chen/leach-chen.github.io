var hostflutter = "https://www.leachchen.com/storeflutter1/"

var co= require('./Constant.js');

var dataList = []


var adminname = "admin"
var adminurl =""

var fullFlutterDataList = [
  //{thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Flutter",type:co.FLUTTER_T_FULL,author:"leach-chen",authorurl:"",repo:"blog",fromauthor:"admin",fromauthorurl:"",from:co.FROM_GITHUB,sold:true},

 {
  thumbUrl: hostflutter+"1/t_flutter1_20190303.jpg",
  previewUrl: hostflutter+"1/p_flutter1_20190303.gif",
  downloadUrl: "https://codeload.github.com/alibaba/flutter-go/zip/master",
  description:"阿里Flutter学习项目，组件丰富",
  type:co.T_FLUTTER_FULL,
  author:"alibaba",
  authorurl:"https://github.com/alibaba/",
  repo:"flutter-go",
  fromauthor:adminname,
  fromauthorurl:adminurl,
  from:co.FROM_GITHUB,
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
