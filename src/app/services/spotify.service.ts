import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
				'Bearer BQDIcCtQbdLn2zW3v6W4pZjeche98tctcCl-6XYGSoI-d5-OgG-LcFPbtKTk7EjC4m0cXnrCNe9w1uive0iwWuoxJNvAHCDE4d_44uthh4YEYyN5Q0EuE177FkBktr56_LdUB1Jn'
		});

		return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
	}
}
