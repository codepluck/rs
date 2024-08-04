import CoreApi from "@/lib/http";
import { fetchAllVenues } from "@/services/@fake-db/venues";

class VenueService extends CoreApi {
    constructor(url = '') {
        super(url);
    }
    async getVenues() {
        return await fetchAllVenues(20);
    }
}
const ServiceVenues = new VenueService();
export default ServiceVenues