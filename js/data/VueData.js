var adminhost = "https://www.leachchen.com/"

var co= require('./Constant.js');

var dataList = []

var t_imagepreviewhost="https://www.leachchen.com/storeimgpre1/vue/thumb/"
var p_imagepreviewhost="https://www.leachchen.com/storeimgpre1/vue/preview/"

var adminname = "admin"
var adminurl =""

var fullVueDataList = [
  {
    // thumbUrl: require("../../img/vue/vue1.jpg"),
    thumbUrl: t_imagepreviewhost+"t_vue1_20190303.jpg",
    previewUrl: "http://panjiachen.github.io/vue-element-admin",
    downloadUrl: "https://codeload.github.com/PanJiaChen/vue-element-admin/zip/master",
    description:"完整的Vue后台管理系统",
    type:co.T_VUE_FULL,
    author:"PanJiaChen",
    authorurl:"https://github.com/PanJiaChen/",
    repo:"vue-element-admin",
    fromauthor:adminname,
    fromauthorurl:adminurl,
    from:co.FROM_GITHUB,
    sold:true
  },
];


function getVueAllData()
{
  dataList = fullVueDataList
  return dataList
}

export
{
  fullVueDataList,
  getVueAllData
}