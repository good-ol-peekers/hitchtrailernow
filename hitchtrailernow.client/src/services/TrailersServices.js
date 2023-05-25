import { AppState } from "../AppState"
import { Trailer } from "../models/Trailer"

class TrailersService {

    async getAllTrailers() {
        const res = await api.get('api/trailer')
        logger.log('trailers array data[getAllTrailers]', res.data)
        AppState.trailers = res.data.map(t => new Trailer(t))
    }
}
export const trailersService = new TrailersService()