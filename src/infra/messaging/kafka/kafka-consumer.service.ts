import { Injectable, OnModuleDestroy } from '@nestjs/common'
import { ServerKafka } from '@nestjs/microservices'

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
    constructor() {
        super({
            client:{
                clientId: 'notifications',
                brokers: ['sterling-foal-10703-us1-kafka.upstash.io:9092'],
                 sasl: {
                    mechanism: 'scram-sha-256',
                    username: 'c3RlcmxpbmctZm9hbC0xMDcwMyQIqEgbIv7ASGMV3iJlN1JhLDM3nnfSJqGSFQk',
                    password: '70cdca4f8de94f5cab47d83f0ec198fa',
                },
                ssl: true,
            }
        })
    }

    async onModuleDestroy() {
       await this.close()
    }
}