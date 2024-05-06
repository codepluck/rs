class HttpService {
    async get(added_url: string, token: string) {
        var requestOptions = null
        if (token) {
            requestOptions = this.getRequestOptions(token)
        } else {
            requestOptions = this.getRequestRawOptions()
        }

        return fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + added_url, requestOptions).then(response => response.json())
    }

    post = async (url: string, data: {} | any, token = null) => {
        var requestOptions = null
        if (token) {
            requestOptions = this.postRequestOptions(token, data)
        } else {
            requestOptions = this.postRequestRawOptions(data)
        }
        const requestUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL + url;
        console.log(requestUrl,'requestUrl')
        try {
            return fetch(requestUrl, requestOptions)
                .then(response => response.json())
        } catch (error) {
            return error;
        }

    }

    getRequestOptions = (token: string) => {
        let requestOptions = {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*'
            }
        }

        return requestOptions
    }

    getRequestRawOptions = () => {
        let requestOptions = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*'
            }
        }
    }
    postRequestOptions = (token: string, item: string) => {
        let requestOptions = {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*'
            },
            body: JSON.stringify(item)
        }

        return requestOptions
    }
    postRequestRawOptions = (item: {} | [] | any) => {
        let requestOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*'
            },
            body: JSON.stringify(item)
        }

        return requestOptions
    }
}

const Http = new HttpService();
export default Http;
