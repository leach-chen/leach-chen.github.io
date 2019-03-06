var hosth5game = "https://www.leachchen.com/storeh5game1/"

var co= require('./Constant.js');

var dataList = []


var adminname = "admin"
var adminurl =""

var shootGameDataList = [
 // {thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Game",type:co.GAME_T_FULL,author:"leach-chen",authorurl:"",repo:"blog",fromauthor:"admin",fromauthorurl:"",from:co.FROM_GITHUB,sold:true},
      {
        thumbUrl: hosth5game+"1/storeh5game1_1_t_20190303.jpg",
        previewUrl: hosth5game+"1/storeh5game1_1_p_flappy/",
        downloadUrl: hosth5game+"1/storeh5game1_1_d_flappy.zip",
        originalUrl:"",
        description:"Flappy Bird 试试能得多少分",
        type:co.T_GAME_DEFAULT,
        author:"html5tricks",
        authorurl:"https://www.html5tricks.com/",
        repo:"",
        fromauthor:adminname,
        fromauthorurl:adminurl,
        from:co.FROM_DEFAULT,
        sold:true
      }, 
      {
        thumbUrl: hosth5game+"2/storeh5game1_2_t_20190304.jpg",
        previewUrl: hosth5game+"2/storeh5game1_2_p_fruit/",
        downloadUrl: hosth5game+"2/storeh5game1_2_d_fruit.zip",
        originalUrl:"https://www.html5tricks.com/html5-fruit-ninja.html",
        description:"经典切水果游戏",
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
