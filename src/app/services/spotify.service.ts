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
				'Bearer BQB328FmmKtZ1rYJ2X_lr3OaITu1OFW5hjO1lHv4Na87EbkWggMTLqwIBis2ZsummlfEmHdK4FinzdPu7pfSc3eemjJr033Ck8fVZY52kjXia0ul19m0J4AszX8YzA8v6zLfisRE'
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

	getTopTracks(id: string) {
		return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map((data) => data['tracks']));
	}
}
