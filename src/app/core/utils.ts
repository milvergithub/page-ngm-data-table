import {HttpParams} from '@angular/common/http';

export class Utils {
  public static extractError(error: any) {
    let message = error;
    if (error.message) {
      message = error.message;
    }
    if (error.error && error.error.message) {
      message = error.error.message;
    }
    return message;
  }
}

export const createRequestOption = (req?: any): HttpParams => {
  let options: HttpParams = new HttpParams();
  if (req) {
    Object.keys(req).forEach((key) => {
      if (key !== 'sort') {
        options = options.set(key, req[key]);
      }
    });
    if (req.sort) {
      req.sort.forEach((val) => {
        options = options.append('sort', val);
      });
    }
  }
  return options;
};
