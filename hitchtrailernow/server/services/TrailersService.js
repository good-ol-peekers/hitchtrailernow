import { dbContext } from "../db/DbContext"

class TrailersService {
    async getAll() {
        const trailers = await dbContext.Trailers.find()
        return trailers
    }

}
export const trailersService = new TrailersService()