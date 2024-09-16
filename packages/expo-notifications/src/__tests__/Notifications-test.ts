import { CalendarTriggerTypes, NotificationTriggerInput } from '../Notifications.types';
import NotificationScheduler from '../NotificationScheduler';
import scheduleNotificationAsync from '../scheduleNotificationAsync';

const notificationTriggerInputTest = {
  identifier: 'test_id',
  content: {
    title: 'test',
  },
};

it(`verifies date (as Date) trigger handling`, async () => {
  const input = {
    ...notificationTriggerInputTest,
    trigger: new Date(),
  };
  await scheduleNotificationAsync(input);
  expect(NotificationScheduler.scheduleNotificationAsync).toHaveBeenLastCalledWith(
    input.identifier,
    input.content,
    {
      type: 'date',
      timestamp: input.trigger.getTime(),
    }
  );
});

it(`verifies date (as time) trigger handling`, async () => {
  const input = {
    ...notificationTriggerInputTest,
    trigger: new Date().getTime(),
  };
  await scheduleNotificationAsync(input);
  expect(NotificationScheduler.scheduleNotificationAsync).toHaveBeenLastCalledWith(
    input.identifier,
    input.content,
    {
      type: 'date',
      timestamp: input.trigger,
    }
  );
});

it(`verifies daily trigger handling`, async () => {
  const trigger: NotificationTriggerInput = {
    type: CalendarTriggerTypes.DAILY,
    hour: 12,
    minute: 30,
  };
  const input = {
    ...notificationTriggerInputTest,
    trigger,
  };
  await scheduleNotificationAsync(input);
  expect(NotificationScheduler.scheduleNotificationAsync).toHaveBeenLastCalledWith(
    input.identifier,
    input.content,
    {
      ...input.trigger,
    }
  );
});

it(`verifies weekly trigger handling`, async () => {
  const trigger: NotificationTriggerInput = {
    type: CalendarTriggerTypes.WEEKLY,
    weekday: 1,
    hour: 12,
    minute: 30,
  };
  const input = {
    ...notificationTriggerInputTest,
    trigger,
  };
  await scheduleNotificationAsync(input);
  expect(NotificationScheduler.scheduleNotificationAsync).toHaveBeenLastCalledWith(
    input.identifier,
    input.content,
    {
      ...input.trigger,
    }
  );
});

it(`verifies yearly trigger handling`, async () => {
  const trigger: NotificationTriggerInput = {
    type: CalendarTriggerTypes.YEARLY,
    day: 1,
    month: 6,
    hour: 12,
    minute: 30,
  };
  const input = {
    ...notificationTriggerInputTest,
    trigger,
  };
  await scheduleNotificationAsync(input);
  expect(NotificationScheduler.scheduleNotificationAsync).toHaveBeenLastCalledWith(
    input.identifier,
    input.content,
    {
      ...input.trigger,
    }
  );
});

it(`verifies daily trigger handling with channelId`, async () => {
  const trigger: NotificationTriggerInput = {
    type: CalendarTriggerTypes.DAILY,
    hour: 12,
    minute: 30,
    channelId: 'test-channel-id',
  };
  const input = {
    ...notificationTriggerInputTest,
    trigger,
  };
  await scheduleNotificationAsync(input);
  expect(NotificationScheduler.scheduleNotificationAsync).toHaveBeenLastCalledWith(
    input.identifier,
    input.content,
    {
      ...input.trigger,
    }
  );
});

it(`verifies weekly trigger handling with channelId`, async () => {
  const trigger: NotificationTriggerInput = {
    type: CalendarTriggerTypes.WEEKLY,
    weekday: 1,
    hour: 12,
    minute: 30,
    channelId: 'test-channel-id',
  };
  const input = {
    ...notificationTriggerInputTest,
    trigger,
  };
  await scheduleNotificationAsync(input);
  expect(NotificationScheduler.scheduleNotificationAsync).toHaveBeenLastCalledWith(
    input.identifier,
    input.content,
    {
      ...input.trigger,
    }
  );
});

