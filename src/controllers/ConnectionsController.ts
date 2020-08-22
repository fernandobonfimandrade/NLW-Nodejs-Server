import { Request, Response, request } from 'express'

import db from '../database/connection';

export default class ConnectionsController{
    async index(request: Request, response: Response){
        const totalConnection = await db('connections').count('* as total');
        const {total} = totalConnection[0];
        return response.json({total})
    }

    async create(request: Request, response: Response){
        try {
            const {user_id} = request.body;
            await db('connections').insert({
                user_id
            });
            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                error: 'Unexpected error while creating new connection'
            })
        }

    }
}