#pragma strict

var fuelMeter : GUITexture;

var getFuelAudio : AudioClip;

var fuelTextures : Texture2D[];

private var barrelCount : int = 0;

function Start () {

}

function Update () {

}

function PickBarrel(){

	print("the barrel was picked");
	barrelCount++;
	
	audio.PlayOneShot(getFuelAudio);
	
	if(barrelCount <= 4)
	{
		fuelMeter.texture = fuelTextures[barrelCount];
	}
	
	
}