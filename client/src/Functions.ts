function field_period_to_text(field_period: string) {
    let month_number : string = field_period.substr(2, 2);
    let month = "Unknown"

    switch (month_number) {
        case "01":
            month = "January"
            break;
        case "02":
            month = "February"
            break;
        case "03":
            month = "March"
            break;
        case "04":
            month = "April"
            break;
        case "05":
            month = "May"
            break;
        case "06":
            month = "June"
            break;
        case "07":
            month = "July"
            break;
        case "08":
            month = "August"
            break;
        case "09":
            month = "September"
            break;
        case "10":
            month = "October"
            break;
        case "11":
            month = "November"
            break;
        case "12":
            month = "December"
            break;
    }

    let year_number : string = field_period.substr(0, 2);
    let year = ""

    switch (year_number) {
        case "19":
            year = "2019"
            break;
        case "20":
            year = "2020"
            break;
        case "21":
            year = "2021"
            break;
        case "22":
            year = "2021"
            break;
    }
    return month + " " + year
}




export {field_period_to_text}