var host = "https://www.leachchen.com/storewebsite1/"

var co= require('./Constant.js');

var dataList = []


var adminname = "admin"
var adminurl =""

var cssDataList = [
    //{thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 h5",type:co.T_H5_CSS,author:"leach-chen",authorurl:"",repo:"blog",fromauthor:"admin",fromauthorurl:"",from:co.FROM_GITHUB,sold:true},
    {
        thumbUrl: host+"1/website1_1_t.png",
        previewUrl: host+"1/website1_1_p_highway",
        downloadUrl: host+"1/website1_1_d_highway.zip",
        description:"旅游类型的纯CSS网站",
        type:co.T_H5_CSS,
        author:"模板之家",
        authorurl:"http://www.cssmoban.com",
        repo:"",
        fromauthor:adminname,
        fromauthorurl:adminurl,
        sold:true
      },
];
  
var jekyllDataList = [
    //{thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 JEKYLL",type:co.T_H5_JEKYLL,author:"leach-chen",authorurl:"",repo:"blog",fromauthor:"admin",fromauthorurl:"",from:co.FROM_GITHUB,sold:true},
];

var hexoDataList = [
    //{thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 HEXO",type:co.T_H5_HEXO,author:"leach-chen",authorurl:"",repo:"blog",fromauthor:"admin",fromauthorurl:"",from:co.FROM_GITHUB,sold:true},
];

var phpDataList = [
    //{thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 PHP",type:co.T_H5_PHP,author:"leach-chen",authorurl:"",repo:"blog",fromauthor:"admin",fromauthorurl:"",from:co.FROM_GITHUB,sold:true},
];

function getH5AllData()
{
    dataList = cssDataList.concat(jekyllDataList).concat(hexoDataList).concat(phpDataList)
    return dataList
}


export
{
    cssDataList,
    jekyllDataList,
    hexoDataList,
    phpDataList,
    getH5AllData
}