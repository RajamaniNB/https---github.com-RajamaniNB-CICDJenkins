import { LightningElement, track } from 'lwc';
export default class Parent extends LightningElement {

@track message;
sendData(event)
{
    this.message = "Message from parent !!!!";
}

}