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
				'BQBooD98tR6ol6NaiNbtXqJFLK_wImj3KwourYNWFQPokxid88PTC-f_feek98DVTwVrgTpzCMdLVMrS9ZjLuU8slM7XYm1KnNLwjT4iwfqv9dnUnK-udJFJOmhET_BiIThfOKSu'
		});

		this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }).subscribe((data) => {
			console.log(data);
		});
	}
}
