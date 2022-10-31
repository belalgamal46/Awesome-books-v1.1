import { DateTime } from '../node_modules/luxon/src/luxon.js';

class Date {
  static getCurrentDate = () => {
    const date = DateTime.now().toLocaleString(DateTime.DATE_MED);
    return date;
  };

  static getCurrentTime = () => {
    const time = DateTime.now();
    const { hour, second, minute } = time;
    const currentTime = `${hour}:${minute}:${second}`;
    return currentTime;
  };
}

export default Date;
