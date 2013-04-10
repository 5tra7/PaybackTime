#pragma strict

var messageText : GUIText;

function Start () {

	messageText.gameObject.active = false;

}

function Update () {

	var hit : RaycastHit;
	
	if(Physics.Raycast(transform.position, transform.forward, hit, 10))
	{
		if(hit.collider.gameObject.name == "chassis")
		{
			ShowMessage();
		}
	}

}

/*function OnControllerColliderHit(hit : ControllerColliderHit)
{
	if(hit.gameObject.name == "chassis")
	{
		ShowMessage();	
	}
}*/

function ShowMessage()
{
	messageText.text = "Viesti";
	messageText.gameObject.active = true;
	
	StartCoroutine(MessageTimer());
}

function MessageTimer()
{
	yield WaitForSeconds(3);
	messageText.gameObject.active = false;

}