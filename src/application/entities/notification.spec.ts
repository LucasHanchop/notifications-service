import { Content } from './content';
import { Notification } from './notification'
/* eslint-disable prettier/prettier */

describe("Notification content", () => {
    it("should be able to create a notification", () => {
        const notification = new Notification({
            content: new Content("Nova solicitação de amizade!"),
            category: "social",
            recipientId: "example-recipientId",
        })
    
        expect(notification).toBeTruthy()
    })
})

