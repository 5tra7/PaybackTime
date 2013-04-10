#pragma strict

var audioClips : AudioClip[];

function Start () {

	Invoke("PlayRandomSound", 2);

}

function PlayRandomSound () {

	audio.clip = audioClips[Random.Range(0, audioClips.Length)];
	audio.Play();
	
	Invoke("PlayRandomSound", 5);

}