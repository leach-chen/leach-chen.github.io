var host = "https://www.leachchen.com/h5website/"

var co= require('./Constant.js');

var dataList = []

var fullVueDataList = [
  {thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Vue",type:co.VUE_T_FULL,sold:true},
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