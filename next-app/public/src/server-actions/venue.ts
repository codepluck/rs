import Http from "@/services/http"

export async function saveVenue(venue) {
    console.log(venue)
    const response = await Http.post('/api/venue', venue)
}
