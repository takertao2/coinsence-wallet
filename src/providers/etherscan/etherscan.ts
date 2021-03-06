import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";

@Injectable()
export class EtherscanProvider {

  constructor(
    public http: HttpClient
  ) {
    console.log('Hello EtherscanProvider Provider');
  }

  //Don't know if this return also failed transactions
  public async getAllTokenTransfer(walletAddress: string, page: number, offset: number): Promise<{status: string, message: string, result: Array<Object>}> {
    let getUrl = `${environment.apiEtherscanRinkeby.url}?module=account&action=tokentx&address=${walletAddress}&sort=desc&page=${page}&offset=${offset}&apikey=${environment.apiEtherscanRinkeby.apiKey}`;

    return this.http.get(getUrl).toPromise() as Promise<{status: string, message: string, result: Array<Object>}>;
  }

  //Don't know if this return also failed transactions
  public async getContractTokenTransfer(walletAddress: string, contractAddress: string, page: number, offset: number): Promise<{status: string, message: string, result: Array<Object>}> {
    let getUrl = `${environment.apiEtherscanRinkeby.url}?module=account&action=tokentx&contractaddress=${contractAddress}&address=${walletAddress}&sort=desc&page=${page}&offset=${offset}&apikey=${environment.apiEtherscanRinkeby.apiKey}`;

    return this.http.get(getUrl).toPromise() as Promise<{status: string, message: string, result: Array<Object>}>;
  }

  public async getEtherBalance(walletAddress: string): Promise<{status: string, message: string, result: Array<Object>}> {
    let getUrl = `${environment.apiEtherscanRinkeby.url}?module=account&action=balance&address=${walletAddress}&tag=latest&apikey=${environment.apiEtherscanRinkeby.apiKey}`;

    return this.http.get(getUrl).toPromise() as Promise<{status: string, message: string, result: Array<Object>}>;
  }

  //Don't know if this return also failed transactions
  public async getTransactions(walletAddress: string, page: number, offset: number): Promise<{status: string, message: string, result: Array<Object>}> {
    let getUrl = `${environment.apiEtherscanRinkeby.url}?module=account&action=txlist&address=${walletAddress}&sort=desc&page=${page}&offset=${offset}&apikey=${environment.apiEtherscanRinkeby.apiKey}`;

    return this.http.get(getUrl).toPromise() as Promise<{status: string, message: string, result: Array<Object>}>;
  }

}
