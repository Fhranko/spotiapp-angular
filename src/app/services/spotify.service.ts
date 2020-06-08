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
				'Bearer BQAHJTvghMCSdW0khID-12IQkiyPdL8Z7XIFHeYxT5gtrXKscY4aAnfB6Br7QsKt8qF1o1L8-hHgFjVjK7aQSQD_PefV2om8KsHLWOiiUmrOqLYlLc4DxVb8qp3sIoem9lwl1Wx2'
		});

		return this.http.get(url, { headers });
	}

	getNewReleases() {
		return this.getQuery('browse/new-releases?limit=9').pipe(map((data) => data['albums']['items']));
	}

	getArtistas(termino: string) {
		return this.getQuery(`search?q=${termino}&type=artist&limit=9`).pipe(map((data) => data['artists']['items']));
	}

	getArtista(id: string) {
		return this.getQuery(`artists/${id}`);
		// .pipe(map((data) => data['artists']['items']));
	}

	getTopTracks(id: string) {
		return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map((data) => data['tracks']));
	}
}
