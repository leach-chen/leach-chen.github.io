var host = "https://www.leachchen.com/h5website/"

var co= require('./Constant.js');

var dataList = []

var fullAndroidDataList = [
  {thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Android",type:co.ANDROID_T_FULL,sold:true},
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
