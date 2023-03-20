import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';



describe("Send notification", () => {
    it("should be able to send a notification", async () => {
        const notificationRepository = new InMemoryNotificationsRepository()
        
        const sendNotification = new SendNotification(notificationRepository)

         const { notification } = await sendNotification.execute({
            content: "This is a notification",
            category: "social",
            recipientId: "example-recipientId"
        })

        expect(notificationRepository.notifications).toHaveLength(1)
        expect(notificationRepository.notifications[0]).toEqual(notification)
    })
    
})