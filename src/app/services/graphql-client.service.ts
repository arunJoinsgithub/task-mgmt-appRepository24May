import { Injectable } from '@angular/core';
import { AWSAppSyncClient, AUTH_TYPE } from 'aws-appsync';
import awsConfig from '../../aws-exports';
import { Auth } from 'aws-amplify';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GraphqlClientService {
  public appSyncClient;
  constructor(private authService: AuthService) { 
     this.authService.getToken();

    const appSyncClient = new AWSAppSyncClient({
      url: awsConfig.aws_appsync_graphqlEndpoint,
      region: awsConfig.aws_appsync_region,
      auth: {
        type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
        jwtToken: this.authService.getToken()
      },
      
    });
    this.appSyncClient = appSyncClient;
  }

  
}
