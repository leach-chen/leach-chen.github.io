function isPhone()
{
    var ua = navigator.userAgent;

    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),

    isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),

    isAndroid = ua.match(/(Android)\s+([\d.]+)/),

    isMobile = isIphone || isAndroid;

    //判断

    if(isMobile){
        return true;
    }else{
        return false;
    }
    return false;
}


export
{
    isPhone
}
