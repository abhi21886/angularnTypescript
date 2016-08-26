/**
 * Created with JetBrains WebStorm.
 * User: ze47zhk
 * Date: 25/8/16
 * Time: 1:26 PM
 * To change this template use File | Settings | File Templates.
 */

import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Hero }           from './hero';
@Injectable()
export class HeroSearchService {
    constructor(private http: Http) {}
    search(term: string): Observable<Hero[]> {
        return this.http
            .get(`app/heroes/?name=${term}`)
.map((r: Response) => r.json().data as Hero[]);
}
}
