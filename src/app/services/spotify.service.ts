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
	getNewReleases() {
		const headers = new HttpHeaders({
			Authorization:
				'Bearer BQDCId-U64XrIdIG0Hcrzb8yuxTKiyDL7sFRVakYO9Fd8IJhg2NLMLBkhL3XNaHSHaRSWuRnhC6PxuyLVxS3_YauTIUdyKx5UDHLFpHs4Y5yQXoK9yX1PtVRtw8qeTaVL5ZmQlmt'
		});

		return this.http
			.get('https://api.spotify.com/v1/browse/new-releases', { headers })
			.pipe(map((data) => data['albums']['items']));
	}

	getArtista(termino: string) {
		const headers = new HttpHeaders({
			Authorization:
				'Bearer BQDCId-U64XrIdIG0Hcrzb8yuxTKiyDL7sFRVakYO9Fd8IJhg2NLMLBkhL3XNaHSHaRSWuRnhC6PxuyLVxS3_YauTIUdyKx5UDHLFpHs4Y5yQXoK9yX1PtVRtw8qeTaVL5ZmQlmt'
		});

		return this.http
			.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
			.pipe(map((data) => data['artists']['items']));
	}
}
