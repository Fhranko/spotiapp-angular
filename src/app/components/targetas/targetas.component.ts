import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-targetas',
	templateUrl: './targetas.component.html',
	styleUrls: [ './targetas.component.css' ]
})
export class TargetasComponent {
	@Input() items: any[] = [];

	constructor(private router: Router) {
		console.log(this.items);
	}

	verArtista(item: any) {
		let artistId: string;
		if (item.type === 'artist') {
			artistId = item.id;
		} else {
			// console.log(item.artists[0].id);
			// console.log(Object.values(item));
			artistId = item.artists[0].id;

			// artistId = item.id;
		}
		this.router.navigate([ '/artist', artistId ]);
	}
}
