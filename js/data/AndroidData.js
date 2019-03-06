var hostandroid = "https://www.leachchen.com/storeandroid1/"

var co= require('./Constant.js');

var dataList = []


var adminname = "admin"
var adminurl =""

var fullAndroidDataList = [
 // {thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Android",type:co.T_ANDROID_FULL,author:"leach-chen",authorurl:"",repo:"blog",fromauthor:"admin",fromauthorurl:"",from:co.FROM_GITHUB,sold:true},

  {
    thumbUrl: hostandroid+"1/storeandroid1_1_t_20190303.png",
    previewUrl: hostandroid+"1/storeandroid1_1_p_20190303.png",
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


var animationAndroidDataList = [
  // {thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Android",type:co.T_ANDROID_FULL,author:"leach-chen",authorurl:"",repo:"blog",fromauthor:"admin",fromauthorurl:"",from:co.FROM_GITHUB,sold:true},
 
   {
     thumbUrl: hostandroid+"2/storeandroid1_2_t_20190305.jpg",
     previewUrl: hostandroid+"2/storeandroid1_2_p_20190305.gif",
     downloadUrl: "https://codeload.github.com/Airbnb/lottie-android/zip/master",
     description:"airbnb的lottie酷炫动画库",
     type:co.T_ANDROID_ANIMATION,
     author:"Airbnb",
     authorurl:"https://github.com/airbnb",
     repo:"lottie-android",
     fromauthor:adminname,
     fromauthorurl:adminurl,
     from:co.FROM_GITHUB,
     sold:true
   },
 ];



function getAndroidAllData()
{
  dataList = fullAndroidDataList.concat(animationAndroidDataList)
  return dataList
}

export
{
  getAndroidAllData,
  fullAndroidDataList,
  animationAndroidDataList
}
