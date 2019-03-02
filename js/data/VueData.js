var host = "https://www.leachchen.com/h5website/"

var co= require('./Constant.js');

var dataList = []

var fullVueDataList = [
  {
    thumbUrl: require("../../img/vue/vue00001.png"),
    previewUrl: "http://panjiachen.github.io/vue-element-admin",
    downloadUrl: "https://codeload.github.com/PanJiaChen/vue-element-admin/zip/master",
    description:"完整的Vue后台管理系统",
    type:co.VUE_T_FULL,
    author:"PanJiaChen",
    authorurl:"",
    repo:"vue-element-admin",
    fromauthor:"admin",
    fromauthorurl:"",
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