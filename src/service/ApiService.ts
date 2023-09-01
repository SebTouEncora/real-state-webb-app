import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";

abstract class ApiService {
    private readonly _baseUrl: string = "";
    private _fullApiBase: string ='';


    protected constructor(config: { baseURL: string }) {
        this._baseUrl = config.baseURL;
        this._fullApiBase =  this._baseUrl;
        //this.setHeader();
    }

    /****************
     * Methods
     ****************/


    protected async get(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<any>> {
        return axios
            .get(this._fullApiBase + url, config)
            .then((response: AxiosResponse) => {
                return response;
            })
            .catch((error: AxiosError) => {
                return Promise.reject(error.response);
            });
    }

    protected async post(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<any>> {
        return axios
            .post(this._fullApiBase + url, data, config)
            .then((response: AxiosResponse) => {
                return response;
            })
            .catch((error: AxiosError) => {
                return Promise.reject(error.response);
            });
    }

    protected async patch(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<any>> {
        return axios
            .patch(this._fullApiBase + url, data, config)
            .then((response: AxiosResponse) => {
                return response;
            })
            .catch((error: AxiosError) => {
                return Promise.reject(error.response);
            });
    }

    protected async head(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<any>> {
        return axios
            .head(this._fullApiBase + url, config)
            .then((response: AxiosResponse) => {
                return response;
            })
            .catch((error: AxiosError) => {
                return Promise.reject(error.response);
            });
    }

    // put(resource, data) {
    //	 return axios.put(resource, data)
    // }

    protected async delete(url: string) {
        return axios
            .delete(this._fullApiBase + url)
            .then((response: AxiosResponse) => {
                return response;
            })
            .catch((error: AxiosError) => {
                return Promise.reject(error.response);
            });
    }

}

export default ApiService;
