import { Injectable } from '@angular/core';
import { Widget } from '../interfaces/widget';
import { Headers, Http } from '@angular/http';

const BASE_URL = 'http://localhost:3000/widgets/';
const HEADER = {
  headers: new Headers({ 'Content-Type': 'application/json' })
};

@Injectable()
export class WidgetsService {
  constructor(private http: Http) {}

  public all() {
    return this.http.get(BASE_URL).map(res => res.json());
  }

  public load(id) {
    return this.http.get(`${BASE_URL}${id}`).map(res => res.json());
  }

  public create(widget: Widget) {
    return this.http
      .post(`${BASE_URL}`, JSON.stringify(widget), HEADER)
      .map(res => res.json());
  }

  public update(widget: Widget) {
    return this.http
      .patch(`${BASE_URL}${widget.id}`, JSON.stringify(widget), HEADER)
      .map(res => res.json());
  }

  public delete(widget: Widget) {
    return this.http.delete(`${BASE_URL}${widget.id}`).map(res => res.json());
  }

  public search(term: string) {
    const search = new URLSearchParams();
    search.set('q', term);

    return this.http.get(`${BASE_URL}`, { search }).map(res => res.json());
  }
}
