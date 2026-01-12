const allCourses = [
  {
    "code": "CCAH3003",
    "classNo": "CL08",
    "name": "The Process of Design",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "FTC1902"
  },
  {
    "code": "CCAH3003",
    "classNo": "CL08",
    "name": "The Process of Design",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "FTC1902"
  },
  {
    "code": "CCAH3003",
    "classNo": "CL09",
    "name": "The Process of Design",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "FTC1902"
  },
  {
    "code": "CCAH3003",
    "classNo": "CL09",
    "name": "The Process of Design",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "FTC1902"
  },
  {
    "code": "CCAH3003",
    "classNo": "CL10",
    "name": "The Process of Design",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "SSC702"
  },
  {
    "code": "CCAH3003",
    "classNo": "CL10",
    "name": "The Process of Design",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "SSC702"
  },
  {
    "code": "CCAH3003",
    "classNo": "CL11",
    "name": "The Process of Design",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "SSC702"
  },
  {
    "code": "CCAH3003",
    "classNo": "CL11",
    "name": "The Process of Design",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "SSC702"
  },
  {
    "code": "CCAH4010",
    "classNo": "CL01",
    "name": "From a Barren Rock to Asia's World City: A History of Modern Hong Kong",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK601"
  },
  {
    "code": "CCAH4010",
    "classNo": "CL01",
    "name": "From a Barren Rock to Asia's World City: A History of Modern Hong Kong",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK601"
  },
  {
    "code": "CCAH4010",
    "classNo": "CL02",
    "name": "From a Barren Rock to Asia's World City: A History of Modern Hong Kong",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC805"
  },
  {
    "code": "CCAH4010",
    "classNo": "CL02",
    "name": "From a Barren Rock to Asia's World City: A History of Modern Hong Kong",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC805"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL13",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL13",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL14",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL14",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL15",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL15",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL16",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL16",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL17",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL17",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL18",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL18",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL19",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL19",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL20",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL20",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL21",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL21",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL22",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL22",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL23",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL23",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL24",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE105+106"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL24",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE105+106"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL25",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE105+106"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL25",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE105+106"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL26",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE105+106"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL26",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE105+106"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL27",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE105+106"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL27",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE105+106"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL28",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE105+106"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL28",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE105+106"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL29",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE105+106"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL29",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE105+106"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL30",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE105+106"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL30",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE105+106"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL31",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE105+106"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL31",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE105+106"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL32",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE105+106"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL32",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE105+106"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL33",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE105+106"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL33",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE105+106"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL34",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC302"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL34",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC302"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL35",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC302"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL35",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC302"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL36",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC302"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL36",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC302"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL37",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1203"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL37",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1203"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL38",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1203"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL38",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1203"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL39",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1203"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL39",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1203"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL08",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC501"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL08",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC501"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL09",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC603"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL09",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC603"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL10",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC505"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL10",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC505"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL11",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC501"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL11",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC501"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL12",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC501"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL12",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC501"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL13",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC501"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL13",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC501"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL14",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC710"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL14",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC710"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL15",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC501"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL15",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC501"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL16",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-402"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL16",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-402"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL17",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL17",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL18",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-402"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL18",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-402"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL19",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-401"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL19",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-401"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL20",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-806"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL20",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-806"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL21",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-402"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL21",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-402"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL22",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-806"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL22",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-806"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL23",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC609"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL23",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC609"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL24",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC309"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL24",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC309"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL25",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC11A3"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL25",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL05",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC710"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL05",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC710"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL06",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC603"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL06",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC603"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL07",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC503"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL07",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC503"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL08",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC711"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL08",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC711"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL09",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC601"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL09",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC601"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL10",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC707"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL10",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC707"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL11",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC501"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL11",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC501"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL12",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC601"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL12",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC601"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL13",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-402"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL13",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-402"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL14",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL14",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL15",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-806"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL15",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-806"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL16",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-806"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL16",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-806"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL17",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-401"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL17",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-401"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL18",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-805"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL18",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-805"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL19",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-806"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL19",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-806"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL20",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC507"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL20",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC507"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL21",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC507"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL21",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC507"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL22",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC608"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL22",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC608"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL23",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC609"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL23",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC609"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL07",
    "name": "In Dialogue with Humanity",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC604"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL07",
    "name": "In Dialogue with Humanity",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC604"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL08",
    "name": "In Dialogue with Humanity",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC708"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL08",
    "name": "In Dialogue with Humanity",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC708"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL09",
    "name": "In Dialogue with Humanity",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC708"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL09",
    "name": "In Dialogue with Humanity",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC708"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL10",
    "name": "In Dialogue with Humanity",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC503"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL10",
    "name": "In Dialogue with Humanity",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC503"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL11",
    "name": "In Dialogue with Humanity",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC708"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL11",
    "name": "In Dialogue with Humanity",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC708"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL12",
    "name": "In Dialogue with Humanity",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC705"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL12",
    "name": "In Dialogue with Humanity",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC705"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL13",
    "name": "In Dialogue with Humanity",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC503"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL13",
    "name": "In Dialogue with Humanity",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC503"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL14",
    "name": "In Dialogue with Humanity",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-705"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL14",
    "name": "In Dialogue with Humanity",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-705"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL15",
    "name": "In Dialogue with Humanity",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-701"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL15",
    "name": "In Dialogue with Humanity",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-701"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL16",
    "name": "In Dialogue with Humanity",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-805"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL16",
    "name": "In Dialogue with Humanity",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-805"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL17",
    "name": "In Dialogue with Humanity",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-601"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL17",
    "name": "In Dialogue with Humanity",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-601"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL18",
    "name": "In Dialogue with Humanity",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-601"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL18",
    "name": "In Dialogue with Humanity",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-601"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL19",
    "name": "In Dialogue with Humanity",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-604"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL19",
    "name": "In Dialogue with Humanity",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-604"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL20",
    "name": "In Dialogue with Humanity",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-701"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL20",
    "name": "In Dialogue with Humanity",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-701"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL21",
    "name": "In Dialogue with Humanity",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC311"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL21",
    "name": "In Dialogue with Humanity",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC311"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL22",
    "name": "In Dialogue with Humanity",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC311"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL22",
    "name": "In Dialogue with Humanity",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC311"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL23",
    "name": "In Dialogue with Humanity",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC312"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL23",
    "name": "In Dialogue with Humanity",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC312"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL24",
    "name": "In Dialogue with Humanity",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC503"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL24",
    "name": "In Dialogue with Humanity",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC503"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL25",
    "name": "In Dialogue with Humanity",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC503"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL25",
    "name": "In Dialogue with Humanity",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC503"
  },
  {
    "code": "CCAH4018",
    "classNo": "CL06",
    "name": "Thinking about Science",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC601"
  },
  {
    "code": "CCAH4018",
    "classNo": "CL06",
    "name": "Thinking about Science",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC601"
  },
  {
    "code": "CCAH4018",
    "classNo": "CL07",
    "name": "Thinking about Science",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC608"
  },
  {
    "code": "CCAH4018",
    "classNo": "CL07",
    "name": "Thinking about Science",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC608"
  },
  {
    "code": "CCAH4018",
    "classNo": "CL08",
    "name": "Thinking about Science",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC501"
  },
  {
    "code": "CCAH4018",
    "classNo": "CL08",
    "name": "Thinking about Science",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC501"
  },
  {
    "code": "CCAH4018",
    "classNo": "CL09",
    "name": "Thinking about Science",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC608"
  },
  {
    "code": "CCAH4018",
    "classNo": "CL09",
    "name": "Thinking about Science",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC608"
  },
  {
    "code": "CCAH4018",
    "classNo": "CL10",
    "name": "Thinking about Science",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC809"
  },
  {
    "code": "CCAH4018",
    "classNo": "CL10",
    "name": "Thinking about Science",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC809"
  },
  {
    "code": "CCAH4018",
    "classNo": "CL11",
    "name": "Thinking about Science",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC608"
  },
  {
    "code": "CCAH4018",
    "classNo": "CL11",
    "name": "Thinking about Science",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC608"
  },
  {
    "code": "CCAH4018",
    "classNo": "CL12",
    "name": "Thinking about Science",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC608"
  },
  {
    "code": "CCAH4018",
    "classNo": "CL12",
    "name": "Thinking about Science",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC608"
  },
  {
    "code": "CCAH4018",
    "classNo": "CL13",
    "name": "Thinking about Science",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE108"
  },
  {
    "code": "CCAH4018",
    "classNo": "CL13",
    "name": "Thinking about Science",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE108"
  },
  {
    "code": "CCAH4018",
    "classNo": "CL14",
    "name": "Thinking about Science",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC301"
  },
  {
    "code": "CCAH4018",
    "classNo": "CL14",
    "name": "Thinking about Science",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "ADC301"
  },
  {
    "code": "CCAH4018",
    "classNo": "CL15",
    "name": "Thinking about Science",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC8A3"
  },
  {
    "code": "CCAH4018",
    "classNo": "CL15",
    "name": "Thinking about Science",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC8A3"
  },
  {
    "code": "CCAH4018",
    "classNo": "CT11",
    "name": "Thinking about Science",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC801"
  },
  {
    "code": "CCAH4018",
    "classNo": "CT12",
    "name": "Thinking about Science",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC603"
  },
  {
    "code": "CCAH4018",
    "classNo": "CT13",
    "name": "Thinking about Science",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC801"
  },
  {
    "code": "CCAH4018",
    "classNo": "CT14",
    "name": "Thinking about Science",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC603"
  },
  {
    "code": "CCAH4018",
    "classNo": "CT15",
    "name": "Thinking about Science",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1004"
  },
  {
    "code": "CCAH4018",
    "classNo": "CT16",
    "name": "Thinking about Science",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC609"
  },
  {
    "code": "CCAH4018",
    "classNo": "CT17",
    "name": "Thinking about Science",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1004"
  },
  {
    "code": "CCAH4018",
    "classNo": "CT18",
    "name": "Thinking about Science",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC609"
  },
  {
    "code": "CCAH4018",
    "classNo": "CT19",
    "name": "Thinking about Science",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC502"
  },
  {
    "code": "CCAH4018",
    "classNo": "CT20",
    "name": "Thinking about Science",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC502"
  },
  {
    "code": "CCAH4018",
    "classNo": "CT21",
    "name": "Thinking about Science",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC608"
  },
  {
    "code": "CCAH4018",
    "classNo": "CT22",
    "name": "Thinking about Science",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC608"
  },
  {
    "code": "CCAH4018",
    "classNo": "CT23",
    "name": "Thinking about Science",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC603"
  },
  {
    "code": "CCAH4018",
    "classNo": "CT24",
    "name": "Thinking about Science",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC603"
  },
  {
    "code": "CCAH4018",
    "classNo": "CT25",
    "name": "Thinking about Science",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE108"
  },
  {
    "code": "CCAH4018",
    "classNo": "CT26",
    "name": "Thinking about Science",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE108"
  },
  {
    "code": "CCAH4018",
    "classNo": "CT27",
    "name": "Thinking about Science",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC608"
  },
  {
    "code": "CCAH4018",
    "classNo": "CT28",
    "name": "Thinking about Science",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC603"
  },
  {
    "code": "CCAH4018",
    "classNo": "CT29",
    "name": "Thinking about Science",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCAH4018",
    "classNo": "CT30",
    "name": "Thinking about Science",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC11A3"
  },
  {
    "code": "CCBS3002",
    "classNo": "CL01",
    "name": "Elements of Business",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "IEC1201"
  },
  {
    "code": "CCBS3002",
    "classNo": "CL01",
    "name": "Elements of Business",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC1201"
  },
  {
    "code": "CCBS3002",
    "classNo": "CL02",
    "name": "Elements of Business",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "IEC1201"
  },
  {
    "code": "CCBS3002",
    "classNo": "CL02",
    "name": "Elements of Business",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "IEC1201"
  },
  {
    "code": "CCBS3002",
    "classNo": "CL03",
    "name": "Elements of Business",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC1203"
  },
  {
    "code": "CCBS3002",
    "classNo": "CL03",
    "name": "Elements of Business",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "IEC1203"
  },
  {
    "code": "CCBS3002",
    "classNo": "CL04",
    "name": "Elements of Business",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "IEC1203"
  },
  {
    "code": "CCBS3002",
    "classNo": "CL04",
    "name": "Elements of Business",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC1203"
  },
  {
    "code": "CCBS3002",
    "classNo": "CL05",
    "name": "Elements of Business",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "SSC702"
  },
  {
    "code": "CCBS3002",
    "classNo": "CL05",
    "name": "Elements of Business",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "SSC702"
  },
  {
    "code": "CCBS3002",
    "classNo": "CL06",
    "name": "Elements of Business",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "SSC801"
  },
  {
    "code": "CCBS3002",
    "classNo": "CL06",
    "name": "Elements of Business",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "SSC801"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL27",
    "name": "Introduction to Financial Accounting",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL27",
    "name": "Introduction to Financial Accounting",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL28",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL28",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL29",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL29",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL30",
    "name": "Introduction to Financial Accounting",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL30",
    "name": "Introduction to Financial Accounting",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL31",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL31",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL32",
    "name": "Introduction to Financial Accounting",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL32",
    "name": "Introduction to Financial Accounting",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL33",
    "name": "Introduction to Financial Accounting",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL33",
    "name": "Introduction to Financial Accounting",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL34",
    "name": "Introduction to Financial Accounting",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL34",
    "name": "Introduction to Financial Accounting",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL35",
    "name": "Introduction to Financial Accounting",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL35",
    "name": "Introduction to Financial Accounting",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL36",
    "name": "Introduction to Financial Accounting",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL36",
    "name": "Introduction to Financial Accounting",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL37",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL37",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL38",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL38",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL39",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL39",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL40",
    "name": "Introduction to Financial Accounting",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL40",
    "name": "Introduction to Financial Accounting",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL41",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL41",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL42",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL42",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL43",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL43",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL44",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL44",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL20",
    "name": "Introduction to Financial Management",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL20",
    "name": "Introduction to Financial Management",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL21",
    "name": "Introduction to Financial Management",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL21",
    "name": "Introduction to Financial Management",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL22",
    "name": "Introduction to Financial Management",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL22",
    "name": "Introduction to Financial Management",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL23",
    "name": "Introduction to Financial Management",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL23",
    "name": "Introduction to Financial Management",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL24",
    "name": "Introduction to Financial Management",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL24",
    "name": "Introduction to Financial Management",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL25",
    "name": "Introduction to Financial Management",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL25",
    "name": "Introduction to Financial Management",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL26",
    "name": "Introduction to Financial Management",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL26",
    "name": "Introduction to Financial Management",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL27",
    "name": "Introduction to Financial Management",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL27",
    "name": "Introduction to Financial Management",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL28",
    "name": "Introduction to Financial Management",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL28",
    "name": "Introduction to Financial Management",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL29",
    "name": "Introduction to Financial Management",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL29",
    "name": "Introduction to Financial Management",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL30",
    "name": "Introduction to Financial Management",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL30",
    "name": "Introduction to Financial Management",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL31",
    "name": "Introduction to Financial Management",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL31",
    "name": "Introduction to Financial Management",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL32",
    "name": "Introduction to Financial Management",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL32",
    "name": "Introduction to Financial Management",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL33",
    "name": "Introduction to Financial Management",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL33",
    "name": "Introduction to Financial Management",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL34",
    "name": "Introduction to Financial Management",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL34",
    "name": "Introduction to Financial Management",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL35",
    "name": "Introduction to Financial Management",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL35",
    "name": "Introduction to Financial Management",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL36",
    "name": "Introduction to Financial Management",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL36",
    "name": "Introduction to Financial Management",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL37",
    "name": "Introduction to Financial Management",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL37",
    "name": "Introduction to Financial Management",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL38",
    "name": "Introduction to Financial Management",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL38",
    "name": "Introduction to Financial Management",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL39",
    "name": "Introduction to Financial Management",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL39",
    "name": "Introduction to Financial Management",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL40",
    "name": "Introduction to Financial Management",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL40",
    "name": "Introduction to Financial Management",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL41",
    "name": "Introduction to Financial Management",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL41",
    "name": "Introduction to Financial Management",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL42",
    "name": "Introduction to Financial Management",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL42",
    "name": "Introduction to Financial Management",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL23",
    "name": "Introduction to Management",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL23",
    "name": "Introduction to Management",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL24",
    "name": "Introduction to Management",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL24",
    "name": "Introduction to Management",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL25",
    "name": "Introduction to Management",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL25",
    "name": "Introduction to Management",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL26",
    "name": "Introduction to Management",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL26",
    "name": "Introduction to Management",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL27",
    "name": "Introduction to Management",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL27",
    "name": "Introduction to Management",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL28",
    "name": "Introduction to Management",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL28",
    "name": "Introduction to Management",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL29",
    "name": "Introduction to Management",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL29",
    "name": "Introduction to Management",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL30",
    "name": "Introduction to Management",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL30",
    "name": "Introduction to Management",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL31",
    "name": "Introduction to Management",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL31",
    "name": "Introduction to Management",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL32",
    "name": "Introduction to Management",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL32",
    "name": "Introduction to Management",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL33",
    "name": "Introduction to Management",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL33",
    "name": "Introduction to Management",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL34",
    "name": "Introduction to Management",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL34",
    "name": "Introduction to Management",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL35",
    "name": "Introduction to Management",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL35",
    "name": "Introduction to Management",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL36",
    "name": "Introduction to Management",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL36",
    "name": "Introduction to Management",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL37",
    "name": "Introduction to Management",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL37",
    "name": "Introduction to Management",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL38",
    "name": "Introduction to Management",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL38",
    "name": "Introduction to Management",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL39",
    "name": "Introduction to Management",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL39",
    "name": "Introduction to Management",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL40",
    "name": "Introduction to Management",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL40",
    "name": "Introduction to Management",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL24",
    "name": "Introduction to Marketing",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL24",
    "name": "Introduction to Marketing",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL25",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL25",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL26",
    "name": "Introduction to Marketing",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL26",
    "name": "Introduction to Marketing",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL27",
    "name": "Introduction to Marketing",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL27",
    "name": "Introduction to Marketing",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL28",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL28",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL29",
    "name": "Introduction to Marketing",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL29",
    "name": "Introduction to Marketing",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL30",
    "name": "Introduction to Marketing",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL30",
    "name": "Introduction to Marketing",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL31",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL31",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL32",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL32",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL33",
    "name": "Introduction to Marketing",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL33",
    "name": "Introduction to Marketing",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL34",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL34",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL35",
    "name": "Introduction to Marketing",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL35",
    "name": "Introduction to Marketing",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL36",
    "name": "Introduction to Marketing",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL36",
    "name": "Introduction to Marketing",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL37",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL37",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL38",
    "name": "Introduction to Marketing",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL38",
    "name": "Introduction to Marketing",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL39",
    "name": "Introduction to Marketing",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL39",
    "name": "Introduction to Marketing",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL40",
    "name": "Introduction to Marketing",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL40",
    "name": "Introduction to Marketing",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4011",
    "classNo": "CL01",
    "name": "Global Business and Trade",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4011",
    "classNo": "CL01",
    "name": "Global Business and Trade",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4011",
    "classNo": "CL02",
    "name": "Global Business and Trade",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4011",
    "classNo": "CL02",
    "name": "Global Business and Trade",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4011",
    "classNo": "CL03",
    "name": "Global Business and Trade",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4011",
    "classNo": "CL03",
    "name": "Global Business and Trade",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4011",
    "classNo": "CL04",
    "name": "Global Business and Trade",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-806"
  },
  {
    "code": "CCBS4011",
    "classNo": "CL04",
    "name": "Global Business and Trade",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-806"
  },
  {
    "code": "CCBS4015",
    "classNo": "CL01",
    "name": "Strategic Brand Management",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-401"
  },
  {
    "code": "CCBS4015",
    "classNo": "CL01",
    "name": "Strategic Brand Management",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-401"
  },
  {
    "code": "CCBS4015",
    "classNo": "CL02",
    "name": "Strategic Brand Management",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4015",
    "classNo": "CL02",
    "name": "Strategic Brand Management",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4015",
    "classNo": "CL03",
    "name": "Strategic Brand Management",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4015",
    "classNo": "CL03",
    "name": "Strategic Brand Management",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4015",
    "classNo": "CL04",
    "name": "Strategic Brand Management",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4015",
    "classNo": "CL04",
    "name": "Strategic Brand Management",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4015",
    "classNo": "CL05",
    "name": "Strategic Brand Management",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4015",
    "classNo": "CL05",
    "name": "Strategic Brand Management",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4015",
    "classNo": "CL06",
    "name": "Strategic Brand Management",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4015",
    "classNo": "CL06",
    "name": "Strategic Brand Management",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4015",
    "classNo": "CL07",
    "name": "Strategic Brand Management",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4015",
    "classNo": "CL07",
    "name": "Strategic Brand Management",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4015",
    "classNo": "CL08",
    "name": "Strategic Brand Management",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-401"
  },
  {
    "code": "CCBS4015",
    "classNo": "CL08",
    "name": "Strategic Brand Management",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-401"
  },
  {
    "code": "CCBS4017",
    "classNo": "CL01",
    "name": "Principles of Auditing",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4017",
    "classNo": "CL01",
    "name": "Principles of Auditing",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4017",
    "classNo": "CL02",
    "name": "Principles of Auditing",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4017",
    "classNo": "CL02",
    "name": "Principles of Auditing",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4017",
    "classNo": "CL03",
    "name": "Principles of Auditing",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4017",
    "classNo": "CL03",
    "name": "Principles of Auditing",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4017",
    "classNo": "CL04",
    "name": "Principles of Auditing",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4017",
    "classNo": "CL04",
    "name": "Principles of Auditing",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4017",
    "classNo": "CL05",
    "name": "Principles of Auditing",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4017",
    "classNo": "CL05",
    "name": "Principles of Auditing",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4017",
    "classNo": "CL06",
    "name": "Principles of Auditing",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4017",
    "classNo": "CL06",
    "name": "Principles of Auditing",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4017",
    "classNo": "CL07",
    "name": "Principles of Auditing",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4017",
    "classNo": "CL07",
    "name": "Principles of Auditing",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4018",
    "classNo": "CL01",
    "name": "Financial Markets and Institutions",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4018",
    "classNo": "CL01",
    "name": "Financial Markets and Institutions",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4018",
    "classNo": "CL02",
    "name": "Financial Markets and Institutions",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4018",
    "classNo": "CL02",
    "name": "Financial Markets and Institutions",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4018",
    "classNo": "CL03",
    "name": "Financial Markets and Institutions",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4018",
    "classNo": "CL03",
    "name": "Financial Markets and Institutions",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4018",
    "classNo": "CL04",
    "name": "Financial Markets and Institutions",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4018",
    "classNo": "CL04",
    "name": "Financial Markets and Institutions",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4018",
    "classNo": "CL05",
    "name": "Financial Markets and Institutions",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4018",
    "classNo": "CL05",
    "name": "Financial Markets and Institutions",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4018",
    "classNo": "CL06",
    "name": "Financial Markets and Institutions",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4018",
    "classNo": "CL06",
    "name": "Financial Markets and Institutions",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4018",
    "classNo": "CL07",
    "name": "Financial Markets and Institutions",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4018",
    "classNo": "CL07",
    "name": "Financial Markets and Institutions",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4018",
    "classNo": "CL08",
    "name": "Financial Markets and Institutions",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4018",
    "classNo": "CL08",
    "name": "Financial Markets and Institutions",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4018",
    "classNo": "CL09",
    "name": "Financial Markets and Institutions",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4018",
    "classNo": "CL09",
    "name": "Financial Markets and Institutions",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL01",
    "name": "Integrated Project",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL01",
    "name": "Integrated Project",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL02",
    "name": "Integrated Project",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL02",
    "name": "Integrated Project",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL03",
    "name": "Integrated Project",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL03",
    "name": "Integrated Project",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL04",
    "name": "Integrated Project",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL04",
    "name": "Integrated Project",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL05",
    "name": "Integrated Project",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL05",
    "name": "Integrated Project",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL06",
    "name": "Integrated Project",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL06",
    "name": "Integrated Project",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL07",
    "name": "Integrated Project",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL07",
    "name": "Integrated Project",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL08",
    "name": "Integrated Project",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL08",
    "name": "Integrated Project",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL09",
    "name": "Integrated Project",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL09",
    "name": "Integrated Project",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL10",
    "name": "Integrated Project",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL10",
    "name": "Integrated Project",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL11",
    "name": "Integrated Project",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL11",
    "name": "Integrated Project",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL12",
    "name": "Integrated Project",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL12",
    "name": "Integrated Project",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL13",
    "name": "Integrated Project",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL13",
    "name": "Integrated Project",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL14",
    "name": "Integrated Project",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL14",
    "name": "Integrated Project",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL15",
    "name": "Integrated Project",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL15",
    "name": "Integrated Project",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL16",
    "name": "Integrated Project",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL16",
    "name": "Integrated Project",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL17",
    "name": "Integrated Project",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL17",
    "name": "Integrated Project",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL18",
    "name": "Integrated Project",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL18",
    "name": "Integrated Project",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL19",
    "name": "Integrated Project",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL19",
    "name": "Integrated Project",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL20",
    "name": "Integrated Project",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL20",
    "name": "Integrated Project",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL21",
    "name": "Integrated Project",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL21",
    "name": "Integrated Project",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL22",
    "name": "Integrated Project",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL22",
    "name": "Integrated Project",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL23",
    "name": "Integrated Project",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL23",
    "name": "Integrated Project",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL24",
    "name": "Integrated Project",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL24",
    "name": "Integrated Project",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL25",
    "name": "Integrated Project",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL25",
    "name": "Integrated Project",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL26",
    "name": "Integrated Project",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4020",
    "classNo": "CL26",
    "name": "Integrated Project",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4021",
    "classNo": "CL08",
    "name": "Consumer Behaviour",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4021",
    "classNo": "CL08",
    "name": "Consumer Behaviour",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4021",
    "classNo": "CL09",
    "name": "Consumer Behaviour",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4021",
    "classNo": "CL09",
    "name": "Consumer Behaviour",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4026",
    "classNo": "CL01",
    "name": "Mathematics for Economics",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4026",
    "classNo": "CL01",
    "name": "Mathematics for Economics",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4026",
    "classNo": "CL02",
    "name": "Mathematics for Economics",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4026",
    "classNo": "CL02",
    "name": "Mathematics for Economics",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4026",
    "classNo": "CL03",
    "name": "Mathematics for Economics",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4026",
    "classNo": "CL03",
    "name": "Mathematics for Economics",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4026",
    "classNo": "CL04",
    "name": "Mathematics for Economics",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4026",
    "classNo": "CL04",
    "name": "Mathematics for Economics",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4026",
    "classNo": "CL05",
    "name": "Mathematics for Economics",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4026",
    "classNo": "CL05",
    "name": "Mathematics for Economics",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4026",
    "classNo": "CL06",
    "name": "Mathematics for Economics",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4026",
    "classNo": "CL06",
    "name": "Mathematics for Economics",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4027",
    "classNo": "CL01",
    "name": "Introduction to Econometrics",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCBS4027",
    "classNo": "CL01",
    "name": "Introduction to Econometrics",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4027",
    "classNo": "CL02",
    "name": "Introduction to Econometrics",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCBS4027",
    "classNo": "CL02",
    "name": "Introduction to Econometrics",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4027",
    "classNo": "CL03",
    "name": "Introduction to Econometrics",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCBS4027",
    "classNo": "CL03",
    "name": "Introduction to Econometrics",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4027",
    "classNo": "CL04",
    "name": "Introduction to Econometrics",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCBS4027",
    "classNo": "CL04",
    "name": "Introduction to Econometrics",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-705"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL14",
    "name": "Foundations of Chinese Language",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "IEC601"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL14",
    "name": "Foundations of Chinese Language",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC601"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL15",
    "name": "Foundations of Chinese Language",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "IEC601"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL15",
    "name": "Foundations of Chinese Language",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "IEC601"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL16",
    "name": "Foundations of Chinese Language",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "SSC801"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL16",
    "name": "Foundations of Chinese Language",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "SSC801"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL01",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC508"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL01",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC508"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL02",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC608"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL02",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC608"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL03",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC808"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL03",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC808"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL04",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC501"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL04",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC501"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL05",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC807"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL05",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC807"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL06",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC508"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL06",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC508"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL07",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC509"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL07",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC509"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL08",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC907"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL08",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC907"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL09",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC906"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL09",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC906"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL10",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC601"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL10",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC601"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL11",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL11",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL12",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-101"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL12",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-101"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL13",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-402"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL13",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-402"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL14",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL14",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL15",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-401"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL15",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-401"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL16",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-401"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL16",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-401"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL17",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-101"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL17",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-101"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL18",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-101"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL18",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-101"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL19",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-401"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL19",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-401"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL20",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL20",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL21",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-401"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL21",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-401"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL22",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC608"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL22",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC608"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL23",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC306"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL23",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC306"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL24",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC304"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL24",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC304"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL25",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC609"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL25",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC609"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL26",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC601"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL26",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC601"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL27",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC607"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL27",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC607"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL28",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC616"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL28",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC616"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL29",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC304"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL29",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC304"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL30",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC309"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL30",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC309"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL31",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC609"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL31",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC609"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL32",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC609"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL32",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC609"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL33",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC608"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL33",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC608"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL34",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC304"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL34",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC304"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL35",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC302"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL35",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC302"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL36",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC8A3"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL36",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC8A3"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL37",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC506"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL37",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC506"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL98",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC508"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL98",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC508"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL99",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC807"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL99",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC807"
  },
  {
    "code": "CCCH4005",
    "classNo": "CL06",
    "name": "Classical Chinese Language",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK602"
  },
  {
    "code": "CCCH4005",
    "classNo": "CL06",
    "name": "Classical Chinese Language",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK602"
  },
  {
    "code": "CCCH4005",
    "classNo": "CL07",
    "name": "Classical Chinese Language",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK701"
  },
  {
    "code": "CCCH4005",
    "classNo": "CL07",
    "name": "Classical Chinese Language",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK701"
  },
  {
    "code": "CCCH4005",
    "classNo": "CL08",
    "name": "Classical Chinese Language",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK601"
  },
  {
    "code": "CCCH4005",
    "classNo": "CL08",
    "name": "Classical Chinese Language",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK601"
  },
  {
    "code": "CCCH4005",
    "classNo": "CL09",
    "name": "Classical Chinese Language",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK701"
  },
  {
    "code": "CCCH4005",
    "classNo": "CL09",
    "name": "Classical Chinese Language",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK701"
  },
  {
    "code": "CCCH4005",
    "classNo": "CL10",
    "name": "Classical Chinese Language",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK701"
  },
  {
    "code": "CCCH4005",
    "classNo": "CL10",
    "name": "Classical Chinese Language",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK701"
  },
  {
    "code": "CCCH4007",
    "classNo": "CL06",
    "name": "Introduction to Chinese Literary Criticism",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK601"
  },
  {
    "code": "CCCH4007",
    "classNo": "CL06",
    "name": "Introduction to Chinese Literary Criticism",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK601"
  },
  {
    "code": "CCCH4007",
    "classNo": "CL07",
    "name": "Introduction to Chinese Literary Criticism",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK601"
  },
  {
    "code": "CCCH4007",
    "classNo": "CL07",
    "name": "Introduction to Chinese Literary Criticism",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK601"
  },
  {
    "code": "CCCH4007",
    "classNo": "CL08",
    "name": "Introduction to Chinese Literary Criticism",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK603"
  },
  {
    "code": "CCCH4007",
    "classNo": "CL08",
    "name": "Introduction to Chinese Literary Criticism",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK603"
  },
  {
    "code": "CCCH4007",
    "classNo": "CL09",
    "name": "Introduction to Chinese Literary Criticism",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK702"
  },
  {
    "code": "CCCH4007",
    "classNo": "CL09",
    "name": "Introduction to Chinese Literary Criticism",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK702"
  },
  {
    "code": "CCCH4007",
    "classNo": "CL10",
    "name": "Introduction to Chinese Literary Criticism",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK601"
  },
  {
    "code": "CCCH4007",
    "classNo": "CL10",
    "name": "Introduction to Chinese Literary Criticism",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK601"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL04",
    "name": "Introduction to Chinese Literature",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC608"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL04",
    "name": "Introduction to Chinese Literature",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC608"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL05",
    "name": "Introduction to Chinese Literature",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC808"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL05",
    "name": "Introduction to Chinese Literature",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC808"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL06",
    "name": "Introduction to Chinese Literature",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC906"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL06",
    "name": "Introduction to Chinese Literature",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC906"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL07",
    "name": "Introduction to Chinese Literature",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC508"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL07",
    "name": "Introduction to Chinese Literature",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC508"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL08",
    "name": "Introduction to Chinese Literature",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC501"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL08",
    "name": "Introduction to Chinese Literature",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC501"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL09",
    "name": "Introduction to Chinese Literature",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC602"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL09",
    "name": "Introduction to Chinese Literature",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC602"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL10",
    "name": "Introduction to Chinese Literature",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC508"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL10",
    "name": "Introduction to Chinese Literature",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC508"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL11",
    "name": "Introduction to Chinese Literature",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC907"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL11",
    "name": "Introduction to Chinese Literature",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC907"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL12",
    "name": "Introduction to Chinese Literature",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC505"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL12",
    "name": "Introduction to Chinese Literature",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC505"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL13",
    "name": "Introduction to Chinese Literature",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC807"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL13",
    "name": "Introduction to Chinese Literature",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC807"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL14",
    "name": "Introduction to Chinese Literature",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC608"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL14",
    "name": "Introduction to Chinese Literature",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC608"
  },
  {
    "code": "CCCH4009",
    "classNo": "CL06",
    "name": "Studies of Modern and Contemporary Chinese Literature",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC711"
  },
  {
    "code": "CCCH4009",
    "classNo": "CL06",
    "name": "Studies of Modern and Contemporary Chinese Literature",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC711"
  },
  {
    "code": "CCCH4009",
    "classNo": "CL07",
    "name": "Studies of Modern and Contemporary Chinese Literature",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC907"
  },
  {
    "code": "CCCH4009",
    "classNo": "CL07",
    "name": "Studies of Modern and Contemporary Chinese Literature",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC907"
  },
  {
    "code": "CCCH4009",
    "classNo": "CL08",
    "name": "Studies of Modern and Contemporary Chinese Literature",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC906"
  },
  {
    "code": "CCCH4009",
    "classNo": "CL08",
    "name": "Studies of Modern and Contemporary Chinese Literature",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC906"
  },
  {
    "code": "CCCH4009",
    "classNo": "CL09",
    "name": "Studies of Modern and Contemporary Chinese Literature",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC906"
  },
  {
    "code": "CCCH4009",
    "classNo": "CL09",
    "name": "Studies of Modern and Contemporary Chinese Literature",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC906"
  },
  {
    "code": "CCCH4009",
    "classNo": "CL10",
    "name": "Studies of Modern and Contemporary Chinese Literature",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC705"
  },
  {
    "code": "CCCH4009",
    "classNo": "CL10",
    "name": "Studies of Modern and Contemporary Chinese Literature",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC705"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL01",
    "name": "Modern Chinese Language",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC808"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL01",
    "name": "Modern Chinese Language",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC808"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL02",
    "name": "Modern Chinese Language",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC604"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL02",
    "name": "Modern Chinese Language",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC604"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL03",
    "name": "Modern Chinese Language",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC508"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL03",
    "name": "Modern Chinese Language",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC508"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL04",
    "name": "Modern Chinese Language",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC601"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL04",
    "name": "Modern Chinese Language",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC601"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL05",
    "name": "Modern Chinese Language",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC807"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL05",
    "name": "Modern Chinese Language",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC807"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL06",
    "name": "Modern Chinese Language",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC807"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL06",
    "name": "Modern Chinese Language",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC807"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL07",
    "name": "Modern Chinese Language",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC505"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL07",
    "name": "Modern Chinese Language",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC505"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL08",
    "name": "Modern Chinese Language",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC508"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL08",
    "name": "Modern Chinese Language",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC508"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL09",
    "name": "Modern Chinese Language",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC807"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL09",
    "name": "Modern Chinese Language",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC807"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL10",
    "name": "Modern Chinese Language",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC907"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL10",
    "name": "Modern Chinese Language",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC907"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL11",
    "name": "Modern Chinese Language",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC906"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL11",
    "name": "Modern Chinese Language",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC906"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL12",
    "name": "Modern Chinese Language",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC809"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL12",
    "name": "Modern Chinese Language",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC809"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL13",
    "name": "Modern Chinese Language",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC807"
  },
  {
    "code": "CCCH4011",
    "classNo": "CL13",
    "name": "Modern Chinese Language",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC807"
  },
  {
    "code": "CCCH4012",
    "classNo": "CL05",
    "name": "Practical Chinese",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC710"
  },
  {
    "code": "CCCH4012",
    "classNo": "CL05",
    "name": "Practical Chinese",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC710"
  },
  {
    "code": "CCCH4012",
    "classNo": "CL06",
    "name": "Practical Chinese",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC506"
  },
  {
    "code": "CCCH4012",
    "classNo": "CL06",
    "name": "Practical Chinese",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC506"
  },
  {
    "code": "CCCH4012",
    "classNo": "CL07",
    "name": "Practical Chinese",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC807"
  },
  {
    "code": "CCCH4012",
    "classNo": "CL07",
    "name": "Practical Chinese",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC807"
  },
  {
    "code": "CCCH4012",
    "classNo": "CL08",
    "name": "Practical Chinese",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-704"
  },
  {
    "code": "CCCH4012",
    "classNo": "CL08",
    "name": "Practical Chinese",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-704"
  },
  {
    "code": "CCCH4012",
    "classNo": "CL09",
    "name": "Practical Chinese",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-402"
  },
  {
    "code": "CCCH4012",
    "classNo": "CL09",
    "name": "Practical Chinese",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-402"
  },
  {
    "code": "CCCH4012",
    "classNo": "CL10",
    "name": "Practical Chinese",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-101"
  },
  {
    "code": "CCCH4012",
    "classNo": "CL10",
    "name": "Practical Chinese",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-101"
  },
  {
    "code": "CCCH4012",
    "classNo": "CL11",
    "name": "Practical Chinese",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC608"
  },
  {
    "code": "CCCH4012",
    "classNo": "CL11",
    "name": "Practical Chinese",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC608"
  },
  {
    "code": "CCCH4013",
    "classNo": "CL08",
    "name": "Reading and Writing in Chinese",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC502"
  },
  {
    "code": "CCCH4013",
    "classNo": "CL08",
    "name": "Reading and Writing in Chinese",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC502"
  },
  {
    "code": "CCCH4013",
    "classNo": "CL09",
    "name": "Reading and Writing in Chinese",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC907"
  },
  {
    "code": "CCCH4013",
    "classNo": "CL09",
    "name": "Reading and Writing in Chinese",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC907"
  },
  {
    "code": "CCCH4013",
    "classNo": "CL10",
    "name": "Reading and Writing in Chinese",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC608"
  },
  {
    "code": "CCCH4013",
    "classNo": "CL10",
    "name": "Reading and Writing in Chinese",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC608"
  },
  {
    "code": "CCCH4013",
    "classNo": "CL11",
    "name": "Reading and Writing in Chinese",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC809"
  },
  {
    "code": "CCCH4013",
    "classNo": "CL11",
    "name": "Reading and Writing in Chinese",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC809"
  },
  {
    "code": "CCCH4013",
    "classNo": "CL12",
    "name": "Reading and Writing in Chinese",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC601"
  },
  {
    "code": "CCCH4013",
    "classNo": "CL12",
    "name": "Reading and Writing in Chinese",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC601"
  },
  {
    "code": "CCCH4013",
    "classNo": "CL13",
    "name": "Reading and Writing in Chinese",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC608"
  },
  {
    "code": "CCCH4013",
    "classNo": "CL13",
    "name": "Reading and Writing in Chinese",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC608"
  },
  {
    "code": "CCCH4014",
    "classNo": "CL06",
    "name": "Studies of Classical Texts and Culture",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK601"
  },
  {
    "code": "CCCH4014",
    "classNo": "CL06",
    "name": "Studies of Classical Texts and Culture",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK601"
  },
  {
    "code": "CCCH4014",
    "classNo": "CL07",
    "name": "Studies of Classical Texts and Culture",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK601"
  },
  {
    "code": "CCCH4014",
    "classNo": "CL07",
    "name": "Studies of Classical Texts and Culture",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK601"
  },
  {
    "code": "CCCH4014",
    "classNo": "CL08",
    "name": "Studies of Classical Texts and Culture",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK802"
  },
  {
    "code": "CCCH4014",
    "classNo": "CL08",
    "name": "Studies of Classical Texts and Culture",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK802"
  },
  {
    "code": "CCCH4014",
    "classNo": "CL09",
    "name": "Studies of Classical Texts and Culture",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK701"
  },
  {
    "code": "CCCH4014",
    "classNo": "CL09",
    "name": "Studies of Classical Texts and Culture",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK701"
  },
  {
    "code": "CCCH4014",
    "classNo": "CL10",
    "name": "Studies of Classical Texts and Culture",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK603"
  },
  {
    "code": "CCCH4014",
    "classNo": "CL10",
    "name": "Studies of Classical Texts and Culture",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK603"
  },
  {
    "code": "CCCH4015",
    "classNo": "CL01",
    "name": "Practical Writing for Marketing and Public Relations",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK602"
  },
  {
    "code": "CCCH4015",
    "classNo": "CL01",
    "name": "Practical Writing for Marketing and Public Relations",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK602"
  },
  {
    "code": "CCCH4015",
    "classNo": "CL02",
    "name": "Practical Writing for Marketing and Public Relations",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK702"
  },
  {
    "code": "CCCH4015",
    "classNo": "CL02",
    "name": "Practical Writing for Marketing and Public Relations",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK702"
  },
  {
    "code": "CCCH4016",
    "classNo": "CL01",
    "name": "Effective Chinese for Public Administration",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK801"
  },
  {
    "code": "CCCH4016",
    "classNo": "CL01",
    "name": "Effective Chinese for Public Administration",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK801"
  },
  {
    "code": "CCCH4017",
    "classNo": "CL01",
    "name": "Chinese for Professional Communication Project",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK701"
  },
  {
    "code": "CCCH4017",
    "classNo": "CL01",
    "name": "Chinese for Professional Communication Project",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK701"
  },
  {
    "code": "CCCH4018",
    "classNo": "CL01",
    "name": "Classical Chinese Poetry",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK701"
  },
  {
    "code": "CCCH4018",
    "classNo": "CL01",
    "name": "Classical Chinese Poetry",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK701"
  },
  {
    "code": "CCCH4020",
    "classNo": "CL01",
    "name": "Modern Chinese Literature and Film",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK603"
  },
  {
    "code": "CCCH4020",
    "classNo": "CL01",
    "name": "Modern Chinese Literature and Film",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK603"
  },
  {
    "code": "CCCH4022",
    "classNo": "CL05",
    "name": "Language, Society and Culture",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK602"
  },
  {
    "code": "CCCH4022",
    "classNo": "CL05",
    "name": "Language, Society and Culture",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK602"
  },
  {
    "code": "CCCH4022",
    "classNo": "CL06",
    "name": "Language, Society and Culture",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK701"
  },
  {
    "code": "CCCH4022",
    "classNo": "CL06",
    "name": "Language, Society and Culture",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK701"
  },
  {
    "code": "CCCH4022",
    "classNo": "CL07",
    "name": "Language, Society and Culture",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK603"
  },
  {
    "code": "CCCH4022",
    "classNo": "CL07",
    "name": "Language, Society and Culture",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK603"
  },
  {
    "code": "CCCU3004",
    "classNo": "CL01",
    "name": "Understanding Hong Kong Popular Culture",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC1201"
  },
  {
    "code": "CCCU3004",
    "classNo": "CL01",
    "name": "Understanding Hong Kong Popular Culture",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "IEC1201"
  },
  {
    "code": "CCCU3004",
    "classNo": "CL02",
    "name": "Understanding Hong Kong Popular Culture",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "IEC1201"
  },
  {
    "code": "CCCU3004",
    "classNo": "CL02",
    "name": "Understanding Hong Kong Popular Culture",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "IEC1201"
  },
  {
    "code": "CCCU3004",
    "classNo": "CL03",
    "name": "Understanding Hong Kong Popular Culture",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC1201"
  },
  {
    "code": "CCCU3004",
    "classNo": "CL03",
    "name": "Understanding Hong Kong Popular Culture",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "IEC1201"
  },
  {
    "code": "CCCU3004",
    "classNo": "CL04",
    "name": "Understanding Hong Kong Popular Culture",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC1201"
  },
  {
    "code": "CCCU3004",
    "classNo": "CL04",
    "name": "Understanding Hong Kong Popular Culture",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "IEC1201"
  },
  {
    "code": "CCCU3004",
    "classNo": "CL05",
    "name": "Understanding Hong Kong Popular Culture",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC2301"
  },
  {
    "code": "CCCU3004",
    "classNo": "CL05",
    "name": "Understanding Hong Kong Popular Culture",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "IEC2301"
  },
  {
    "code": "CCCU3004",
    "classNo": "CL06",
    "name": "Understanding Hong Kong Popular Culture",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "IEC1802"
  },
  {
    "code": "CCCU3004",
    "classNo": "CL06",
    "name": "Understanding Hong Kong Popular Culture",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "IEC1802"
  },
  {
    "code": "CCCU3004",
    "classNo": "CL07",
    "name": "Understanding Hong Kong Popular Culture",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "SSC801"
  },
  {
    "code": "CCCU3004",
    "classNo": "CL07",
    "name": "Understanding Hong Kong Popular Culture",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "SSC801"
  },
  {
    "code": "CCCU3004",
    "classNo": "CL08",
    "name": "Understanding Hong Kong Popular Culture",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "SSC702"
  },
  {
    "code": "CCCU3004",
    "classNo": "CL08",
    "name": "Understanding Hong Kong Popular Culture",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "SSC702"
  },
  {
    "code": "CCCU3004",
    "classNo": "CL09",
    "name": "Understanding Hong Kong Popular Culture",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "SSC704"
  },
  {
    "code": "CCCU3004",
    "classNo": "CL09",
    "name": "Understanding Hong Kong Popular Culture",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "SSC704"
  },
  {
    "code": "CCCU3004",
    "classNo": "CL10",
    "name": "Understanding Hong Kong Popular Culture",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "SSC801"
  },
  {
    "code": "CCCU3004",
    "classNo": "CL10",
    "name": "Understanding Hong Kong Popular Culture",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "SSC801"
  },
  {
    "code": "CCCU3006",
    "classNo": "CL01",
    "name": "Youth and Culture",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "IEC2301"
  },
  {
    "code": "CCCU3006",
    "classNo": "CL01",
    "name": "Youth and Culture",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC2301"
  },
  {
    "code": "CCCU3006",
    "classNo": "CL02",
    "name": "Youth and Culture",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "IEC2301"
  },
  {
    "code": "CCCU3006",
    "classNo": "CL02",
    "name": "Youth and Culture",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "IEC2301"
  },
  {
    "code": "CCCU3006",
    "classNo": "CL03",
    "name": "Youth and Culture",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC1802"
  },
  {
    "code": "CCCU3006",
    "classNo": "CL03",
    "name": "Youth and Culture",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "IEC1802"
  },
  {
    "code": "CCCU3006",
    "classNo": "CL04",
    "name": "Youth and Culture",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "IEC603"
  },
  {
    "code": "CCCU3006",
    "classNo": "CL04",
    "name": "Youth and Culture",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC603"
  },
  {
    "code": "CCCU3006",
    "classNo": "CL05",
    "name": "Youth and Culture",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "IEC601"
  },
  {
    "code": "CCCU3006",
    "classNo": "CL05",
    "name": "Youth and Culture",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC601"
  },
  {
    "code": "CCCU3006",
    "classNo": "CL06",
    "name": "Youth and Culture",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "SSC702"
  },
  {
    "code": "CCCU3006",
    "classNo": "CL06",
    "name": "Youth and Culture",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "SSC702"
  },
  {
    "code": "CCCU3006",
    "classNo": "CL07",
    "name": "Youth and Culture",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "SSC702"
  },
  {
    "code": "CCCU3006",
    "classNo": "CL07",
    "name": "Youth and Culture",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "SSC702"
  },
  {
    "code": "CCCU3006",
    "classNo": "CL08",
    "name": "Youth and Culture",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "SSC702"
  },
  {
    "code": "CCCU3006",
    "classNo": "CL08",
    "name": "Youth and Culture",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "SSC702"
  },
  {
    "code": "CCCU4001",
    "classNo": "CL03",
    "name": "Introduction to Film Studies",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4001",
    "classNo": "CL03",
    "name": "Introduction to Film Studies",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4001",
    "classNo": "CL04",
    "name": "Introduction to Film Studies",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4001",
    "classNo": "CL04",
    "name": "Introduction to Film Studies",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4001",
    "classNo": "CL05",
    "name": "Introduction to Film Studies",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4001",
    "classNo": "CL05",
    "name": "Introduction to Film Studies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4001",
    "classNo": "CL06",
    "name": "Introduction to Film Studies",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4001",
    "classNo": "CL06",
    "name": "Introduction to Film Studies",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4001",
    "classNo": "CL07",
    "name": "Introduction to Film Studies",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC503"
  },
  {
    "code": "CCCU4001",
    "classNo": "CL07",
    "name": "Introduction to Film Studies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC503"
  },
  {
    "code": "CCCU4001",
    "classNo": "CL08",
    "name": "Introduction to Film Studies",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4001",
    "classNo": "CL08",
    "name": "Introduction to Film Studies",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL32",
    "name": "The Journey of Self-Discovery",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL32",
    "name": "The Journey of Self-Discovery",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL33",
    "name": "The Journey of Self-Discovery",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL33",
    "name": "The Journey of Self-Discovery",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL34",
    "name": "The Journey of Self-Discovery",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC704"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL34",
    "name": "The Journey of Self-Discovery",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC704"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL35",
    "name": "The Journey of Self-Discovery",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL35",
    "name": "The Journey of Self-Discovery",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL36",
    "name": "The Journey of Self-Discovery",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL36",
    "name": "The Journey of Self-Discovery",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL37",
    "name": "The Journey of Self-Discovery",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL37",
    "name": "The Journey of Self-Discovery",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL38",
    "name": "The Journey of Self-Discovery",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC704"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL38",
    "name": "The Journey of Self-Discovery",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC704"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL39",
    "name": "The Journey of Self-Discovery",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC806"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL39",
    "name": "The Journey of Self-Discovery",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC806"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL40",
    "name": "The Journey of Self-Discovery",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL40",
    "name": "The Journey of Self-Discovery",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL41",
    "name": "The Journey of Self-Discovery",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC704"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL41",
    "name": "The Journey of Self-Discovery",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC704"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL42",
    "name": "The Journey of Self-Discovery",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL42",
    "name": "The Journey of Self-Discovery",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL43",
    "name": "The Journey of Self-Discovery",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL43",
    "name": "The Journey of Self-Discovery",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL44",
    "name": "The Journey of Self-Discovery",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL44",
    "name": "The Journey of Self-Discovery",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL45",
    "name": "The Journey of Self-Discovery",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL45",
    "name": "The Journey of Self-Discovery",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL46",
    "name": "The Journey of Self-Discovery",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL46",
    "name": "The Journey of Self-Discovery",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC507"
  },
  {
    "code": "CCCU4009",
    "classNo": "CL01",
    "name": "Practical Public Relations Writing in Chinese and English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC502"
  },
  {
    "code": "CCCU4009",
    "classNo": "CL01",
    "name": "Practical Public Relations Writing in Chinese and English",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC502"
  },
  {
    "code": "CCCU4012",
    "classNo": "CL01",
    "name": "Client-based Project (Public Relations & Corporate Communications)",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4012",
    "classNo": "CL01",
    "name": "Client-based Project (Public Relations & Corporate Communications)",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4012",
    "classNo": "CL01",
    "name": "Client-based Project (Public Relations & Corporate Communications)",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4012",
    "classNo": "CL01",
    "name": "Client-based Project (Public Relations & Corporate Communications)",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4012",
    "classNo": "CL01",
    "name": "Client-based Project (Public Relations & Corporate Communications)",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL05",
    "name": "Introduction to Media and Communications",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC503"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL05",
    "name": "Introduction to Media and Communications",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC503"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL06",
    "name": "Introduction to Media and Communications",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC502"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL06",
    "name": "Introduction to Media and Communications",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC502"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL07",
    "name": "Introduction to Media and Communications",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL07",
    "name": "Introduction to Media and Communications",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL08",
    "name": "Introduction to Media and Communications",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC503"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL08",
    "name": "Introduction to Media and Communications",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC503"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL09",
    "name": "Introduction to Media and Communications",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL09",
    "name": "Introduction to Media and Communications",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL10",
    "name": "Introduction to Media and Communications",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC502"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL10",
    "name": "Introduction to Media and Communications",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC502"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL11",
    "name": "Introduction to Media and Communications",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL11",
    "name": "Introduction to Media and Communications",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL12",
    "name": "Introduction to Media and Communications",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL12",
    "name": "Introduction to Media and Communications",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL13",
    "name": "Introduction to Media and Communications",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL13",
    "name": "Introduction to Media and Communications",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL14",
    "name": "Introduction to Media and Communications",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC503"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL14",
    "name": "Introduction to Media and Communications",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC503"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL15",
    "name": "Introduction to Media and Communications",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL15",
    "name": "Introduction to Media and Communications",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL16",
    "name": "Introduction to Media and Communications",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL16",
    "name": "Introduction to Media and Communications",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4021",
    "classNo": "CL01",
    "name": "Media Publishing Industry and Production",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4021",
    "classNo": "CL01",
    "name": "Media Publishing Industry and Production",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4021",
    "classNo": "CL02",
    "name": "Media Publishing Industry and Production",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4021",
    "classNo": "CL02",
    "name": "Media Publishing Industry and Production",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4021",
    "classNo": "CL03",
    "name": "Media Publishing Industry and Production",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC503"
  },
  {
    "code": "CCCU4021",
    "classNo": "CL03",
    "name": "Media Publishing Industry and Production",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC503"
  },
  {
    "code": "CCCU4021",
    "classNo": "CL04",
    "name": "Media Publishing Industry and Production",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC503"
  },
  {
    "code": "CCCU4021",
    "classNo": "CL04",
    "name": "Media Publishing Industry and Production",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC503"
  },
  {
    "code": "CCCU4021",
    "classNo": "CL05",
    "name": "Media Publishing Industry and Production",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4021",
    "classNo": "CL05",
    "name": "Media Publishing Industry and Production",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4021",
    "classNo": "CL06",
    "name": "Media Publishing Industry and Production",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC502"
  },
  {
    "code": "CCCU4021",
    "classNo": "CL06",
    "name": "Media Publishing Industry and Production",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC502"
  },
  {
    "code": "CCCU4021",
    "classNo": "CL07",
    "name": "Media Publishing Industry and Production",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC503"
  },
  {
    "code": "CCCU4021",
    "classNo": "CL07",
    "name": "Media Publishing Industry and Production",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC503"
  },
  {
    "code": "CCCU4021",
    "classNo": "CL08",
    "name": "Media Publishing Industry and Production",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC503"
  },
  {
    "code": "CCCU4021",
    "classNo": "CL08",
    "name": "Media Publishing Industry and Production",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC503"
  },
  {
    "code": "CCCU4021",
    "classNo": "CL09",
    "name": "Media Publishing Industry and Production",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC705"
  },
  {
    "code": "CCCU4021",
    "classNo": "CL09",
    "name": "Media Publishing Industry and Production",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC705"
  },
  {
    "code": "CCCU4022",
    "classNo": "CL01",
    "name": "Creativity and Creative Industries",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4022",
    "classNo": "CL01",
    "name": "Creativity and Creative Industries",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4022",
    "classNo": "CL02",
    "name": "Creativity and Creative Industries",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4022",
    "classNo": "CL02",
    "name": "Creativity and Creative Industries",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4022",
    "classNo": "CL03",
    "name": "Creativity and Creative Industries",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4022",
    "classNo": "CL03",
    "name": "Creativity and Creative Industries",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4022",
    "classNo": "CL04",
    "name": "Creativity and Creative Industries",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4022",
    "classNo": "CL04",
    "name": "Creativity and Creative Industries",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4022",
    "classNo": "CL05",
    "name": "Creativity and Creative Industries",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4022",
    "classNo": "CL05",
    "name": "Creativity and Creative Industries",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4022",
    "classNo": "CL06",
    "name": "Creativity and Creative Industries",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4022",
    "classNo": "CL06",
    "name": "Creativity and Creative Industries",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4027",
    "classNo": "CL01",
    "name": "Writing and Editing for Chinese Media",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC502"
  },
  {
    "code": "CCCU4027",
    "classNo": "CL01",
    "name": "Writing and Editing for Chinese Media",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC502"
  },
  {
    "code": "CCCU4027",
    "classNo": "CL02",
    "name": "Writing and Editing for Chinese Media",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4027",
    "classNo": "CL02",
    "name": "Writing and Editing for Chinese Media",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4027",
    "classNo": "CL03",
    "name": "Writing and Editing for Chinese Media",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC503"
  },
  {
    "code": "CCCU4027",
    "classNo": "CL03",
    "name": "Writing and Editing for Chinese Media",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC503"
  },
  {
    "code": "CCCU4034",
    "classNo": "CL01",
    "name": "Media, Identity and Consumer Society",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4034",
    "classNo": "CL01",
    "name": "Media, Identity and Consumer Society",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4034",
    "classNo": "CL02",
    "name": "Media, Identity and Consumer Society",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4034",
    "classNo": "CL02",
    "name": "Media, Identity and Consumer Society",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4034",
    "classNo": "CL03",
    "name": "Media, Identity and Consumer Society",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4034",
    "classNo": "CL03",
    "name": "Media, Identity and Consumer Society",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4036",
    "classNo": "CL01",
    "name": "Digital PR",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4036",
    "classNo": "CL01",
    "name": "Digital PR",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4037",
    "classNo": "CL01",
    "name": "Crisis Communication and Reputation Management",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC502"
  },
  {
    "code": "CCCU4037",
    "classNo": "CL01",
    "name": "Crisis Communication and Reputation Management",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC502"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL06",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC806"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL06",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC806"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL07",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC609"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL07",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC609"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL08",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC708"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL08",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC708"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL09",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE108"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL09",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE108"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL10",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE110"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL10",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE110"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL11",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL11",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL12",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC502"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL12",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC502"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL13",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL13",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL14",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC315"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL14",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC315"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL15",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC314"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL15",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC314"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL03",
    "name": "Intercultural Communication",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC705"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL03",
    "name": "Intercultural Communication",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC705"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL04",
    "name": "Intercultural Communication",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC604"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL04",
    "name": "Intercultural Communication",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC604"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL05",
    "name": "Intercultural Communication",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE108"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL05",
    "name": "Intercultural Communication",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE108"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL06",
    "name": "Intercultural Communication",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE111"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL06",
    "name": "Intercultural Communication",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE111"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL07",
    "name": "Intercultural Communication",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC314"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL07",
    "name": "Intercultural Communication",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC314"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL08",
    "name": "Intercultural Communication",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC311"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL08",
    "name": "Intercultural Communication",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC311"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL09",
    "name": "Intercultural Communication",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC612"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL09",
    "name": "Intercultural Communication",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC612"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL10",
    "name": "Intercultural Communication",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL10",
    "name": "Intercultural Communication",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL11",
    "name": "Intercultural Communication",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL11",
    "name": "Intercultural Communication",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL19",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC301"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL19",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC301"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL20",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC311"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL20",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC311"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL21",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC311"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL21",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC311"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL22",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC311"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL22",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC311"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL23",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC314"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL23",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC314"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL24",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC315"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL24",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC315"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL25",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC314"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL25",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC314"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL26",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC301"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL26",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC301"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL27",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC306"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL27",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC306"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL28",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC311"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL28",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC311"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL29",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC609"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL29",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC609"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL30",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC609"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL30",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC609"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL31",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC604"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL31",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC604"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL32",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC503"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL32",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC503"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL33",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC801"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL33",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC801"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL34",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC705"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL34",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC705"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL35",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC806"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL35",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC806"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL36",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC604"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL36",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC604"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL37",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC708"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL37",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC708"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL38",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC709"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL38",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC709"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL39",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC705"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL39",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC705"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL40",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC708"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL40",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC708"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL41",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC705"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL41",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC705"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL42",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-603"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL42",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-603"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL43",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-604"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL43",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-604"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL44",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-801"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL44",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-801"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL45",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-701"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL45",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-701"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL46",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-801"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL46",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-801"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL47",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-603"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL47",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-603"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL48",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL48",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL49",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL49",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL50",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL50",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL51",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL51",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL52",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL52",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL53",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL53",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL54",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL54",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL55",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL55",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL56",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL56",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL57",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL57",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL07",
    "name": "Representation of People in Popular Art Forms",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC311"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL07",
    "name": "Representation of People in Popular Art Forms",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC311"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL08",
    "name": "Representation of People in Popular Art Forms",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC301"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL08",
    "name": "Representation of People in Popular Art Forms",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC301"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL09",
    "name": "Representation of People in Popular Art Forms",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC311"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL09",
    "name": "Representation of People in Popular Art Forms",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC311"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL10",
    "name": "Representation of People in Popular Art Forms",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC708"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL10",
    "name": "Representation of People in Popular Art Forms",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC708"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL11",
    "name": "Representation of People in Popular Art Forms",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC609"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL11",
    "name": "Representation of People in Popular Art Forms",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC609"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL12",
    "name": "Representation of People in Popular Art Forms",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC709"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL12",
    "name": "Representation of People in Popular Art Forms",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC709"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL13",
    "name": "Representation of People in Popular Art Forms",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC709"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL13",
    "name": "Representation of People in Popular Art Forms",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC709"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL14",
    "name": "Representation of People in Popular Art Forms",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC708"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL14",
    "name": "Representation of People in Popular Art Forms",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC708"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL15",
    "name": "Representation of People in Popular Art Forms",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC603"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL15",
    "name": "Representation of People in Popular Art Forms",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC603"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL16",
    "name": "Representation of People in Popular Art Forms",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-603"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL16",
    "name": "Representation of People in Popular Art Forms",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-603"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL17",
    "name": "Representation of People in Popular Art Forms",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-701"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL17",
    "name": "Representation of People in Popular Art Forms",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-701"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL18",
    "name": "Representation of People in Popular Art Forms",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-603"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL18",
    "name": "Representation of People in Popular Art Forms",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-603"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL19",
    "name": "Representation of People in Popular Art Forms",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-702"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL19",
    "name": "Representation of People in Popular Art Forms",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-702"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL20",
    "name": "Representation of People in Popular Art Forms",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-603"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL20",
    "name": "Representation of People in Popular Art Forms",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-603"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL21",
    "name": "Representation of People in Popular Art Forms",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-702"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL21",
    "name": "Representation of People in Popular Art Forms",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-702"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL22",
    "name": "Representation of People in Popular Art Forms",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-603"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL22",
    "name": "Representation of People in Popular Art Forms",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-603"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL23",
    "name": "Representation of People in Popular Art Forms",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-805"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL23",
    "name": "Representation of People in Popular Art Forms",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-805"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL24",
    "name": "Representation of People in Popular Art Forms",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-805"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL24",
    "name": "Representation of People in Popular Art Forms",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-805"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL25",
    "name": "Representation of People in Popular Art Forms",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-402"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL25",
    "name": "Representation of People in Popular Art Forms",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-402"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL26",
    "name": "Representation of People in Popular Art Forms",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC502"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL26",
    "name": "Representation of People in Popular Art Forms",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC502"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL27",
    "name": "Representation of People in Popular Art Forms",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL27",
    "name": "Representation of People in Popular Art Forms",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4042",
    "classNo": "CL06",
    "name": "Researching Culture and Media",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4042",
    "classNo": "CL06",
    "name": "Researching Culture and Media",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4042",
    "classNo": "CL07",
    "name": "Researching Culture and Media",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4042",
    "classNo": "CL07",
    "name": "Researching Culture and Media",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4042",
    "classNo": "CL08",
    "name": "Researching Culture and Media",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4042",
    "classNo": "CL08",
    "name": "Researching Culture and Media",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4042",
    "classNo": "CL09",
    "name": "Researching Culture and Media",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4042",
    "classNo": "CL09",
    "name": "Researching Culture and Media",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC7A6"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL02",
    "name": "General English II (Group 1)",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "IEC601"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL02",
    "name": "General English II (Group 1)",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "IEC601"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL03",
    "name": "General English II (Group 1)",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "IEC603"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL03",
    "name": "General English II (Group 1)",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "IEC1802"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL04",
    "name": "General English II (Group 1)",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC601"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL04",
    "name": "General English II (Group 1)",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "IEC1802"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL05",
    "name": "General English II (Group 1)",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "IEC1802"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL05",
    "name": "General English II (Group 1)",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "IEC2301"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL06",
    "name": "General English II (Group 2)",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "IEC1203"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL06",
    "name": "General English II (Group 2)",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "IEC2301"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL07",
    "name": "General English II (Group 2)",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "IEC1203"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL07",
    "name": "General English II (Group 2)",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "IEC1201"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL08",
    "name": "General English II (Group 2)",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "IEC1201"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL08",
    "name": "General English II (Group 2)",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "IEC1802"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL09",
    "name": "General English II (Group 2)",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "IEC601"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL09",
    "name": "General English II (Group 2)",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "IEC1203"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL10",
    "name": "General English II (Group 2)",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "IEC1201"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL10",
    "name": "General English II (Group 2)",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "IEC1203"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL11",
    "name": "General English II (Group 2)",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "IEC1203"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL11",
    "name": "General English II (Group 2)",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "IEC2301"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL12",
    "name": "General English II (Group 2)",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "IEC1203"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL12",
    "name": "General English II (Group 2)",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC2301"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL13",
    "name": "General English II (Group 2)",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "IEC1802"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL13",
    "name": "General English II (Group 2)",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "IEC2301"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL14",
    "name": "General English II (Group 2)",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "IEC1802"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL14",
    "name": "General English II (Group 2)",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "IEC1802"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL15",
    "name": "General English II (Group 1)",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "SSC702"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL15",
    "name": "General English II (Group 1)",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "SSC702"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL16",
    "name": "General English II (Group 1)",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "SSC702"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL16",
    "name": "General English II (Group 1)",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "SSC702"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL17",
    "name": "General English II (Group 2)",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "SSC801"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL17",
    "name": "General English II (Group 2)",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "SSC702"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL18",
    "name": "General English II (Group 2)",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "SSC701"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL18",
    "name": "General English II (Group 2)",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "SSC701"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL19",
    "name": "General English II (Group 2)",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "SSC801"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL19",
    "name": "General English II (Group 2)",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "SSC701"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL20",
    "name": "General English II (Group 2)",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "SSC704"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL20",
    "name": "General English II (Group 2)",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "SSC702"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL21",
    "name": "General English II (Group 2)",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "SSC704"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL21",
    "name": "General English II (Group 2)",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "SSC701"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL22",
    "name": "General English II (Group 2)",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "SSC701"
  },
  {
    "code": "CCEN3003",
    "classNo": "CL22",
    "name": "General English II (Group 2)",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "SSC702"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL01",
    "name": "College Speaking",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "IEC2301"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL01",
    "name": "College Speaking",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC1203"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL02",
    "name": "College Speaking",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "IEC601"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL02",
    "name": "College Speaking",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "IEC1203"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL03",
    "name": "College Speaking",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "IEC1201"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL03",
    "name": "College Speaking",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "IEC1802"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL04",
    "name": "College Speaking",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "IEC1201"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL04",
    "name": "College Speaking",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "IEC1203"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL05",
    "name": "College Speaking",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "IEC2301"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL05",
    "name": "College Speaking",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "IEC2301"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL06",
    "name": "College Speaking",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "IEC1201"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL06",
    "name": "College Speaking",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "IEC1203"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL07",
    "name": "College Speaking",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC1802"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL07",
    "name": "College Speaking",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "IEC1201"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL08",
    "name": "College Speaking",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "IEC1802"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL08",
    "name": "College Speaking",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "IEC1201"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL09",
    "name": "College Speaking",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "IEC1802"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL09",
    "name": "College Speaking",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "IEC1201"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL10",
    "name": "College Speaking",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "IEC1203"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL10",
    "name": "College Speaking",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "IEC1203"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL11",
    "name": "College Speaking",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "SSC704"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL11",
    "name": "College Speaking",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "SSC801"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL12",
    "name": "College Speaking",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "SSC702"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL12",
    "name": "College Speaking",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "SSC701"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL13",
    "name": "College Speaking",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "SSC801"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL13",
    "name": "College Speaking",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "SSC701"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL14",
    "name": "College Speaking",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "SSC701"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL14",
    "name": "College Speaking",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "SSC701"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL15",
    "name": "College Speaking",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "SSC701"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL15",
    "name": "College Speaking",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "SSC701"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL16",
    "name": "College Speaking",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "SSC701"
  },
  {
    "code": "CCEN3004",
    "classNo": "CL16",
    "name": "College Speaking",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "SSC701"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL28",
    "name": "Introduction to Academic English",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL28",
    "name": "Introduction to Academic English",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL29",
    "name": "Introduction to Academic English",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE102"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL29",
    "name": "Introduction to Academic English",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL30",
    "name": "Introduction to Academic English",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE106"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL30",
    "name": "Introduction to Academic English",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE106"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL01",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE108"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL01",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE110"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL02",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL02",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL03",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL03",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL04",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE111"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL04",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL05",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE111"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL05",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE111"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL06",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE111"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL06",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL07",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE111"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL07",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL08",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE111"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL08",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL09",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE111"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL09",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE102"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL10",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE111"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL10",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE111"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL11",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL11",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE111"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL12",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL12",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE110"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL13",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE110"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL13",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL14",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL14",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL15",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE110"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL15",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL16",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL16",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE111"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL17",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE111"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL17",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL18",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE111"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL18",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE110"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL19",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL19",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL20",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL20",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL21",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL21",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE111"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL22",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL22",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE102"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL23",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL23",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL24",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE111"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL24",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL25",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE111"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL25",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE110"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL26",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL26",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL27",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE111"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL27",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL28",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL28",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL29",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL29",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL30",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE110"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL30",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL31",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL31",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL32",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL32",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL33",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL33",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL34",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL34",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL35",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL35",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL36",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL36",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL37",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL37",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL38",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL38",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL39",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC608"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL39",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC609"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL40",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC304"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL40",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC604"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL41",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC609"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL41",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC604"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL42",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC608"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL42",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC604"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL43",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC608"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL43",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC306"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL44",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC609"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL44",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC306"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL45",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC604"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL45",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC603"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL46",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC311"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL46",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC304"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL47",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC304"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL47",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC607"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL48",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC311"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL48",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC604"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL49",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC602"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL49",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC603"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL50",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC602"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL50",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC608"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL51",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC604"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL51",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC608"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL52",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC609"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL52",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC604"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL53",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC609"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL53",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC608"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL54",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC607"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL54",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC608"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL55",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC608"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL55",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC608"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL56",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC608"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL56",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC304"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL57",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC608"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL57",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC304"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL58",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC304"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL58",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC308"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL59",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC304"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL59",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC607"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL60",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC604"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL60",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC601"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL61",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC304"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL61",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC604"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL62",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC304"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL62",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC604"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL63",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC304"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL63",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC304"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL64",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC304"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL64",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC304"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL65",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC616"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL65",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC616"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL66",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC308"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL66",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC308"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL67",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC604"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL67",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC309"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL68",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL68",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC505"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL69",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL69",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC8A3"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL70",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL70",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC507"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL71",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC503"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL71",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL72",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL72",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC11A3"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL73",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC503"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL73",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC1202"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL74",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC11A3"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL74",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1202"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL75",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC507"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL75",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC507"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL76",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1201"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL76",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC505"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL77",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC507"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL77",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC507"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL78",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL78",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC8A3"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL79",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC8A3"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL79",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC507"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL80",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC8A3"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL80",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC507"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL81",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC505"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL81",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1205"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL82",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC507"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL82",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL83",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC506"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL83",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC11A3"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL84",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC506"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL84",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC506"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL85",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1201"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL85",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC507"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL86",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC505"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL86",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC507"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL87",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC507"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL87",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC507"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL88",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC506"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL88",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1201"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL89",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC505"
  },
  {
    "code": "CCEN4004",
    "classNo": "BL89",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC507"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL07",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC508"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL07",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC907"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL08",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC604"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL08",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC809"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL09",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC502"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL09",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC508"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL10",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC711"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL10",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC808"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL11",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC608"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL11",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC808"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL12",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC505"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL12",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC711"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL13",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC608"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL13",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC809"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL14",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC808"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL14",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC707"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL15",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC707"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL15",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC601"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL16",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC808"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL16",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC508"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL17",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC501"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL17",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC602"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL18",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC501"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL18",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC602"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL19",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC602"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL19",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC501"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL20",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC602"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL20",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC501"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL21",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC505"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL21",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC505"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL22",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC907"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL22",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC508"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL23",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC508"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL23",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC907"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL24",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC504"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL24",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC504"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL25",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC808"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL25",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC504"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL26",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC907"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL26",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC906"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL27",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC907"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL27",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC906"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL28",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC508"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL28",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC809"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL29",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC508"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL29",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC809"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL30",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC906"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL30",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC608"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL31",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC906"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL31",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC608"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL32",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC710"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL32",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC807"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL33",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC906"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL33",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC505"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL34",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC906"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL34",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC711"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL35",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC907"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL35",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC807"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL36",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC711"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL36",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC906"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL37",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC907"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL37",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC807"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL38",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC711"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL38",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC710"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL39",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC906"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL39",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC907"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL40",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC906"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL40",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC501"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL41",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC906"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL41",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC907"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL42",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC503"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL42",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC907"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL43",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC809"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL43",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC706"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL44",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC907"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL44",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC710"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL45",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC809"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL45",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC505"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL46",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC808"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL46",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC808"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL47",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC707"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL47",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC504"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL48",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC505"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL48",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC808"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL49",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC605"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL49",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC711"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL50",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC505"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL50",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC809"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL51",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC505"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL51",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC906"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL52",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC807"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL52",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC607"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL53",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC807"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL53",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC808"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL54",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC706"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL54",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC907"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL55",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC907"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL55",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC710"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL56",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC907"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL56",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC711"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL57",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC807"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL57",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC711"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL58",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC607"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL58",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC710"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL59",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC710"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL59",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC711"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL60",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC809"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL60",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC611"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL61",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC510"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL61",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC809"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL62",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC906"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL62",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC907"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL63",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC808"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL63",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC710"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL64",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC710"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL64",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC906"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL65",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC809"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL65",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC906"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL66",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC808"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL66",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC808"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL67",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC808"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL67",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC501"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL68",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC809"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL68",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC906"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL69",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC505"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL69",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC906"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL70",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC505"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL70",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC606"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL71",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC809"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL71",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC503"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL72",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC809"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL72",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC707"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL73",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC809"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL73",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC808"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL74",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC809"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL74",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC707"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL75",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC711"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL75",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC501"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL76",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC711"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL76",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC707"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL77",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC710"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL77",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC706"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL78",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC710"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL78",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC611"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL79",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC707"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL79",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC505"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL80",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC711"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL80",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC611"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL81",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC711"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL81",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC809"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL82",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC809"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL82",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC711"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL83",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC505"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL83",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC507"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL84",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC505"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL84",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC505"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL85",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC809"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL85",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC505"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL86",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC710"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL86",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC706"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL87",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC711"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL87",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC707"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL88",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC711"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL88",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC707"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL89",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE111"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL89",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE111"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL90",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL90",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE111"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL91",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE108"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL91",
    "name": "English for Academic Purposes I",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE108"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL92",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE111"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL92",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL93",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE108"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL93",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE108"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL94",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL94",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE111"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL95",
    "name": "English for Academic Purposes I",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL95",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE110"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL96",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE110"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL96",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL97",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL97",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE110"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL98",
    "name": "English for Academic Purposes I",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE108"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL98",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE111"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL99",
    "name": "English for Academic Purposes I",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE110"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL99",
    "name": "English for Academic Purposes I",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE108"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL01",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL01",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL02",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL02",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL03",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL03",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL04",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL04",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL05",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL05",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL06",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL06",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL07",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE110"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL07",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL08",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE102"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL08",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL09",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL09",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL10",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL10",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL11",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL11",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL12",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL12",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE102"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL13",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL13",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL14",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL14",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL15",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL15",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL16",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL16",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE102"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL17",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL17",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL18",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL18",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL19",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL19",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL20",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL20",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL21",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL21",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL22",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL22",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL23",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL23",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL24",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL24",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL25",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL25",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL26",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE102"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL26",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL27",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL27",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE102"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL28",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL28",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL29",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC603"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL29",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC311"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL30",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC616"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL30",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC603"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL31",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1203"
  },
  {
    "code": "CCEN4005",
    "classNo": "BL31",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1201"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL73",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC506"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL73",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC606"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL74",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC611"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL74",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC710"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL75",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC501"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL75",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC502"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL76",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC604"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL76",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC707"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL77",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC711"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL77",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC809"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL78",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC808"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL78",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC605"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL79",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC605"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL79",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC808"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL80",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC707"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL80",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC706"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL81",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC505"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL81",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC808"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL82",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC707"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL82",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC509"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL83",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC602"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL83",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC809"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL84",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC710"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL84",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC505"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL85",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC505"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL85",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC505"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL86",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC706"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL86",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC607"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL87",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC706"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL87",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC808"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL88",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC710"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL88",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC505"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL89",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC711"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL89",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC504"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL90",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC706"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL90",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC707"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL91",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC611"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL91",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC607"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL92",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC710"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL92",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC706"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL93",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL93",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL94",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL94",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL95",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL95",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL96",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL96",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL97",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL97",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL98",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL98",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL99",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE110"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL99",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4006",
    "classNo": "CL01",
    "name": "Introduction to Comparative Literature",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK603"
  },
  {
    "code": "CCEN4006",
    "classNo": "CL01",
    "name": "Introduction to Comparative Literature",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK603"
  },
  {
    "code": "CCEN4006",
    "classNo": "CL02",
    "name": "Introduction to Comparative Literature",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK603"
  },
  {
    "code": "CCEN4006",
    "classNo": "CL02",
    "name": "Introduction to Comparative Literature",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK603"
  },
  {
    "code": "CCEN4006",
    "classNo": "CL03",
    "name": "Introduction to Comparative Literature",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK802"
  },
  {
    "code": "CCEN4006",
    "classNo": "CL03",
    "name": "Introduction to Comparative Literature",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK802"
  },
  {
    "code": "CCEN4006",
    "classNo": "CL04",
    "name": "Introduction to Comparative Literature",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK601"
  },
  {
    "code": "CCEN4006",
    "classNo": "CL04",
    "name": "Introduction to Comparative Literature",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK601"
  },
  {
    "code": "CCEN4006",
    "classNo": "CL05",
    "name": "Introduction to Comparative Literature",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK603"
  },
  {
    "code": "CCEN4006",
    "classNo": "CL05",
    "name": "Introduction to Comparative Literature",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK603"
  },
  {
    "code": "CCEN4006",
    "classNo": "CL06",
    "name": "Introduction to Comparative Literature",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK601"
  },
  {
    "code": "CCEN4006",
    "classNo": "CL06",
    "name": "Introduction to Comparative Literature",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK601"
  },
  {
    "code": "CCEN4006",
    "classNo": "CL07",
    "name": "Introduction to Comparative Literature",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK602"
  },
  {
    "code": "CCEN4006",
    "classNo": "CL07",
    "name": "Introduction to Comparative Literature",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK602"
  },
  {
    "code": "CCEN4008",
    "classNo": "CL07",
    "name": "Introduction to Linguistics",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK803"
  },
  {
    "code": "CCEN4008",
    "classNo": "CL07",
    "name": "Introduction to Linguistics",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK803"
  },
  {
    "code": "CCEN4008",
    "classNo": "CL08",
    "name": "Introduction to Linguistics",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK803"
  },
  {
    "code": "CCEN4008",
    "classNo": "CL08",
    "name": "Introduction to Linguistics",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK803"
  },
  {
    "code": "CCEN4008",
    "classNo": "CL09",
    "name": "Introduction to Linguistics",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK602"
  },
  {
    "code": "CCEN4008",
    "classNo": "CL09",
    "name": "Introduction to Linguistics",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK602"
  },
  {
    "code": "CCEN4008",
    "classNo": "CL10",
    "name": "Introduction to Linguistics",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK701"
  },
  {
    "code": "CCEN4008",
    "classNo": "CL10",
    "name": "Introduction to Linguistics",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK701"
  },
  {
    "code": "CCEN4009",
    "classNo": "CL01",
    "name": "Literary Linguistics",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK603"
  },
  {
    "code": "CCEN4009",
    "classNo": "CL01",
    "name": "Literary Linguistics",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK603"
  },
  {
    "code": "CCEN4009",
    "classNo": "CL02",
    "name": "Literary Linguistics",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK602"
  },
  {
    "code": "CCEN4009",
    "classNo": "CL02",
    "name": "Literary Linguistics",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK602"
  },
  {
    "code": "CCEN4009",
    "classNo": "CL03",
    "name": "Literary Linguistics",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK602"
  },
  {
    "code": "CCEN4009",
    "classNo": "CL03",
    "name": "Literary Linguistics",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK602"
  },
  {
    "code": "CCEN4009",
    "classNo": "CL04",
    "name": "Literary Linguistics",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK603"
  },
  {
    "code": "CCEN4009",
    "classNo": "CL04",
    "name": "Literary Linguistics",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK603"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL01",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC611"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL01",
    "name": "English for Arts and Humanities",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC606"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL02",
    "name": "English for Arts and Humanities",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC607"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL02",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC808"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL03",
    "name": "English for Arts and Humanities",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC611"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL03",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC508"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL04",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC607"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL04",
    "name": "English for Arts and Humanities",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC607"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL05",
    "name": "English for Arts and Humanities",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC510"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL05",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC808"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL06",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC602"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL06",
    "name": "English for Arts and Humanities",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC508"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL07",
    "name": "English for Arts and Humanities",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC606"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL07",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC606"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL08",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC706"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL08",
    "name": "English for Arts and Humanities",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC605"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL09",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC606"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL09",
    "name": "English for Arts and Humanities",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC508"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL10",
    "name": "English for Arts and Humanities",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC605"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL10",
    "name": "English for Arts and Humanities",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC711"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL11",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC606"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL11",
    "name": "English for Arts and Humanities",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC506"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL12",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC501"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL12",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC501"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL13",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC510"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL13",
    "name": "English for Arts and Humanities",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC710"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL14",
    "name": "English for Arts and Humanities",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC711"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL14",
    "name": "English for Arts and Humanities",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC506"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL15",
    "name": "English for Arts and Humanities",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC602"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL15",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC510"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL16",
    "name": "English for Arts and Humanities",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC710"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL16",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC505"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL17",
    "name": "English for Arts and Humanities",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC509"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL17",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC504"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL18",
    "name": "English for Arts and Humanities",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC608"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL18",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC505"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL19",
    "name": "English for Arts and Humanities",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC605"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL19",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC611"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL20",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC510"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL20",
    "name": "English for Arts and Humanities",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC602"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL21",
    "name": "English for Arts and Humanities",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC707"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL21",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC706"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL22",
    "name": "English for Arts and Humanities",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC805"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL22",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC706"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL23",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC509"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL23",
    "name": "English for Arts and Humanities",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC707"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL24",
    "name": "English for Arts and Humanities",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC11A3"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL24",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC506"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL25",
    "name": "English for Arts and Humanities",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1201"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL25",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC506"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL26",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL26",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC505"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL27",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1201"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL27",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC505"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL28",
    "name": "English for Arts and Humanities",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL28",
    "name": "English for Arts and Humanities",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC507"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL29",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC505"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL29",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1201"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL30",
    "name": "English for Arts and Humanities",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC507"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL30",
    "name": "English for Arts and Humanities",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC506"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL31",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC507"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL31",
    "name": "English for Arts and Humanities",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL32",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL32",
    "name": "English for Arts and Humanities",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC505"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL33",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL33",
    "name": "English for Arts and Humanities",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1201"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL34",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC506"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL34",
    "name": "English for Arts and Humanities",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC505"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL35",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1201"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL35",
    "name": "English for Arts and Humanities",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC505"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL36",
    "name": "English for Arts and Humanities",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC506"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL36",
    "name": "English for Arts and Humanities",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL37",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC506"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL37",
    "name": "English for Arts and Humanities",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC506"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL38",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC8A3"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL38",
    "name": "English for Arts and Humanities",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC507"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL39",
    "name": "English for Arts and Humanities",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC505"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL39",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1201"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL40",
    "name": "English for Arts and Humanities",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC505"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL40",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL41",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC602"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL41",
    "name": "English for Arts and Humanities",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC603"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL42",
    "name": "English for Arts and Humanities",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC603"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL42",
    "name": "English for Arts and Humanities",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC609"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL43",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC608"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL43",
    "name": "English for Arts and Humanities",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC309"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL44",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC304"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL44",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC604"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL45",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC304"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL45",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC604"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL46",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC311"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL46",
    "name": "English for Arts and Humanities",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC603"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL47",
    "name": "English for Arts and Humanities",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC308"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL47",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC603"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL48",
    "name": "English for Arts and Humanities",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC603"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL48",
    "name": "English for Arts and Humanities",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC603"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL49",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC601"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL49",
    "name": "English for Arts and Humanities",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC602"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL50",
    "name": "English for Arts and Humanities",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC602"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL50",
    "name": "English for Arts and Humanities",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC607"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL51",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC616"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL51",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC607"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL52",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC604"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL52",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC602"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL53",
    "name": "English for Arts and Humanities",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC607"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL53",
    "name": "English for Arts and Humanities",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC602"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL54",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC309"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL54",
    "name": "English for Arts and Humanities",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC616"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL55",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC603"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL55",
    "name": "English for Arts and Humanities",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC309"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL56",
    "name": "English for Arts and Humanities",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC616"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL56",
    "name": "English for Arts and Humanities",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC601"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL57",
    "name": "English for Arts and Humanities",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC602"
  },
  {
    "code": "CCEN4012",
    "classNo": "CL57",
    "name": "English for Arts and Humanities",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC604"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL11",
    "name": "English for Science and Technology",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC809"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL11",
    "name": "English for Science and Technology",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC611"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL12",
    "name": "English for Science and Technology",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC504"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL12",
    "name": "English for Science and Technology",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC510"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL13",
    "name": "English for Science and Technology",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC504"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL13",
    "name": "English for Science and Technology",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC501"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL14",
    "name": "English for Science and Technology",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC808"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL14",
    "name": "English for Science and Technology",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC510"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL15",
    "name": "English for Science and Technology",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC509"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL15",
    "name": "English for Science and Technology",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC606"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL16",
    "name": "English for Science and Technology",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC506"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL16",
    "name": "English for Science and Technology",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC508"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL17",
    "name": "English for Science and Technology",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC605"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL17",
    "name": "English for Science and Technology",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC509"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL18",
    "name": "English for Science and Technology",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC808"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL18",
    "name": "English for Science and Technology",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC510"
  },
  {
    "code": "CCEN4015",
    "classNo": "CL08",
    "name": "English for Healthcare Professionals",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC602"
  },
  {
    "code": "CCEN4015",
    "classNo": "CL09",
    "name": "English for Healthcare Professionals",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1004"
  },
  {
    "code": "CCEN4015",
    "classNo": "CL10",
    "name": "English for Healthcare Professionals",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC805"
  },
  {
    "code": "CCEN4015",
    "classNo": "CL11",
    "name": "English for Healthcare Professionals",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1004"
  },
  {
    "code": "CCEN4016",
    "classNo": "CL01",
    "name": "Introduction to Applied Linguistics",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK602"
  },
  {
    "code": "CCEN4016",
    "classNo": "CL01",
    "name": "Introduction to Applied Linguistics",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK602"
  },
  {
    "code": "CCEN4016",
    "classNo": "CL02",
    "name": "Introduction to Applied Linguistics",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK803"
  },
  {
    "code": "CCEN4016",
    "classNo": "CL02",
    "name": "Introduction to Applied Linguistics",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK803"
  },
  {
    "code": "CCEN4019",
    "classNo": "CL01",
    "name": "Language and Society",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK602"
  },
  {
    "code": "CCEN4019",
    "classNo": "CL01",
    "name": "Language and Society",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK602"
  },
  {
    "code": "CCEN4019",
    "classNo": "CL02",
    "name": "Language and Society",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK701"
  },
  {
    "code": "CCEN4019",
    "classNo": "CL02",
    "name": "Language and Society",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK701"
  },
  {
    "code": "CCEN4019",
    "classNo": "CL03",
    "name": "Language and Society",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK602"
  },
  {
    "code": "CCEN4019",
    "classNo": "CL03",
    "name": "Language and Society",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK602"
  },
  {
    "code": "CCEN4019",
    "classNo": "CL04",
    "name": "Language and Society",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK702"
  },
  {
    "code": "CCEN4019",
    "classNo": "CL04",
    "name": "Language and Society",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK702"
  },
  {
    "code": "CCEN4019",
    "classNo": "CL05",
    "name": "Language and Society",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK702"
  },
  {
    "code": "CCEN4019",
    "classNo": "CL05",
    "name": "Language and Society",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK702"
  },
  {
    "code": "CCEN4023",
    "classNo": "CL01",
    "name": "Dystopian Literature",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK601"
  },
  {
    "code": "CCEN4023",
    "classNo": "CL01",
    "name": "Dystopian Literature",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK601"
  },
  {
    "code": "CCEN4023",
    "classNo": "CL02",
    "name": "Dystopian Literature",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK603"
  },
  {
    "code": "CCEN4023",
    "classNo": "CL02",
    "name": "Dystopian Literature",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK603"
  },
  {
    "code": "CCEN4023",
    "classNo": "CL03",
    "name": "Dystopian Literature",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK701"
  },
  {
    "code": "CCEN4023",
    "classNo": "CL03",
    "name": "Dystopian Literature",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK701"
  },
  {
    "code": "CCEN4023",
    "classNo": "CL04",
    "name": "Dystopian Literature",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK702"
  },
  {
    "code": "CCEN4023",
    "classNo": "CL04",
    "name": "Dystopian Literature",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK702"
  },
  {
    "code": "CCEN4024",
    "classNo": "CL01",
    "name": "Introduction to Teaching English to Speakers of Other Languages (TESOL)",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK603"
  },
  {
    "code": "CCEN4024",
    "classNo": "CL01",
    "name": "Introduction to Teaching English to Speakers of Other Languages (TESOL)",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK603"
  },
  {
    "code": "CCEN4024",
    "classNo": "CL02",
    "name": "Introduction to Teaching English to Speakers of Other Languages (TESOL)",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK802"
  },
  {
    "code": "CCEN4024",
    "classNo": "CL02",
    "name": "Introduction to Teaching English to Speakers of Other Languages (TESOL)",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK802"
  },
  {
    "code": "CCEN4024",
    "classNo": "CL03",
    "name": "Introduction to Teaching English to Speakers of Other Languages (TESOL)",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK803"
  },
  {
    "code": "CCEN4024",
    "classNo": "CL03",
    "name": "Introduction to Teaching English to Speakers of Other Languages (TESOL)",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK803"
  },
  {
    "code": "CCFN4004",
    "classNo": "CL01",
    "name": "Insurance",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCFN4004",
    "classNo": "CL01",
    "name": "Insurance",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCFN4013",
    "classNo": "CL01",
    "name": "Principles of Banking",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-806"
  },
  {
    "code": "CCFN4013",
    "classNo": "CL01",
    "name": "Principles of Banking",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-806"
  },
  {
    "code": "CCFN4013",
    "classNo": "CL02",
    "name": "Principles of Banking",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-806"
  },
  {
    "code": "CCFN4013",
    "classNo": "CL02",
    "name": "Principles of Banking",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-806"
  },
  {
    "code": "CCFN4017",
    "classNo": "CL01",
    "name": "The Economics of Money and Banking",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-803"
  },
  {
    "code": "CCFN4017",
    "classNo": "CL01",
    "name": "The Economics of Money and Banking",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-803"
  },
  {
    "code": "CCFN4017",
    "classNo": "CL02",
    "name": "The Economics of Money and Banking",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-803"
  },
  {
    "code": "CCFN4017",
    "classNo": "CL02",
    "name": "The Economics of Money and Banking",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-803"
  },
  {
    "code": "CCFN4017",
    "classNo": "CL03",
    "name": "The Economics of Money and Banking",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-802"
  },
  {
    "code": "CCFN4017",
    "classNo": "CL03",
    "name": "The Economics of Money and Banking",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-802"
  },
  {
    "code": "CCFN4017",
    "classNo": "CL04",
    "name": "The Economics of Money and Banking",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-802"
  },
  {
    "code": "CCFN4017",
    "classNo": "CL04",
    "name": "The Economics of Money and Banking",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-802"
  },
  {
    "code": "CCIT3008",
    "classNo": "CL01",
    "name": "Introduction to Information Technology and AI",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "IEC801"
  },
  {
    "code": "CCIT3008",
    "classNo": "CL01",
    "name": "Introduction to Information Technology and AI",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "IEC801"
  },
  {
    "code": "CCIT3008",
    "classNo": "CL02",
    "name": "Introduction to Information Technology and AI",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "IEC801"
  },
  {
    "code": "CCIT3008",
    "classNo": "CL02",
    "name": "Introduction to Information Technology and AI",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "IEC801"
  },
  {
    "code": "CCIT3008",
    "classNo": "CL03",
    "name": "Introduction to Information Technology and AI",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "IEC1801"
  },
  {
    "code": "CCIT3008",
    "classNo": "CL03",
    "name": "Introduction to Information Technology and AI",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC1801"
  },
  {
    "code": "CCIT3008",
    "classNo": "CL04",
    "name": "Introduction to Information Technology and AI",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC801"
  },
  {
    "code": "CCIT3008",
    "classNo": "CL04",
    "name": "Introduction to Information Technology and AI",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "IEC801"
  },
  {
    "code": "CCIT3008",
    "classNo": "CL05",
    "name": "Introduction to Information Technology and AI",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC801"
  },
  {
    "code": "CCIT3008",
    "classNo": "CL05",
    "name": "Introduction to Information Technology and AI",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "IEC801"
  },
  {
    "code": "CCIT3008",
    "classNo": "CL06",
    "name": "Introduction to Information Technology and AI",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "SSC802"
  },
  {
    "code": "CCIT3008",
    "classNo": "CL06",
    "name": "Introduction to Information Technology and AI",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "SSC802"
  },
  {
    "code": "CCIT3008",
    "classNo": "CL07",
    "name": "Introduction to Information Technology and AI",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "SSC802"
  },
  {
    "code": "CCIT3008",
    "classNo": "CL07",
    "name": "Introduction to Information Technology and AI",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "SSC802"
  },
  {
    "code": "CCIT4010",
    "classNo": "CL01",
    "name": "Media Publishing and Production",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1204"
  },
  {
    "code": "CCIT4010",
    "classNo": "CL01",
    "name": "Media Publishing and Production",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1204"
  },
  {
    "code": "CCIT4013",
    "classNo": "CL01",
    "name": "Enterprise Networking and Automation",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC401"
  },
  {
    "code": "CCIT4013",
    "classNo": "CL01",
    "name": "Enterprise Networking and Automation",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC401"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL01",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL01",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL02",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL02",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL03",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL03",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL04",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL04",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL05",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL05",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL06",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL06",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL07",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL07",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL08",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL08",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL09",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL09",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL10",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL10",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL11",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL11",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL12",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL12",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL13",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL13",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL14",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL14",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL15",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL15",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL16",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL16",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL17",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL17",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL18",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL18",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL19",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL19",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL20",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4016",
    "classNo": "CL20",
    "name": "Introduction to Data Structures and Algorithms",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4021",
    "classNo": "CL04",
    "name": "Discrete Mathematics",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC601"
  },
  {
    "code": "CCIT4021",
    "classNo": "CL04",
    "name": "Discrete Mathematics",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC601"
  },
  {
    "code": "CCIT4021",
    "classNo": "CL05",
    "name": "Discrete Mathematics",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC601"
  },
  {
    "code": "CCIT4021",
    "classNo": "CL05",
    "name": "Discrete Mathematics",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC601"
  },
  {
    "code": "CCIT4021",
    "classNo": "CL06",
    "name": "Discrete Mathematics",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC601"
  },
  {
    "code": "CCIT4021",
    "classNo": "CL06",
    "name": "Discrete Mathematics",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC601"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL01",
    "name": "Introduction to Computer Organisation",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL01",
    "name": "Introduction to Computer Organisation",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL02",
    "name": "Introduction to Computer Organisation",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL02",
    "name": "Introduction to Computer Organisation",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL03",
    "name": "Introduction to Computer Organisation",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL03",
    "name": "Introduction to Computer Organisation",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL04",
    "name": "Introduction to Computer Organisation",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL04",
    "name": "Introduction to Computer Organisation",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL05",
    "name": "Introduction to Computer Organisation",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL05",
    "name": "Introduction to Computer Organisation",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL06",
    "name": "Introduction to Computer Organisation",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL06",
    "name": "Introduction to Computer Organisation",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL07",
    "name": "Introduction to Computer Organisation",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL07",
    "name": "Introduction to Computer Organisation",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL08",
    "name": "Introduction to Computer Organisation",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL08",
    "name": "Introduction to Computer Organisation",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL09",
    "name": "Introduction to Computer Organisation",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL09",
    "name": "Introduction to Computer Organisation",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL10",
    "name": "Introduction to Computer Organisation",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL10",
    "name": "Introduction to Computer Organisation",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL11",
    "name": "Introduction to Computer Organisation",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL11",
    "name": "Introduction to Computer Organisation",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL12",
    "name": "Introduction to Computer Organisation",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK703"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL12",
    "name": "Introduction to Computer Organisation",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK703"
  },
  {
    "code": "CCIT4033",
    "classNo": "CL01",
    "name": "Introduction to Database Systems",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4033",
    "classNo": "CL01",
    "name": "Introduction to Database Systems",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4033",
    "classNo": "CL02",
    "name": "Introduction to Database Systems",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4033",
    "classNo": "CL02",
    "name": "Introduction to Database Systems",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4033",
    "classNo": "CL03",
    "name": "Introduction to Database Systems",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4033",
    "classNo": "CL03",
    "name": "Introduction to Database Systems",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4033",
    "classNo": "CL04",
    "name": "Introduction to Database Systems",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4033",
    "classNo": "CL04",
    "name": "Introduction to Database Systems",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4033",
    "classNo": "CL05",
    "name": "Introduction to Database Systems",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4033",
    "classNo": "CL05",
    "name": "Introduction to Database Systems",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4033",
    "classNo": "CL06",
    "name": "Introduction to Database Systems",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4033",
    "classNo": "CL06",
    "name": "Introduction to Database Systems",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4033",
    "classNo": "CL07",
    "name": "Introduction to Database Systems",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4033",
    "classNo": "CL07",
    "name": "Introduction to Database Systems",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4033",
    "classNo": "CL08",
    "name": "Introduction to Database Systems",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4033",
    "classNo": "CL08",
    "name": "Introduction to Database Systems",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4034",
    "classNo": "CL01",
    "name": "Switching, Wireless and Routing Essentials",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC401"
  },
  {
    "code": "CCIT4034",
    "classNo": "CL01",
    "name": "Switching, Wireless and Routing Essentials",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC401"
  },
  {
    "code": "CCIT4034",
    "classNo": "CL02",
    "name": "Switching, Wireless and Routing Essentials",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC401"
  },
  {
    "code": "CCIT4034",
    "classNo": "CL02",
    "name": "Switching, Wireless and Routing Essentials",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC401"
  },
  {
    "code": "CCIT4036",
    "classNo": "CL01",
    "name": "Security Audit Fundamentals",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC801"
  },
  {
    "code": "CCIT4036",
    "classNo": "CL01",
    "name": "Security Audit Fundamentals",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC801"
  },
  {
    "code": "CCIT4036",
    "classNo": "CL02",
    "name": "Security Audit Fundamentals",
    "day": "Mon",
    "start": "19:00",
    "end": "22:00",
    "room": "KEC503"
  },
  {
    "code": "CCIT4037",
    "classNo": "CL01",
    "name": "Ethical Hacking",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4037",
    "classNo": "CL01",
    "name": "Ethical Hacking",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4039",
    "classNo": "CL01",
    "name": "Introduction to Computer Forensics",
    "day": "Sat",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC806"
  },
  {
    "code": "CCIT4039",
    "classNo": "CL01",
    "name": "Introduction to Computer Forensics",
    "day": "Sat",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC806"
  },
  {
    "code": "CCIT4040",
    "classNo": "CL01",
    "name": "Network Security",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC401"
  },
  {
    "code": "CCIT4040",
    "classNo": "CL01",
    "name": "Network Security",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC401"
  },
  {
    "code": "CCIT4040",
    "classNo": "CL02",
    "name": "Network Security",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC401"
  },
  {
    "code": "CCIT4040",
    "classNo": "CL02",
    "name": "Network Security",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC401"
  },
  {
    "code": "CCIT4041",
    "classNo": "CL01",
    "name": "Ethics and Computing Professionalism",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC807"
  },
  {
    "code": "CCIT4041",
    "classNo": "CL02",
    "name": "Ethics and Computing Professionalism",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC807"
  },
  {
    "code": "CCIT4041",
    "classNo": "CL03",
    "name": "Ethics and Computing Professionalism",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC807"
  },
  {
    "code": "CCIT4041",
    "classNo": "CL04",
    "name": "Ethics and Computing Professionalism",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC807"
  },
  {
    "code": "CCIT4050",
    "classNo": "CL01",
    "name": "Project Management for Information Technology",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC510"
  },
  {
    "code": "CCIT4050",
    "classNo": "CL02",
    "name": "Project Management for Information Technology",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC506"
  },
  {
    "code": "CCIT4050",
    "classNo": "CL03",
    "name": "Project Management for Information Technology",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC808"
  },
  {
    "code": "CCIT4050",
    "classNo": "CL04",
    "name": "Project Management for Information Technology",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC506"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL17",
    "name": "Information Management",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL17",
    "name": "Information Management",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL18",
    "name": "Information Management",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL18",
    "name": "Information Management",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL19",
    "name": "Information Management",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL19",
    "name": "Information Management",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL20",
    "name": "Information Management",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL20",
    "name": "Information Management",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL21",
    "name": "Information Management",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL21",
    "name": "Information Management",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL22",
    "name": "Information Management",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL22",
    "name": "Information Management",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL23",
    "name": "Information Management",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL23",
    "name": "Information Management",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL24",
    "name": "Information Management",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL24",
    "name": "Information Management",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL25",
    "name": "Information Management",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL25",
    "name": "Information Management",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL26",
    "name": "Information Management",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE104"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL26",
    "name": "Information Management",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE104"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL27",
    "name": "Information Management",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE104"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL27",
    "name": "Information Management",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE104"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL28",
    "name": "Information Management",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE104"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL28",
    "name": "Information Management",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE104"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL29",
    "name": "Information Management",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE104"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL29",
    "name": "Information Management",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE104"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL30",
    "name": "Information Management",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE104"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL30",
    "name": "Information Management",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE104"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL31",
    "name": "Information Management",
    "day": "Sat",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL31",
    "name": "Information Management",
    "day": "Sat",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL32",
    "name": "Information Management",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE104"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL32",
    "name": "Information Management",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE104"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL33",
    "name": "Information Management",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE104"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL33",
    "name": "Information Management",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE104"
  },
  {
    "code": "CCIT4058",
    "classNo": "CL04",
    "name": "Internet Programming",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK703"
  },
  {
    "code": "CCIT4058",
    "classNo": "CL04",
    "name": "Internet Programming",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK703"
  },
  {
    "code": "CCIT4059",
    "classNo": "CL01",
    "name": "Mobile Application Development",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4059",
    "classNo": "CL01",
    "name": "Mobile Application Development",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4059",
    "classNo": "CL02",
    "name": "Mobile Application Development",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4059",
    "classNo": "CL02",
    "name": "Mobile Application Development",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4059",
    "classNo": "CL03",
    "name": "Mobile Application Development",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4059",
    "classNo": "CL03",
    "name": "Mobile Application Development",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4059",
    "classNo": "CL04",
    "name": "Mobile Application Development",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4059",
    "classNo": "CL04",
    "name": "Mobile Application Development",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4059",
    "classNo": "CL05",
    "name": "Mobile Application Development",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4059",
    "classNo": "CL05",
    "name": "Mobile Application Development",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4064",
    "classNo": "CL01",
    "name": "Microcontrollers",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4064",
    "classNo": "CL01",
    "name": "Microcontrollers",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4064",
    "classNo": "CL02",
    "name": "Microcontrollers",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4064",
    "classNo": "CL02",
    "name": "Microcontrollers",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4064",
    "classNo": "CL03",
    "name": "Microcontrollers",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4064",
    "classNo": "CL03",
    "name": "Microcontrollers",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4064",
    "classNo": "CL04",
    "name": "Microcontrollers",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4064",
    "classNo": "CL04",
    "name": "Microcontrollers",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4064",
    "classNo": "CL05",
    "name": "Microcontrollers",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4064",
    "classNo": "CL05",
    "name": "Microcontrollers",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4064",
    "classNo": "CL06",
    "name": "Microcontrollers",
    "day": "Mon",
    "start": "19:00",
    "end": "22:00",
    "room": "KEC701"
  },
  {
    "code": "CCIT4064",
    "classNo": "CL07",
    "name": "Microcontrollers",
    "day": "Tue",
    "start": "19:00",
    "end": "22:00",
    "room": "KEC701"
  },
  {
    "code": "CCIT4075",
    "classNo": "CL01",
    "name": "Data Mining",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4075",
    "classNo": "CL01",
    "name": "Data Mining",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4075",
    "classNo": "CL02",
    "name": "Data Mining",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4075",
    "classNo": "CL02",
    "name": "Data Mining",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4075",
    "classNo": "CL03",
    "name": "Data Mining",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4075",
    "classNo": "CL03",
    "name": "Data Mining",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4075",
    "classNo": "CL04",
    "name": "Data Mining",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4075",
    "classNo": "CL04",
    "name": "Data Mining",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4077",
    "classNo": "CL02",
    "name": "Project (Information Security)",
    "day": "Tue",
    "start": "19:00",
    "end": "22:00",
    "room": "KEC901"
  },
  {
    "code": "CCIT4078",
    "classNo": "CL04",
    "name": "Project (Information Technology)",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4078",
    "classNo": "CL04",
    "name": "Project (Information Technology)",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4078",
    "classNo": "CL05",
    "name": "Project (Information Technology)",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4078",
    "classNo": "CL05",
    "name": "Project (Information Technology)",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4078",
    "classNo": "CL06",
    "name": "Project (Information Technology)",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC401"
  },
  {
    "code": "CCIT4078",
    "classNo": "CL06",
    "name": "Project (Information Technology)",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC401"
  },
  {
    "code": "CCIT4079",
    "classNo": "CL03",
    "name": "Big Data Applications and Analytics",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4079",
    "classNo": "CL03",
    "name": "Big Data Applications and Analytics",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4079",
    "classNo": "CL04",
    "name": "Big Data Applications and Analytics",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4079",
    "classNo": "CL04",
    "name": "Big Data Applications and Analytics",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL12",
    "name": "Project on Knowledge Products Development",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL12",
    "name": "Project on Knowledge Products Development",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL13",
    "name": "Project on Knowledge Products Development",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL13",
    "name": "Project on Knowledge Products Development",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL14",
    "name": "Project on Knowledge Products Development",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL14",
    "name": "Project on Knowledge Products Development",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL15",
    "name": "Project on Knowledge Products Development",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL15",
    "name": "Project on Knowledge Products Development",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL16",
    "name": "Project on Knowledge Products Development",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL16",
    "name": "Project on Knowledge Products Development",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL17",
    "name": "Project on Knowledge Products Development",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL17",
    "name": "Project on Knowledge Products Development",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL18",
    "name": "Project on Knowledge Products Development",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL18",
    "name": "Project on Knowledge Products Development",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL19",
    "name": "Project on Knowledge Products Development",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL19",
    "name": "Project on Knowledge Products Development",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL20",
    "name": "Project on Knowledge Products Development",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL20",
    "name": "Project on Knowledge Products Development",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL21",
    "name": "Project on Knowledge Products Development",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL21",
    "name": "Project on Knowledge Products Development",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL22",
    "name": "Project on Knowledge Products Development",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL22",
    "name": "Project on Knowledge Products Development",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL01",
    "name": "Digital Logic and Systems",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK703/KEC910"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL01",
    "name": "Digital Logic and Systems",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK703/KEC910"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL02",
    "name": "Digital Logic and Systems",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK703/KEC902"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL02",
    "name": "Digital Logic and Systems",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK703/KEC902"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL03",
    "name": "Digital Logic and Systems",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK703/KEC910"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL03",
    "name": "Digital Logic and Systems",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK703/KEC910"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL04",
    "name": "Digital Logic and Systems",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK703/KEC901"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL04",
    "name": "Digital Logic and Systems",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK703/KEC901"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL05",
    "name": "Digital Logic and Systems",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK703/KEC902"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL05",
    "name": "Digital Logic and Systems",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK703/KEC902"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL06",
    "name": "Digital Logic and Systems",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC910/KEK703"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL06",
    "name": "Digital Logic and Systems",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC910/KEK703"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL07",
    "name": "Digital Logic and Systems",
    "day": "Thu",
    "start": "19:00",
    "end": "22:00",
    "room": "KEC701/KEC902"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL08",
    "name": "Digital Logic and Systems",
    "day": "Wed",
    "start": "19:00",
    "end": "22:00",
    "room": "KEC701/KEC902"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL09",
    "name": "Digital Logic and Systems",
    "day": "Thu",
    "start": "19:00",
    "end": "22:00",
    "room": "KEC902/KEC701"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL10",
    "name": "Digital Logic and Systems",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC901/KEK703"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL10",
    "name": "Digital Logic and Systems",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC901/KEK703"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL11",
    "name": "Digital Logic and Systems",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC902/KEK703"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL11",
    "name": "Digital Logic and Systems",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC902/KEK703"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL12",
    "name": "Digital Logic and Systems",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK703/KEC901"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL12",
    "name": "Digital Logic and Systems",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK703/KEC901"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL13",
    "name": "Digital Logic and Systems",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK703/KEC910"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL13",
    "name": "Digital Logic and Systems",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK703/KEC910"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL14",
    "name": "Digital Logic and Systems",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK703/KEC901"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL14",
    "name": "Digital Logic and Systems",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK703/KEC901"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL15",
    "name": "Digital Logic and Systems",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC901/KEK703"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL15",
    "name": "Digital Logic and Systems",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC901/KEK703"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL16",
    "name": "Digital Logic and Systems",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC910/KEK703"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL16",
    "name": "Digital Logic and Systems",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC910/KEK703"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL17",
    "name": "Digital Logic and Systems",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC910/KEK703"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL17",
    "name": "Digital Logic and Systems",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC910/KEK703"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL18",
    "name": "Digital Logic and Systems",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC902/KEK703"
  },
  {
    "code": "CCIT4082",
    "classNo": "CL18",
    "name": "Digital Logic and Systems",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC902/KEK703"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL37",
    "name": "Information Technology Fundamentals",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC310"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL37",
    "name": "Information Technology Fundamentals",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC310"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL38",
    "name": "Information Technology Fundamentals",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC310"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL38",
    "name": "Information Technology Fundamentals",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC310"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL39",
    "name": "Information Technology Fundamentals",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC310"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL39",
    "name": "Information Technology Fundamentals",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC310"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL40",
    "name": "Information Technology Fundamentals",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC310"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL40",
    "name": "Information Technology Fundamentals",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC310"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL41",
    "name": "Information Technology Fundamentals",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC310"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL41",
    "name": "Information Technology Fundamentals",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC310"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL42",
    "name": "Information Technology Fundamentals",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC203"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL42",
    "name": "Information Technology Fundamentals",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC203"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL43",
    "name": "Information Technology Fundamentals",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC203"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL43",
    "name": "Information Technology Fundamentals",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC203"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL44",
    "name": "Information Technology Fundamentals",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC203"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL44",
    "name": "Information Technology Fundamentals",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC203"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL45",
    "name": "Information Technology Fundamentals",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC203"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL45",
    "name": "Information Technology Fundamentals",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC203"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL46",
    "name": "Information Technology Fundamentals",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC504"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL46",
    "name": "Information Technology Fundamentals",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC504"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL47",
    "name": "Information Technology Fundamentals",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC504"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL47",
    "name": "Information Technology Fundamentals",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC504"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL48",
    "name": "Information Technology Fundamentals",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC504"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL48",
    "name": "Information Technology Fundamentals",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC504"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL49",
    "name": "Information Technology Fundamentals",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1204"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL49",
    "name": "Information Technology Fundamentals",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1204"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL50",
    "name": "Information Technology Fundamentals",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1204"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL50",
    "name": "Information Technology Fundamentals",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1204"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL51",
    "name": "Information Technology Fundamentals",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC504"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL51",
    "name": "Information Technology Fundamentals",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC504"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL52",
    "name": "Information Technology Fundamentals",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC504"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL52",
    "name": "Information Technology Fundamentals",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC504"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL53",
    "name": "Information Technology Fundamentals",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC504"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL53",
    "name": "Information Technology Fundamentals",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC504"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL54",
    "name": "Information Technology Fundamentals",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC504"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL54",
    "name": "Information Technology Fundamentals",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC504"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL55",
    "name": "Information Technology Fundamentals",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC504"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL55",
    "name": "Information Technology Fundamentals",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC504"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL56",
    "name": "Information Technology Fundamentals",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1204"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL56",
    "name": "Information Technology Fundamentals",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1204"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL57",
    "name": "Information Technology Fundamentals",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC504"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL57",
    "name": "Information Technology Fundamentals",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC504"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL58",
    "name": "Information Technology Fundamentals",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC504"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL58",
    "name": "Information Technology Fundamentals",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC504"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL59",
    "name": "Information Technology Fundamentals",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1204"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL59",
    "name": "Information Technology Fundamentals",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1204"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL60",
    "name": "Information Technology Fundamentals",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC504"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL60",
    "name": "Information Technology Fundamentals",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC504"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL61",
    "name": "Information Technology Fundamentals",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1204"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL61",
    "name": "Information Technology Fundamentals",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1204"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL62",
    "name": "Information Technology Fundamentals",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1204"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL62",
    "name": "Information Technology Fundamentals",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1204"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL63",
    "name": "Information Technology Fundamentals",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1204"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL63",
    "name": "Information Technology Fundamentals",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1204"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL64",
    "name": "Information Technology Fundamentals",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC309"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL64",
    "name": "Information Technology Fundamentals",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC309"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL65",
    "name": "Information Technology Fundamentals",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC309"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL65",
    "name": "Information Technology Fundamentals",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC309"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL66",
    "name": "Information Technology Fundamentals",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL66",
    "name": "Information Technology Fundamentals",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL67",
    "name": "Information Technology Fundamentals",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC309"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL67",
    "name": "Information Technology Fundamentals",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC309"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL68",
    "name": "Information Technology Fundamentals",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL68",
    "name": "Information Technology Fundamentals",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL69",
    "name": "Information Technology Fundamentals",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL69",
    "name": "Information Technology Fundamentals",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL70",
    "name": "Information Technology Fundamentals",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL70",
    "name": "Information Technology Fundamentals",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL71",
    "name": "Information Technology Fundamentals",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4085",
    "classNo": "CL71",
    "name": "Information Technology Fundamentals",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4086",
    "classNo": "CL01",
    "name": "Techniques in Engineering",
    "day": "Thu",
    "start": "19:00",
    "end": "22:00",
    "room": "KEC901"
  },
  {
    "code": "CCIT4088",
    "classNo": "CL01",
    "name": "Programming for Data Science",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4088",
    "classNo": "CL01",
    "name": "Programming for Data Science",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4091",
    "classNo": "CL01",
    "name": "Structures and Field Studies",
    "day": "Wed",
    "start": "19:00",
    "end": "22:00",
    "room": "KEC510"
  },
  {
    "code": "CCIT4092",
    "classNo": "CL01",
    "name": "Data Visualisation",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4092",
    "classNo": "CL01",
    "name": "Data Visualisation",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4096",
    "classNo": "CL02",
    "name": "Project (Data Science)",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4096",
    "classNo": "CL02",
    "name": "Project (Data Science)",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4100",
    "classNo": "CL01",
    "name": "Site Investigation and Field Instrumentation",
    "day": "Wed",
    "start": "19:00",
    "end": "22:00",
    "room": "KEC504"
  },
  {
    "code": "CCIT4102",
    "classNo": "CL01",
    "name": "Properties of Construction Material",
    "day": "Sat",
    "start": "10:30",
    "end": "13:30",
    "room": "ISP404"
  },
  {
    "code": "CCIT4103",
    "classNo": "CL01",
    "name": "Structural Mechanics",
    "day": "Tue",
    "start": "19:00",
    "end": "22:00",
    "room": "KEC501"
  },
  {
    "code": "CCIT4104",
    "classNo": "CL01",
    "name": "Geotechnics",
    "day": "Tue",
    "start": "19:00",
    "end": "22:00",
    "room": "KEC504"
  },
  {
    "code": "CCIT4105",
    "classNo": "CL01",
    "name": "Construction Project Management",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC501"
  },
  {
    "code": "CCIT4105",
    "classNo": "CL01",
    "name": "Construction Project Management",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC501"
  },
  {
    "code": "CCIT4106",
    "classNo": "CL01",
    "name": "Cloud Architecting Solution",
    "day": "Mon",
    "start": "19:00",
    "end": "22:00",
    "room": "KEC401"
  },
  {
    "code": "CCJK3001",
    "classNo": "CL01",
    "name": "Introduction to Japanese Studies",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK803"
  },
  {
    "code": "CCJK3001",
    "classNo": "CL01",
    "name": "Introduction to Japanese Studies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK803"
  },
  {
    "code": "CCJK3001",
    "classNo": "CL02",
    "name": "Introduction to Japanese Studies",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK702"
  },
  {
    "code": "CCJK3001",
    "classNo": "CL02",
    "name": "Introduction to Japanese Studies",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK702"
  },
  {
    "code": "CCJK3001",
    "classNo": "CL03",
    "name": "Introduction to Japanese Studies",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK602"
  },
  {
    "code": "CCJK3001",
    "classNo": "CL03",
    "name": "Introduction to Japanese Studies",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK602"
  },
  {
    "code": "CCJK3001",
    "classNo": "CL04",
    "name": "Introduction to Japanese Studies",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK802"
  },
  {
    "code": "CCJK3001",
    "classNo": "CL04",
    "name": "Introduction to Japanese Studies",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK802"
  },
  {
    "code": "CCJK3001",
    "classNo": "CL05",
    "name": "Introduction to Japanese Studies",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK801"
  },
  {
    "code": "CCJK3001",
    "classNo": "CL05",
    "name": "Introduction to Japanese Studies",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK801"
  },
  {
    "code": "CCJK3001",
    "classNo": "CT01",
    "name": "Introduction to Japanese Studies",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK701"
  },
  {
    "code": "CCJK3001",
    "classNo": "CT02",
    "name": "Introduction to Japanese Studies",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK701"
  },
  {
    "code": "CCJK3001",
    "classNo": "CT03",
    "name": "Introduction to Japanese Studies",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK701"
  },
  {
    "code": "CCJK3003",
    "classNo": "CL01",
    "name": "Japanese II",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK603"
  },
  {
    "code": "CCJK3003",
    "classNo": "CL01",
    "name": "Japanese II",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK603"
  },
  {
    "code": "CCJK3003",
    "classNo": "CL01",
    "name": "Japanese II",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK602"
  },
  {
    "code": "CCJK3003",
    "classNo": "CL01",
    "name": "Japanese II",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK602"
  },
  {
    "code": "CCJK3003",
    "classNo": "CL01",
    "name": "Japanese II",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK602"
  },
  {
    "code": "CCJK3003",
    "classNo": "CL01",
    "name": "Japanese II",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK602"
  },
  {
    "code": "CCJK3003",
    "classNo": "CL02",
    "name": "Japanese II",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK602"
  },
  {
    "code": "CCJK3003",
    "classNo": "CL02",
    "name": "Japanese II",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK602"
  },
  {
    "code": "CCJK3003",
    "classNo": "CL02",
    "name": "Japanese II",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK702"
  },
  {
    "code": "CCJK3003",
    "classNo": "CL02",
    "name": "Japanese II",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK702"
  },
  {
    "code": "CCJK3003",
    "classNo": "CL02",
    "name": "Japanese II",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK702"
  },
  {
    "code": "CCJK3003",
    "classNo": "CL02",
    "name": "Japanese II",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK702"
  },
  {
    "code": "CCJK3003",
    "classNo": "CL03",
    "name": "Japanese II",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK803"
  },
  {
    "code": "CCJK3003",
    "classNo": "CL03",
    "name": "Japanese II",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK803"
  },
  {
    "code": "CCJK3003",
    "classNo": "CL03",
    "name": "Japanese II",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK702"
  },
  {
    "code": "CCJK3003",
    "classNo": "CL03",
    "name": "Japanese II",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK702"
  },
  {
    "code": "CCJK3003",
    "classNo": "CL03",
    "name": "Japanese II",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK601"
  },
  {
    "code": "CCJK3003",
    "classNo": "CL03",
    "name": "Japanese II",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK601"
  },
  {
    "code": "CCJK3003",
    "classNo": "CL04",
    "name": "Japanese II",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK702"
  },
  {
    "code": "CCJK3003",
    "classNo": "CL04",
    "name": "Japanese II",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK702"
  },
  {
    "code": "CCJK3003",
    "classNo": "CL04",
    "name": "Japanese II",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK803"
  },
  {
    "code": "CCJK3003",
    "classNo": "CL04",
    "name": "Japanese II",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK803"
  },
  {
    "code": "CCJK3003",
    "classNo": "CL04",
    "name": "Japanese II",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK803"
  },
  {
    "code": "CCJK3003",
    "classNo": "CL04",
    "name": "Japanese II",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK803"
  },
  {
    "code": "CCJK3004",
    "classNo": "CL01",
    "name": "Introduction to Korean",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK802"
  },
  {
    "code": "CCJK3004",
    "classNo": "CL01",
    "name": "Introduction to Korean",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK802"
  },
  {
    "code": "CCJK3004",
    "classNo": "CL01",
    "name": "Introduction to Korean",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK803"
  },
  {
    "code": "CCJK3004",
    "classNo": "CL02",
    "name": "Introduction to Korean",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK701"
  },
  {
    "code": "CCJK3004",
    "classNo": "CL02",
    "name": "Introduction to Korean",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK701"
  },
  {
    "code": "CCJK3004",
    "classNo": "CL02",
    "name": "Introduction to Korean",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK802"
  },
  {
    "code": "CCJK3004",
    "classNo": "CL03",
    "name": "Introduction to Korean",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK803"
  },
  {
    "code": "CCJK3004",
    "classNo": "CL03",
    "name": "Introduction to Korean",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK803"
  },
  {
    "code": "CCJK3004",
    "classNo": "CL03",
    "name": "Introduction to Korean",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK803"
  },
  {
    "code": "CCJK3004",
    "classNo": "CL04",
    "name": "Introduction to Korean",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK802"
  },
  {
    "code": "CCJK3004",
    "classNo": "CL04",
    "name": "Introduction to Korean",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK802"
  },
  {
    "code": "CCJK3004",
    "classNo": "CL04",
    "name": "Introduction to Korean",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK803"
  },
  {
    "code": "CCJK3006",
    "classNo": "CL01",
    "name": "Korean II",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK802"
  },
  {
    "code": "CCJK3006",
    "classNo": "CL01",
    "name": "Korean II",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK802"
  },
  {
    "code": "CCJK3006",
    "classNo": "CL01",
    "name": "Korean II",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK802"
  },
  {
    "code": "CCJK3006",
    "classNo": "CL01",
    "name": "Korean II",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK802"
  },
  {
    "code": "CCJK3006",
    "classNo": "CL01",
    "name": "Korean II",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK802"
  },
  {
    "code": "CCJK3006",
    "classNo": "CL01",
    "name": "Korean II",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK802"
  },
  {
    "code": "CCJK3006",
    "classNo": "CL02",
    "name": "Korean II",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK601"
  },
  {
    "code": "CCJK3006",
    "classNo": "CL02",
    "name": "Korean II",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK601"
  },
  {
    "code": "CCJK3006",
    "classNo": "CL02",
    "name": "Korean II",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK601"
  },
  {
    "code": "CCJK3006",
    "classNo": "CL02",
    "name": "Korean II",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK601"
  },
  {
    "code": "CCJK3006",
    "classNo": "CL02",
    "name": "Korean II",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK601"
  },
  {
    "code": "CCJK3006",
    "classNo": "CL02",
    "name": "Korean II",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK601"
  },
  {
    "code": "CCJK4007",
    "classNo": "CL01",
    "name": "Contemporary Korean Society",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK701"
  },
  {
    "code": "CCJK4007",
    "classNo": "CL01",
    "name": "Contemporary Korean Society",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK701"
  },
  {
    "code": "CCJK4007",
    "classNo": "CL02",
    "name": "Contemporary Korean Society",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK603"
  },
  {
    "code": "CCJK4007",
    "classNo": "CL02",
    "name": "Contemporary Korean Society",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK603"
  },
  {
    "code": "CCJK4011",
    "classNo": "CL01",
    "name": "Contemporary Japanese Society",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK702"
  },
  {
    "code": "CCJK4011",
    "classNo": "CL01",
    "name": "Contemporary Japanese Society",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK702"
  },
  {
    "code": "CCJK4011",
    "classNo": "CL02",
    "name": "Contemporary Japanese Society",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK702"
  },
  {
    "code": "CCJK4011",
    "classNo": "CL02",
    "name": "Contemporary Japanese Society",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK702"
  },
  {
    "code": "CCJK4011",
    "classNo": "CL03",
    "name": "Contemporary Japanese Society",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK603"
  },
  {
    "code": "CCJK4011",
    "classNo": "CL03",
    "name": "Contemporary Japanese Society",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK603"
  },
  {
    "code": "CCLW4002",
    "classNo": "CL01",
    "name": "Obligations I",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC314"
  },
  {
    "code": "CCLW4002",
    "classNo": "CL01",
    "name": "Obligations I",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC314"
  },
  {
    "code": "CCLW4002",
    "classNo": "CL02",
    "name": "Obligations I",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC314"
  },
  {
    "code": "CCLW4002",
    "classNo": "CL02",
    "name": "Obligations I",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC314"
  },
  {
    "code": "CCLW4007",
    "classNo": "CL01",
    "name": "Obligations II",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC601"
  },
  {
    "code": "CCLW4007",
    "classNo": "CL01",
    "name": "Obligations II",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC601"
  },
  {
    "code": "CCLW4007",
    "classNo": "CL02",
    "name": "Obligations II",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC616"
  },
  {
    "code": "CCLW4007",
    "classNo": "CL02",
    "name": "Obligations II",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC616"
  },
  {
    "code": "CCLW4010",
    "classNo": "CL01",
    "name": "Criminal Law and Criminal Procedure",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC616"
  },
  {
    "code": "CCLW4010",
    "classNo": "CL01",
    "name": "Criminal Law and Criminal Procedure",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC616"
  },
  {
    "code": "CCLW4011",
    "classNo": "CL01",
    "name": "Torts Law and Personal Injury Practice",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC309"
  },
  {
    "code": "CCLW4011",
    "classNo": "CL01",
    "name": "Torts Law and Personal Injury Practice",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC309"
  },
  {
    "code": "CCLW4013",
    "classNo": "CL01",
    "name": "Land Law and Conveyancing",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC603"
  },
  {
    "code": "CCLW4013",
    "classNo": "CL01",
    "name": "Land Law and Conveyancing",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC603"
  },
  {
    "code": "CCLW4014",
    "classNo": "CL01",
    "name": "Legal Writing and Drafting",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC203"
  },
  {
    "code": "CCLW4014",
    "classNo": "CL01",
    "name": "Legal Writing and Drafting",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC203"
  },
  {
    "code": "CCLW4016",
    "classNo": "CL01",
    "name": "Using Legal and Company Forms for Business",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC602"
  },
  {
    "code": "CCLW4016",
    "classNo": "CL01",
    "name": "Using Legal and Company Forms for Business",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC602"
  },
  {
    "code": "CCLW4020",
    "classNo": "CL01",
    "name": "Family Law and Matrimonial Practice",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC601"
  },
  {
    "code": "CCLW4020",
    "classNo": "CL01",
    "name": "Family Law and Matrimonial Practice",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC601"
  },
  {
    "code": "CCLW4021",
    "classNo": "CL01",
    "name": "Hong Kong Basic Law",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC616"
  },
  {
    "code": "CCLW4021",
    "classNo": "CL01",
    "name": "Hong Kong Basic Law",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC616"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL27",
    "name": "Quantitative Analysis I",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC506"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL27",
    "name": "Quantitative Analysis I",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC506"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL28",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1201"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL28",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1201"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL29",
    "name": "Quantitative Analysis I",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1205"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL29",
    "name": "Quantitative Analysis I",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1205"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL01",
    "name": "Calculus",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC501"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL01",
    "name": "Calculus",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC501"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL02",
    "name": "Calculus",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC706"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL02",
    "name": "Calculus",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC706"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL03",
    "name": "Calculus",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC707"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL03",
    "name": "Calculus",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC707"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL04",
    "name": "Calculus",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC706"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL04",
    "name": "Calculus",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC706"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL05",
    "name": "Calculus",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC505"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL05",
    "name": "Calculus",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC505"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL06",
    "name": "Calculus",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC706"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL06",
    "name": "Calculus",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC706"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL07",
    "name": "Calculus",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC611"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL07",
    "name": "Calculus",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC611"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL08",
    "name": "Calculus",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC611"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL08",
    "name": "Calculus",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC611"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL09",
    "name": "Calculus",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC711"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL09",
    "name": "Calculus",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC711"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL10",
    "name": "Calculus",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC611"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL10",
    "name": "Calculus",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC611"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL11",
    "name": "Calculus",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC605"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL11",
    "name": "Calculus",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC605"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL12",
    "name": "Calculus",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC706"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL12",
    "name": "Calculus",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC706"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL13",
    "name": "Calculus",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC611"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL13",
    "name": "Calculus",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC611"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL14",
    "name": "Calculus",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC711"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL14",
    "name": "Calculus",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC711"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL15",
    "name": "Calculus",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC611"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL15",
    "name": "Calculus",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC611"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL16",
    "name": "Calculus",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC710"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL16",
    "name": "Calculus",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC710"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL17",
    "name": "Calculus",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC607"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL17",
    "name": "Calculus",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC607"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL18",
    "name": "Calculus",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC706"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL18",
    "name": "Calculus",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC706"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL19",
    "name": "Calculus",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC707"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL19",
    "name": "Calculus",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC707"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL20",
    "name": "Calculus",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC607"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL20",
    "name": "Calculus",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC607"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL21",
    "name": "Calculus",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC710"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL21",
    "name": "Calculus",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC710"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL22",
    "name": "Calculus",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC611"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL22",
    "name": "Calculus",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC611"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL23",
    "name": "Calculus",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC706"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL23",
    "name": "Calculus",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC706"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL24",
    "name": "Calculus",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC605"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL24",
    "name": "Calculus",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC605"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL25",
    "name": "Calculus",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC707"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL25",
    "name": "Calculus",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC707"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL26",
    "name": "Calculus",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC607"
  },
  {
    "code": "CCMA4003",
    "classNo": "CL26",
    "name": "Calculus",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC607"
  },
  {
    "code": "CCMA4005",
    "classNo": "CL01",
    "name": "Basic Engineering Mathematics",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC607"
  },
  {
    "code": "CCMA4005",
    "classNo": "CL01",
    "name": "Basic Engineering Mathematics",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC607"
  },
  {
    "code": "CCMA4005",
    "classNo": "CL02",
    "name": "Basic Engineering Mathematics",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC607"
  },
  {
    "code": "CCMA4005",
    "classNo": "CL02",
    "name": "Basic Engineering Mathematics",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC607"
  },
  {
    "code": "CCMA4005",
    "classNo": "CL03",
    "name": "Basic Engineering Mathematics",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC606"
  },
  {
    "code": "CCMA4005",
    "classNo": "CL03",
    "name": "Basic Engineering Mathematics",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC606"
  },
  {
    "code": "CCMA4007",
    "classNo": "CL01",
    "name": "Quantitative Analysis II",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC606"
  },
  {
    "code": "CCMA4007",
    "classNo": "CL01",
    "name": "Quantitative Analysis II",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC606"
  },
  {
    "code": "CCMA4007",
    "classNo": "CL02",
    "name": "Quantitative Analysis II",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC607"
  },
  {
    "code": "CCMA4007",
    "classNo": "CL02",
    "name": "Quantitative Analysis II",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC607"
  },
  {
    "code": "CCMA4007",
    "classNo": "CL03",
    "name": "Quantitative Analysis II",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC607"
  },
  {
    "code": "CCMA4007",
    "classNo": "CL03",
    "name": "Quantitative Analysis II",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC607"
  },
  {
    "code": "CCMA4007",
    "classNo": "CL04",
    "name": "Quantitative Analysis II",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC611"
  },
  {
    "code": "CCMA4007",
    "classNo": "CL04",
    "name": "Quantitative Analysis II",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC611"
  },
  {
    "code": "CCMA4007",
    "classNo": "CL05",
    "name": "Quantitative Analysis II",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC509"
  },
  {
    "code": "CCMA4007",
    "classNo": "CL05",
    "name": "Quantitative Analysis II",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC509"
  },
  {
    "code": "CCMA4007",
    "classNo": "CL06",
    "name": "Quantitative Analysis II",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC606"
  },
  {
    "code": "CCMA4007",
    "classNo": "CL06",
    "name": "Quantitative Analysis II",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC606"
  },
  {
    "code": "CCMA4007",
    "classNo": "CL07",
    "name": "Quantitative Analysis II",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC611"
  },
  {
    "code": "CCMA4007",
    "classNo": "CL07",
    "name": "Quantitative Analysis II",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC611"
  },
  {
    "code": "CCMA4007",
    "classNo": "CL08",
    "name": "Quantitative Analysis II",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC605"
  },
  {
    "code": "CCMA4007",
    "classNo": "CL08",
    "name": "Quantitative Analysis II",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC605"
  },
  {
    "code": "CCMA4007",
    "classNo": "CL09",
    "name": "Quantitative Analysis II",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC607"
  },
  {
    "code": "CCMA4007",
    "classNo": "CL09",
    "name": "Quantitative Analysis II",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC607"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL08",
    "name": "Elementary Statistics",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC606"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL08",
    "name": "Elementary Statistics",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC606"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL09",
    "name": "Elementary Statistics",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC606"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL09",
    "name": "Elementary Statistics",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC606"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL10",
    "name": "Elementary Statistics",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC611"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL10",
    "name": "Elementary Statistics",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC611"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL11",
    "name": "Elementary Statistics",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC607"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL11",
    "name": "Elementary Statistics",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC607"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL12",
    "name": "Elementary Statistics",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC605"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL12",
    "name": "Elementary Statistics",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC605"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL13",
    "name": "Elementary Statistics",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC606"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL13",
    "name": "Elementary Statistics",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC606"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL14",
    "name": "Elementary Statistics",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC605"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL14",
    "name": "Elementary Statistics",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC605"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL15",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC710"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL15",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC710"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL16",
    "name": "Elementary Statistics",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC504"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL16",
    "name": "Elementary Statistics",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC504"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL17",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC707"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL17",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC707"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL18",
    "name": "Elementary Statistics",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC605"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL18",
    "name": "Elementary Statistics",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC605"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL19",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC607"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL19",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC607"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL20",
    "name": "Elementary Statistics",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC606"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL20",
    "name": "Elementary Statistics",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC606"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL21",
    "name": "Elementary Statistics",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC510"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL21",
    "name": "Elementary Statistics",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC510"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL22",
    "name": "Elementary Statistics",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC510"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL22",
    "name": "Elementary Statistics",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC510"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL23",
    "name": "Elementary Statistics",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC607"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL23",
    "name": "Elementary Statistics",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC607"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL24",
    "name": "Elementary Statistics",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC504"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL24",
    "name": "Elementary Statistics",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC504"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL25",
    "name": "Elementary Statistics",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC602"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL25",
    "name": "Elementary Statistics",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC602"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL26",
    "name": "Elementary Statistics",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC805"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL26",
    "name": "Elementary Statistics",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC805"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL27",
    "name": "Elementary Statistics",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC805"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL27",
    "name": "Elementary Statistics",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC805"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL28",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC606"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL28",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC606"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL29",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC706"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL29",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC706"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL30",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC11A3"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL30",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL31",
    "name": "Elementary Statistics",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL31",
    "name": "Elementary Statistics",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL32",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC8A3"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL32",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC8A3"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL33",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC507"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL33",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC507"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL34",
    "name": "Elementary Statistics",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC11A3"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL34",
    "name": "Elementary Statistics",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL35",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC507"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL35",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC507"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL36",
    "name": "Elementary Statistics",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC506"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL36",
    "name": "Elementary Statistics",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC506"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL37",
    "name": "Elementary Statistics",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC507"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL37",
    "name": "Elementary Statistics",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC507"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL38",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC506"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL38",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC506"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL39",
    "name": "Elementary Statistics",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1201"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL39",
    "name": "Elementary Statistics",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1201"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL40",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC506"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL40",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC506"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL41",
    "name": "Elementary Statistics",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC8A3"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL41",
    "name": "Elementary Statistics",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC8A3"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL42",
    "name": "Elementary Statistics",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC506"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL42",
    "name": "Elementary Statistics",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC506"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL43",
    "name": "Elementary Statistics",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1201"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL43",
    "name": "Elementary Statistics",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1201"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL37",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-704"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL37",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-704"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL38",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-805"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL38",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-805"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL39",
    "name": "Applied Statistics",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-806"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL39",
    "name": "Applied Statistics",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-806"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL40",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-101"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL40",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-101"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL41",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL41",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL42",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL42",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL43",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL43",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL44",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-101"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL44",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-101"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL45",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL45",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL46",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-601"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL46",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-601"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL47",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-101"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL47",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-101"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL48",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL48",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL49",
    "name": "Applied Statistics",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-401"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL49",
    "name": "Applied Statistics",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-401"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL50",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-601"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL50",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-601"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL51",
    "name": "Applied Statistics",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL51",
    "name": "Applied Statistics",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL52",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-101"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL52",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-101"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL53",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-101"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL53",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-101"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL54",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL54",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL55",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL55",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL56",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-601"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL56",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-601"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL57",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-401"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL57",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-401"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL58",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL58",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL59",
    "name": "Applied Statistics",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL59",
    "name": "Applied Statistics",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL60",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-602"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL60",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-602"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL61",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-601"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL61",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-601"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL62",
    "name": "Applied Statistics",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-701"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL62",
    "name": "Applied Statistics",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-701"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL63",
    "name": "Applied Statistics",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-101"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL63",
    "name": "Applied Statistics",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-101"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL64",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC304"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL64",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC304"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL65",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC308"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL65",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC308"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL66",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC603"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL66",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC603"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL67",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC608"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL67",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC608"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL68",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC604"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL68",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC604"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL69",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC604"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL69",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC604"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL70",
    "name": "Applied Statistics",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC602"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL70",
    "name": "Applied Statistics",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC602"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL71",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC609"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL71",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC609"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL72",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC603"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL72",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC603"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL73",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC304"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL73",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC304"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL74",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC304"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL74",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC304"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL27",
    "name": "Business Economics",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-702"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL27",
    "name": "Business Economics",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-702"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL28",
    "name": "Business Economics",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-704"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL28",
    "name": "Business Economics",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-704"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL29",
    "name": "Business Economics",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-604"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL29",
    "name": "Business Economics",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-604"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL30",
    "name": "Business Economics",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-805"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL30",
    "name": "Business Economics",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-805"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL31",
    "name": "Business Economics",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL31",
    "name": "Business Economics",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL32",
    "name": "Business Economics",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-705"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL32",
    "name": "Business Economics",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-705"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL33",
    "name": "Business Economics",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-604"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL33",
    "name": "Business Economics",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-604"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL34",
    "name": "Business Economics",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL34",
    "name": "Business Economics",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL35",
    "name": "Business Economics",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-702"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL35",
    "name": "Business Economics",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-702"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL36",
    "name": "Business Economics",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL36",
    "name": "Business Economics",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL37",
    "name": "Business Economics",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-705"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL37",
    "name": "Business Economics",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-705"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL38",
    "name": "Business Economics",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-705"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL38",
    "name": "Business Economics",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-705"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL39",
    "name": "Business Economics",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL39",
    "name": "Business Economics",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL40",
    "name": "Business Economics",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-604"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL40",
    "name": "Business Economics",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-604"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL41",
    "name": "Business Economics",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL41",
    "name": "Business Economics",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL42",
    "name": "Business Economics",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL42",
    "name": "Business Economics",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL43",
    "name": "Business Economics",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-604"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL43",
    "name": "Business Economics",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-604"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL44",
    "name": "Business Economics",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL44",
    "name": "Business Economics",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL45",
    "name": "Business Economics",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL45",
    "name": "Business Economics",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL46",
    "name": "Business Economics",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-604"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL46",
    "name": "Business Economics",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-604"
  },
  {
    "code": "CCMK4011",
    "classNo": "CL01",
    "name": "Final Year Project (Marketing and Management)",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCMK4011",
    "classNo": "CL01",
    "name": "Final Year Project (Marketing and Management)",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCMK4013",
    "classNo": "CL01",
    "name": "Final Year Project (Marketing and Advertising)",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCMK4013",
    "classNo": "CL01",
    "name": "Final Year Project (Marketing and Advertising)",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCMK4020",
    "classNo": "CL01",
    "name": "Digital Marketing",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCMK4020",
    "classNo": "CL01",
    "name": "Digital Marketing",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCMK4020",
    "classNo": "CL02",
    "name": "Digital Marketing",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCMK4020",
    "classNo": "CL02",
    "name": "Digital Marketing",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCMK4023",
    "classNo": "CL01",
    "name": "Marketing Communications",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-401"
  },
  {
    "code": "CCMK4023",
    "classNo": "CL01",
    "name": "Marketing Communications",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-401"
  },
  {
    "code": "CCMK4023",
    "classNo": "CL02",
    "name": "Marketing Communications",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-401"
  },
  {
    "code": "CCMK4023",
    "classNo": "CL02",
    "name": "Marketing Communications",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-401"
  },
  {
    "code": "CCPA4001",
    "classNo": "CL01",
    "name": "Fundamentals of Tonal Music I",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1001"
  },
  {
    "code": "CCPA4001",
    "classNo": "CL01",
    "name": "Fundamentals of Tonal Music I",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1001"
  },
  {
    "code": "CCPA4001",
    "classNo": "CL02",
    "name": "Fundamentals of Tonal Music I",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1001"
  },
  {
    "code": "CCPA4001",
    "classNo": "CL02",
    "name": "Fundamentals of Tonal Music I",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1001"
  },
  {
    "code": "CCPA4002",
    "classNo": "CL01",
    "name": "Introduction to Chinese Music",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1205"
  },
  {
    "code": "CCPA4002",
    "classNo": "CL01",
    "name": "Introduction to Chinese Music",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1205"
  },
  {
    "code": "CCPA4005",
    "classNo": "CL01",
    "name": "Fundamentals of Tonal Music II",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1001"
  },
  {
    "code": "CCPA4005",
    "classNo": "CL01",
    "name": "Fundamentals of Tonal Music II",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1001"
  },
  {
    "code": "CCPH4001",
    "classNo": "CL01",
    "name": "Introduction to Philosophy",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK802"
  },
  {
    "code": "CCPH4001",
    "classNo": "CL01",
    "name": "Introduction to Philosophy",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK802"
  },
  {
    "code": "CCPH4001",
    "classNo": "CL02",
    "name": "Introduction to Philosophy",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC807"
  },
  {
    "code": "CCPH4001",
    "classNo": "CL02",
    "name": "Introduction to Philosophy",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC807"
  },
  {
    "code": "CCPH4001",
    "classNo": "CL03",
    "name": "Introduction to Philosophy",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK802"
  },
  {
    "code": "CCPH4001",
    "classNo": "CL03",
    "name": "Introduction to Philosophy",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK802"
  },
  {
    "code": "CCPH4001",
    "classNo": "CL04",
    "name": "Introduction to Philosophy",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK803"
  },
  {
    "code": "CCPH4001",
    "classNo": "CL04",
    "name": "Introduction to Philosophy",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK803"
  },
  {
    "code": "CCPH4001",
    "classNo": "CT01",
    "name": "Introduction to Philosophy",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK802"
  },
  {
    "code": "CCPH4001",
    "classNo": "CT02",
    "name": "Introduction to Philosophy",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK601"
  },
  {
    "code": "CCPH4001",
    "classNo": "CT03",
    "name": "Introduction to Philosophy",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK602"
  },
  {
    "code": "CCPH4001",
    "classNo": "CT04",
    "name": "Introduction to Philosophy",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK802"
  },
  {
    "code": "CCPH4001",
    "classNo": "CT05",
    "name": "Introduction to Philosophy",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK802"
  },
  {
    "code": "CCPH4001",
    "classNo": "CT06",
    "name": "Introduction to Philosophy",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK602"
  },
  {
    "code": "CCPH4001",
    "classNo": "CT07",
    "name": "Introduction to Philosophy",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK803"
  },
  {
    "code": "CCPH4001",
    "classNo": "CT08",
    "name": "Introduction to Philosophy",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK602"
  },
  {
    "code": "CCPH4005",
    "classNo": "CL01",
    "name": "Selected Topics in Philosophy",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK802"
  },
  {
    "code": "CCPH4005",
    "classNo": "CL01",
    "name": "Selected Topics in Philosophy",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK802"
  },
  {
    "code": "CCPH4005",
    "classNo": "CL02",
    "name": "Selected Topics in Philosophy",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK803"
  },
  {
    "code": "CCPH4005",
    "classNo": "CL02",
    "name": "Selected Topics in Philosophy",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK803"
  },
  {
    "code": "CCSA8002",
    "classNo": "CL02",
    "name": "Seminar Series",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "IEC501"
  },
  {
    "code": "CCSA8002",
    "classNo": "CL02",
    "name": "Seminar Series",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "IEC501"
  },
  {
    "code": "CCSA8002",
    "classNo": "CL04",
    "name": "Seminar Series",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "SSC703+704"
  },
  {
    "code": "CCSA8002",
    "classNo": "CL04",
    "name": "Seminar Series",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "SSC703+704"
  },
  {
    "code": "CCSS3002",
    "classNo": "CL11",
    "name": "Multiple Intelligences and Competencies",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "IEC1802"
  },
  {
    "code": "CCSS3002",
    "classNo": "CL11",
    "name": "Multiple Intelligences and Competencies",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "IEC1802"
  },
  {
    "code": "CCSS3002",
    "classNo": "CL12",
    "name": "Multiple Intelligences and Competencies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "SSC801"
  },
  {
    "code": "CCSS3002",
    "classNo": "CL12",
    "name": "Multiple Intelligences and Competencies",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "SSC801"
  },
  {
    "code": "CCSS4001",
    "classNo": "CL01",
    "name": "Applied Psychology",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC704"
  },
  {
    "code": "CCSS4001",
    "classNo": "CL01",
    "name": "Applied Psychology",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC704"
  },
  {
    "code": "CCSS4001",
    "classNo": "CL02",
    "name": "Applied Psychology",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC604"
  },
  {
    "code": "CCSS4001",
    "classNo": "CL02",
    "name": "Applied Psychology",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC604"
  },
  {
    "code": "CCSS4001",
    "classNo": "CL03",
    "name": "Applied Psychology",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC503"
  },
  {
    "code": "CCSS4001",
    "classNo": "CL03",
    "name": "Applied Psychology",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC503"
  },
  {
    "code": "CCSS4001",
    "classNo": "CT01",
    "name": "Applied Psychology",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC806"
  },
  {
    "code": "CCSS4001",
    "classNo": "CT02",
    "name": "Applied Psychology",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC709"
  },
  {
    "code": "CCSS4001",
    "classNo": "CT03",
    "name": "Applied Psychology",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC705"
  },
  {
    "code": "CCSS4001",
    "classNo": "CT04",
    "name": "Applied Psychology",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC806"
  },
  {
    "code": "CCSS4001",
    "classNo": "CT05",
    "name": "Applied Psychology",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC705"
  },
  {
    "code": "CCSS4001",
    "classNo": "CT06",
    "name": "Applied Psychology",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC709"
  },
  {
    "code": "CCSS4001",
    "classNo": "CT07",
    "name": "Applied Psychology",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC708"
  },
  {
    "code": "CCSS4001",
    "classNo": "CT08",
    "name": "Applied Psychology",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC806"
  },
  {
    "code": "CCSS4001",
    "classNo": "CT09",
    "name": "Applied Psychology",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC806"
  },
  {
    "code": "CCSS4001",
    "classNo": "CT10",
    "name": "Applied Psychology",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC708"
  },
  {
    "code": "CCSS4001",
    "classNo": "CT11",
    "name": "Applied Psychology",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC708"
  },
  {
    "code": "CCSS4001",
    "classNo": "CT12",
    "name": "Applied Psychology",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC604"
  },
  {
    "code": "CCSS4001",
    "classNo": "CT13",
    "name": "Applied Psychology",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC503"
  },
  {
    "code": "CCSS4001",
    "classNo": "CT14",
    "name": "Applied Psychology",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC806"
  },
  {
    "code": "CCSS4001",
    "classNo": "CT15",
    "name": "Applied Psychology",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC603"
  },
  {
    "code": "CCSS4001",
    "classNo": "CT16",
    "name": "Applied Psychology",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC806"
  },
  {
    "code": "CCSS4001",
    "classNo": "CT17",
    "name": "Applied Psychology",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC603"
  },
  {
    "code": "CCSS4001",
    "classNo": "CT18",
    "name": "Applied Psychology",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC708"
  },
  {
    "code": "CCSS4001",
    "classNo": "CT19",
    "name": "Applied Psychology",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC603"
  },
  {
    "code": "CCSS4001",
    "classNo": "CT20",
    "name": "Applied Psychology",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC806"
  },
  {
    "code": "CCSS4001",
    "classNo": "CT21",
    "name": "Applied Psychology",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC604"
  },
  {
    "code": "CCSS4001",
    "classNo": "CT22",
    "name": "Applied Psychology",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC503"
  },
  {
    "code": "CCSS4001",
    "classNo": "CT23",
    "name": "Applied Psychology",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC708"
  },
  {
    "code": "CCSS4001",
    "classNo": "CT24",
    "name": "Applied Psychology",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC806"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL16",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC311"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL16",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC311"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL17",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC613"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL17",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC613"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL18",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC613"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL18",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC613"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL19",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC301"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL19",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC301"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL20",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC301"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL20",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC301"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL21",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC613"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL21",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC613"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL22",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC301"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL22",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC301"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL23",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC301"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL23",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC301"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL24",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC613"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL24",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC613"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL25",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC613"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL25",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC613"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL26",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC612"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL26",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC612"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL27",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC612"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL27",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC612"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL28",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE103"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL28",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE103"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL29",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE101"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL29",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE101"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL30",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC709"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL30",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC709"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL31",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC806"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL31",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC806"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL32",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC708"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL32",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC708"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL33",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC705"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL33",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC705"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL34",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC806"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL34",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC806"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL09",
    "name": "Social Problems in Contemporary Societies",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC509"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL09",
    "name": "Social Problems in Contemporary Societies",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC509"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL10",
    "name": "Social Problems in Contemporary Societies",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC601"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL10",
    "name": "Social Problems in Contemporary Societies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC601"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL11",
    "name": "Social Problems in Contemporary Societies",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC707"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL11",
    "name": "Social Problems in Contemporary Societies",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC707"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL12",
    "name": "Social Problems in Contemporary Societies",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC602"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL12",
    "name": "Social Problems in Contemporary Societies",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC602"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL13",
    "name": "Social Problems in Contemporary Societies",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC601"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL13",
    "name": "Social Problems in Contemporary Societies",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC601"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL14",
    "name": "Social Problems in Contemporary Societies",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC506"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL14",
    "name": "Social Problems in Contemporary Societies",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC506"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL15",
    "name": "Social Problems in Contemporary Societies",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE103"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL15",
    "name": "Social Problems in Contemporary Societies",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE103"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL16",
    "name": "Social Problems in Contemporary Societies",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE103"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL16",
    "name": "Social Problems in Contemporary Societies",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE103"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL17",
    "name": "Social Problems in Contemporary Societies",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE103"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL17",
    "name": "Social Problems in Contemporary Societies",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE103"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL18",
    "name": "Social Problems in Contemporary Societies",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC604"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL18",
    "name": "Social Problems in Contemporary Societies",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC604"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL19",
    "name": "Social Problems in Contemporary Societies",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC308"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL19",
    "name": "Social Problems in Contemporary Societies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC308"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL20",
    "name": "Social Problems in Contemporary Societies",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC308"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL20",
    "name": "Social Problems in Contemporary Societies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC308"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL21",
    "name": "Social Problems in Contemporary Societies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC309"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL21",
    "name": "Social Problems in Contemporary Societies",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC309"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL22",
    "name": "Social Problems in Contemporary Societies",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC309"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL22",
    "name": "Social Problems in Contemporary Societies",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC309"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL23",
    "name": "Social Problems in Contemporary Societies",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC602"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL23",
    "name": "Social Problems in Contemporary Societies",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC602"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL24",
    "name": "Social Problems in Contemporary Societies",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC602"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL24",
    "name": "Social Problems in Contemporary Societies",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC602"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL25",
    "name": "Social Problems in Contemporary Societies",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC607"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL25",
    "name": "Social Problems in Contemporary Societies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC607"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL26",
    "name": "Social Problems in Contemporary Societies",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC604"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL26",
    "name": "Social Problems in Contemporary Societies",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC604"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL27",
    "name": "Social Problems in Contemporary Societies",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL27",
    "name": "Social Problems in Contemporary Societies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL28",
    "name": "Social Problems in Contemporary Societies",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC11A3"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL28",
    "name": "Social Problems in Contemporary Societies",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL29",
    "name": "Social Problems in Contemporary Societies",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL29",
    "name": "Social Problems in Contemporary Societies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL16",
    "name": "Introduction to Political Science",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC602"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL16",
    "name": "Introduction to Political Science",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC602"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL17",
    "name": "Introduction to Political Science",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC603"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL17",
    "name": "Introduction to Political Science",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC603"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL18",
    "name": "Introduction to Political Science",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC302"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL18",
    "name": "Introduction to Political Science",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC302"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL19",
    "name": "Introduction to Political Science",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC607"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL19",
    "name": "Introduction to Political Science",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC607"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL20",
    "name": "Introduction to Political Science",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC603"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL20",
    "name": "Introduction to Political Science",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC603"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL21",
    "name": "Introduction to Political Science",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC308"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL21",
    "name": "Introduction to Political Science",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC308"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL22",
    "name": "Introduction to Political Science",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC603"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL22",
    "name": "Introduction to Political Science",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC603"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL23",
    "name": "Introduction to Political Science",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC602"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL23",
    "name": "Introduction to Political Science",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC602"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL24",
    "name": "Introduction to Political Science",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC607"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL24",
    "name": "Introduction to Political Science",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC607"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL25",
    "name": "Introduction to Political Science",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC308"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL25",
    "name": "Introduction to Political Science",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC308"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL26",
    "name": "Introduction to Political Science",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC308"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL26",
    "name": "Introduction to Political Science",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC308"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL27",
    "name": "Introduction to Political Science",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC601"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL27",
    "name": "Introduction to Political Science",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4009",
    "classNo": "CL06",
    "name": "Introduction to Psychology",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC312"
  },
  {
    "code": "CCSS4009",
    "classNo": "CL06",
    "name": "Introduction to Psychology",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC312"
  },
  {
    "code": "CCSS4009",
    "classNo": "CL07",
    "name": "Introduction to Psychology",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC312"
  },
  {
    "code": "CCSS4009",
    "classNo": "CL07",
    "name": "Introduction to Psychology",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC312"
  },
  {
    "code": "CCSS4009",
    "classNo": "CL08",
    "name": "Introduction to Psychology",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC312"
  },
  {
    "code": "CCSS4009",
    "classNo": "CL08",
    "name": "Introduction to Psychology",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC312"
  },
  {
    "code": "CCSS4009",
    "classNo": "CL09",
    "name": "Introduction to Psychology",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC312"
  },
  {
    "code": "CCSS4009",
    "classNo": "CL09",
    "name": "Introduction to Psychology",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC312"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT33",
    "name": "Introduction to Psychology",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC604"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT34",
    "name": "Introduction to Psychology",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC607"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT35",
    "name": "Introduction to Psychology",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC607"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT36",
    "name": "Introduction to Psychology",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC604"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT37",
    "name": "Introduction to Psychology",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC607"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT38",
    "name": "Introduction to Psychology",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC602"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT39",
    "name": "Introduction to Psychology",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC607"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT40",
    "name": "Introduction to Psychology",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC602"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT41",
    "name": "Introduction to Psychology",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC602"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT42",
    "name": "Introduction to Psychology",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC308"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT43",
    "name": "Introduction to Psychology",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC602"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT44",
    "name": "Introduction to Psychology",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC308"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT45",
    "name": "Introduction to Psychology",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC607"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT46",
    "name": "Introduction to Psychology",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC603"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT47",
    "name": "Introduction to Psychology",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC607"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT48",
    "name": "Introduction to Psychology",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC601"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT49",
    "name": "Introduction to Psychology",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC603"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT50",
    "name": "Introduction to Psychology",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT51",
    "name": "Introduction to Psychology",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC601"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT52",
    "name": "Introduction to Psychology",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC308"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT53",
    "name": "Introduction to Psychology",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC616"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT54",
    "name": "Introduction to Psychology",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC309"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT55",
    "name": "Introduction to Psychology",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC616"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT56",
    "name": "Introduction to Psychology",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT57",
    "name": "Introduction to Psychology",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC602"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT58",
    "name": "Introduction to Psychology",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC309"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT59",
    "name": "Introduction to Psychology",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT60",
    "name": "Introduction to Psychology",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC602"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT61",
    "name": "Introduction to Psychology",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC616"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT62",
    "name": "Introduction to Psychology",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC602"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT63",
    "name": "Introduction to Psychology",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC602"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT64",
    "name": "Introduction to Psychology",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC616"
  },
  {
    "code": "CCSS4011",
    "classNo": "CL01",
    "name": "Global Governance and International Organisations",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC612"
  },
  {
    "code": "CCSS4011",
    "classNo": "CL01",
    "name": "Global Governance and International Organisations",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC612"
  },
  {
    "code": "CCSS4011",
    "classNo": "CL02",
    "name": "Global Governance and International Organisations",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC613"
  },
  {
    "code": "CCSS4011",
    "classNo": "CL02",
    "name": "Global Governance and International Organisations",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC613"
  },
  {
    "code": "CCSS4015",
    "classNo": "CL01",
    "name": "Sociology of Health",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC709"
  },
  {
    "code": "CCSS4015",
    "classNo": "CL01",
    "name": "Sociology of Health",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC709"
  },
  {
    "code": "CCSS4015",
    "classNo": "CL02",
    "name": "Sociology of Health",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC503"
  },
  {
    "code": "CCSS4015",
    "classNo": "CL02",
    "name": "Sociology of Health",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC503"
  },
  {
    "code": "CCSS4015",
    "classNo": "CL03",
    "name": "Sociology of Health",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC806"
  },
  {
    "code": "CCSS4015",
    "classNo": "CL03",
    "name": "Sociology of Health",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC806"
  },
  {
    "code": "CCSS4015",
    "classNo": "CL04",
    "name": "Sociology of Health",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC502"
  },
  {
    "code": "CCSS4015",
    "classNo": "CL04",
    "name": "Sociology of Health",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC502"
  },
  {
    "code": "CCSS4015",
    "classNo": "CL05",
    "name": "Sociology of Health",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC709"
  },
  {
    "code": "CCSS4015",
    "classNo": "CL05",
    "name": "Sociology of Health",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC709"
  },
  {
    "code": "CCSS4019",
    "classNo": "CL01",
    "name": "Social Policy and Administration",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC612"
  },
  {
    "code": "CCSS4019",
    "classNo": "CL01",
    "name": "Social Policy and Administration",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC612"
  },
  {
    "code": "CCSS4019",
    "classNo": "CL02",
    "name": "Social Policy and Administration",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC301"
  },
  {
    "code": "CCSS4019",
    "classNo": "CL02",
    "name": "Social Policy and Administration",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC301"
  },
  {
    "code": "CCSS4019",
    "classNo": "CL03",
    "name": "Social Policy and Administration",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC613"
  },
  {
    "code": "CCSS4019",
    "classNo": "CL03",
    "name": "Social Policy and Administration",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC613"
  },
  {
    "code": "CCSS4019",
    "classNo": "CL04",
    "name": "Social Policy and Administration",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC311"
  },
  {
    "code": "CCSS4019",
    "classNo": "CL04",
    "name": "Social Policy and Administration",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC311"
  },
  {
    "code": "CCSS4019",
    "classNo": "CL05",
    "name": "Social Policy and Administration",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC315"
  },
  {
    "code": "CCSS4019",
    "classNo": "CL05",
    "name": "Social Policy and Administration",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC315"
  },
  {
    "code": "CCSS4019",
    "classNo": "CL06",
    "name": "Social Policy and Administration",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC312"
  },
  {
    "code": "CCSS4019",
    "classNo": "CL06",
    "name": "Social Policy and Administration",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC312"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL12",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC612"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL12",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC612"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL13",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC613"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL13",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC613"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL14",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC315"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL14",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC315"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL15",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC312"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL15",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC312"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL16",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC315"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL16",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC315"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL17",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC301"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL17",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC301"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL18",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC613"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL18",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC613"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL19",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL19",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL20",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL20",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCSS4021",
    "classNo": "CL01",
    "name": "Hong Kong Society: A Sociological Perspective",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC301"
  },
  {
    "code": "CCSS4021",
    "classNo": "CL01",
    "name": "Hong Kong Society: A Sociological Perspective",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC301"
  },
  {
    "code": "CCSS4021",
    "classNo": "CL02",
    "name": "Hong Kong Society: A Sociological Perspective",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC612"
  },
  {
    "code": "CCSS4021",
    "classNo": "CL02",
    "name": "Hong Kong Society: A Sociological Perspective",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC612"
  },
  {
    "code": "CCSS4021",
    "classNo": "CL03",
    "name": "Hong Kong Society: A Sociological Perspective",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC613"
  },
  {
    "code": "CCSS4021",
    "classNo": "CL03",
    "name": "Hong Kong Society: A Sociological Perspective",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC613"
  },
  {
    "code": "CCSS4021",
    "classNo": "CL04",
    "name": "Hong Kong Society: A Sociological Perspective",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC315"
  },
  {
    "code": "CCSS4021",
    "classNo": "CL04",
    "name": "Hong Kong Society: A Sociological Perspective",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC315"
  },
  {
    "code": "CCSS4024",
    "classNo": "CL01",
    "name": "Introduction to Counseling",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC612"
  },
  {
    "code": "CCSS4024",
    "classNo": "CL01",
    "name": "Introduction to Counseling",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC612"
  },
  {
    "code": "CCSS4024",
    "classNo": "CL02",
    "name": "Introduction to Counseling",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC612"
  },
  {
    "code": "CCSS4024",
    "classNo": "CL02",
    "name": "Introduction to Counseling",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC612"
  },
  {
    "code": "CCSS4024",
    "classNo": "CL03",
    "name": "Introduction to Counseling",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC612"
  },
  {
    "code": "CCSS4024",
    "classNo": "CL03",
    "name": "Introduction to Counseling",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC612"
  },
  {
    "code": "CCSS4024",
    "classNo": "CL04",
    "name": "Introduction to Counseling",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC613"
  },
  {
    "code": "CCSS4024",
    "classNo": "CL04",
    "name": "Introduction to Counseling",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC613"
  },
  {
    "code": "CCSS4024",
    "classNo": "CL05",
    "name": "Introduction to Counseling",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC612"
  },
  {
    "code": "CCSS4024",
    "classNo": "CL05",
    "name": "Introduction to Counseling",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC612"
  },
  {
    "code": "CCSS4024",
    "classNo": "CL06",
    "name": "Introduction to Counseling",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC613"
  },
  {
    "code": "CCSS4024",
    "classNo": "CL06",
    "name": "Introduction to Counseling",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC613"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL14",
    "name": "The Basics of Sociology",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL14",
    "name": "The Basics of Sociology",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC601"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL15",
    "name": "The Basics of Sociology",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC607"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL15",
    "name": "The Basics of Sociology",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC607"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL16",
    "name": "The Basics of Sociology",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC601"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL16",
    "name": "The Basics of Sociology",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL17",
    "name": "The Basics of Sociology",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC607"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL17",
    "name": "The Basics of Sociology",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC607"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL18",
    "name": "The Basics of Sociology",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC309"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL18",
    "name": "The Basics of Sociology",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC309"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL19",
    "name": "The Basics of Sociology",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC616"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL19",
    "name": "The Basics of Sociology",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC616"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL20",
    "name": "The Basics of Sociology",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC306"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL20",
    "name": "The Basics of Sociology",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC306"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL21",
    "name": "The Basics of Sociology",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC607"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL21",
    "name": "The Basics of Sociology",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC607"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL22",
    "name": "The Basics of Sociology",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL22",
    "name": "The Basics of Sociology",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC601"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL23",
    "name": "The Basics of Sociology",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC616"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL23",
    "name": "The Basics of Sociology",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC616"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL24",
    "name": "The Basics of Sociology",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC616"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL24",
    "name": "The Basics of Sociology",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC616"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL25",
    "name": "The Basics of Sociology",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC309"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL25",
    "name": "The Basics of Sociology",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC309"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL06",
    "name": "Global Issues and Everyday Life",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC707"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL06",
    "name": "Global Issues and Everyday Life",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC707"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL07",
    "name": "Global Issues and Everyday Life",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC907"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL07",
    "name": "Global Issues and Everyday Life",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC907"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL08",
    "name": "Global Issues and Everyday Life",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC606"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL08",
    "name": "Global Issues and Everyday Life",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC606"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL09",
    "name": "Global Issues and Everyday Life",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC605"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL09",
    "name": "Global Issues and Everyday Life",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC605"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL10",
    "name": "Global Issues and Everyday Life",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE102"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL10",
    "name": "Global Issues and Everyday Life",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE102"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL11",
    "name": "Global Issues and Everyday Life",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE102"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL11",
    "name": "Global Issues and Everyday Life",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE102"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL12",
    "name": "Global Issues and Everyday Life",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC601"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL12",
    "name": "Global Issues and Everyday Life",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL13",
    "name": "Global Issues and Everyday Life",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC616"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL13",
    "name": "Global Issues and Everyday Life",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC616"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL14",
    "name": "Global Issues and Everyday Life",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC609"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL14",
    "name": "Global Issues and Everyday Life",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC609"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL15",
    "name": "Global Issues and Everyday Life",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC505"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL15",
    "name": "Global Issues and Everyday Life",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC505"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL16",
    "name": "Global Issues and Everyday Life",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC505"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL16",
    "name": "Global Issues and Everyday Life",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC505"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL17",
    "name": "Global Issues and Everyday Life",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL17",
    "name": "Global Issues and Everyday Life",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL07",
    "name": "Health, Technology and Society",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC616"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL07",
    "name": "Health, Technology and Society",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC616"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL08",
    "name": "Health, Technology and Society",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE102"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL08",
    "name": "Health, Technology and Society",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE102"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL09",
    "name": "Health, Technology and Society",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC504"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL09",
    "name": "Health, Technology and Society",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC504"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL10",
    "name": "Health, Technology and Society",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC607"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL10",
    "name": "Health, Technology and Society",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC607"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL11",
    "name": "Health, Technology and Society",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC605"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL11",
    "name": "Health, Technology and Society",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC605"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL12",
    "name": "Health, Technology and Society",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC605"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL12",
    "name": "Health, Technology and Society",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC605"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL13",
    "name": "Health, Technology and Society",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL13",
    "name": "Health, Technology and Society",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL14",
    "name": "Health, Technology and Society",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL14",
    "name": "Health, Technology and Society",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4046",
    "classNo": "CL01",
    "name": "Social Psychology",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC612"
  },
  {
    "code": "CCSS4046",
    "classNo": "CL01",
    "name": "Social Psychology",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC612"
  },
  {
    "code": "CCSS4046",
    "classNo": "CL02",
    "name": "Social Psychology",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC315"
  },
  {
    "code": "CCSS4046",
    "classNo": "CL02",
    "name": "Social Psychology",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC315"
  },
  {
    "code": "CCSS4046",
    "classNo": "CL03",
    "name": "Social Psychology",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC612"
  },
  {
    "code": "CCSS4046",
    "classNo": "CL03",
    "name": "Social Psychology",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC612"
  },
  {
    "code": "CCSS4046",
    "classNo": "CL04",
    "name": "Social Psychology",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC315"
  },
  {
    "code": "CCSS4046",
    "classNo": "CL04",
    "name": "Social Psychology",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC315"
  },
  {
    "code": "CCSS4047",
    "classNo": "CL01",
    "name": "Sociology of the Family",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC309"
  },
  {
    "code": "CCSS4047",
    "classNo": "CL01",
    "name": "Sociology of the Family",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC309"
  },
  {
    "code": "CCSS4047",
    "classNo": "CL02",
    "name": "Sociology of the Family",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC601"
  },
  {
    "code": "CCSS4047",
    "classNo": "CL02",
    "name": "Sociology of the Family",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4047",
    "classNo": "CL03",
    "name": "Sociology of the Family",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC607"
  },
  {
    "code": "CCSS4047",
    "classNo": "CL03",
    "name": "Sociology of the Family",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC607"
  },
  {
    "code": "CCSS4047",
    "classNo": "CL04",
    "name": "Sociology of the Family",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC601"
  },
  {
    "code": "CCSS4047",
    "classNo": "CL04",
    "name": "Sociology of the Family",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4049",
    "classNo": "CL01",
    "name": "Sustainable Development in a Globalising World",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC506"
  },
  {
    "code": "CCSS4049",
    "classNo": "CL01",
    "name": "Sustainable Development in a Globalising World",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC506"
  },
  {
    "code": "CCSS4049",
    "classNo": "CL02",
    "name": "Sustainable Development in a Globalising World",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4049",
    "classNo": "CL02",
    "name": "Sustainable Development in a Globalising World",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4049",
    "classNo": "CL03",
    "name": "Sustainable Development in a Globalising World",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC8A3"
  },
  {
    "code": "CCSS4049",
    "classNo": "CL03",
    "name": "Sustainable Development in a Globalising World",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC8A3"
  },
  {
    "code": "CCSS4049",
    "classNo": "CL04",
    "name": "Sustainable Development in a Globalising World",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC505"
  },
  {
    "code": "CCSS4049",
    "classNo": "CL04",
    "name": "Sustainable Development in a Globalising World",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC505"
  },
  {
    "code": "CCSS4049",
    "classNo": "CL05",
    "name": "Sustainable Development in a Globalising World",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC505"
  },
  {
    "code": "CCSS4049",
    "classNo": "CL05",
    "name": "Sustainable Development in a Globalising World",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC505"
  },
  {
    "code": "CCSS4049",
    "classNo": "CL06",
    "name": "Sustainable Development in a Globalising World",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4049",
    "classNo": "CL06",
    "name": "Sustainable Development in a Globalising World",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4050",
    "classNo": "CL01",
    "name": "Introduction to Geographic Information Systems",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1204"
  },
  {
    "code": "CCSS4050",
    "classNo": "CL01",
    "name": "Introduction to Geographic Information Systems",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1204"
  },
  {
    "code": "CCSS4050",
    "classNo": "CL02",
    "name": "Introduction to Geographic Information Systems",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1204"
  },
  {
    "code": "CCSS4050",
    "classNo": "CL02",
    "name": "Introduction to Geographic Information Systems",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1204"
  },
  {
    "code": "CCSS4050",
    "classNo": "CL03",
    "name": "Introduction to Geographic Information Systems",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1204"
  },
  {
    "code": "CCSS4050",
    "classNo": "CL03",
    "name": "Introduction to Geographic Information Systems",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1204"
  },
  {
    "code": "CCSS4050",
    "classNo": "CL04",
    "name": "Introduction to Geographic Information Systems",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC504"
  },
  {
    "code": "CCSS4050",
    "classNo": "CL04",
    "name": "Introduction to Geographic Information Systems",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC504"
  },
  {
    "code": "CCSS4050",
    "classNo": "CL05",
    "name": "Introduction to Geographic Information Systems",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1204"
  },
  {
    "code": "CCSS4050",
    "classNo": "CL05",
    "name": "Introduction to Geographic Information Systems",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1204"
  },
  {
    "code": "CCSS4050",
    "classNo": "CL06",
    "name": "Introduction to Geographic Information Systems",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1204"
  },
  {
    "code": "CCSS4050",
    "classNo": "CL06",
    "name": "Introduction to Geographic Information Systems",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1204"
  },
  {
    "code": "CCSS4052",
    "classNo": "CL04",
    "name": "Urban and Regional Development in China",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4052",
    "classNo": "CL04",
    "name": "Urban and Regional Development in China",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4052",
    "classNo": "CL05",
    "name": "Urban and Regional Development in China",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC8A3"
  },
  {
    "code": "CCSS4052",
    "classNo": "CL05",
    "name": "Urban and Regional Development in China",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC8A3"
  },
  {
    "code": "CCSS4052",
    "classNo": "CL06",
    "name": "Urban and Regional Development in China",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4052",
    "classNo": "CL06",
    "name": "Urban and Regional Development in China",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4053",
    "classNo": "CL01",
    "name": "Introduction to Public Policy and Administration",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC314"
  },
  {
    "code": "CCSS4053",
    "classNo": "CL01",
    "name": "Introduction to Public Policy and Administration",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC314"
  },
  {
    "code": "CCSS4053",
    "classNo": "CL02",
    "name": "Introduction to Public Policy and Administration",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC315"
  },
  {
    "code": "CCSS4053",
    "classNo": "CL02",
    "name": "Introduction to Public Policy and Administration",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC315"
  },
  {
    "code": "CCSS4053",
    "classNo": "CL03",
    "name": "Introduction to Public Policy and Administration",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC315"
  },
  {
    "code": "CCSS4053",
    "classNo": "CL03",
    "name": "Introduction to Public Policy and Administration",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC315"
  },
  {
    "code": "CCSS4054",
    "classNo": "CL01",
    "name": "Land and People in Hong Kong: A Field Survey",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC502"
  },
  {
    "code": "CCSS4054",
    "classNo": "CL01",
    "name": "Land and People in Hong Kong: A Field Survey",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "IEC502"
  },
  {
    "code": "CCSS4054",
    "classNo": "CL02",
    "name": "Land and People in Hong Kong: A Field Survey",
    "day": "Sat",
    "start": "14:30",
    "end": "15:50",
    "room": "IEC502"
  },
  {
    "code": "CCSS4054",
    "classNo": "CL02",
    "name": "Land and People in Hong Kong: A Field Survey",
    "day": "Sat",
    "start": "16:00",
    "end": "17:20",
    "room": "IEC502"
  },
  {
    "code": "CCSS4054",
    "classNo": "CL03",
    "name": "Land and People in Hong Kong: A Field Survey",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCSS4054",
    "classNo": "CL03",
    "name": "Land and People in Hong Kong: A Field Survey",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCSS4054",
    "classNo": "CL04",
    "name": "Land and People in Hong Kong: A Field Survey",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCSS4054",
    "classNo": "CL04",
    "name": "Land and People in Hong Kong: A Field Survey",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCSS4054",
    "classNo": "CL05",
    "name": "Land and People in Hong Kong: A Field Survey",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCSS4054",
    "classNo": "CL05",
    "name": "Land and People in Hong Kong: A Field Survey",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCSS4056",
    "classNo": "CL01",
    "name": "Natural Heritage in Hong Kong",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4056",
    "classNo": "CL01",
    "name": "Natural Heritage in Hong Kong",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4056",
    "classNo": "CL02",
    "name": "Natural Heritage in Hong Kong",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4056",
    "classNo": "CL02",
    "name": "Natural Heritage in Hong Kong",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4056",
    "classNo": "CL03",
    "name": "Natural Heritage in Hong Kong",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC505"
  },
  {
    "code": "CCSS4056",
    "classNo": "CL03",
    "name": "Natural Heritage in Hong Kong",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC505"
  },
  {
    "code": "CCSS4057",
    "classNo": "CL01",
    "name": "Introduction to Personality",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC314"
  },
  {
    "code": "CCSS4057",
    "classNo": "CL01",
    "name": "Introduction to Personality",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC314"
  },
  {
    "code": "CCSS4057",
    "classNo": "CL02",
    "name": "Introduction to Personality",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC315"
  },
  {
    "code": "CCSS4057",
    "classNo": "CL02",
    "name": "Introduction to Personality",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC315"
  },
  {
    "code": "CCSS4057",
    "classNo": "CL03",
    "name": "Introduction to Personality",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC314"
  },
  {
    "code": "CCSS4057",
    "classNo": "CL03",
    "name": "Introduction to Personality",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC314"
  },
  {
    "code": "CCSS4057",
    "classNo": "CL04",
    "name": "Introduction to Personality",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC315"
  },
  {
    "code": "CCSS4057",
    "classNo": "CL04",
    "name": "Introduction to Personality",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC315"
  },
  {
    "code": "CCST3002",
    "classNo": "CL01",
    "name": "Foundations of Chemistry",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "IEC1203"
  },
  {
    "code": "CCST3002",
    "classNo": "CL01",
    "name": "Foundations of Chemistry",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC1203"
  },
  {
    "code": "CCST3002",
    "classNo": "CL02",
    "name": "Foundations of Chemistry",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC1203"
  },
  {
    "code": "CCST3002",
    "classNo": "CL02",
    "name": "Foundations of Chemistry",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "IEC1203"
  },
  {
    "code": "CCST3002",
    "classNo": "CL03",
    "name": "Foundations of Chemistry",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "IEC1201"
  },
  {
    "code": "CCST3002",
    "classNo": "CL03",
    "name": "Foundations of Chemistry",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "IEC1201"
  },
  {
    "code": "CCST3002",
    "classNo": "CL04",
    "name": "Foundations of Chemistry",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "SSC801"
  },
  {
    "code": "CCST3002",
    "classNo": "CL04",
    "name": "Foundations of Chemistry",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "SSC801"
  },
  {
    "code": "CCST3004",
    "classNo": "CL01",
    "name": "How Things in Everyday Life Work",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC1202"
  },
  {
    "code": "CCST3004",
    "classNo": "CL01",
    "name": "How Things in Everyday Life Work",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "IEC1202"
  },
  {
    "code": "CCST3004",
    "classNo": "CL02",
    "name": "How Things in Everyday Life Work",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC1802"
  },
  {
    "code": "CCST3004",
    "classNo": "CL02",
    "name": "How Things in Everyday Life Work",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "IEC1802"
  },
  {
    "code": "CCST3004",
    "classNo": "CL03",
    "name": "How Things in Everyday Life Work",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "IEC1203"
  },
  {
    "code": "CCST3004",
    "classNo": "CL03",
    "name": "How Things in Everyday Life Work",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "IEC1203"
  },
  {
    "code": "CCST3004",
    "classNo": "CL04",
    "name": "How Things in Everyday Life Work",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "IEC1802"
  },
  {
    "code": "CCST3004",
    "classNo": "CL04",
    "name": "How Things in Everyday Life Work",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC1802"
  },
  {
    "code": "CCST3004",
    "classNo": "CL05",
    "name": "How Things in Everyday Life Work",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "IEC1201"
  },
  {
    "code": "CCST3004",
    "classNo": "CL05",
    "name": "How Things in Everyday Life Work",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "IEC1201"
  },
  {
    "code": "CCST3004",
    "classNo": "CL06",
    "name": "How Things in Everyday Life Work",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "SSC702"
  },
  {
    "code": "CCST3004",
    "classNo": "CL06",
    "name": "How Things in Everyday Life Work",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "SSC702"
  },
  {
    "code": "CCST3004",
    "classNo": "CL07",
    "name": "How Things in Everyday Life Work",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "SSC701"
  },
  {
    "code": "CCST3004",
    "classNo": "CL07",
    "name": "How Things in Everyday Life Work",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "SSC701"
  },
  {
    "code": "CCST3004",
    "classNo": "CL08",
    "name": "How Things in Everyday Life Work",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "SSC701"
  },
  {
    "code": "CCST3004",
    "classNo": "CL08",
    "name": "How Things in Everyday Life Work",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "SSC701"
  },
  {
    "code": "CCST4009",
    "classNo": "CL06",
    "name": "Environmental Challenges and Sustainability",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC510"
  },
  {
    "code": "CCST4009",
    "classNo": "CL06",
    "name": "Environmental Challenges and Sustainability",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC510"
  },
  {
    "code": "CCST4009",
    "classNo": "CL07",
    "name": "Environmental Challenges and Sustainability",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC605"
  },
  {
    "code": "CCST4009",
    "classNo": "CL07",
    "name": "Environmental Challenges and Sustainability",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC605"
  },
  {
    "code": "CCST4009",
    "classNo": "CL08",
    "name": "Environmental Challenges and Sustainability",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC510"
  },
  {
    "code": "CCST4009",
    "classNo": "CL08",
    "name": "Environmental Challenges and Sustainability",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC510"
  },
  {
    "code": "CCST4009",
    "classNo": "CL09",
    "name": "Environmental Challenges and Sustainability",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC606"
  },
  {
    "code": "CCST4009",
    "classNo": "CL09",
    "name": "Environmental Challenges and Sustainability",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC606"
  },
  {
    "code": "CCST4009",
    "classNo": "CL10",
    "name": "Environmental Challenges and Sustainability",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC509"
  },
  {
    "code": "CCST4009",
    "classNo": "CL10",
    "name": "Environmental Challenges and Sustainability",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC509"
  },
  {
    "code": "CCST4009",
    "classNo": "CL11",
    "name": "Environmental Challenges and Sustainability",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC509"
  },
  {
    "code": "CCST4009",
    "classNo": "CL11",
    "name": "Environmental Challenges and Sustainability",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC509"
  },
  {
    "code": "CCST4009",
    "classNo": "CL12",
    "name": "Environmental Challenges and Sustainability",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE102"
  },
  {
    "code": "CCST4009",
    "classNo": "CL12",
    "name": "Environmental Challenges and Sustainability",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE102"
  },
  {
    "code": "CCST4009",
    "classNo": "CL13",
    "name": "Environmental Challenges and Sustainability",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE102"
  },
  {
    "code": "CCST4009",
    "classNo": "CL13",
    "name": "Environmental Challenges and Sustainability",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE102"
  },
  {
    "code": "CCST4009",
    "classNo": "CL14",
    "name": "Environmental Challenges and Sustainability",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC607"
  },
  {
    "code": "CCST4009",
    "classNo": "CL14",
    "name": "Environmental Challenges and Sustainability",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC607"
  },
  {
    "code": "CCST4009",
    "classNo": "CL15",
    "name": "Environmental Challenges and Sustainability",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC505"
  },
  {
    "code": "CCST4009",
    "classNo": "CL15",
    "name": "Environmental Challenges and Sustainability",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC505"
  },
  {
    "code": "CCST4010",
    "classNo": "CL05",
    "name": "Food and Nutrition Basics",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4010",
    "classNo": "CL05",
    "name": "Food and Nutrition Basics",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4011",
    "classNo": "CL01",
    "name": "Biodiversity and Genetics",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC903"
  },
  {
    "code": "CCST4011",
    "classNo": "CL01",
    "name": "Biodiversity and Genetics",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC903"
  },
  {
    "code": "CCST4011",
    "classNo": "CL02",
    "name": "Biodiversity and Genetics",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4011",
    "classNo": "CL02",
    "name": "Biodiversity and Genetics",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4011",
    "classNo": "CL03",
    "name": "Biodiversity and Genetics",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC903"
  },
  {
    "code": "CCST4011",
    "classNo": "CL03",
    "name": "Biodiversity and Genetics",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC903"
  },
  {
    "code": "CCST4013",
    "classNo": "CL01",
    "name": "Introductory Organic Chemistry",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC609"
  },
  {
    "code": "CCST4013",
    "classNo": "CL01",
    "name": "Introductory Organic Chemistry",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC609"
  },
  {
    "code": "CCST4013",
    "classNo": "CL01",
    "name": "Introductory Organic Chemistry",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC708"
  },
  {
    "code": "CCST4013",
    "classNo": "CL02",
    "name": "Introductory Organic Chemistry",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC806"
  },
  {
    "code": "CCST4013",
    "classNo": "CL02",
    "name": "Introductory Organic Chemistry",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC806"
  },
  {
    "code": "CCST4013",
    "classNo": "CL02",
    "name": "Introductory Organic Chemistry",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC705"
  },
  {
    "code": "CCST4013",
    "classNo": "CL03",
    "name": "Introductory Organic Chemistry",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC806"
  },
  {
    "code": "CCST4013",
    "classNo": "CL03",
    "name": "Introductory Organic Chemistry",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC806"
  },
  {
    "code": "CCST4013",
    "classNo": "CL03",
    "name": "Introductory Organic Chemistry",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC705"
  },
  {
    "code": "CCST4013",
    "classNo": "CL04",
    "name": "Introductory Organic Chemistry",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC609"
  },
  {
    "code": "CCST4013",
    "classNo": "CL04",
    "name": "Introductory Organic Chemistry",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC609"
  },
  {
    "code": "CCST4013",
    "classNo": "CL04",
    "name": "Introductory Organic Chemistry",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC708"
  },
  {
    "code": "CCST4015",
    "classNo": "CL01",
    "name": "Fundamentals of Thermodynamics, Waves and Electromagnetism",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC502"
  },
  {
    "code": "CCST4015",
    "classNo": "CL01",
    "name": "Fundamentals of Thermodynamics, Waves and Electromagnetism",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC502"
  },
  {
    "code": "CCST4015",
    "classNo": "CL02",
    "name": "Fundamentals of Thermodynamics, Waves and Electromagnetism",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC502"
  },
  {
    "code": "CCST4015",
    "classNo": "CL02",
    "name": "Fundamentals of Thermodynamics, Waves and Electromagnetism",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC502"
  },
  {
    "code": "CCST4015",
    "classNo": "CT01",
    "name": "Fundamentals of Thermodynamics, Waves and Electromagnetism",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC710"
  },
  {
    "code": "CCST4015",
    "classNo": "CT02",
    "name": "Fundamentals of Thermodynamics, Waves and Electromagnetism",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC710"
  },
  {
    "code": "CCST4015",
    "classNo": "CT03",
    "name": "Fundamentals of Thermodynamics, Waves and Electromagnetism",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC504"
  },
  {
    "code": "CCST4015",
    "classNo": "CT04",
    "name": "Fundamentals of Thermodynamics, Waves and Electromagnetism",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC504"
  },
  {
    "code": "CCST4015",
    "classNo": "CT05",
    "name": "Fundamentals of Thermodynamics, Waves and Electromagnetism",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC805"
  },
  {
    "code": "CCST4015",
    "classNo": "CT06",
    "name": "Fundamentals of Thermodynamics, Waves and Electromagnetism",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC805"
  },
  {
    "code": "CCST4015",
    "classNo": "CT07",
    "name": "Fundamentals of Thermodynamics, Waves and Electromagnetism",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC508"
  },
  {
    "code": "CCST4015",
    "classNo": "CT08",
    "name": "Fundamentals of Thermodynamics, Waves and Electromagnetism",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC508"
  },
  {
    "code": "CCST4017",
    "classNo": "CL05",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL05",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL05",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL05",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL05",
    "name": "Molecular Biology and Biochemistry",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC509"
  },
  {
    "code": "CCST4017",
    "classNo": "CL05",
    "name": "Molecular Biology and Biochemistry",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC509"
  },
  {
    "code": "CCST4017",
    "classNo": "CL06",
    "name": "Molecular Biology and Biochemistry",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC510"
  },
  {
    "code": "CCST4017",
    "classNo": "CL06",
    "name": "Molecular Biology and Biochemistry",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC510"
  },
  {
    "code": "CCST4017",
    "classNo": "CL06",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL06",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL06",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL06",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL07",
    "name": "Molecular Biology and Biochemistry",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC506"
  },
  {
    "code": "CCST4017",
    "classNo": "CL07",
    "name": "Molecular Biology and Biochemistry",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC506"
  },
  {
    "code": "CCST4017",
    "classNo": "CL07",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL07",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL07",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL07",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4018",
    "classNo": "CL01",
    "name": "Cell Biology and Physiology",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC903"
  },
  {
    "code": "CCST4018",
    "classNo": "CL01",
    "name": "Cell Biology and Physiology",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC903"
  },
  {
    "code": "CCST4018",
    "classNo": "CL02",
    "name": "Cell Biology and Physiology",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC803"
  },
  {
    "code": "CCST4018",
    "classNo": "CL02",
    "name": "Cell Biology and Physiology",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC803"
  },
  {
    "code": "CCST4018",
    "classNo": "CL03",
    "name": "Cell Biology and Physiology",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC903"
  },
  {
    "code": "CCST4018",
    "classNo": "CL03",
    "name": "Cell Biology and Physiology",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC803"
  },
  {
    "code": "CCST4018",
    "classNo": "CL04",
    "name": "Cell Biology and Physiology",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC903"
  },
  {
    "code": "CCST4018",
    "classNo": "CL04",
    "name": "Cell Biology and Physiology",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC803"
  },
  {
    "code": "CCST4023",
    "classNo": "CL02",
    "name": "From Molecules to Cells",
    "day": "Mon",
    "start": "13:00",
    "end": "15:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4023",
    "classNo": "CL02",
    "name": "From Molecules to Cells",
    "day": "Thu",
    "start": "09:00",
    "end": "10:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4027",
    "classNo": "CL01",
    "name": "Pharmacology",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC506"
  },
  {
    "code": "CCST4027",
    "classNo": "CL01",
    "name": "Pharmacology",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC506"
  },
  {
    "code": "CCST4027",
    "classNo": "CL02",
    "name": "Pharmacology",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC506"
  },
  {
    "code": "CCST4027",
    "classNo": "CL02",
    "name": "Pharmacology",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC506"
  },
  {
    "code": "CCST4027",
    "classNo": "CL03",
    "name": "Pharmacology",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC504"
  },
  {
    "code": "CCST4027",
    "classNo": "CL03",
    "name": "Pharmacology",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC504"
  },
  {
    "code": "CCST4027",
    "classNo": "CL04",
    "name": "Pharmacology",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC605"
  },
  {
    "code": "CCST4027",
    "classNo": "CL04",
    "name": "Pharmacology",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC605"
  },
  {
    "code": "CCST4028",
    "classNo": "CL01",
    "name": "Nursing Care of the Older Adult",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC301"
  },
  {
    "code": "CCST4028",
    "classNo": "CL01",
    "name": "Nursing Care of the Older Adult",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC301"
  },
  {
    "code": "CCST4028",
    "classNo": "CL01",
    "name": "Nursing Care of the Older Adult",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC301"
  },
  {
    "code": "CCST4028",
    "classNo": "CL01",
    "name": "Nursing Care of the Older Adult",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC709"
  },
  {
    "code": "CCST4028",
    "classNo": "CL01",
    "name": "Nursing Care of the Older Adult",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC709"
  },
  {
    "code": "CCST4028",
    "classNo": "CL02",
    "name": "Nursing Care of the Older Adult",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1003"
  },
  {
    "code": "CCST4028",
    "classNo": "CL02",
    "name": "Nursing Care of the Older Adult",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1003"
  },
  {
    "code": "CCST4028",
    "classNo": "CL02",
    "name": "Nursing Care of the Older Adult",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1003"
  },
  {
    "code": "CCST4028",
    "classNo": "CL02",
    "name": "Nursing Care of the Older Adult",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC709"
  },
  {
    "code": "CCST4028",
    "classNo": "CL02",
    "name": "Nursing Care of the Older Adult",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC709"
  },
  {
    "code": "CCST4028",
    "classNo": "CL03",
    "name": "Nursing Care of the Older Adult",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC301"
  },
  {
    "code": "CCST4028",
    "classNo": "CL03",
    "name": "Nursing Care of the Older Adult",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC301"
  },
  {
    "code": "CCST4028",
    "classNo": "CL03",
    "name": "Nursing Care of the Older Adult",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC301"
  },
  {
    "code": "CCST4028",
    "classNo": "CL03",
    "name": "Nursing Care of the Older Adult",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC709"
  },
  {
    "code": "CCST4028",
    "classNo": "CL03",
    "name": "Nursing Care of the Older Adult",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC709"
  },
  {
    "code": "CCST4028",
    "classNo": "CL04",
    "name": "Nursing Care of the Older Adult",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1003"
  },
  {
    "code": "CCST4028",
    "classNo": "CL04",
    "name": "Nursing Care of the Older Adult",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1003"
  },
  {
    "code": "CCST4028",
    "classNo": "CL04",
    "name": "Nursing Care of the Older Adult",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1003"
  },
  {
    "code": "CCST4028",
    "classNo": "CL04",
    "name": "Nursing Care of the Older Adult",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC709"
  },
  {
    "code": "CCST4028",
    "classNo": "CL04",
    "name": "Nursing Care of the Older Adult",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC709"
  },
  {
    "code": "CCST4028",
    "classNo": "CL05",
    "name": "Nursing Care of the Older Adult",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC301"
  },
  {
    "code": "CCST4028",
    "classNo": "CL05",
    "name": "Nursing Care of the Older Adult",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC301"
  },
  {
    "code": "CCST4028",
    "classNo": "CL05",
    "name": "Nursing Care of the Older Adult",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC301"
  },
  {
    "code": "CCST4028",
    "classNo": "CL05",
    "name": "Nursing Care of the Older Adult",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC709"
  },
  {
    "code": "CCST4028",
    "classNo": "CL05",
    "name": "Nursing Care of the Older Adult",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC709"
  },
  {
    "code": "CCST4028",
    "classNo": "CL06",
    "name": "Nursing Care of the Older Adult",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1003"
  },
  {
    "code": "CCST4028",
    "classNo": "CL06",
    "name": "Nursing Care of the Older Adult",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1003"
  },
  {
    "code": "CCST4028",
    "classNo": "CL06",
    "name": "Nursing Care of the Older Adult",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1003"
  },
  {
    "code": "CCST4028",
    "classNo": "CL06",
    "name": "Nursing Care of the Older Adult",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC709"
  },
  {
    "code": "CCST4028",
    "classNo": "CL06",
    "name": "Nursing Care of the Older Adult",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC709"
  },
  {
    "code": "CCST4028",
    "classNo": "CL07",
    "name": "Nursing Care of the Older Adult",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC801"
  },
  {
    "code": "CCST4028",
    "classNo": "CL07",
    "name": "Nursing Care of the Older Adult",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC801"
  },
  {
    "code": "CCST4028",
    "classNo": "CL07",
    "name": "Nursing Care of the Older Adult",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC801"
  },
  {
    "code": "CCST4028",
    "classNo": "CL07",
    "name": "Nursing Care of the Older Adult",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC709"
  },
  {
    "code": "CCST4028",
    "classNo": "CL07",
    "name": "Nursing Care of the Older Adult",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC709"
  },
  {
    "code": "CCST4028",
    "classNo": "CL08",
    "name": "Nursing Care of the Older Adult",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC301"
  },
  {
    "code": "CCST4028",
    "classNo": "CL08",
    "name": "Nursing Care of the Older Adult",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC301"
  },
  {
    "code": "CCST4028",
    "classNo": "CL08",
    "name": "Nursing Care of the Older Adult",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC301"
  },
  {
    "code": "CCST4028",
    "classNo": "CL08",
    "name": "Nursing Care of the Older Adult",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC709"
  },
  {
    "code": "CCST4028",
    "classNo": "CL08",
    "name": "Nursing Care of the Older Adult",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC709"
  },
  {
    "code": "CCST4028",
    "classNo": "CL09",
    "name": "Nursing Care of the Older Adult",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1003"
  },
  {
    "code": "CCST4028",
    "classNo": "CL09",
    "name": "Nursing Care of the Older Adult",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1003"
  },
  {
    "code": "CCST4028",
    "classNo": "CL09",
    "name": "Nursing Care of the Older Adult",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1003"
  },
  {
    "code": "CCST4028",
    "classNo": "CL09",
    "name": "Nursing Care of the Older Adult",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC709"
  },
  {
    "code": "CCST4028",
    "classNo": "CL09",
    "name": "Nursing Care of the Older Adult",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC709"
  },
  {
    "code": "CCST4028",
    "classNo": "CL10",
    "name": "Nursing Care of the Older Adult",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC801"
  },
  {
    "code": "CCST4028",
    "classNo": "CL10",
    "name": "Nursing Care of the Older Adult",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC801"
  },
  {
    "code": "CCST4028",
    "classNo": "CL10",
    "name": "Nursing Care of the Older Adult",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC801"
  },
  {
    "code": "CCST4028",
    "classNo": "CL10",
    "name": "Nursing Care of the Older Adult",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC709"
  },
  {
    "code": "CCST4028",
    "classNo": "CL10",
    "name": "Nursing Care of the Older Adult",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC709"
  },
  {
    "code": "CCST4029",
    "classNo": "CL02",
    "name": "Inorganic Chemistry I",
    "day": "Tue",
    "start": "14:00",
    "end": "18:00",
    "room": "HKU-LAB"
  },
  {
    "code": "CCST4029",
    "classNo": "CL02",
    "name": "Inorganic Chemistry I",
    "day": "Thu",
    "start": "17:00",
    "end": "19:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4030",
    "classNo": "CL02",
    "name": "Analytical Chemistry I",
    "day": "Mon",
    "start": "09:00",
    "end": "11:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4030",
    "classNo": "CL02",
    "name": "Analytical Chemistry I",
    "day": "Fri",
    "start": "14:00",
    "end": "18:00",
    "room": "HKU-LAB"
  },
  {
    "code": "CCST4035",
    "classNo": "CL01",
    "name": "Fluid/Solid Interactions in Earth Processes",
    "day": "Tue",
    "start": "17:00",
    "end": "19:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4035",
    "classNo": "CL01",
    "name": "Fluid/Solid Interactions in Earth Processes",
    "day": "Fri",
    "start": "13:00",
    "end": "15:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4039",
    "classNo": "CL02",
    "name": "Organic Chemistry I",
    "day": "Mon",
    "start": "13:00",
    "end": "15:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4039",
    "classNo": "CL02",
    "name": "Organic Chemistry I",
    "day": "Thu",
    "start": "16:00",
    "end": "17:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4040",
    "classNo": "CL01",
    "name": "Introductory Electricity and Magnetism",
    "day": "Mon",
    "start": "12:00",
    "end": "13:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4040",
    "classNo": "CL01",
    "name": "Introductory Electricity and Magnetism",
    "day": "Thu",
    "start": "17:00",
    "end": "19:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4047",
    "classNo": "CL01",
    "name": "Fundamentals of the Human Body",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC510"
  },
  {
    "code": "CCST4047",
    "classNo": "CL01",
    "name": "Fundamentals of the Human Body",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC510"
  },
  {
    "code": "CCST4047",
    "classNo": "CL02",
    "name": "Fundamentals of the Human Body",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC611"
  },
  {
    "code": "CCST4047",
    "classNo": "CL02",
    "name": "Fundamentals of the Human Body",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC611"
  },
  {
    "code": "CCST4047",
    "classNo": "CL03",
    "name": "Fundamentals of the Human Body",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC504"
  },
  {
    "code": "CCST4047",
    "classNo": "CL03",
    "name": "Fundamentals of the Human Body",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC504"
  },
  {
    "code": "CCST4047",
    "classNo": "CL04",
    "name": "Fundamentals of the Human Body",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC504"
  },
  {
    "code": "CCST4047",
    "classNo": "CL04",
    "name": "Fundamentals of the Human Body",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC504"
  },
  {
    "code": "CCST4047",
    "classNo": "CL05",
    "name": "Fundamentals of the Human Body",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC504"
  },
  {
    "code": "CCST4047",
    "classNo": "CL05",
    "name": "Fundamentals of the Human Body",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC504"
  },
  {
    "code": "CCST4047",
    "classNo": "CL06",
    "name": "Fundamentals of the Human Body",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC607"
  },
  {
    "code": "CCST4047",
    "classNo": "CL06",
    "name": "Fundamentals of the Human Body",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC607"
  },
  {
    "code": "CCST4048",
    "classNo": "CL01",
    "name": "Pathology and Pathophysiology",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC510"
  },
  {
    "code": "CCST4048",
    "classNo": "CL01",
    "name": "Pathology and Pathophysiology",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC510"
  },
  {
    "code": "CCST4048",
    "classNo": "CL02",
    "name": "Pathology and Pathophysiology",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC506"
  },
  {
    "code": "CCST4048",
    "classNo": "CL02",
    "name": "Pathology and Pathophysiology",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC506"
  },
  {
    "code": "CCST4048",
    "classNo": "CL03",
    "name": "Pathology and Pathophysiology",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC805"
  },
  {
    "code": "CCST4048",
    "classNo": "CL03",
    "name": "Pathology and Pathophysiology",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC805"
  },
  {
    "code": "CCST4048",
    "classNo": "CL04",
    "name": "Pathology and Pathophysiology",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC504"
  },
  {
    "code": "CCST4048",
    "classNo": "CL04",
    "name": "Pathology and Pathophysiology",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC504"
  },
  {
    "code": "CCST4050",
    "classNo": "CL01",
    "name": "Clinical Microbiology and Communicable Diseases",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC803"
  },
  {
    "code": "CCST4050",
    "classNo": "CL01",
    "name": "Clinical Microbiology and Communicable Diseases",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC803"
  },
  {
    "code": "CCST4050",
    "classNo": "CL02",
    "name": "Clinical Microbiology and Communicable Diseases",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC803"
  },
  {
    "code": "CCST4050",
    "classNo": "CL02",
    "name": "Clinical Microbiology and Communicable Diseases",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC803"
  },
  {
    "code": "CCST4060",
    "classNo": "CL01",
    "name": "Evolutionary Diversity",
    "day": "Tue",
    "start": "09:00",
    "end": "11:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4060",
    "classNo": "CL01",
    "name": "Evolutionary Diversity",
    "day": "Tue",
    "start": "12:00",
    "end": "14:30",
    "room": "HKU-LAB"
  },
  {
    "code": "CCST4062",
    "classNo": "CL01",
    "name": "Methods in Physics II",
    "day": "Mon",
    "start": "17:00",
    "end": "19:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4062",
    "classNo": "CL01",
    "name": "Methods in Physics II",
    "day": "Wed",
    "start": "11:00",
    "end": "12:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4074",
    "classNo": "CL02",
    "name": "Probability and Statistics I",
    "day": "Tue",
    "start": "12:00",
    "end": "13:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4074",
    "classNo": "CL02",
    "name": "Probability and Statistics I",
    "day": "Thu",
    "start": "17:00",
    "end": "19:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4077",
    "classNo": "CL01",
    "name": "Health Assessment",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC609"
  },
  {
    "code": "CCST4077",
    "classNo": "CL01",
    "name": "Health Assessment",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC609"
  },
  {
    "code": "CCST4077",
    "classNo": "CL01",
    "name": "Health Assessment",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC301"
  },
  {
    "code": "CCST4077",
    "classNo": "CL01",
    "name": "Health Assessment",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC301"
  },
  {
    "code": "CCST4077",
    "classNo": "CL01",
    "name": "Health Assessment",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC301"
  },
  {
    "code": "CCST4077",
    "classNo": "CL02",
    "name": "Health Assessment",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC609"
  },
  {
    "code": "CCST4077",
    "classNo": "CL02",
    "name": "Health Assessment",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC609"
  },
  {
    "code": "CCST4077",
    "classNo": "CL02",
    "name": "Health Assessment",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1003"
  },
  {
    "code": "CCST4077",
    "classNo": "CL02",
    "name": "Health Assessment",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1003"
  },
  {
    "code": "CCST4077",
    "classNo": "CL02",
    "name": "Health Assessment",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1003"
  },
  {
    "code": "CCST4077",
    "classNo": "CL03",
    "name": "Health Assessment",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC609"
  },
  {
    "code": "CCST4077",
    "classNo": "CL03",
    "name": "Health Assessment",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC609"
  },
  {
    "code": "CCST4077",
    "classNo": "CL03",
    "name": "Health Assessment",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC301"
  },
  {
    "code": "CCST4077",
    "classNo": "CL03",
    "name": "Health Assessment",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC301"
  },
  {
    "code": "CCST4077",
    "classNo": "CL03",
    "name": "Health Assessment",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC301"
  },
  {
    "code": "CCST4077",
    "classNo": "CL04",
    "name": "Health Assessment",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC609"
  },
  {
    "code": "CCST4077",
    "classNo": "CL04",
    "name": "Health Assessment",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC609"
  },
  {
    "code": "CCST4077",
    "classNo": "CL04",
    "name": "Health Assessment",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1003"
  },
  {
    "code": "CCST4077",
    "classNo": "CL04",
    "name": "Health Assessment",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1003"
  },
  {
    "code": "CCST4077",
    "classNo": "CL04",
    "name": "Health Assessment",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1003"
  },
  {
    "code": "CCST4077",
    "classNo": "CL05",
    "name": "Health Assessment",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC609"
  },
  {
    "code": "CCST4077",
    "classNo": "CL05",
    "name": "Health Assessment",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC609"
  },
  {
    "code": "CCST4077",
    "classNo": "CL05",
    "name": "Health Assessment",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC301"
  },
  {
    "code": "CCST4077",
    "classNo": "CL05",
    "name": "Health Assessment",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC301"
  },
  {
    "code": "CCST4077",
    "classNo": "CL05",
    "name": "Health Assessment",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC301"
  },
  {
    "code": "CCST4077",
    "classNo": "CL06",
    "name": "Health Assessment",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC609"
  },
  {
    "code": "CCST4077",
    "classNo": "CL06",
    "name": "Health Assessment",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC609"
  },
  {
    "code": "CCST4077",
    "classNo": "CL06",
    "name": "Health Assessment",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1003"
  },
  {
    "code": "CCST4077",
    "classNo": "CL06",
    "name": "Health Assessment",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1003"
  },
  {
    "code": "CCST4077",
    "classNo": "CL06",
    "name": "Health Assessment",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1003"
  },
  {
    "code": "CCST4077",
    "classNo": "CL07",
    "name": "Health Assessment",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC609"
  },
  {
    "code": "CCST4077",
    "classNo": "CL07",
    "name": "Health Assessment",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC609"
  },
  {
    "code": "CCST4077",
    "classNo": "CL07",
    "name": "Health Assessment",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC301"
  },
  {
    "code": "CCST4077",
    "classNo": "CL07",
    "name": "Health Assessment",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC301"
  },
  {
    "code": "CCST4077",
    "classNo": "CL07",
    "name": "Health Assessment",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC301"
  },
  {
    "code": "CCST4077",
    "classNo": "CL08",
    "name": "Health Assessment",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC609"
  },
  {
    "code": "CCST4077",
    "classNo": "CL08",
    "name": "Health Assessment",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC609"
  },
  {
    "code": "CCST4077",
    "classNo": "CL08",
    "name": "Health Assessment",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1003"
  },
  {
    "code": "CCST4077",
    "classNo": "CL08",
    "name": "Health Assessment",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1003"
  },
  {
    "code": "CCST4077",
    "classNo": "CL08",
    "name": "Health Assessment",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1003"
  },
  {
    "code": "CCST4077",
    "classNo": "CL09",
    "name": "Health Assessment",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC609"
  },
  {
    "code": "CCST4077",
    "classNo": "CL09",
    "name": "Health Assessment",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC609"
  },
  {
    "code": "CCST4077",
    "classNo": "CL09",
    "name": "Health Assessment",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC301"
  },
  {
    "code": "CCST4077",
    "classNo": "CL09",
    "name": "Health Assessment",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC301"
  },
  {
    "code": "CCST4077",
    "classNo": "CL09",
    "name": "Health Assessment",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC301"
  },
  {
    "code": "CCST4077",
    "classNo": "CL10",
    "name": "Health Assessment",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC609"
  },
  {
    "code": "CCST4077",
    "classNo": "CL10",
    "name": "Health Assessment",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC609"
  },
  {
    "code": "CCST4077",
    "classNo": "CL10",
    "name": "Health Assessment",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1003"
  },
  {
    "code": "CCST4077",
    "classNo": "CL10",
    "name": "Health Assessment",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1003"
  },
  {
    "code": "CCST4077",
    "classNo": "CL10",
    "name": "Health Assessment",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1003"
  },
  {
    "code": "CCST4077",
    "classNo": "CL11",
    "name": "Health Assessment",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC609"
  },
  {
    "code": "CCST4077",
    "classNo": "CL11",
    "name": "Health Assessment",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC609"
  },
  {
    "code": "CCST4077",
    "classNo": "CL11",
    "name": "Health Assessment",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC301"
  },
  {
    "code": "CCST4077",
    "classNo": "CL11",
    "name": "Health Assessment",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC301"
  },
  {
    "code": "CCST4077",
    "classNo": "CL11",
    "name": "Health Assessment",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC301"
  },
  {
    "code": "CCST4077",
    "classNo": "CL12",
    "name": "Health Assessment",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC609"
  },
  {
    "code": "CCST4077",
    "classNo": "CL12",
    "name": "Health Assessment",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC609"
  },
  {
    "code": "CCST4077",
    "classNo": "CL12",
    "name": "Health Assessment",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1003"
  },
  {
    "code": "CCST4077",
    "classNo": "CL12",
    "name": "Health Assessment",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1003"
  },
  {
    "code": "CCST4077",
    "classNo": "CL12",
    "name": "Health Assessment",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1003"
  },
  {
    "code": "CCST4082",
    "classNo": "CL01",
    "name": "Biomedical Science",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC504"
  },
  {
    "code": "CCST4082",
    "classNo": "CL01",
    "name": "Biomedical Science",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC504"
  },
  {
    "code": "CCST4082",
    "classNo": "CL01",
    "name": "Biomedical Science",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC602"
  },
  {
    "code": "CCST4082",
    "classNo": "CL02",
    "name": "Biomedical Science",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC605"
  },
  {
    "code": "CCST4082",
    "classNo": "CL02",
    "name": "Biomedical Science",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC605"
  },
  {
    "code": "CCST4082",
    "classNo": "CL02",
    "name": "Biomedical Science",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC510"
  },
  {
    "code": "CCST4082",
    "classNo": "CL03",
    "name": "Biomedical Science",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC506"
  },
  {
    "code": "CCST4082",
    "classNo": "CL03",
    "name": "Biomedical Science",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC509"
  },
  {
    "code": "CCST4082",
    "classNo": "CL03",
    "name": "Biomedical Science",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC509"
  },
  {
    "code": "CCST4082",
    "classNo": "CL04",
    "name": "Biomedical Science",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC805"
  },
  {
    "code": "CCST4082",
    "classNo": "CL04",
    "name": "Biomedical Science",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC805"
  },
  {
    "code": "CCST4082",
    "classNo": "CL04",
    "name": "Biomedical Science",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC805"
  },
  {
    "code": "CCST4082",
    "classNo": "CL05",
    "name": "Biomedical Science",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC509"
  },
  {
    "code": "CCST4082",
    "classNo": "CL05",
    "name": "Biomedical Science",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC509"
  },
  {
    "code": "CCST4082",
    "classNo": "CL05",
    "name": "Biomedical Science",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC509"
  },
  {
    "code": "CCST4085",
    "classNo": "CL01",
    "name": "Biostatistics",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC910"
  },
  {
    "code": "CCST4085",
    "classNo": "CL01",
    "name": "Biostatistics",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC910"
  },
  {
    "code": "CCST4085",
    "classNo": "CT01",
    "name": "Biostatistics",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC910"
  },
  {
    "code": "CCST4086",
    "classNo": "CL02",
    "name": "Nature of the Universe",
    "day": "Tue",
    "start": "09:00",
    "end": "10:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4086",
    "classNo": "CL02",
    "name": "Nature of the Universe",
    "day": "Thu",
    "start": "10:00",
    "end": "12:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4087",
    "classNo": "CL01",
    "name": "Environmental Life Science",
    "day": "Tue",
    "start": "17:00",
    "end": "19:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4087",
    "classNo": "CL01",
    "name": "Environmental Life Science",
    "day": "Thu",
    "start": "12:00",
    "end": "13:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4091",
    "classNo": "CL04",
    "name": "Biological Sciences Laboratory Course",
    "day": "Thu",
    "start": "14:00",
    "end": "18:00",
    "room": "HKU-LAB"
  },
  {
    "code": "CCST4091",
    "classNo": "CL04",
    "name": "Biological Sciences Laboratory Course",
    "day": "Fri",
    "start": "09:00",
    "end": "11:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4095",
    "classNo": "CL01",
    "name": "Introduction to Climate Science",
    "day": "Mon",
    "start": "16:00",
    "end": "18:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4095",
    "classNo": "CL01",
    "name": "Introduction to Climate Science",
    "day": "Fri",
    "start": "15:00",
    "end": "17:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4098",
    "classNo": "CL02",
    "name": "Introductory Mechanics",
    "day": "Mon",
    "start": "13:00",
    "end": "15:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4098",
    "classNo": "CL02",
    "name": "Introductory Mechanics",
    "day": "Thu",
    "start": "09:00",
    "end": "10:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4099",
    "classNo": "CL05",
    "name": "University Mathematics II",
    "day": "Mon",
    "start": "13:00",
    "end": "15:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4099",
    "classNo": "CL05",
    "name": "University Mathematics II",
    "day": "Wed",
    "start": "12:00",
    "end": "13:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4100",
    "classNo": "CL02",
    "name": "Statistics: Ideas and Concepts",
    "day": "Mon",
    "start": "16:00",
    "end": "18:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4100",
    "classNo": "CL02",
    "name": "Statistics: Ideas and Concepts",
    "day": "Fri",
    "start": "11:00",
    "end": "12:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4101",
    "classNo": "CL04",
    "name": "General Chemistry I",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "HKU-LAB"
  },
  {
    "code": "CCST4101",
    "classNo": "CL04",
    "name": "General Chemistry I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "HKU-LAB"
  },
  {
    "code": "CCST4101",
    "classNo": "CL04",
    "name": "General Chemistry I",
    "day": "Thu",
    "start": "10:00",
    "end": "12:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4110",
    "classNo": "CL02",
    "name": "Multivariable Calculus and Linear Algebra",
    "day": "Mon",
    "start": "09:00",
    "end": "11:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4110",
    "classNo": "CL02",
    "name": "Multivariable Calculus and Linear Algebra",
    "day": "Tue",
    "start": "09:00",
    "end": "10:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4111",
    "classNo": "CL02",
    "name": "General Chemistry II",
    "day": "Mon",
    "start": "11:00",
    "end": "12:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4111",
    "classNo": "CL02",
    "name": "General Chemistry II",
    "day": "Thu",
    "start": "13:00",
    "end": "15:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4112",
    "classNo": "CL05",
    "name": "Nursing Practicum I",
    "day": "Fri",
    "start": "08:30",
    "end": "17:30",
    "room": "TBC"
  },
  {
    "code": "CCST4112",
    "classNo": "CL05",
    "name": "Nursing Practicum I",
    "day": "Sat",
    "start": "08:30",
    "end": "17:30",
    "room": "TBC"
  },
  {
    "code": "CCST4112",
    "classNo": "CL06",
    "name": "Nursing Practicum I",
    "day": "Fri",
    "start": "08:30",
    "end": "17:30",
    "room": "TBC"
  },
  {
    "code": "CCST4112",
    "classNo": "CL06",
    "name": "Nursing Practicum I",
    "day": "Sat",
    "start": "08:30",
    "end": "17:30",
    "room": "TBC"
  },
  {
    "code": "CCST4112",
    "classNo": "CL07",
    "name": "Nursing Practicum I",
    "day": "Fri",
    "start": "08:30",
    "end": "17:30",
    "room": "TBC"
  },
  {
    "code": "CCST4112",
    "classNo": "CL07",
    "name": "Nursing Practicum I",
    "day": "Sat",
    "start": "08:30",
    "end": "17:30",
    "room": "TBC"
  },
  {
    "code": "CCST4112",
    "classNo": "CL08",
    "name": "Nursing Practicum I",
    "day": "Fri",
    "start": "08:30",
    "end": "17:30",
    "room": "TBC"
  },
  {
    "code": "CCST4112",
    "classNo": "CL08",
    "name": "Nursing Practicum I",
    "day": "Sat",
    "start": "08:30",
    "end": "17:30",
    "room": "TBC"
  },
  {
    "code": "CCST4113",
    "classNo": "CL01",
    "name": "Nursing Practicum II",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "TBC"
  },
  {
    "code": "CCST4113",
    "classNo": "CL01",
    "name": "Nursing Practicum II",
    "day": "Sat",
    "start": "17:30",
    "end": "18:50",
    "room": "TBC"
  },
  {
    "code": "CCST4113",
    "classNo": "CL02",
    "name": "Nursing Practicum II",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "TBC"
  },
  {
    "code": "CCST4113",
    "classNo": "CL02",
    "name": "Nursing Practicum II",
    "day": "Sat",
    "start": "17:30",
    "end": "18:50",
    "room": "TBC"
  },
  {
    "code": "CCST4113",
    "classNo": "CL03",
    "name": "Nursing Practicum II",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "TBC"
  },
  {
    "code": "CCST4113",
    "classNo": "CL03",
    "name": "Nursing Practicum II",
    "day": "Sat",
    "start": "17:30",
    "end": "18:50",
    "room": "TBC"
  },
  {
    "code": "CCST4113",
    "classNo": "CL04",
    "name": "Nursing Practicum II",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "TBC"
  },
  {
    "code": "CCST4113",
    "classNo": "CL04",
    "name": "Nursing Practicum II",
    "day": "Sat",
    "start": "17:30",
    "end": "18:50",
    "room": "TBC"
  },
  {
    "code": "CCST4114",
    "classNo": "CL01",
    "name": "Geological Heritage of Hong Kong",
    "day": "Thu",
    "start": "13:00",
    "end": "15:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4114",
    "classNo": "CL01",
    "name": "Geological Heritage of Hong Kong",
    "day": "Sat",
    "start": "09:00",
    "end": "17:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4116",
    "classNo": "CL01",
    "name": "Molecular Biochemistry",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC510"
  },
  {
    "code": "CCST4116",
    "classNo": "CL01",
    "name": "Molecular Biochemistry",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC510"
  },
  {
    "code": "CCST4116",
    "classNo": "CL02",
    "name": "Molecular Biochemistry",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC504"
  },
  {
    "code": "CCST4116",
    "classNo": "CL02",
    "name": "Molecular Biochemistry",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC504"
  },
  {
    "code": "CCST4116",
    "classNo": "CL03",
    "name": "Molecular Biochemistry",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC506"
  },
  {
    "code": "CCST4116",
    "classNo": "CL03",
    "name": "Molecular Biochemistry",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC506"
  },
  {
    "code": "CCST4116",
    "classNo": "CL04",
    "name": "Molecular Biochemistry",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC510"
  },
  {
    "code": "CCST4116",
    "classNo": "CL04",
    "name": "Molecular Biochemistry",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC510"
  },
  {
    "code": "CCST4116",
    "classNo": "CL05",
    "name": "Molecular Biochemistry",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC606"
  },
  {
    "code": "CCST4116",
    "classNo": "CL05",
    "name": "Molecular Biochemistry",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC606"
  },
  {
    "code": "CCST4116",
    "classNo": "CL06",
    "name": "Molecular Biochemistry",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC605"
  },
  {
    "code": "CCST4116",
    "classNo": "CL06",
    "name": "Molecular Biochemistry",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC605"
  },
  {
    "code": "CCST4117",
    "classNo": "CL05",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC903"
  },
  {
    "code": "CCST4117",
    "classNo": "CL05",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC903"
  },
  {
    "code": "CCST4117",
    "classNo": "CL05",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC903"
  },
  {
    "code": "CCST4117",
    "classNo": "CL05",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC903"
  },
  {
    "code": "CCST4117",
    "classNo": "CL06",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4117",
    "classNo": "CL06",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4117",
    "classNo": "CL06",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4117",
    "classNo": "CL06",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4117",
    "classNo": "CL07",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4117",
    "classNo": "CL07",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4117",
    "classNo": "CL07",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4117",
    "classNo": "CL07",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4122",
    "classNo": "CL07",
    "name": "Global Technology",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC506"
  },
  {
    "code": "CCST4122",
    "classNo": "CL07",
    "name": "Global Technology",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC805"
  },
  {
    "code": "CCST4122",
    "classNo": "CL08",
    "name": "Global Technology",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC504"
  },
  {
    "code": "CCST4122",
    "classNo": "CL08",
    "name": "Global Technology",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC805"
  },
  {
    "code": "CCST4122",
    "classNo": "CL09",
    "name": "Global Technology",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC504"
  },
  {
    "code": "CCST4122",
    "classNo": "CL09",
    "name": "Global Technology",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC506"
  },
  {
    "code": "CCST4122",
    "classNo": "CL10",
    "name": "Global Technology",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC805"
  },
  {
    "code": "CCST4122",
    "classNo": "CL10",
    "name": "Global Technology",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC608"
  },
  {
    "code": "CCST4122",
    "classNo": "CL11",
    "name": "Global Technology",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC611"
  },
  {
    "code": "CCST4122",
    "classNo": "CL11",
    "name": "Global Technology",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC508"
  },
  {
    "code": "CCST4122",
    "classNo": "CL12",
    "name": "Global Technology",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC510"
  },
  {
    "code": "CCST4122",
    "classNo": "CL12",
    "name": "Global Technology",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC602"
  },
  {
    "code": "CCST4122",
    "classNo": "CL13",
    "name": "Global Technology",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC602"
  },
  {
    "code": "CCST4122",
    "classNo": "CL13",
    "name": "Global Technology",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC711"
  },
  {
    "code": "CCST4122",
    "classNo": "CL14",
    "name": "Global Technology",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC510"
  },
  {
    "code": "CCST4122",
    "classNo": "CL14",
    "name": "Global Technology",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC602"
  },
  {
    "code": "CCST4122",
    "classNo": "CL15",
    "name": "Global Technology",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE102"
  },
  {
    "code": "CCST4122",
    "classNo": "CL15",
    "name": "Global Technology",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE102"
  },
  {
    "code": "CCST4122",
    "classNo": "CL16",
    "name": "Global Technology",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE102"
  },
  {
    "code": "CCST4122",
    "classNo": "CL16",
    "name": "Global Technology",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE102"
  },
  {
    "code": "CCST4122",
    "classNo": "CL17",
    "name": "Global Technology",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE102"
  },
  {
    "code": "CCST4122",
    "classNo": "CL17",
    "name": "Global Technology",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE102"
  },
  {
    "code": "CCST4122",
    "classNo": "CL18",
    "name": "Global Technology",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC505"
  },
  {
    "code": "CCST4122",
    "classNo": "CL18",
    "name": "Global Technology",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCST4123",
    "classNo": "BT01",
    "name": "Healthy Living",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-602"
  },
  {
    "code": "CCST4123",
    "classNo": "BT02",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-602"
  },
  {
    "code": "CCST4123",
    "classNo": "BT03",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-701"
  },
  {
    "code": "CCST4123",
    "classNo": "BT04",
    "name": "Healthy Living",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC309"
  },
  {
    "code": "CCST4123",
    "classNo": "BT05",
    "name": "Healthy Living",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC309"
  },
  {
    "code": "CCST4123",
    "classNo": "BT06",
    "name": "Healthy Living",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC601"
  },
  {
    "code": "CCST4123",
    "classNo": "BT07",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC601"
  },
  {
    "code": "CCST4123",
    "classNo": "BT08",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC309"
  },
  {
    "code": "CCST4123",
    "classNo": "BT09",
    "name": "Healthy Living",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC616"
  },
  {
    "code": "CCST4123",
    "classNo": "BT10",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC309"
  },
  {
    "code": "CCST4123",
    "classNo": "BT11",
    "name": "Healthy Living",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC309"
  },
  {
    "code": "CCST4123",
    "classNo": "BT12",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC308"
  },
  {
    "code": "CCST4123",
    "classNo": "BT13",
    "name": "Healthy Living",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC309"
  },
  {
    "code": "CCST4123",
    "classNo": "BT14",
    "name": "Healthy Living",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCST4123",
    "classNo": "BT15",
    "name": "Healthy Living",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCST4123",
    "classNo": "BT16",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCST4123",
    "classNo": "BT17",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1201"
  },
  {
    "code": "CCST4123",
    "classNo": "BT18",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1201"
  },
  {
    "code": "CCST4123",
    "classNo": "BT19",
    "name": "Healthy Living",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1201"
  },
  {
    "code": "CCST4123",
    "classNo": "BT20",
    "name": "Healthy Living",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1201"
  },
  {
    "code": "CCST4123",
    "classNo": "BT21",
    "name": "Healthy Living",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1201"
  },
  {
    "code": "CCST4123",
    "classNo": "CT49",
    "name": "Healthy Living",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1004"
  },
  {
    "code": "CCST4123",
    "classNo": "CT50",
    "name": "Healthy Living",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1004"
  },
  {
    "code": "CCST4123",
    "classNo": "CT51",
    "name": "Healthy Living",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1004"
  },
  {
    "code": "CCST4123",
    "classNo": "CT52",
    "name": "Healthy Living",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1004"
  },
  {
    "code": "CCST4123",
    "classNo": "CT53",
    "name": "Healthy Living",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1004"
  },
  {
    "code": "CCST4123",
    "classNo": "CT54",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1004"
  },
  {
    "code": "CCST4123",
    "classNo": "CT55",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC509"
  },
  {
    "code": "CCST4123",
    "classNo": "CT56",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC509"
  },
  {
    "code": "CCST4123",
    "classNo": "CT57",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC509"
  },
  {
    "code": "CCST4123",
    "classNo": "CT58",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC805"
  },
  {
    "code": "CCST4123",
    "classNo": "CT59",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC805"
  },
  {
    "code": "CCST4123",
    "classNo": "CT60",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC509"
  },
  {
    "code": "CCST4123",
    "classNo": "CT61",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC805"
  },
  {
    "code": "CCST4123",
    "classNo": "CT62",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC805"
  },
  {
    "code": "CCST4123",
    "classNo": "CT63",
    "name": "Healthy Living",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1004"
  },
  {
    "code": "CCST4123",
    "classNo": "CT64",
    "name": "Healthy Living",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1004"
  },
  {
    "code": "CCST4123",
    "classNo": "CT65",
    "name": "Healthy Living",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1004"
  },
  {
    "code": "CCST4123",
    "classNo": "CT66",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1004"
  },
  {
    "code": "CCST4123",
    "classNo": "CT67",
    "name": "Healthy Living",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC805"
  },
  {
    "code": "CCST4123",
    "classNo": "CT68",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1004"
  },
  {
    "code": "CCST4123",
    "classNo": "CT69",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1004"
  },
  {
    "code": "CCST4123",
    "classNo": "CT70",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1004"
  },
  {
    "code": "CCST4123",
    "classNo": "CT71",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC602"
  },
  {
    "code": "CCST4123",
    "classNo": "CT72",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC602"
  },
  {
    "code": "CCST4123",
    "classNo": "CT73",
    "name": "Healthy Living",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC805"
  },
  {
    "code": "CCST4123",
    "classNo": "CT74",
    "name": "Healthy Living",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC501"
  },
  {
    "code": "CCST4123",
    "classNo": "CT75",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1004"
  },
  {
    "code": "CCST4123",
    "classNo": "CT76",
    "name": "Healthy Living",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1004"
  },
  {
    "code": "CCST4123",
    "classNo": "CT77",
    "name": "Healthy Living",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1004"
  },
  {
    "code": "CCST4123",
    "classNo": "CT78",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1004"
  },
  {
    "code": "CCST4123",
    "classNo": "CT79",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1004"
  },
  {
    "code": "CCST4123",
    "classNo": "CT80",
    "name": "Healthy Living",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1004"
  },
  {
    "code": "CCST4123",
    "classNo": "CT81",
    "name": "Healthy Living",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1004"
  },
  {
    "code": "CCST4123",
    "classNo": "CT82",
    "name": "Healthy Living",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1004"
  },
  {
    "code": "CCST4123",
    "classNo": "CT83",
    "name": "Healthy Living",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1004"
  },
  {
    "code": "CCST4123",
    "classNo": "CT84",
    "name": "Healthy Living",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1004"
  },
  {
    "code": "CCST4123",
    "classNo": "CT85",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-602"
  },
  {
    "code": "CCST4123",
    "classNo": "CT86",
    "name": "Healthy Living",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-401"
  },
  {
    "code": "CCST4123",
    "classNo": "CT87",
    "name": "Healthy Living",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-101"
  },
  {
    "code": "CCST4123",
    "classNo": "CT88",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-401"
  },
  {
    "code": "CCST4123",
    "classNo": "CT89",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-701"
  },
  {
    "code": "CCST4123",
    "classNo": "CT90",
    "name": "Healthy Living",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCST4123",
    "classNo": "CT91",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-401"
  },
  {
    "code": "CCST4123",
    "classNo": "CT92",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCST4123",
    "classNo": "CT93",
    "name": "Healthy Living",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-101"
  },
  {
    "code": "CCST4123",
    "classNo": "CT94",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCST4123",
    "classNo": "CT95",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCST4123",
    "classNo": "CT96",
    "name": "Healthy Living",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCST4123",
    "classNo": "CT97",
    "name": "Healthy Living",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCST4123",
    "classNo": "CT98",
    "name": "Healthy Living",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-401"
  },
  {
    "code": "CCST4123",
    "classNo": "CT99",
    "name": "Healthy Living",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-401"
  },
  {
    "code": "CCST4125",
    "classNo": "CL01",
    "name": "Introduction to the Earth-life System",
    "day": "Mon",
    "start": "13:00",
    "end": "15:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4125",
    "classNo": "CL01",
    "name": "Introduction to the Earth-life System",
    "day": "Thu",
    "start": "15:00",
    "end": "17:00",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4126",
    "classNo": "CL01",
    "name": "Biogeography",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC803"
  },
  {
    "code": "CCST4126",
    "classNo": "CL01",
    "name": "Biogeography",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC803"
  },
  {
    "code": "CCST4128",
    "classNo": "CL01",
    "name": "Public Health",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC509"
  },
  {
    "code": "CCST4128",
    "classNo": "CL01",
    "name": "Public Health",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC509"
  },
  {
    "code": "CCST4128",
    "classNo": "CL02",
    "name": "Public Health",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC706"
  },
  {
    "code": "CCST4128",
    "classNo": "CL02",
    "name": "Public Health",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC706"
  },
  {
    "code": "CCST4129",
    "classNo": "CL01",
    "name": "Introduction to Chinese Medicine",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC603"
  },
  {
    "code": "CCST4129",
    "classNo": "CL01",
    "name": "Introduction to Chinese Medicine",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC603"
  },
  {
    "code": "CCST4129",
    "classNo": "CL01",
    "name": "Introduction to Chinese Medicine",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC603"
  },
  {
    "code": "CCST4129",
    "classNo": "CL02",
    "name": "Introduction to Chinese Medicine",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC503"
  },
  {
    "code": "CCST4129",
    "classNo": "CL02",
    "name": "Introduction to Chinese Medicine",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC503"
  },
  {
    "code": "CCST4129",
    "classNo": "CL02",
    "name": "Introduction to Chinese Medicine",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC503"
  },
  {
    "code": "CCST4129",
    "classNo": "CL03",
    "name": "Introduction to Chinese Medicine",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC609"
  },
  {
    "code": "CCST4129",
    "classNo": "CL03",
    "name": "Introduction to Chinese Medicine",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC609"
  },
  {
    "code": "CCST4129",
    "classNo": "CL03",
    "name": "Introduction to Chinese Medicine",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC609"
  },
  {
    "code": "CCST4131",
    "classNo": "CL01",
    "name": "Environmental and Earth Science",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC602"
  },
  {
    "code": "CCST4131",
    "classNo": "CL01",
    "name": "Environmental and Earth Science",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC602"
  },
  {
    "code": "CCST4131",
    "classNo": "CL02",
    "name": "Environmental and Earth Science",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC602"
  },
  {
    "code": "CCST4131",
    "classNo": "CL02",
    "name": "Environmental and Earth Science",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC506"
  },
  {
    "code": "CCST4140",
    "classNo": "CL01",
    "name": "Fundamentals of Pharmacology",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC602"
  },
  {
    "code": "CCST4140",
    "classNo": "CL01",
    "name": "Fundamentals of Pharmacology",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC602"
  },
  {
    "code": "CCST4140",
    "classNo": "CL02",
    "name": "Fundamentals of Pharmacology",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC506"
  },
  {
    "code": "CCST4140",
    "classNo": "CL02",
    "name": "Fundamentals of Pharmacology",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC506"
  },
  {
    "code": "CCST4141",
    "classNo": "CL01",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC805"
  },
  {
    "code": "CCST4141",
    "classNo": "CL01",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC805"
  },
  {
    "code": "CCST4141",
    "classNo": "CL01",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4141",
    "classNo": "CL01",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4141",
    "classNo": "CL01",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4141",
    "classNo": "CL01",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4141",
    "classNo": "CL02",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC602"
  },
  {
    "code": "CCST4141",
    "classNo": "CL02",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC602"
  },
  {
    "code": "CCST4141",
    "classNo": "CL02",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4141",
    "classNo": "CL02",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4141",
    "classNo": "CL02",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4141",
    "classNo": "CL02",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4141",
    "classNo": "CL03",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC506"
  },
  {
    "code": "CCST4141",
    "classNo": "CL03",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC506"
  },
  {
    "code": "CCST4141",
    "classNo": "CL03",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4141",
    "classNo": "CL03",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4141",
    "classNo": "CL03",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4141",
    "classNo": "CL03",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4141",
    "classNo": "CL04",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC602"
  },
  {
    "code": "CCST4141",
    "classNo": "CL04",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC602"
  },
  {
    "code": "CCST4141",
    "classNo": "CL04",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4141",
    "classNo": "CL04",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4141",
    "classNo": "CL04",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4141",
    "classNo": "CL04",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4141",
    "classNo": "CL05",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC706"
  },
  {
    "code": "CCST4141",
    "classNo": "CL05",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC706"
  },
  {
    "code": "CCST4141",
    "classNo": "CL05",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4141",
    "classNo": "CL05",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4141",
    "classNo": "CL05",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4141",
    "classNo": "CL05",
    "name": "Introductory Analytical and Inorganic Chemistry",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4142",
    "classNo": "CL01",
    "name": "Environment and Resource Management",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC507"
  },
  {
    "code": "CCST4142",
    "classNo": "CL01",
    "name": "Environment and Resource Management",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC507"
  },
  {
    "code": "CCST4142",
    "classNo": "CL02",
    "name": "Environment and Resource Management",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1201"
  },
  {
    "code": "CCST4142",
    "classNo": "CL02",
    "name": "Environment and Resource Management",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1201"
  },
  {
    "code": "CCST4142",
    "classNo": "CL03",
    "name": "Environment and Resource Management",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCST4142",
    "classNo": "CL03",
    "name": "Environment and Resource Management",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCST4142",
    "classNo": "CL04",
    "name": "Environment and Resource Management",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC509"
  },
  {
    "code": "CCST4142",
    "classNo": "CL04",
    "name": "Environment and Resource Management",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC509"
  },
  {
    "code": "CCST4142",
    "classNo": "CL05",
    "name": "Environment and Resource Management",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC708"
  },
  {
    "code": "CCST4142",
    "classNo": "CL05",
    "name": "Environment and Resource Management",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC708"
  },
  {
    "code": "CCST4142",
    "classNo": "CL06",
    "name": "Environment and Resource Management",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC506"
  },
  {
    "code": "CCST4142",
    "classNo": "CL06",
    "name": "Environment and Resource Management",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC506"
  },
  {
    "code": "CCST4143",
    "classNo": "CL01",
    "name": "Contamination Management",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC403"
  },
  {
    "code": "CCST4143",
    "classNo": "CL01",
    "name": "Contamination Management",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC403"
  },
  {
    "code": "CCST4143",
    "classNo": "CL02",
    "name": "Contamination Management",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC705"
  },
  {
    "code": "CCST4143",
    "classNo": "CL02",
    "name": "Contamination Management",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC705"
  },
  {
    "code": "CCST4143",
    "classNo": "CL03",
    "name": "Contamination Management",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC506"
  },
  {
    "code": "CCST4143",
    "classNo": "CL03",
    "name": "Contamination Management",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC506"
  }
];
