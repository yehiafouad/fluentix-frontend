import moment from "moment";
import "moment/locale/ar";
import "moment/locale/en-ca";

export function formatTime(time: string) {
  if (time === "") {
    return "";
  }
  return moment(time).format("hh:mm A");
}

export function formatDate(date: string) {
  if (!date) {
    return "";
  }
  return moment(date).format("DD-MM-YYYY");
}

export function stringToDate(date: string) {
  return moment(date, "DD-MM-YYYY").utc().format();
}

export function timeToDate(date: string, time: string) {
  if (date !== "" && time === "") {
    return date;
  } else if (time !== "" && date === "") {
    return time;
  }
  return moment(`${date} ${time}`, "DD-MM-YYYY hh:mm A").local().format();
}

export function fromatDateTime(datetime: string) {
  return moment(datetime).local().format("DD-MM-YYYY hh:mm A");
}

export function nOfDaysBetween(date1: string, date2: string) {
  const a = moment(date1).local().startOf("day");
  const b = moment(date2).local().startOf("day");

  return Math.abs(a.local().diff(b.local(), "day"));
}
