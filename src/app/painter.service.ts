/**
 * Painter is one stop service for requesting things, including design lists, and design templates. This is the postman. 📸 🖨 🎆
 */

import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { ArtboardClass } from './artboard.class';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { DesignProperty, DesignProperties } from './interfaces';

import * as tool from './tools';

@Injectable()
export class PainterService {

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getAllDesignList(): Promise<any[]> {
        return this.http.get('/data/all-designs.json')
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getDesign(groupID: string, designID: string): Observable<any> {
        return Observable.forkJoin(
            this.http.get(`/data/design-packs/${groupID}.pack/${designID}.template.html`).map((res: Response) => res.text()),
            this.http.get(`/data/design-packs/${groupID}.pack/${designID}.template.css`).map((res: Response) => res.text()),
            this.http.get(`/data/design-packs/${groupID}.pack/${designID}.template.json`).map((res: Response) => res.json())
        );
    }
}
