import { axiosWithAuth } from './axiosWithAuth'

export const fetchApiService = endpoint => {
    return axiosWithAuth()
        .get(endpoint)
        .then( res => res )
        .catch( err => err )
}

// takes in endpoint param (ex: fetchApiService('/login')