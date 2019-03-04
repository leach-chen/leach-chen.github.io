var adminhost = "https://www.leachchen.com/"

var co= require('./Constant.js');

var dataList = []

var hostvue="https://www.leachchen.com/storevue1/"

var adminname = "admin"
var adminurl =""

var fullVueDataList = [
  {
    // thumbUrl: require("../../img/vue/vue1.jpg"),
    thumbUrl: hostvue+"1/t_vue1_20190303.jpg",
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