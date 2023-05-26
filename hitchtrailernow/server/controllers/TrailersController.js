import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";
import { trailersService } from "../services/TrailersService";

export class TrailersController extends BaseController {
    constructor(){
        super('api/trailer')
        this.router
        .get('', this.getAll)
        .get('/:trailerId', this.getTrailerById)
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createTrailer)
     
    }
    async getTrailerById(req, res, next) {
        try {
            const trailerId = req.params.trailerId
            const trailer = await trailersService.getTrailerById(trailerId)
            res.send(trailer)
            } catch (error) {
            next(error)
        }
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