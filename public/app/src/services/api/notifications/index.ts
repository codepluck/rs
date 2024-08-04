import CoreApi from "@/lib/http";
import { fetchAll } from "@/services/@fake-db/notifications";

class Notification extends CoreApi {

    constructor(public path = '') {
        super(path);
    }

    async fetchAllNotifications() {
        return fetchAll(20)
    }
}


const NotificationService = new Notification('notifications');
export default NotificationService;