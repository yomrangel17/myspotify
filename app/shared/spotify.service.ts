import{ Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService{

    constructor(private _http:Http){
        console.log('se ha creado una instancia del servicio de spotify');
    }

    searchMusic(str:string, type = 'artist') {        
        let headers = new Headers();
        let authToken = 'BQDG5jHCMRHCBKeByM_1sWqh8IhuPUASiPcRHFBYlyFzeUgsyc7EwUr0--zUX_sv3j823vVdUBvo1y5O3qSL2jMO4WzsWOKo4reCus6grMX91N5Gg7P3ent5xgEQ6DPfglJZxDmmgREXDp5w0KM5nG7vU9l7EqZnpN4yYOk1g9S4znEpqcSCHkYTdJRuvDouGQVWHJH4LUYmAJoyU0d99Ajtwld1lN09gNdQxrVvH24BBGh9sYrrET_wYRNU9r0L5JSVKwBzU8VUi89lBF2Zeq_9S5_eDu8UTgGPc4--tMvDDXjTkhhy7tIzo54Js1t8ZKB-wDiwAd2EenhtoHSfVQ';
        headers.append('Authorization', 'Bearer '+authToken);
        let searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
        return this._http.get(searchUrl, { headers })
        .map(res => res.json());
        }
     
        getArtist(id:string) {
            let headers = new Headers();
            let authToken = 'BQDG5jHCMRHCBKeByM_1sWqh8IhuPUASiPcRHFBYlyFzeUgsyc7EwUr0--zUX_sv3j823vVdUBvo1y5O3qSL2jMO4WzsWOKo4reCus6grMX91N5Gg7P3ent5xgEQ6DPfglJZxDmmgREXDp5w0KM5nG7vU9l7EqZnpN4yYOk1g9S4znEpqcSCHkYTdJRuvDouGQVWHJH4LUYmAJoyU0d99Ajtwld1lN09gNdQxrVvH24BBGh9sYrrET_wYRNU9r0L5JSVKwBzU8VUi89lBF2Zeq_9S5_eDu8UTgGPc4--tMvDDXjTkhhy7tIzo54Js1t8ZKB-wDiwAd2EenhtoHSfVQ';
            headers.append('Authorization', 'Bearer '+authToken);
            let artistUrl = 'https://api.spotify.com/v1/artists/' + id;
            return this._http.get(artistUrl, { headers })
               .map(res => res.json());
         }
         
         getAlbums(artistId:string) {
            let headers = new Headers();
            let authToken = 'BQDG5jHCMRHCBKeByM_1sWqh8IhuPUASiPcRHFBYlyFzeUgsyc7EwUr0--zUX_sv3j823vVdUBvo1y5O3qSL2jMO4WzsWOKo4reCus6grMX91N5Gg7P3ent5xgEQ6DPfglJZxDmmgREXDp5w0KM5nG7vU9l7EqZnpN4yYOk1g9S4znEpqcSCHkYTdJRuvDouGQVWHJH4LUYmAJoyU0d99Ajtwld1lN09gNdQxrVvH24BBGh9sYrrET_wYRNU9r0L5JSVKwBzU8VUi89lBF2Zeq_9S5_eDu8UTgGPc4--tMvDDXjTkhhy7tIzo54Js1t8ZKB-wDiwAd2EenhtoHSfVQ';
            headers.append('Authorization', 'Bearer '+authToken);
            let albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
            return this._http.get(albumsUrl, { headers })
               .map(res => res.json());
         }
         
         getAlbum(id:string) {
            let headers = new Headers();
            let authToken = 'BQDG5jHCMRHCBKeByM_1sWqh8IhuPUASiPcRHFBYlyFzeUgsyc7EwUr0--zUX_sv3j823vVdUBvo1y5O3qSL2jMO4WzsWOKo4reCus6grMX91N5Gg7P3ent5xgEQ6DPfglJZxDmmgREXDp5w0KM5nG7vU9l7EqZnpN4yYOk1g9S4znEpqcSCHkYTdJRuvDouGQVWHJH4LUYmAJoyU0d99Ajtwld1lN09gNdQxrVvH24BBGh9sYrrET_wYRNU9r0L5JSVKwBzU8VUi89lBF2Zeq_9S5_eDu8UTgGPc4--tMvDDXjTkhhy7tIzo54Js1t8ZKB-wDiwAd2EenhtoHSfVQ';
            headers.append('Authorization', 'Bearer '+authToken);
            let albumUrl = 'https://api.spotify.com/v1/albums/' + id;
            return this._http.get(albumUrl, { headers })
               .map(res => res.json());
         }
      }
