// full day names
Calendar._DN = new Array
("Sunday",
 "Monday",
 "Tuesday",
 "Wednesday",
 "Thursday",
 "Friday",
 "Saturday",
 "Sunday");

// short day names
Calendar._SDN = new Array
("Sun",
 "Mon",
 "Tue",
 "Wed",
 "Thu",
 "Fri",
 "Sat",
 "Sun");

Calendar._FD = 0;

Calendar._MN = new Array
("January",
 "February",
 "March",
 "April",
 "May",
 "June",
 "July",
 "August",
 "September",
 "October",
 "November",
 "December");

Calendar._SMN = new Array
("Jan",
 "Feb",
 "Mar",
 "Apr",
 "May",
 "Jun",
 "Jul",
 "Aug",
 "Sep",
 "Oct",
 "Nov",
 "Dec");

Calendar._JMN = new Array
("Farvardin",
 "Ordibehest",
 "Khordad",
 "Tir",
 "Mordad",
 "Shahrivar",
 "Mehr",
 "Aban",
 "Azar",
 "Day",
 "Bahman",
 "Esfand");

// short month names
Calendar._JSMN = new Array
("Farvardin",
 "Ordibehest",
 "Khordad",
 "Tir",
 "Mordad",
 "Shahrivar",
 "Mehr",
 "Aban",
 "Azar",
 "Day",
 "Bahman",
 "Esfand");


 
// tooltips
Calendar._TT = {};
Calendar._TT["INFO"] = "About the calendar";

Calendar._TT["ABOUT"] =
"PersianCalendar";

Calendar._TT["PREV_YEAR"] = "Prev. year (hold for menu)";
Calendar._TT["PREV_MONTH"] = "Prev. month (hold for menu)";
Calendar._TT["GO_TODAY"] = "Go Today";
Calendar._TT["NEXT_MONTH"] = "Next month (hold for menu)";
Calendar._TT["NEXT_YEAR"] = "Next year (hold for menu)";
Calendar._TT["SEL_DATE"] = "Select date";
Calendar._TT["DRAG_TO_MOVE"] = "Drag to move";
Calendar._TT["PART_TODAY"] = " (today)";

// the following is to inform that "%s" is to be the first day of week
// %s will be replaced with the day name.
Calendar._TT["DAY_FIRST"] = "Display %s first";

Calendar._TT["SELECT_COLUMN"] = "Select all %ss of this month";
Calendar._TT["SELECT_ROW"] = "Select all days of this week";

// This may be locale-dependent.  It specifies the week-end days, as an array
// of comma-separated numbers.  The numbers are from 0 to 6: 0 means Sunday, 1
// means Monday, etc.
Calendar._TT["WEEKEND"] = "0,6";

Calendar._TT["CLOSE"] = "Close";
Calendar._TT["TODAY"] = "Today";
Calendar._TT["TIME_PART"] = "(Shift-)Click or drag to change value";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "%Y-%m-%d";
Calendar._TT["TT_DATE_FORMAT"] = "%a, %b %e";

Calendar._TT["WK"] = "wk";
Calendar._TT["TIME"] = "Time:";

Calendar._TT["LAM"] = "am";
Calendar._TT["AM"] = "AM";
Calendar._TT["LPM"] = "pm";
Calendar._TT["PM"] = "PM";

Calendar._NUMBERS = null;

Calendar._DIR = 'ltr';
