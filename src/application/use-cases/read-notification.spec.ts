import { ReadNotification } from './read-notification';
import { NotificationNotFound } from './errors/notification-not-found';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';



describe("Read notification", () => {
    it("should be able to read a notification", async () => {
        const notificationRepository = new InMemoryNotificationsRepository()
        
        const readNotification = new ReadNotification(notificationRepository)

        const notification = makeNotification()
        

        await notificationRepository.create(notification)

        await readNotification.execute({
            notificationId: notification.id,
        })

        expect(notificationRepository.notifications[0].readAt).toEqual(
            expect.any(Date),
        )
    })

    it("should not be able to read a non existing notification", async () => {
        const notificationRepository = new InMemoryNotificationsRepository()
        
        const readNotification = new ReadNotification(notificationRepository)
        
        expect( () => {
            return readNotification.execute({
                notificationId:'fake-notification-id'
            })
        }).rejects.toThrow(NotificationNotFound)
    })
    
})