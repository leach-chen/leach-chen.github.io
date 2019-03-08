var full1= require('./data_android_full1.js');
var animation1= require('./data_android_animation1.js');

function getAndroidAll()
{
    return getAndroidFull().concat(getAndroidAnimation())
}

function getAndroidFull()
{
    return full1.android_full1
}

function getAndroidAnimation()
{
    return animation1.android_animation1
}

export
{
    getAndroidAll,
    getAndroidFull,
    getAndroidAnimation
}