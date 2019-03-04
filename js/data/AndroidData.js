var hostandroid = "https://www.leachchen.com/storeandroid1/"

var co= require('./Constant.js');

var dataList = []


var adminname = "admin"
var adminurl =""

var fullAndroidDataList = [
 // {thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Android",type:co.T_ANDROID_FULL,author:"leach-chen",authorurl:"",repo:"blog",fromauthor:"admin",fromauthorurl:"",from:co.FROM_GITHUB,sold:true},

  {
    thumbUrl: hostandroid+"1/t_android1_20190303.png",
    previewUrl: hostandroid+"1/p_android1_20190303.png",
    downloadUrl: "https://codeload.github.com/harjot-oberai/MusicDNA/zip/master",
    description:"一款舒适的音乐播放器",
    type:co.T_ANDROID_FULL,
    author:"harjot-oberai",
    authorurl:"https://github.com/harjot-oberai",
    repo:"MusicDNA",
    fromauthor:adminname,
    fromauthorurl:adminurl,
    from:co.FROM_GITHUB,
    sold:true
  },
];


function getAndroidAllData()
{
  dataList = fullAndroidDataList
  return dataList
}

export
{
  fullAndroidDataList,
  getAndroidAllData
}
