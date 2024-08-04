
import { faker as notificationsFaker } from '@faker-js/faker';

export const fetchAll = (limit: 10): { limit: number } => {
    const notifications = [];
    for (let i = 0; i < 10; i++) {
        const notification = {
            id: notificationsFaker.string.uuid(),
            title: notificationsFaker.lorem.sentence(),
            message: notificationsFaker.lorem.paragraph(),
            timestamp: notificationsFaker.date.recent().toISOString(),
        };
        notifications.push(notification);
    }
    return notifications;
}