export function getNextContactDates(contact_day_of_week, contact_frequency, currentDate) {
    const dayOfWeekMap = {
        "sunday": 0,
        "monday": 1,
        "tuesday": 2,
        "wednesday": 3,
        "thursday": 4,
        "friday": 5,
        "saturday": 6
    };
    let targetDay = dayOfWeekMap[contact_day_of_week];
    let dates = [];

    // Calculate the first occurrence of the target day
    let date = new Date(currentDate);
    date.setDate(date.getDate() + (targetDay - date.getDay() + 7) % 7);

    switch (contact_frequency) {
        case "weekly":
            for (let i = 0; i < 52; i++) {
                dates.push(new Date(date));
                date.setDate(date.getDate() + 7);
            }
            break;
        case "monthly":
            for (let i = 0; i < 12; i++) {
                dates.push(new Date(date));
                date.setMonth(date.getMonth() + 1);
                date.setDate(date.getDate() + (targetDay - date.getDay() + 7) % 7);
            }
            break;
        case "quarterly":
            for (let i = 0; i < 4; i++) {
                dates.push(new Date(date));
                date.setMonth(date.getMonth() + 3);
                date.setDate(date.getDate() + (targetDay - date.getDay() + 7) % 7);
            }
            break;
        case "yearly":
            dates.push(new Date(date));
            break;
        default:
            console.log("Invalid frequency");
    }

    return dates;
}

export function friendlyDate(inputDate) {

    let date = new Date(inputDate);

    return date.toLocaleString('en-US', {
        weekday: 'short', // "Ddd" format
        month: 'short',   // "Mmm" format
        day: 'numeric',   // "dd" format
        year: 'numeric',  // "yyyy" format
        hour: 'numeric',  // "hh" format
        minute: '2-digit', // "mm" format
        hour12: true      // 12-hour format with am/pm
    });
}

