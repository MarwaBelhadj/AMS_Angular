import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  urlProviders= environment.urlProviders;
  provider : any;
  constructor(private Http : HttpClient) { }

  listProviders(){
    return this.Http.get(this.urlProviders + '/list');
  }

  createProvider(myform:any){
    this.provider = {
      'name' : myform.value.providerName,
      'email' : myform.value.providerEmail,
      'address' : myform.value.providerAddress
    }
    return this.Http.post(this.urlProviders + '/add',this.provider);
  }

  updateProvider(myObj:any){
    return this.Http.put(this.urlProviders + '/'+myObj['id'], myObj);
  }
  deleteProvider(myObj:any){
    return this.Http.delete(this.urlProviders + '/'+myObj['id'], myObj);
  }
  getProvider(id : number){
    return this.Http.get(this.urlProviders + '/'+ id);
  }
}

