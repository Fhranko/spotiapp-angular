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
				'Bearer BQDBJ_yIIwTTIX2WuI9svNQebB1U0GSMyoECy81_C4p613bFZgSh5iaovZ3S-fwloih2IzCuJTwyXX8BRLscuRhF1_NvcBqea5dlMnpHnYnn1fc0Q2bHn-Xs9rOJj81Cf3I0L5iT'
		});

		return this.http.get(url, { headers });
	}

	getNewReleases() {
		return this.getQuery('browse/new-releases').pipe(map((data) => data['albums']['items']));
	}

	getArtistas(termino: string) {
		return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data) => data['artists']['items']));
	}

	getArtista(id: string) {
		return this.getQuery(`artists/${id}`);
		// .pipe(map((data) => data['artists']['items']));
	}
}
