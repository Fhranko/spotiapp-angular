import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class SpotifyService {
	constructor(private http: HttpClient) {
		console.log('Servicio de spotifi corriendo');
	}

	getQuery(query: string) {
		const url = `https://api.spotify.com/v1/${query}`;
		const headers = new HttpHeaders({
			Authorization:
				'Bearer BQB7UcgkSKSJFNcOrrRFKHTH96UsoK2AsiQPd22mEuRwkRha0c0qX82PNiMGRodHH-00IxDBGkRLlmwd2PDPPnImDqclg2YKYAFUEwwmGnslJ7sHQZVAW_HRafCLbZ6MKJvFRGdQ'
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
