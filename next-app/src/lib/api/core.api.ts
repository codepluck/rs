import Axios from "./http";
type NumberOrString = number | string;
export type ParamsType = {
  type?: string;
  text?: string;
  category?: string;
  status?: string;
  is_active?: string;
  shop_id?: string;
  limit?: number;
};
export class CoreApi {
  http = Axios;
  constructor(public _base_path: string) { }

  findAll() {
    return this.http.get(this._base_path);
  }
  fetchUrl(url: string) {
    return this.http.get(url);
  }
  postUrl(url: string, data: any) {
    return this.http.post(url, data);
  }
  findOne(id: NumberOrString) {
    return this.http.get(`${this._base_path}/${id}`);
  }
  create(data: any, options?: any) {
    return this.http
      .post(this._base_path, data, options)
      .then((res) => res.data);
  }
  update(id: NumberOrString, data: any) {
    return this.http
      .put(`${this._base_path}/${id}`, data)
      .then((res) => res.data);
  }
  delete(id: NumberOrString) {
    return this.http.delete(`${this._base_path}/${id}`);
  }
}
