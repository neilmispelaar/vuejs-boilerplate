import axios from 'axios';
// import { Thing } from '@/models/AppModels';

const baseDomain = '';
const apiVersion = '';

export default class GenericAPIService {
  static query(uri: string, successCallback: any, errorCallback: any) {
    axios.get(uri)
      .then((successResponse) => {
        successCallback(successResponse);
      })
      .catch((errorResponse) => {
        console.error(errorResponse);
        errorCallback(errorResponse);
      });
  }

  static loadAllThings(successCallback: any, errorCallback: any) {
    // Build an appropriate URI to ping the API
    const uri = '';

    // Use the Service Query function to get the data
    // GenericService.query(uri, (responseSuccess: {data: any}) => {}, (responseError: any) => {})
  }

}
