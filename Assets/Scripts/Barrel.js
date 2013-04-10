#pragma strict

function Start () {

}

function Update () {


}

function OnTriggerEnter (other : Collider)
{
       print("triggerenter " + other.gameObject.name);
       
       if(other.gameObject.name == "First Person Controller"){
       
       	   other.gameObject.SendMessage("PickBarrel");
       	   
       	   Destroy(gameObject);
       }
}