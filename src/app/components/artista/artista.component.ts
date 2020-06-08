import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
	selector: 'app-artista',
	templateUrl: './artista.component.html',
	styles: []
})
export class ArtistaComponent {
	artista: any = {};
	loadingArtist: boolean;
	topTracks: any[] = [];

	constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
		this.loadingArtist = true;
		this.router.params.subscribe((params) => {
			this.getArtista(params['id']);
			this.getTopTracks(params['id']);
		});
	}

	getArtista(id: string) {
		this.loadingArtist = true;
		this.spotify.getArtista(id).subscribe((res) => {
			this.artista = res;
			console.log(this.artista);
			this.loadingArtist = false;
			// console.log(this.artista.images[0].url);
		});
	}

	getTopTracks(id: string) {
		this.spotify.getTopTracks(id).subscribe((topTracks) => {
			console.log(topTracks);
			this.topTracks = topTracks;
		});
	}
}
