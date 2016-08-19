/**
 * Created with JetBrains WebStorm.
 * User: ze47zhk
 * Date: 19/8/16
 * Time: 10:39 AM
 * To change this template use File | Settings | File Templates.
 */

import { Component, Input } from '@angular/core';
import { Hero } from './hero';
@Component({
    selector: 'my-hero-detail',
    template: `
    <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
    <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
    </div>
`
})
export class HeroDetailComponent {
@Input()
    hero: Hero;
}
