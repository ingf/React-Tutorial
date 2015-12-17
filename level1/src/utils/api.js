import Reqwest from 'reqwest'

export function get(url, data = {}) {
    return Reqwest({
        url: API + url,
        type: 'json',
        method: 'get',
        data: data
    })
}

export function post(url, data = {}) {
    return Reqwest({
        url: API + url,
        type: 'json',
        method: 'post',
        data: data
    })
}

export function jsonp(url, data = {}){
    return Reqwest({
        url: API + url,
        type: 'jsonp',
        method: 'get',
        data: data
    })
}