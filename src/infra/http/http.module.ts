import { DatabaseModule } from './../database/database.module';
import { SendNotification } from '@application/use-cases/send-notification';
import { NotificationsController } from './controllers/notifications.controller';
import { Module } from "@nestjs/common"
import { CountRecipientsNotifications } from '@application/use-cases/count-recipient-notifications';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';


@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [
        SendNotification,
        CancelNotification,
        CountRecipientsNotifications,
        GetRecipientNotifications,
        ReadNotification,
        UnreadNotification
    ],
})

export class HttpModule {}