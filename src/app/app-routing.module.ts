import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { NgModule } from '@angular/core';
import { TimelinesComponent } from './timelines/timelines.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'timelines', component: TimelinesComponent },
  {
    path: 'youtube', component: YoutubePlaylistComponent, children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
