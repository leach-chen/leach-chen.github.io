var host = "https://www.leachchen.com/h5website/"

var co= require('./Constant.js');

var dataList = []

var fullIosDataList = [
  {thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Ios",type:co.IOS_T_FULL,sold:true},
];


function getIosAllData()
{
  dataList = fullIosDataList
  return dataList
}

export
{
  fullIosDataList,
  getIosAllData
}