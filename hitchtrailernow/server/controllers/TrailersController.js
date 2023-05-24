import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";
import { trailersService } from "../services/TrailersService";

export class TrailersController extends BaseController {
    constructor(){
        super('trailer')
        this.router
        .get('', this.getAll)
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createTrailer)
     
    }
    async createTrailer(req, res, next) {
        try {
            let body = req.body
            body.creatorId = req.userInfo.id
            const trailer = await trailersService.createTrailer(body)
            res.send(trailer)
        } catch (error) {
            next(error)
        }
    }
    async getAll(req, res, next) {
        try {
            const trailers = await trailersService.getAll()
            return res.send(trailers)
        } catch (error) {
            next(error)
        }
    }



}