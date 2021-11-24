export interface RegisterationRequest {
    id?: string
    mobile: string,
    username: string,
    password: string,
}

export interface RegisterationResponse {
    id: string
    mobile?: string,
    username?: string,
    password?: string,
}