import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  urlArticles= environment.urlArticles;
  article : any;
  providers : any;
  constructor(private http : HttpClient) { }

  listArticles(){
    return this.http.get(this.urlArticles +'/list');
  }

  createArticle(artform){
    this.article ={
      'label' : artform.value.articleLabel,
      'picture' : artform.value.articlePicture,
      'price' : artform.value.articlePrice,
      'provider' : artform.value.articleProvider
    }
    return this.http.post(this.urlArticles+'/add'+'/'+artform.value.articleProvider, this.article);
  }
  deleteArticle(objetArticle){
    return this.http.delete(this.urlArticles+'/delete'+'/'+objetArticle['id'],objetArticle);
  }
  updateArticle(objetArticle){
    return this.http.put(this.urlArticles+'/update'+'/'+ objetArticle['provider']+'/' + objetArticle['id'], objetArticle);
  }
  getArticle(id : number){
    return this.http.get(this.urlArticles + '/'+ id);
  }
}
