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
				'Bearer BQDb0ZzQOoC7GXXoZ4QfaOXSLgmW-fBniW2ruwRY5q-4WIpyw9Fx73_PUyTedI9G8GICRVZelwE7NeDwe0ClXdCHN2KJD15SqatH1Xssi4Kh9a2qJro_o6oorOx8N5w27sf9OFwI'
		});

		return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
	}

	getArtista(termino: string) {
		const headers = new HttpHeaders({
			Authorization:
				'Bearer BQBlsBBL0vBBbXNiEPbWdZiOVo5QHxrG2zzz2MOpmUeNUyvbHfH2dVK56n1qEsNd1eIUDa8-JBb2aF_JkV5sWaHXw8YzdSkG02ootXrHgouFhIxPb7ZivbRDCM22xNH_eect_PXZ'
		});

		return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers });
	}
}
