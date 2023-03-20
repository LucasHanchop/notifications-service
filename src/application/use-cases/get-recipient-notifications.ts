import { Notification } from '@application/entities/notification';
import { Injectable } from '@nestjs/common';
import  { NotificationsRepository } from '../repositories/notifications-repository'

interface GetRecipientNotificationsRequest {
   recipientId: string
}


interface GetRecipientNotificationsResponse {
    notifications: Notification[]
}

@Injectable()
export class GetRecipientNotifications {
    constructor(private notificationRepository: NotificationsRepository) {}
    
    async execute(request: GetRecipientNotificationsRequest): Promise<GetRecipientNotificationsResponse> {
        const { recipientId } = request

        const notifications = await this.notificationRepository.findManyByRecipientId(
            recipientId
        )

        
        return {
            notifications
        }
    }
}