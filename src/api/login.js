import request from '@/tools/request.js'
export const login = function login(data) {
    return request({
        url: 'login',
        method: 'POST',
        data
    })
}
export const register = function register(data) {
    return request({
        url: 'users',
        method: 'POST',
        data
    })
}