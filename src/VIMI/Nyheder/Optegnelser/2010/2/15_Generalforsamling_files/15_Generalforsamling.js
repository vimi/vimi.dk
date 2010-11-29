// Created by iWeb 3.0.1 local-build-20100222

setTransparentGifURL('../../../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(0.0000,0.0000),color:'#463c3c',opacity:0.600000}),shadow_1:new IWShadow({blurRadius:3,offset:new IWPoint(0.0000,0.0000),color:'#463c3c',opacity:1.000000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{dynamicallyPopulate();loadMozillaCSS('15_Generalforsamling_files/15_GeneralforsamlingMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');fixAllIEPNGs('../../../../Media/transparent.gif');Widget.onload();fixupIECSS3Opacity('id2');IMpreload('15_Generalforsamling_files','shapeimage_4','0');IMpreload('15_Generalforsamling_files','shapeimage_5','0');applyEffects()}
function onPageUnload()
{Widget.onunload();}
