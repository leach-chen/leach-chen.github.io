var css1= require('./data_website_css1.js');
var jekyll1= require('./data_website_jekyll1.js');
var hexo1= require('./data_website_hexo1.js');
var php1= require('./data_website_php1.js');


function getWebsiteAll()
{
    return getWebsiteCss().concat(getWebsiteJekyll()).concat(getWebsiteHexo()).concat(getWebsitePhp())
}

function getWebsiteCss()
{
    return css1.website_css1
}


function getWebsiteJekyll()
{
    return jekyll1.website_jekyll1
}


function getWebsiteHexo()
{
    return hexo1.website_hexo1
}

function getWebsitePhp()
{
    return php1.website_php1
}

export
{
    getWebsiteAll,
    getWebsiteCss,
    getWebsiteJekyll,
    getWebsiteHexo,
    getWebsitePhp
}