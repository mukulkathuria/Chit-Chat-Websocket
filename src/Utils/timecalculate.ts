export const timeCal: (e: Date) => string = (date: Date) => {
  let restime:number = (new Date().getTime() - new Date(date).getTime()) / 1000;
  let days:number = Math.floor(restime / 86400);
  var hours:number = Math.floor(restime / 3600) % 24;
  let min:number = Math.floor(restime / 60) % 60;
  let seconds:number = Math.floor(restime % 60);
  if (days >= 1) {
    return days + "day";
  } else if (hours >= 1) {
    return hours + "hr";
  } else if (min >= 1) {
    return min + "min";
  } else {
    return seconds + "secs";
  }
};
