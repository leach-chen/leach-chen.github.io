var host = "https://www.leachchen.com/storeh5game1/"

var co= require('./Constant.js');

var dataList = []

var t_imagepreviewhost="http://www.leachchen.com/storeimgpre1/game/thumb/"
var p_imagepreviewhost="http://www.leachchen.com/storeimgpre1/game/preview/"

var adminname = "admin"
var adminurl =""

var shootGameDataList = [
 // {thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Game",type:co.GAME_T_FULL,author:"leach-chen",authorurl:"",repo:"blog",fromauthor:"admin",fromauthorurl:"",from:co.FROM_GITHUB,sold:true},
      {
        thumbUrl: t_imagepreviewhost+"t_game1_20190303.jpg",
        previewUrl: host+"1/flappy/",
        downloadUrl: host+"1/flappy.zip",
        originalUrl:"",
        description:"H5 Flappy Bird",
        type:co.T_GAME_DEFAULT,
        author:"html5tricks",
        authorurl:"https://www.html5tricks.com/",
        repo:"",
        fromauthor:adminname,
        fromauthorurl:adminurl,
        from:co.FROM_DEFAULT,
        sold:true
      }, 
];


function getGameAllData()
{
  dataList = shootGameDataList
  return dataList
}

export
{
  shootGameDataList,
  getGameAllData
}
