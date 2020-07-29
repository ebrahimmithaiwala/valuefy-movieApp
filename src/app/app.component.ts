import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service'

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: [ './app.component.scss' ]
})
export class AppComponent{
  title: 'valuefy-app'

  constructor(public moviesService: MoviesService) { }

}
  const method = "GET";
  //this.response = this.http.get(api);

  function getMovies(){

    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.addEventListener('load', () => {
        if(request.status === 200){
          resolve(JSON.parse(request.response));
        }else{
          reject(request.response);
        }
      });
      request.open(method, this.moviesService.getData());
      request.send();
    });
  }

  function addThumbnails(movies){
    return new Promise((resolve, reject) => {
      for(let movie of movies){
        const choices = document.querySelector('.video-choices');
        const img = new Image();
        img.src = movie.poster;
        img.addEventListener('click', () => setTrailer(movie));
        choices.appendChild(img);
        resolve(movies);
      }
    });
  }

  function setTrailer(movie){
    return new Promise((resolve, reject) => {
      const player = document.querySelector('.video-player');
      const iframe = document.createElement('iframe');
      iframe.setAttribute('src', movie.trailer);
      iframe.setAttribute('allowfullscreen', '');
      player.innerHTML = '';
      player.appendChild(iframe);
      resolve();
    });
  }


  getMovies()
    .then(movies => addThumbnails(movies))
    .then(movies => setTrailer(movies[0]))
    .catch(error => console.error(error));

