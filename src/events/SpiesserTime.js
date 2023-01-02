export class SpiesserTime{
    
    iso_date_timestamp
    // 2022-12-29T09:37:05.457Z
    
    js_date_string
    // 2022-12-29T09:37

    js_date_timestamp
    //

    year
    // 2022

    time
    // 13:30 Uhr

    monthnumber
    // 06.

    monthname
    // Juni

    monthname_short
    // JUN

    daynumber
    // 16.

    dayname
    // Montag

    dayname_short
    // MO

    fulldate
    // MO, 16. Juni 2020

    dateshort
    // 16.06.

    constructor(stamp){
        // wenn stamp default from V-calendar ISO-Format: "2022-12-29T09:37:05.457Z"
        this.iso_date_timestamp = stamp;
        this.js_date_string = stamp.slice(0,16);
        this.js_date_timestamp = new Date(this.js_date_string);
    
        this.year = stamp.slice(0,4);
        this.time = stamp.slice(11,16) + ' Uhr'
        this.monthnumber = stamp.slice(5,7) + "."


        var js_day = this.js_date_timestamp.getDay()

        switch (this.monthnumber) {
            case '01.':
              this.monthname = "Januar"
              this.monthname_short = "JAN"
              break;
            case '02.':
                this.monthname = "Februar"
                this.monthname_short = "FEB"
            break;
            case '03.':
                this.monthname = "März"
                this.monthname_short = "MAR"
            break;
            case '04.':
                this.monthname = "April"
                this.monthname_short = "APR"
            break;
            case '05.':
                this.monthname = "Mai"
                this.monthname_short = "MAI"
            break;
            case '06.':
                this.monthname = "Juni"
                this.monthname_short = "JUN"
            break;
            case '07.':
                this.monthname = "Juli"
                this.monthname_short = "JUL"
            break;
            case '08.':
                this.monthname = "August"
                this.monthname_short = "AUG"
            break;
            case '09.':
                this.monthname = "September"
                this.monthname_short = "SEP"
            break;
            case '10.':
                this.monthname = "Oktober"
                this.monthname_short = "OKT"
            break;
            case '11.':
                this.monthname = "November"
                this.monthname_short = "NOV"
            break;
            case '12.':
                this.monthname = "Dezember"
                this.monthname_short = "DEZ"
            break;
            default:
                this.monthname = "Unbekannter Monat"
                this.monthname_short = "UKN"
           }

            switch (js_day) {
                case 0:
                  this.dayname = "Sonntag"
                  this.dayname_short = "SO"
                  break;
                case 1:
                    this.dayname = "Montag"
                    this.dayname_short = "MO"
                   break;
                case 2:
                    this.dayname = "Dienstag"
                    this.dayname_short = "DI"
                   break;
                case 3:
                    this.dayname = "Mittwoch"
                    this.dayname_short = "MI"
                   break;
                case 4:
                    this.dayname = "Donnerstag"
                    this.dayname_short = "DO"
                   break;
                case 5:
                    this.dayname = "Freitag"
                    this.dayname_short = "FR"
                   break;
                case 6:
                    this.dayname = "Samstag"
                    this.dayname_short = "SA"
                   break;
                default:
                    this.dayname = "Unbekannter Wochentag"
                    this.dayname_short = "UKN"
                }

            this.daynumber = stamp.slice(8,10) + "."
            this.fulldate = this.dayname_short + ", " + this.daynumber + " " + this.monthname + " " + this.year
            this.dateshort = this.daynumber + this.monthnumber
        }; // END CONSTRUCTOR

         }; //END CLASS



