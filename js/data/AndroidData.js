var host = "https://www.leachchen.com/storeandroid1/"

var co= require('./Constant.js');

var dataList = []


var adminname = "admin"
var adminurl =""

var fullAndroidDataList = [
 // {thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Android",type:co.T_ANDROID_FULL,author:"leach-chen",authorurl:"",gitrepo:"blog",byauthor:"admin",byauthorurl:"",from:co.FROM_GITHUB,sold:true},

  {
    thumbUrl: host+"1/android1_1_t.png",
    previewUrl: host+"1/android1_1_p.png",
    downloadUrl: "https://codeload.github.com/harjot-oberai/MusicDNA/zip/master",
    description:"一款舒适的音乐播放器",
    type:co.T_ANDROID_FULL,
    author:"",
    authorurl:"https://github.com/harjot-oberai",
    gitauthor:"harjot-oberai",
    gitrepo:"MusicDNA",
    byauthor:adminname,
    byauthorurl:adminurl,
    sold:true
  },
];


var animationAndroidDataList = [
  // {thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Android",type:co.T_ANDROID_FULL,author:"leach-chen",authorurl:"",gitrepo:"blog",byauthor:"admin",byauthorurl:"",from:co.FROM_GITHUB,sold:true},
 
   {
     thumbUrl: host+"2/android1_2_t.jpg",
     previewUrl: host+"2/android1_2_p.gif",
     downloadUrl: "https://codeload.github.com/Airbnb/lottie-android/zip/master",
     description:"airbnb的lottie酷炫动画库",
     type:co.T_ANDROID_ANIMATION,
     author:"",
     authorurl:"https://github.com/airbnb",
     gitauthor:"Airbnb",
     gitrepo:"lottie-android",
     byauthor:adminname,
     byauthorurl:adminurl,
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
