import { NotificationNotFound } from './errors/notification-not-found';
import { Injectable } from '@nestjs/common';
import  { NotificationsRepository } from '../repositories/notifications-repository'

interface CancelNotificationRequest {
   notificationId: string
}


type CancelNotificationResponse = void

@Injectable()
export class CancelNotification {
    constructor(private notificationRepository: NotificationsRepository) {}
    
    async execute(request: CancelNotificationRequest): Promise<CancelNotificationResponse> {
        const { notificationId } = request

        const notification = await this.notificationRepository.findById(
            notificationId
        )

        if(!notification) {
            throw new NotificationNotFound()
        }

        notification.cancel()

        await this.notificationRepository.save(notification)
    }
}