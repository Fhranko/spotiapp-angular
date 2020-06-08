import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//Importar servicios
import { SpotifyService } from './services/spotify.service';

// Importar Rutas
import { ROUTES } from './app.routes';
import { TargetasComponent } from './components/targetas/targetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { NoimagePipe } from './pipes/noimage.pipe';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		SearchComponent,
		ArtistaComponent,
		NavbarComponent,
		TargetasComponent,
		LoadingComponent,
		NoimagePipe
	],
	imports: [ BrowserModule, HttpClientModule, RouterModule.forRoot(ROUTES, { useHash: true }) ],
	providers: [ SpotifyService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
