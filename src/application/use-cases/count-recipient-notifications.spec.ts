import { CountRecipientsNotifications } from './count-recipient-notifications';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';



describe("Count recipients notification", () => {
    it("should be able to count a notification", async () => {
        const notificationRepository = new InMemoryNotificationsRepository()
        
        const countRecipientNotifications = new CountRecipientsNotifications(
            notificationRepository
        )

        await notificationRepository.create(
            makeNotification({ recipientId: 'recipient-1'})
        )

        await notificationRepository.create(
            makeNotification({ recipientId: 'recipient-1'})
        )

        await notificationRepository.create(
            makeNotification({ recipientId: 'recipient-2'})
        )


       const { count } = await countRecipientNotifications.execute({
            recipientId: 'recipient-1'
        })

        expect(count).toEqual(2)
    })
    
})