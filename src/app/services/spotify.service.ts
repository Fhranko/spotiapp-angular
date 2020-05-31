import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class SpotifyService {
	constructor(private http: HttpClient) {
		console.log('Servicio de spotify corriendo');
	}

	getQuery(query: string) {
		const url = `https://api.spotify.com/v1/${query}`;
		const headers = new HttpHeaders({
			Authorization:
				'Bearer BQA5_mAtWhUMf5YlS9-oDlL0rjAYiQ7irARQEuSPrj2t5VryeMhVy0O8tJdgfXU7ukgiCwG5d4z7wVw7k16O_R1tl2j79-ZbBhRyt8DwIRBYEbeD4WpimJ0g9PKUDWCxkr5AEMtv'
		});

		return this.http.get(url, { headers });
	}

	getNewReleases() {
		return this.getQuery('browse/new-releases').pipe(map((data) => data['albums']['items']));
	}

	getArtista(termino: string) {
		return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data) => data['artists']['items']));
	}
}
