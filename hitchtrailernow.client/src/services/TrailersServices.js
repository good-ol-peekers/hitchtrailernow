import { AppState } from "../AppState"
import { Trailer } from "../models/Trailer"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService.js"

class TrailersService {

    async getAllTrailers() {
        const res = await api.get('api/trailer')
        logger.log('trailers array data[getAllTrailers]', res.data)
        AppState.trailers = res.data.map(t => new Trailer(t))
    }

   async getTrailerById(trailerId) {
    AppState.trailer = null
    const res = await api.get('api/trailer/' + trailerId)
    logger.log('get trailer by Id', res.data)
    AppState.trailer = new Trailer(res.data)
   }

}
export const trailersService = new TrailersService()