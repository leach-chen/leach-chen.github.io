var host = "https://www.leachchen.com/h5website/"

var co= require('./Constant.js');

var dataList = []

var t_imagepreviewhost="http://www.leachchen.com/imagepreview/android/thumb/"
var p_imagepreviewhost="http://www.leachchen.com/imagepreview/android/preview/"

var fullAndroidDataList = [
 // {thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Android",type:co.ANDROID_T_FULL,author:"leach-chen",authorurl:"",repo:"blog",fromauthor:"admin",fromauthorurl:"",from:co.FROM_GITHUB,sold:true},

  {
    thumbUrl: t_imagepreviewhost+"t_android1_20190303.png",
    previewUrl: p_imagepreviewhost+"p_android1_20190303.png",
    downloadUrl: "https://codeload.github.com/harjot-oberai/MusicDNA/zip/master",
    description:"一款舒适的音乐播放器",
    type:co.ANDROID_T_FULL,
    author:"harjot-oberai",
    authorurl:"https://github.com/harjot-oberai",
    repo:"MusicDNA",
    fromauthor:"admin",
    fromauthorurl:"",
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
