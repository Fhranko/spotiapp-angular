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
				'Bearer BQDPDGqcMCqRwTh8LxtNFFQvH2myXqlje39XIfqm8bV6LvlYGLFZxEsOzk4q-ApSpruIO7kfDWaVaUBSpPC4VyFEeRI6MX93Jf9NziQhju4McbLbGkyxtbdybHwgdamjbGfr9sBg'
		});

		this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }).subscribe((data) => {
			console.log(data);
		});
	}
}
