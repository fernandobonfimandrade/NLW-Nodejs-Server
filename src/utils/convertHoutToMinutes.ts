export default function convertHourToMinutes(time: string){
    // time -> hh:mm
    const [hour, minutes] = time.split(':').map(Number);
    const timeInMinutes = (hour * 60) + minutes;
    return timeInMinutes;
}