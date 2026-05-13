gdjs.Untitled_32scene3Code = {};
gdjs.Untitled_32scene3Code.localVariables = [];
gdjs.Untitled_32scene3Code.idToCallbackMap = new Map();
gdjs.Untitled_32scene3Code.GDNewSprite2Objects1= [];
gdjs.Untitled_32scene3Code.GDNewSprite2Objects2= [];
gdjs.Untitled_32scene3Code.GDNewSpriteObjects1= [];
gdjs.Untitled_32scene3Code.GDNewSpriteObjects2= [];


gdjs.Untitled_32scene3Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Untitled_32scene3Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene3Code.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene3Code.GDNewSprite2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene3Code.GDNewSprite2Objects1[k] = gdjs.Untitled_32scene3Code.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene3Code.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32scene3Code.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDNewSprite2Objects1[i].setAnimationFrame(gdjs.Untitled_32scene3Code.GDNewSprite2Objects1[i].getAnimationFrame() + (1));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Untitled_32scene3Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene3Code.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene3Code.GDNewSprite2Objects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene3Code.GDNewSprite2Objects1[k] = gdjs.Untitled_32scene3Code.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene3Code.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene4", false);
}
}

}


};

gdjs.Untitled_32scene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene3Code.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpriteObjects2.length = 0;

gdjs.Untitled_32scene3Code.eventsList0(runtimeScene);
gdjs.Untitled_32scene3Code.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['Untitled_32scene3Code'] = gdjs.Untitled_32scene3Code;
