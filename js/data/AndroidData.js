var host = "https://www.leachchen.com/h5website/"

var co= require('./Constant.js');

var dataList = []

var fullAndroidDataList = [
 // {thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Android",type:co.ANDROID_T_FULL,author:"leach-chen",authorurl:"",repo:"blog",fromauthor:"admin",fromauthorurl:"",from:co.FROM_GITHUB,sold:true},

  // {
  //   thumbUrl: require("../../img/vue/vue00001.png"),
  //   previewUrl: "http://panjiachen.github.io/vue-element-admin",
  //   downloadUrl: "https://codeload.github.com/PanJiaChen/vue-element-admin/zip/master",
  //   description:"完整的Vue后台管理系统",
  //   type:co.ANDROID_T_FULL,
  //   author:"PanJiaChen",
  //   authorurl:"",
  //   repo:"vue-element-admin",
  //   fromauthor:"admin",
  //   fromauthorurl:"",
  //   from:co.FROM_GITHUB,
  //   sold:true
  // },
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
