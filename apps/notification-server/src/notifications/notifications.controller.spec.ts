import { Test, TestingModule } from '@nestjs/testing';
import { NotificationServerController } from './notifications.controller';
import { NotificationServerService } from './notifications.service';

describe('NotificationServerController', () => {
  let notificationServerController: NotificationServerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NotificationServerController],
      providers: [NotificationServerService]
    }).compile();

    notificationServerController = app.get<NotificationServerController>(
      NotificationServerController
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(notificationServerController.getHello()).toBe('Hello World!');
    });
  });
});