gdjs.Untitled_32scene2Code = {};
gdjs.Untitled_32scene2Code.localVariables = [];
gdjs.Untitled_32scene2Code.idToCallbackMap = new Map();
gdjs.Untitled_32scene2Code.GDNewSprite2Objects1= [];
gdjs.Untitled_32scene2Code.GDNewSprite2Objects2= [];
gdjs.Untitled_32scene2Code.GDNewSprite3Objects1= [];
gdjs.Untitled_32scene2Code.GDNewSprite3Objects2= [];
gdjs.Untitled_32scene2Code.GDNewSprite4Objects1= [];
gdjs.Untitled_32scene2Code.GDNewSprite4Objects2= [];
gdjs.Untitled_32scene2Code.GDNewSpriteObjects1= [];
gdjs.Untitled_32scene2Code.GDNewSpriteObjects2= [];


gdjs.Untitled_32scene2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Untitled_32scene2Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene2Code.GDNewSprite4Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene2Code.GDNewSprite4Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene2Code.GDNewSprite4Objects1[k] = gdjs.Untitled_32scene2Code.GDNewSprite4Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene2Code.GDNewSprite4Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene3", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "714163__robinhood76__11891-crystal-collect-ding.wav", false, 100, 1);
}
}

}


};

gdjs.Untitled_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene2Code.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewSprite3Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewSprite3Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewSprite4Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewSprite4Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewSpriteObjects2.length = 0;

gdjs.Untitled_32scene2Code.eventsList0(runtimeScene);
gdjs.Untitled_32scene2Code.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewSprite3Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewSprite3Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewSprite4Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewSprite4Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['Untitled_32scene2Code'] = gdjs.Untitled_32scene2Code;
