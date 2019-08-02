var host = "https://leach-chen.github.io/storevue1/"

var co= require('./Constant.js');

var dataList = []

var adminname = "admin"
var adminurl =""

var fullVueDataList = [
  {
    // thumbUrl: require("../../img/vue/vue1.jpg"),
    thumbUrl: host+"1/vue1_1_t.jpg",
    previewUrl: "http://panjiachen.github.io/vue-element-admin",
    downloadUrl: "https://codeload.github.com/PanJiaChen/vue-element-admin/zip/master",
    description:"完整的Vue后台管理系统",
    type:co.T_VUE_FULL,
    author:"",
    authorurl:"https://github.com/PanJiaChen/",
    gitauthor:"PanJiaChen",
    gitrepo:"vue-element-admin",
    byauthor:adminname,
    byauthorurl:adminurl,
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