import axios, { AxiosResponse } from "axios";

import { IUser } from "../models/IUser";

import api from ".";



export default class UserService {
    static async getUsers(): Promise<AxiosResponse<IUser[]>> {
        return api.get<IUser[]>('./users.json')
    } 
    static async login(email: string, password: string): Promise<AxiosResponse<IUser[]>> {
        return api.get<IUser[]>('./users.json')
    } 
}
