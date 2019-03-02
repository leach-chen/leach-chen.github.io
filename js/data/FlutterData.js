var host = "https://www.leachchen.com/h5website/"

var co= require('./Constant.js');

var dataList = []

var fullFlutterDataList = [
  {thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Flutter",type:co.FLUTTER_T_FULL,author:"leach-chen",authorurl:"",repo:"blog",fromauthor:"admin",fromauthorurl:"",from:co.FROM_GITHUB,sold:true},
];


function getFlutterAllData()
{
  dataList = fullFlutterDataList
  return dataList
}

export
{
  fullFlutterDataList,
  getFlutterAllData
}
