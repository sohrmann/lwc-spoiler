import { LightningElement, api } from 'lwc';

export default class Spoiler extends LightningElement {
    @api label;
    @api text;
}