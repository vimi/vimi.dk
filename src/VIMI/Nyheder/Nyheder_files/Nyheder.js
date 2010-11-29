// Created by iWeb 3.0.2 local-build-20100922

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:3,offset:new IWPoint(0.0000,0.0000),color:'#463c3c',opacity:1.000000}),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#463c3c',opacity:0.800000}),stroke_0:new IWPhotoFrame([IWCreateImage('Nyheder_files/Freestyle_01.png'),IWCreateImage('Nyheder_files/Freestyle_02.png'),IWCreateImage('Nyheder_files/Freestyle_03.png'),IWCreateImage('Nyheder_files/Freestyle_06.png'),IWCreateImage('Nyheder_files/Freestyle_09.png'),IWCreateImage('Nyheder_files/Freestyle_08.png'),IWCreateImage('Nyheder_files/Freestyle_07.png'),IWCreateImage('Nyheder_files/Freestyle_04.png')],null,2,0.800000,3.000000,3.000000,3.000000,3.000000,22.000000,24.000000,23.000000,25.000000,166.000000,222.000000,166.000000,222.000000,null,null,null,0.100000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://www.vimi.dk/VIMI/Nyheder/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Nyheder_files/NyhederMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');detectBrowser();fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id2');IMpreload('Nyheder_files','shapeimage_4','0');applyEffects()}
function onPageUnload()
{Widget.onunload();}
