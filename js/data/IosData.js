var host = "https://www.leachchen.com/h5website/"

var co= require('./Constant.js');

var dataList = []

var t_imagepreviewhost="http://www.leachchen.com/imagepreview/ios/thumb/"
var p_imagepreviewhost="http://www.leachchen.com/imagepreview/ios/preview/"

var fullIosDataList = [
 // {thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Ios",type:co.IOS_T_FULL,author:"leach-chen",authorurl:"",repo:"blog",fromauthor:"admin",fromauthorurl:"",from:co.FROM_GITHUB,sold:true},

 {
  thumbUrl: t_imagepreviewhost+"t_ios1_20190303.jpg",
  previewUrl: p_imagepreviewhost+"p_ios1_20190303.jpg",
  downloadUrl: "https://codeload.github.com/Aufree/ESTMusicPlayer/zip/master",
  description:"一款IOS音乐播放器",
  type:co.VUE_T_FULL,
  author:"Aufree",
  authorurl:"",
  repo:"ESTMusicPlayer",
  fromauthor:"admin",
  fromauthorurl:"",
  from:co.FROM_GITHUB,
  sold:true
},
];


function getIosAllData()
{
  dataList = fullIosDataList
  return dataList
}

export
{
  fullIosDataList,
  getIosAllData
}