import { GetRecipientsNotifications } from './get-recipient-notifications';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';



describe("Get recipients notification", () => {
    it("should be able to get a notification", async () => {
        const notificationRepository = new InMemoryNotificationsRepository()
        
        const getRecipientNotifications = new GetRecipientsNotifications(
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


       const { notifications } = await getRecipientNotifications.execute({
            recipientId: 'recipient-1'
        })

        expect(notifications).toHaveLength(2)
        expect(notifications).toEqual(expect.arrayContaining([
            expect.objectContaining({ recipientId: 'recipient-1' }),
            expect.objectContaining({ recipientId: 'recipient-1' })
        ]))
    })
    
})