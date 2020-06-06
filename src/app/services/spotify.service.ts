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
				'Bearer BQBHpt6VaKjUjABS0Fvvn93yKNCfJDgu2DhySHku3gvFW1sHaPnHMygV9osFXCg6nKlMdcVFzbooQmMuv9LU2lBFw_jmdfhuQ8AjfxrXLaVIB9ArXNPYLF0If4IDedXlkBcN3G_i'
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
