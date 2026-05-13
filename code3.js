gdjs.Untitled_32scene4Code = {};
gdjs.Untitled_32scene4Code.localVariables = [];
gdjs.Untitled_32scene4Code.idToCallbackMap = new Map();
gdjs.Untitled_32scene4Code.GDNewTextObjects1= [];
gdjs.Untitled_32scene4Code.GDNewTextObjects2= [];
gdjs.Untitled_32scene4Code.GDNewText2Objects1= [];
gdjs.Untitled_32scene4Code.GDNewText2Objects2= [];
gdjs.Untitled_32scene4Code.GDNewSprite2Objects1= [];
gdjs.Untitled_32scene4Code.GDNewSprite2Objects2= [];
gdjs.Untitled_32scene4Code.GDNewSpriteObjects1= [];
gdjs.Untitled_32scene4Code.GDNewSpriteObjects2= [];


gdjs.Untitled_32scene4Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Untitled_32scene4Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Untitled_32scene4Code.GDNewText2Objects1);
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GDNewTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GDNewText2Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Untitled_32scene4Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene4Code.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene4Code.GDNewSprite2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene4Code.GDNewSprite2Objects1[k] = gdjs.Untitled_32scene4Code.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene4Code.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32scene4Code.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GDNewSprite2Objects1[i].returnVariable(gdjs.Untitled_32scene4Code.GDNewSprite2Objects1[i].getVariables().getFromIndex(0)).add(1);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "12732__leady__briefcase-click2.wav", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Untitled_32scene4Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene4Code.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene4Code.GDNewSprite2Objects1[i].getVariableNumber(gdjs.Untitled_32scene4Code.GDNewSprite2Objects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene4Code.GDNewSprite2Objects1[k] = gdjs.Untitled_32scene4Code.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene4Code.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Untitled_32scene4Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GDNewTextObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Untitled_32scene4Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene4Code.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene4Code.GDNewSprite2Objects1[i].getVariableNumber(gdjs.Untitled_32scene4Code.GDNewSprite2Objects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene4Code.GDNewSprite2Objects1[k] = gdjs.Untitled_32scene4Code.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene4Code.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Untitled_32scene4Code.GDNewText2Objects1);
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GDNewText2Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Untitled_32scene4Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene4Code.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene4Code.GDNewSprite2Objects1[i].getVariableNumber(gdjs.Untitled_32scene4Code.GDNewSprite2Objects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene4Code.GDNewSprite2Objects1[k] = gdjs.Untitled_32scene4Code.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene4Code.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32scene4Code.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GDNewSprite2Objects1[i].getBehavior("Tween").addObjectPositionTween2("fartween", 539, 750, "linear", 2, true);
}
}
}

}


};

gdjs.Untitled_32scene4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene4Code.GDNewTextObjects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewTextObjects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewText2Objects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewText2Objects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewSpriteObjects2.length = 0;

gdjs.Untitled_32scene4Code.eventsList0(runtimeScene);
gdjs.Untitled_32scene4Code.GDNewTextObjects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewTextObjects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewText2Objects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewText2Objects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['Untitled_32scene4Code'] = gdjs.Untitled_32scene4Code;
