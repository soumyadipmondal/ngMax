
export class AuthResponse{
    constructor(private idToken:string, email: string, refreshToken:string, expiresIn:string, localId:string){}
}