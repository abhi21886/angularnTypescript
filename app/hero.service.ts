/**
 * Created with JetBrains WebStorm.
 * User: ze47zhk
 * Date: 22/8/16
 * Time: 9:35 AM
 * To change this template use File | Settings | File Templates.
 */

import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    };

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 2000) // 2 seconds
         );
    }
}