it(`verifies yearly trigger handling with channelId`, async () => {
  const trigger: NotificationTriggerInput = {
    type: CalendarTriggerTypes.YEARLY,
    day: 1,
    month: 6,
    hour: 12,
    minute: 30,
    channelId: 'test-channel-id',
  };
  const input = {
    ...notificationTriggerInputTest,
    trigger,
  };
  await scheduleNotificationAsync(input);
  expect(NotificationScheduler.scheduleNotificationAsync).toHaveBeenLastCalledWith(
    input.identifier,
    input.content,
    {
      ...input.trigger,
    }
  );
});

it(`verifies immediate trigger handling`, async () => {
  const trigger = null;
  const input = {
    ...notificationTriggerInputTest,
    trigger,
  };
  await scheduleNotificationAsync(input);
  expect(NotificationScheduler.scheduleNotificationAsync).toHaveBeenLastCalledWith(
    input.identifier,
    input.content,
    null
  );
});

it(`verifies immediate trigger handling with channelId`, async () => {
  const trigger = {
    channelId: 'test-channel-id',
  };
  const input = {
    ...notificationTriggerInputTest,
    trigger,
  };
  await scheduleNotificationAsync(input);
  expect(NotificationScheduler.scheduleNotificationAsync).toHaveBeenLastCalledWith(
    input.identifier,
    input.content,
    null
  );
});

it(`verifies time interval trigger handling`, async () => {
  const trigger: NotificationTriggerInput = {
    type: CalendarTriggerTypes.TIME_INTERVAL,
    seconds: 3600,
  };
  const input = {
    ...notificationTriggerInputTest,
    trigger,
  };
  await scheduleNotificationAsync(input);
  expect(NotificationScheduler.scheduleNotificationAsync).toHaveBeenLastCalledWith(
    input.identifier,
    input.content,
    {
      channelId: undefined,
      repeats: false,
      type: 'timeInterval',
      seconds: input.trigger.seconds,
    }
  );

  await scheduleNotificationAsync({
    ...input,
    trigger: {
      ...input.trigger,
      repeats: true,
    },
  });
  expect(NotificationScheduler.scheduleNotificationAsync).toHaveBeenLastCalledWith(
    input.identifier,
    input.content,
    {
      type: 'timeInterval',
      repeats: true,
      seconds: input.trigger.seconds,
    }
  );
});

it(`verifies calendar trigger handling`, async () => {
  const trigger: NotificationTriggerInput = {
    type: CalendarTriggerTypes.CALENDAR,
    hour: 12,
    minute: 30,
  };
  const input = {
    ...notificationTriggerInputTest,
    trigger,
  };
  await scheduleNotificationAsync(input);
  expect(NotificationScheduler.scheduleNotificationAsync).toHaveBeenLastCalledWith(
    input.identifier,
    input.content,
    {
      type: 'calendar',
      repeats: undefined,
      value: {
        ...input.trigger,
      },
    }
  );

  await scheduleNotificationAsync({
    ...input,
    trigger: {
      ...input.trigger,
      second: 10,
    },
  });
  expect(NotificationScheduler.scheduleNotificationAsync).toHaveBeenLastCalledWith(
    input.identifier,
    input.content,
    {
      type: 'calendar',
      repeats: undefined,
      value: {
        ...input.trigger,
        second: 10,
      },
    }
  );

  await scheduleNotificationAsync({
    ...input,
    trigger: {
      ...input.trigger,
      repeats: true,
      second: 10,
    },
  });
  expect(NotificationScheduler.scheduleNotificationAsync).toHaveBeenLastCalledWith(
    input.identifier,
    input.content,
    {
      type: 'calendar',
      repeats: true,
      value: {
        ...input.trigger,
        second: 10,
      },
    }
  );
});
