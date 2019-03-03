var host = "https://www.leachchen.com/h5website/"

var co= require('./Constant.js');

var dataList = []

var t_imagepreviewhost="http://www.leachchen.com/imagepreview/flutter/thumb/"
var p_imagepreviewhost="http://www.leachchen.com/imagepreview/flutter/preview/"

var fullFlutterDataList = [
  //{thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Flutter",type:co.FLUTTER_T_FULL,author:"leach-chen",authorurl:"",repo:"blog",fromauthor:"admin",fromauthorurl:"",from:co.FROM_GITHUB,sold:true},

 {
  thumbUrl: t_imagepreviewhost+"t_flutter1_20190303.jpg",
  previewUrl: p_imagepreviewhost+"p_flutter1_20190303.gif",
  downloadUrl: "https://codeload.github.com/alibaba/flutter-go/zip/master",
  description:"阿里Flutter学习项目，组件丰富",
  type:co.VUE_T_FULL,
  author:"alibaba",
  authorurl:"https://github.com/alibaba/",
  repo:"flutter-go",
  fromauthor:"admin",
  fromauthorurl:"",
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
