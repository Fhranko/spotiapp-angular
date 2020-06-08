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
				'Bearer BQAg6CU82rZtoZHhwVoQZd3uIl5OYPTwo5zZs2xtFL6gndw8a4OUhKN87WY2vx5mptdDrD21xz2mM1YtIfpyVH0RlxYRHPlkc9TvLwM_3PivpvN0gHs-ioj2XjbcpFEq_pYGDvQe'
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
