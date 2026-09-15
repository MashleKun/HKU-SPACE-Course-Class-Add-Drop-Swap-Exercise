const allCourses = [
  {
    "code": "CCAH3003",
    "classNo": "CL01",
    "name": "The Process of Design",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC201"
  },
  {
    "code": "CCAH3003",
    "classNo": "CL01",
    "name": "The Process of Design",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC201"
  },
  {
    "code": "CCAH3003",
    "classNo": "CL02",
    "name": "The Process of Design",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC201"
  },
  {
    "code": "CCAH3003",
    "classNo": "CL02",
    "name": "The Process of Design",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC201"
  },
  {
    "code": "CCAH3003",
    "classNo": "CL03",
    "name": "The Process of Design",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC201"
  },
  {
    "code": "CCAH3003",
    "classNo": "CL03",
    "name": "The Process of Design",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC201"
  },
  {
    "code": "CCAH3003",
    "classNo": "CL04",
    "name": "The Process of Design",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC201"
  },
  {
    "code": "CCAH3003",
    "classNo": "CL04",
    "name": "The Process of Design",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC201"
  },
  {
    "code": "CCAH3003",
    "classNo": "CL05",
    "name": "The Process of Design",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC302"
  },
  {
    "code": "CCAH3003",
    "classNo": "CL05",
    "name": "The Process of Design",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC302"
  },
  {
    "code": "CCAH4005",
    "classNo": "CL01",
    "name": "Aesthetics: Art, Beauty, and Contemporary Life",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK603"
  },
  {
    "code": "CCAH4005",
    "classNo": "CL01",
    "name": "Aesthetics: Art, Beauty, and Contemporary Life",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK603"
  },
  {
    "code": "CCAH4005",
    "classNo": "CL02",
    "name": "Aesthetics: Art, Beauty, and Contemporary Life",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK702"
  },
  {
    "code": "CCAH4005",
    "classNo": "CL02",
    "name": "Aesthetics: Art, Beauty, and Contemporary Life",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK702"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL01",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL01",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL02",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL02",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL03",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL03",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL04",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL04",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1002"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL05",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE105+106"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL05",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE105+106"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL06",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC302"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL06",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC302"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL07",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC302"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL07",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC302"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL08",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1203"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL08",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1203"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL09",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1203"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL09",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1203"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL10",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1203"
  },
  {
    "code": "CCAH4012",
    "classNo": "CL10",
    "name": "Arts and Life - A Journey of Appreciation and Creation",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1203"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL01",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC705"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL01",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC705"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL02",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC506"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL02",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC506"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL03",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1004"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL03",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1004"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL04",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE110"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL04",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE110"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL05",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC309"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL05",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC309"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL06",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC607"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL06",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC607"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL07",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC6A5"
  },
  {
    "code": "CCAH4014",
    "classNo": "CL07",
    "name": "Histories, Societies and Identities: Connecting the Past to the Present",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC6A5"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL01",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC608"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL01",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC608"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL02",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC610"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL02",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC610"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL03",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC906"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL03",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC906"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL04",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC201"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL04",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC201"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL05",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE111"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL05",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE111"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL06",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC608"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL06",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC608"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL07",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC302"
  },
  {
    "code": "CCAH4015",
    "classNo": "CL07",
    "name": "Renewal and Regeneration: China Facing the World",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC302"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL01",
    "name": "In Dialogue with Humanity",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC604"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL02",
    "name": "In Dialogue with Humanity",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC204"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL03",
    "name": "In Dialogue with Humanity",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC601"
  },
  {
    "code": "CCAH4016",
    "classNo": "CL04",
    "name": "In Dialogue with Humanity",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC302"
  },
  {
    "code": "CCAH4020",
    "classNo": "CL01",
    "name": "Civilisations, Ideologies and Politics: The Making of Modern Europe since the 1850s",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK701"
  },
  {
    "code": "CCAH4020",
    "classNo": "CL01",
    "name": "Civilisations, Ideologies and Politics: The Making of Modern Europe since the 1850s",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK701"
  },
  {
    "code": "CCAH4020",
    "classNo": "CL02",
    "name": "Civilisations, Ideologies and Politics: The Making of Modern Europe since the 1850s",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK602"
  },
  {
    "code": "CCAH4020",
    "classNo": "CL02",
    "name": "Civilisations, Ideologies and Politics: The Making of Modern Europe since the 1850s",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK602"
  },
  {
    "code": "CCAH4021",
    "classNo": "CL01",
    "name": "Thinking about Artificial Intelligence",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC201"
  },
  {
    "code": "CCAH4021",
    "classNo": "CL02",
    "name": "Thinking about Artificial Intelligence",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE107"
  },
  {
    "code": "CCAH4021",
    "classNo": "CL03",
    "name": "Thinking about Artificial Intelligence",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE111"
  },
  {
    "code": "CCAH4021",
    "classNo": "CL04",
    "name": "Thinking about Artificial Intelligence",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC312"
  },
  {
    "code": "CCAH4021",
    "classNo": "CL05",
    "name": "Thinking about Artificial Intelligence",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCAH4021",
    "classNo": "CL06",
    "name": "Thinking about Artificial Intelligence",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC7A6"
  },
  {
    "code": "CCAH4200",
    "classNo": "CL01",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KECTheatre"
  },
  {
    "code": "CCAH4200",
    "classNo": "CL02",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KECTheatre"
  },
  {
    "code": "CCAH4200",
    "classNo": "CL03",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KECTheatre"
  },
  {
    "code": "CCAH4200",
    "classNo": "CL04",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KECTheatre"
  },
  {
    "code": "CCAH4200",
    "classNo": "CL05",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC704"
  },
  {
    "code": "CCAH4200",
    "classNo": "CL06",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC801"
  },
  {
    "code": "CCAH4200",
    "classNo": "CL07",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC801"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT01",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT02",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT03",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT04",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT05",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT06",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT07",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT08",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT09",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT10",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT11",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT12",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT13",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT14",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT15",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT16",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT17",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT18",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT19",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT20",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT21",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT22",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT23",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT24",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT25",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT26",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT27",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT28",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT29",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK802"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT30",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK802"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT31",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT32",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT33",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK706"
  },
  {
    "code": "CCAH4200",
    "classNo": "CT34",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK706"
  },
  {
    "code": "CCBS4003",
    "classNo": "CL01",
    "name": "Hong Kong Tax Framework",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4003",
    "classNo": "CL01",
    "name": "Hong Kong Tax Framework",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4003",
    "classNo": "CL02",
    "name": "Hong Kong Tax Framework",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4003",
    "classNo": "CL02",
    "name": "Hong Kong Tax Framework",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4003",
    "classNo": "CL03",
    "name": "Hong Kong Tax Framework",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4003",
    "classNo": "CL03",
    "name": "Hong Kong Tax Framework",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4003",
    "classNo": "CL04",
    "name": "Hong Kong Tax Framework",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4003",
    "classNo": "CL04",
    "name": "Hong Kong Tax Framework",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4003",
    "classNo": "CL05",
    "name": "Hong Kong Tax Framework",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4003",
    "classNo": "CL05",
    "name": "Hong Kong Tax Framework",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4003",
    "classNo": "CL06",
    "name": "Hong Kong Tax Framework",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4003",
    "classNo": "CL06",
    "name": "Hong Kong Tax Framework",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4003",
    "classNo": "CL07",
    "name": "Hong Kong Tax Framework",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4003",
    "classNo": "CL07",
    "name": "Hong Kong Tax Framework",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4003",
    "classNo": "CL08",
    "name": "Hong Kong Tax Framework",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4003",
    "classNo": "CL08",
    "name": "Hong Kong Tax Framework",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL01",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL01",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL02",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL02",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL03",
    "name": "Introduction to Financial Accounting",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL03",
    "name": "Introduction to Financial Accounting",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL04",
    "name": "Introduction to Financial Accounting",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL04",
    "name": "Introduction to Financial Accounting",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL05",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL05",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL06",
    "name": "Introduction to Financial Accounting",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL06",
    "name": "Introduction to Financial Accounting",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL07",
    "name": "Introduction to Financial Accounting",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL07",
    "name": "Introduction to Financial Accounting",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL08",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL08",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL09",
    "name": "Introduction to Financial Accounting",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL09",
    "name": "Introduction to Financial Accounting",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL10",
    "name": "Introduction to Financial Accounting",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL10",
    "name": "Introduction to Financial Accounting",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL11",
    "name": "Introduction to Financial Accounting",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL11",
    "name": "Introduction to Financial Accounting",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL12",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL12",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL13",
    "name": "Introduction to Financial Accounting",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL13",
    "name": "Introduction to Financial Accounting",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL14",
    "name": "Introduction to Financial Accounting",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL14",
    "name": "Introduction to Financial Accounting",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL15",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL15",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL16",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL16",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL17",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL17",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL18",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL18",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL19",
    "name": "Introduction to Financial Accounting",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL19",
    "name": "Introduction to Financial Accounting",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL20",
    "name": "Introduction to Financial Accounting",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL20",
    "name": "Introduction to Financial Accounting",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL21",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL21",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL22",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL22",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL23",
    "name": "Introduction to Financial Accounting",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL23",
    "name": "Introduction to Financial Accounting",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL24",
    "name": "Introduction to Financial Accounting",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL24",
    "name": "Introduction to Financial Accounting",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL25",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL25",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL26",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL26",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL27",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL27",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL28",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL28",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL29",
    "name": "Introduction to Financial Accounting",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL29",
    "name": "Introduction to Financial Accounting",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL30",
    "name": "Introduction to Financial Accounting",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL30",
    "name": "Introduction to Financial Accounting",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL31",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL31",
    "name": "Introduction to Financial Accounting",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL32",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL32",
    "name": "Introduction to Financial Accounting",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL33",
    "name": "Introduction to Financial Accounting",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL33",
    "name": "Introduction to Financial Accounting",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL34",
    "name": "Introduction to Financial Accounting",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4005",
    "classNo": "CL34",
    "name": "Introduction to Financial Accounting",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL01",
    "name": "Introduction to Financial Management",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL01",
    "name": "Introduction to Financial Management",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL02",
    "name": "Introduction to Financial Management",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL02",
    "name": "Introduction to Financial Management",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL03",
    "name": "Introduction to Financial Management",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL03",
    "name": "Introduction to Financial Management",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL04",
    "name": "Introduction to Financial Management",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL04",
    "name": "Introduction to Financial Management",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL05",
    "name": "Introduction to Financial Management",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL05",
    "name": "Introduction to Financial Management",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL06",
    "name": "Introduction to Financial Management",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL06",
    "name": "Introduction to Financial Management",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL07",
    "name": "Introduction to Financial Management",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL07",
    "name": "Introduction to Financial Management",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL08",
    "name": "Introduction to Financial Management",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-903"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL08",
    "name": "Introduction to Financial Management",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-903"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL09",
    "name": "Introduction to Financial Management",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL09",
    "name": "Introduction to Financial Management",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL10",
    "name": "Introduction to Financial Management",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL10",
    "name": "Introduction to Financial Management",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL11",
    "name": "Introduction to Financial Management",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL11",
    "name": "Introduction to Financial Management",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL12",
    "name": "Introduction to Financial Management",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL12",
    "name": "Introduction to Financial Management",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL13",
    "name": "Introduction to Financial Management",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL13",
    "name": "Introduction to Financial Management",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL14",
    "name": "Introduction to Financial Management",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL14",
    "name": "Introduction to Financial Management",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL15",
    "name": "Introduction to Financial Management",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL15",
    "name": "Introduction to Financial Management",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL16",
    "name": "Introduction to Financial Management",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL16",
    "name": "Introduction to Financial Management",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL17",
    "name": "Introduction to Financial Management",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL17",
    "name": "Introduction to Financial Management",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL18",
    "name": "Introduction to Financial Management",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL18",
    "name": "Introduction to Financial Management",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL19",
    "name": "Introduction to Financial Management",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL19",
    "name": "Introduction to Financial Management",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL20",
    "name": "Introduction to Financial Management",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL20",
    "name": "Introduction to Financial Management",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL21",
    "name": "Introduction to Financial Management",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL21",
    "name": "Introduction to Financial Management",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL22",
    "name": "Introduction to Financial Management",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL22",
    "name": "Introduction to Financial Management",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL23",
    "name": "Introduction to Financial Management",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL23",
    "name": "Introduction to Financial Management",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL24",
    "name": "Introduction to Financial Management",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4006",
    "classNo": "CL24",
    "name": "Introduction to Financial Management",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL01",
    "name": "Introduction to Management",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL01",
    "name": "Introduction to Management",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL02",
    "name": "Introduction to Management",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL02",
    "name": "Introduction to Management",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL03",
    "name": "Introduction to Management",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-903"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL03",
    "name": "Introduction to Management",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-903"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL04",
    "name": "Introduction to Management",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL04",
    "name": "Introduction to Management",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL05",
    "name": "Introduction to Management",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL05",
    "name": "Introduction to Management",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL06",
    "name": "Introduction to Management",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL06",
    "name": "Introduction to Management",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL07",
    "name": "Introduction to Management",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL07",
    "name": "Introduction to Management",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL08",
    "name": "Introduction to Management",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL08",
    "name": "Introduction to Management",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL09",
    "name": "Introduction to Management",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL09",
    "name": "Introduction to Management",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL10",
    "name": "Introduction to Management",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-806"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL10",
    "name": "Introduction to Management",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-806"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL11",
    "name": "Introduction to Management",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL11",
    "name": "Introduction to Management",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL12",
    "name": "Introduction to Management",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL12",
    "name": "Introduction to Management",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL13",
    "name": "Introduction to Management",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-101"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL13",
    "name": "Introduction to Management",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-101"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL14",
    "name": "Introduction to Management",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL14",
    "name": "Introduction to Management",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL15",
    "name": "Introduction to Management",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL15",
    "name": "Introduction to Management",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL16",
    "name": "Introduction to Management",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL16",
    "name": "Introduction to Management",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL17",
    "name": "Introduction to Management",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL17",
    "name": "Introduction to Management",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL18",
    "name": "Introduction to Management",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-402"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL18",
    "name": "Introduction to Management",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-402"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL19",
    "name": "Introduction to Management",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-101"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL19",
    "name": "Introduction to Management",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-101"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL20",
    "name": "Introduction to Management",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-101"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL20",
    "name": "Introduction to Management",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-101"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL21",
    "name": "Introduction to Management",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL21",
    "name": "Introduction to Management",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL22",
    "name": "Introduction to Management",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL22",
    "name": "Introduction to Management",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL23",
    "name": "Introduction to Management",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL23",
    "name": "Introduction to Management",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL24",
    "name": "Introduction to Management",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-101"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL24",
    "name": "Introduction to Management",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-101"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL25",
    "name": "Introduction to Management",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-401"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL25",
    "name": "Introduction to Management",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-401"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL26",
    "name": "Introduction to Management",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-101"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL26",
    "name": "Introduction to Management",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-101"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL27",
    "name": "Introduction to Management",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCBS4007",
    "classNo": "CL27",
    "name": "Introduction to Management",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL01",
    "name": "Introduction to Marketing",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL01",
    "name": "Introduction to Marketing",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL02",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL02",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL03",
    "name": "Introduction to Marketing",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-806"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL03",
    "name": "Introduction to Marketing",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-806"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL04",
    "name": "Introduction to Marketing",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL04",
    "name": "Introduction to Marketing",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL05",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL05",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL06",
    "name": "Introduction to Marketing",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL06",
    "name": "Introduction to Marketing",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL07",
    "name": "Introduction to Marketing",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL07",
    "name": "Introduction to Marketing",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL08",
    "name": "Introduction to Marketing",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-806"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL08",
    "name": "Introduction to Marketing",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-806"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL09",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL09",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL10",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL10",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL11",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL11",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL12",
    "name": "Introduction to Marketing",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL12",
    "name": "Introduction to Marketing",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL13",
    "name": "Introduction to Marketing",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-402"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL13",
    "name": "Introduction to Marketing",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-402"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL14",
    "name": "Introduction to Marketing",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-101"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL14",
    "name": "Introduction to Marketing",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-101"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL15",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-402"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL15",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-402"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL16",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-402"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL16",
    "name": "Introduction to Marketing",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-402"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL17",
    "name": "Introduction to Marketing",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-402"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL17",
    "name": "Introduction to Marketing",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-402"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL18",
    "name": "Introduction to Marketing",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-402"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL18",
    "name": "Introduction to Marketing",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-402"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL19",
    "name": "Introduction to Marketing",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-401"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL19",
    "name": "Introduction to Marketing",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-401"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL20",
    "name": "Introduction to Marketing",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL20",
    "name": "Introduction to Marketing",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL21",
    "name": "Introduction to Marketing",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-401"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL21",
    "name": "Introduction to Marketing",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-401"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL22",
    "name": "Introduction to Marketing",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL22",
    "name": "Introduction to Marketing",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL23",
    "name": "Introduction to Marketing",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL23",
    "name": "Introduction to Marketing",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL24",
    "name": "Introduction to Marketing",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL24",
    "name": "Introduction to Marketing",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL25",
    "name": "Introduction to Marketing",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-402"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL25",
    "name": "Introduction to Marketing",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-402"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL26",
    "name": "Introduction to Marketing",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCBS4008",
    "classNo": "CL26",
    "name": "Introduction to Marketing",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCBS4009",
    "classNo": "CL01",
    "name": "Microeconomics: Theory and Applications",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4009",
    "classNo": "CL01",
    "name": "Microeconomics: Theory and Applications",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4009",
    "classNo": "CL02",
    "name": "Microeconomics: Theory and Applications",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4009",
    "classNo": "CL02",
    "name": "Microeconomics: Theory and Applications",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4009",
    "classNo": "CL03",
    "name": "Microeconomics: Theory and Applications",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4009",
    "classNo": "CL03",
    "name": "Microeconomics: Theory and Applications",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4009",
    "classNo": "CL04",
    "name": "Microeconomics: Theory and Applications",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4009",
    "classNo": "CL04",
    "name": "Microeconomics: Theory and Applications",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4009",
    "classNo": "CL05",
    "name": "Microeconomics: Theory and Applications",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4009",
    "classNo": "CL05",
    "name": "Microeconomics: Theory and Applications",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL01",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL01",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL02",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL02",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL03",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL03",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL04",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL04",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL05",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-903"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL05",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-903"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL06",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL06",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL07",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL07",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL08",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL08",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL09",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL09",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL10",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL10",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL11",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL11",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL12",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL12",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL13",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4010",
    "classNo": "CL13",
    "name": "Macroeconomics: Theory and Applications",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4021",
    "classNo": "CL01",
    "name": "Consumer Behaviour",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4021",
    "classNo": "CL01",
    "name": "Consumer Behaviour",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4021",
    "classNo": "CL02",
    "name": "Consumer Behaviour",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4021",
    "classNo": "CL02",
    "name": "Consumer Behaviour",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4021",
    "classNo": "CL03",
    "name": "Consumer Behaviour",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4021",
    "classNo": "CL03",
    "name": "Consumer Behaviour",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4021",
    "classNo": "CL04",
    "name": "Consumer Behaviour",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-806"
  },
  {
    "code": "CCBS4021",
    "classNo": "CL04",
    "name": "Consumer Behaviour",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-806"
  },
  {
    "code": "CCBS4021",
    "classNo": "CL05",
    "name": "Consumer Behaviour",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4021",
    "classNo": "CL05",
    "name": "Consumer Behaviour",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4021",
    "classNo": "CL06",
    "name": "Consumer Behaviour",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-101"
  },
  {
    "code": "CCBS4021",
    "classNo": "CL06",
    "name": "Consumer Behaviour",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-101"
  },
  {
    "code": "CCBS4021",
    "classNo": "CL07",
    "name": "Consumer Behaviour",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4021",
    "classNo": "CL07",
    "name": "Consumer Behaviour",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4022",
    "classNo": "CL01",
    "name": "Human Resources Management",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4022",
    "classNo": "CL01",
    "name": "Human Resources Management",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4022",
    "classNo": "CL02",
    "name": "Human Resources Management",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4022",
    "classNo": "CL02",
    "name": "Human Resources Management",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4022",
    "classNo": "CL03",
    "name": "Human Resources Management",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4022",
    "classNo": "CL03",
    "name": "Human Resources Management",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4022",
    "classNo": "CL04",
    "name": "Human Resources Management",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-401"
  },
  {
    "code": "CCBS4022",
    "classNo": "CL04",
    "name": "Human Resources Management",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-401"
  },
  {
    "code": "CCBS4022",
    "classNo": "CL05",
    "name": "Human Resources Management",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4022",
    "classNo": "CL05",
    "name": "Human Resources Management",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4023",
    "classNo": "CL01",
    "name": "Principles of Organisational Behaviour",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4023",
    "classNo": "CL01",
    "name": "Principles of Organisational Behaviour",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4023",
    "classNo": "CL02",
    "name": "Principles of Organisational Behaviour",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4023",
    "classNo": "CL02",
    "name": "Principles of Organisational Behaviour",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4023",
    "classNo": "CL03",
    "name": "Principles of Organisational Behaviour",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4023",
    "classNo": "CL03",
    "name": "Principles of Organisational Behaviour",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4023",
    "classNo": "CL04",
    "name": "Principles of Organisational Behaviour",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4023",
    "classNo": "CL04",
    "name": "Principles of Organisational Behaviour",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-803"
  },
  {
    "code": "CCBS4023",
    "classNo": "CL05",
    "name": "Principles of Organisational Behaviour",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4023",
    "classNo": "CL05",
    "name": "Principles of Organisational Behaviour",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4024",
    "classNo": "CL01",
    "name": "Investments and Portfolio Management",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4024",
    "classNo": "CL01",
    "name": "Investments and Portfolio Management",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4024",
    "classNo": "CL02",
    "name": "Investments and Portfolio Management",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4024",
    "classNo": "CL02",
    "name": "Investments and Portfolio Management",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4024",
    "classNo": "CL03",
    "name": "Investments and Portfolio Management",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4024",
    "classNo": "CL03",
    "name": "Investments and Portfolio Management",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-701"
  },
  {
    "code": "CCBS4024",
    "classNo": "CL04",
    "name": "Investments and Portfolio Management",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4024",
    "classNo": "CL04",
    "name": "Investments and Portfolio Management",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4024",
    "classNo": "CL05",
    "name": "Investments and Portfolio Management",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4024",
    "classNo": "CL05",
    "name": "Investments and Portfolio Management",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4024",
    "classNo": "CL06",
    "name": "Investments and Portfolio Management",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4024",
    "classNo": "CL06",
    "name": "Investments and Portfolio Management",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4024",
    "classNo": "CL07",
    "name": "Investments and Portfolio Management",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4024",
    "classNo": "CL07",
    "name": "Investments and Portfolio Management",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4024",
    "classNo": "CL08",
    "name": "Investments and Portfolio Management",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4024",
    "classNo": "CL08",
    "name": "Investments and Portfolio Management",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-702"
  },
  {
    "code": "CCBS4024",
    "classNo": "CL09",
    "name": "Investments and Portfolio Management",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4024",
    "classNo": "CL09",
    "name": "Investments and Portfolio Management",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4025",
    "classNo": "CL01",
    "name": "Managerial Accounting",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4025",
    "classNo": "CL01",
    "name": "Managerial Accounting",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-804"
  },
  {
    "code": "CCBS4025",
    "classNo": "CL02",
    "name": "Managerial Accounting",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4025",
    "classNo": "CL02",
    "name": "Managerial Accounting",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCBS4025",
    "classNo": "CL03",
    "name": "Managerial Accounting",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4025",
    "classNo": "CL03",
    "name": "Managerial Accounting",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCBS4025",
    "classNo": "CL04",
    "name": "Managerial Accounting",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4025",
    "classNo": "CL04",
    "name": "Managerial Accounting",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4025",
    "classNo": "CL05",
    "name": "Managerial Accounting",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4025",
    "classNo": "CL05",
    "name": "Managerial Accounting",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-602"
  },
  {
    "code": "CCBS4025",
    "classNo": "CL06",
    "name": "Managerial Accounting",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4025",
    "classNo": "CL06",
    "name": "Managerial Accounting",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-604"
  },
  {
    "code": "CCBS4025",
    "classNo": "CL07",
    "name": "Managerial Accounting",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4025",
    "classNo": "CL07",
    "name": "Managerial Accounting",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-705"
  },
  {
    "code": "CCBS4025",
    "classNo": "CL08",
    "name": "Managerial Accounting",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4025",
    "classNo": "CL08",
    "name": "Managerial Accounting",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-704"
  },
  {
    "code": "CCBS4200",
    "classNo": "CL01",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC801"
  },
  {
    "code": "CCBS4200",
    "classNo": "CL02",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC801"
  },
  {
    "code": "CCBS4200",
    "classNo": "CL03",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC801"
  },
  {
    "code": "CCBS4200",
    "classNo": "CL04",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC704"
  },
  {
    "code": "CCBS4200",
    "classNo": "CL05",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC801"
  },
  {
    "code": "CCBS4200",
    "classNo": "CL06",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KECTheatre"
  },
  {
    "code": "CCBS4200",
    "classNo": "CL07",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KECTheatre"
  },
  {
    "code": "CCBS4200",
    "classNo": "CL08",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KECTheatre"
  },
  {
    "code": "CCBS4200",
    "classNo": "CL09",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC801"
  },
  {
    "code": "CCBS4200",
    "classNo": "CL10",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC801"
  },
  {
    "code": "CCBS4200",
    "classNo": "CL11",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC704"
  },
  {
    "code": "CCBS4200",
    "classNo": "CL12",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC801"
  },
  {
    "code": "CCBS4200",
    "classNo": "CL13",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC704"
  },
  {
    "code": "CCBS4200",
    "classNo": "CL14",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC704"
  },
  {
    "code": "CCBS4200",
    "classNo": "CL15",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC704"
  },
  {
    "code": "CCBS4200",
    "classNo": "CL16",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC801"
  },
  {
    "code": "CCBS4200",
    "classNo": "CL17",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC704"
  },
  {
    "code": "CCBS4200",
    "classNo": "CL18",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC704"
  },
  {
    "code": "CCBS4200",
    "classNo": "CL19",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC704"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT01",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT02",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT03",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT04",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT05",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT06",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT07",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT08",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT09",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT10",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT11",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT12",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT13",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-401"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT14",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-401"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT15",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT16",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT17",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT18",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT19",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-402"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT20",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-402"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT21",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT22",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT23",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-806"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT24",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-806"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT25",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-806"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT26",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-806"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT27",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-402"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT28",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-402"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT29",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-402"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT30",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-402"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT31",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT32",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT33",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT34",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT35",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT36",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT37",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT38",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT39",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT40",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-802"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT41",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT42",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT43",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT44",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT45",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT46",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT47",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-401"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT48",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-401"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT49",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT50",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT51",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-401"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT52",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-401"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT53",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT54",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT55",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT56",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT57",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT58",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT59",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT60",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-805"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT61",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT62",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-603"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT63",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT64",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT65",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT66",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT67",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-401"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT68",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-401"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT69",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT70",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-801"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT71",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-401"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT72",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-401"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT73",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT74",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-601"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT75",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-806"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT76",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-806"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT77",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-806"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT78",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-806"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT79",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT80",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT81",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-101"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT82",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-101"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT83",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-402"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT84",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-402"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT85",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-806"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT86",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-806"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT87",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-402"
  },
  {
    "code": "CCBS4200",
    "classNo": "CT88",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-402"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL01",
    "name": "Foundations of Chinese Language",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KED106"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL01",
    "name": "Foundations of Chinese Language",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KED106"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL02",
    "name": "Foundations of Chinese Language",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KED101"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL02",
    "name": "Foundations of Chinese Language",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KED101"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL03",
    "name": "Foundations of Chinese Language",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KED105"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL03",
    "name": "Foundations of Chinese Language",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KED105"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL04",
    "name": "Foundations of Chinese Language",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KED106"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL04",
    "name": "Foundations of Chinese Language",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KED106"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL05",
    "name": "Foundations of Chinese Language",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KED104"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL05",
    "name": "Foundations of Chinese Language",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KED104"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL06",
    "name": "Foundations of Chinese Language",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KED106"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL06",
    "name": "Foundations of Chinese Language",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KED106"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL07",
    "name": "Foundations of Chinese Language",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KED105"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL07",
    "name": "Foundations of Chinese Language",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KED105"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL08",
    "name": "Foundations of Chinese Language",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KED104"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL08",
    "name": "Foundations of Chinese Language",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KED104"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL09",
    "name": "Foundations of Chinese Language",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KED105"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL09",
    "name": "Foundations of Chinese Language",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KED105"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL10",
    "name": "Foundations of Chinese Language",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KED105"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL10",
    "name": "Foundations of Chinese Language",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KED105"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL11",
    "name": "Foundations of Chinese Language",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CTC503"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL11",
    "name": "Foundations of Chinese Language",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CTC503"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL12",
    "name": "Foundations of Chinese Language",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "CTC506"
  },
  {
    "code": "CCCH3001",
    "classNo": "CL12",
    "name": "Foundations of Chinese Language",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "CTC506"
  },
  {
    "code": "CCCH3003",
    "classNo": "CL01",
    "name": "Chinese Language Enhancement",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KED104"
  },
  {
    "code": "CCCH3003",
    "classNo": "CL01",
    "name": "Chinese Language Enhancement",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KED106"
  },
  {
    "code": "CCCH3003",
    "classNo": "CL01",
    "name": "Chinese Language Enhancement",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KED106"
  },
  {
    "code": "CCCH3003",
    "classNo": "CL02",
    "name": "Chinese Language Enhancement",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KED104"
  },
  {
    "code": "CCCH3003",
    "classNo": "CL02",
    "name": "Chinese Language Enhancement",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KED104"
  },
  {
    "code": "CCCH3003",
    "classNo": "CL02",
    "name": "Chinese Language Enhancement",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KED104"
  },
  {
    "code": "CCCH3003",
    "classNo": "CL03",
    "name": "Chinese Language Enhancement",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KED101"
  },
  {
    "code": "CCCH3003",
    "classNo": "CL03",
    "name": "Chinese Language Enhancement",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KED101"
  },
  {
    "code": "CCCH3003",
    "classNo": "CL03",
    "name": "Chinese Language Enhancement",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KED105"
  },
  {
    "code": "CCCH3003",
    "classNo": "CL04",
    "name": "Chinese Language Enhancement",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CTC501"
  },
  {
    "code": "CCCH3003",
    "classNo": "CL04",
    "name": "Chinese Language Enhancement",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CTC501"
  },
  {
    "code": "CCCH3003",
    "classNo": "CL04",
    "name": "Chinese Language Enhancement",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CTC501"
  },
  {
    "code": "CCCH4002",
    "classNo": "CL01",
    "name": "Advanced Chinese for Business and Commerce",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK603"
  },
  {
    "code": "CCCH4002",
    "classNo": "CL01",
    "name": "Advanced Chinese for Business and Commerce",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK603"
  },
  {
    "code": "CCCH4002",
    "classNo": "CL02",
    "name": "Advanced Chinese for Business and Commerce",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK602"
  },
  {
    "code": "CCCH4002",
    "classNo": "CL02",
    "name": "Advanced Chinese for Business and Commerce",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK602"
  },
  {
    "code": "CCCH4002",
    "classNo": "CL03",
    "name": "Advanced Chinese for Business and Commerce",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK602"
  },
  {
    "code": "CCCH4002",
    "classNo": "CL03",
    "name": "Advanced Chinese for Business and Commerce",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK602"
  },
  {
    "code": "CCCH4002",
    "classNo": "CL04",
    "name": "Advanced Chinese for Business and Commerce",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK603"
  },
  {
    "code": "CCCH4002",
    "classNo": "CL04",
    "name": "Advanced Chinese for Business and Commerce",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK603"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL01",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC6A5"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL01",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC6A5"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL02",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC6A5"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL02",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC6A5"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL03",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1202"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL03",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC1202"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL04",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC506"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL04",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC506"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL05",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC6A6"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL05",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC6A6"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL06",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC507"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL06",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC507"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL07",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC6A6"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL07",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC6A6"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL08",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC6A5"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL08",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC6A5"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL09",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC6A6"
  },
  {
    "code": "CCCH4003",
    "classNo": "BL09",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC6A6"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL01",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC906"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL01",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC906"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL02",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC503"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL02",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC503"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL03",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC609"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL03",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC609"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL04",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC907"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL04",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC907"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL05",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC604"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL05",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC604"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL06",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC809"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL06",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC809"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL07",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC610"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL07",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC610"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL08",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC809"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL08",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC809"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL09",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC610"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL09",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC610"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL10",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC809"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL10",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC809"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL11",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC806"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL11",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC806"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL12",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC204"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL12",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC204"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL13",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC610"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL13",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC610"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL14",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC907"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL14",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC907"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL15",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC711"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL15",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC711"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL16",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC201"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL16",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC201"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL17",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC201"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL17",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC201"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL18",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC906"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL18",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC906"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL19",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC907"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL19",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC907"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL20",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC610"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL20",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC610"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL21",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC504"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL21",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC504"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL22",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC708"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL22",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC708"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL23",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC906"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL23",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC906"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL24",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC610"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL24",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC610"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL25",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC809"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL25",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC809"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL26",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC503"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL26",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC503"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL27",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC808"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL27",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC808"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL28",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC808"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL28",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC808"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL29",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC809"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL29",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC809"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL30",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC502"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL30",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC502"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL31",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC705"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL31",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC705"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL32",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC705"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL32",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC705"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL33",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC610"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL33",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC610"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL34",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC610"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL34",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC610"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL35",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC907"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL35",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC907"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL36",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC711"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL36",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC711"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL37",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC711"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL37",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC711"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL38",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC907"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL38",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC907"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL39",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC906"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL39",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC906"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL40",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC710"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL40",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC710"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL41",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC907"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL41",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC907"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL42",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC610"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL42",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC610"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL43",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC808"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL43",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC808"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL44",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL44",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL45",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-806"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL45",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-806"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL46",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-801"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL46",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-801"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL47",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-802"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL47",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-802"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL48",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-805"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL48",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-805"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL49",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-801"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL49",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-801"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL50",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-603"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL50",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-603"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL51",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-603"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL51",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-603"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL52",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-806"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL52",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-806"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL53",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-601"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL53",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-601"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL54",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL54",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL55",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-801"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL55",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-801"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL56",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-101"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL56",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-101"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL57",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-805"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL57",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-805"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL58",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-101"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL58",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-101"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL59",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-603"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL59",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-603"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL60",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-806"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL60",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-806"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL61",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-701"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL61",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-701"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL62",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL62",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL63",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL63",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL64",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-402"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL64",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-402"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL65",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-402"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL65",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-402"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL66",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-701"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL66",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-701"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL67",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-805"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL67",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-805"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL68",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC309"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL68",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC309"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL69",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC304"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL69",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC304"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL70",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CTC503"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL70",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CTC503"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL71",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC609"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL71",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC609"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL72",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CTC503"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL72",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CTC503"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL73",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC609"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL73",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC609"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL74",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC603"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL74",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC603"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL75",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC609"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL75",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC609"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL76",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC609"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL76",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC609"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL77",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC609"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL77",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC609"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL78",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC609"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL78",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC609"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL79",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC608"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL79",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC608"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL80",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC303"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL80",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC303"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL81",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC608"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL81",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC608"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL82",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC608"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL82",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC608"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL83",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC608"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL83",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC608"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL84",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC6A6"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL84",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC6A6"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL85",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC6A5"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL85",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC6A5"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL86",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1202"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL86",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1202"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL87",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC6A6"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL87",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC6A6"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL88",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1201"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL88",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1201"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL89",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC505"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL89",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC505"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL90",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC6A6"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL90",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC6A6"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL91",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC507"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL91",
    "name": "Advanced Chinese Language",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC507"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL92",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC502"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL92",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC502"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL93",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC6A3"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL93",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC6A3"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL94",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC6A3"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL94",
    "name": "Advanced Chinese Language",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC6A3"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL95",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC6A3"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL95",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC6A3"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL96",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL96",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL97",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC6A3"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL97",
    "name": "Advanced Chinese Language",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC6A3"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL98",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC6A3"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL98",
    "name": "Advanced Chinese Language",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC6A3"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL99",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC8A3"
  },
  {
    "code": "CCCH4003",
    "classNo": "CL99",
    "name": "Advanced Chinese Language",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC8A3"
  },
  {
    "code": "CCCH4005",
    "classNo": "CL01",
    "name": "Classical Chinese Language",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK603"
  },
  {
    "code": "CCCH4005",
    "classNo": "CL01",
    "name": "Classical Chinese Language",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK603"
  },
  {
    "code": "CCCH4005",
    "classNo": "CL02",
    "name": "Classical Chinese Language",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK603"
  },
  {
    "code": "CCCH4005",
    "classNo": "CL02",
    "name": "Classical Chinese Language",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK603"
  },
  {
    "code": "CCCH4005",
    "classNo": "CL03",
    "name": "Classical Chinese Language",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK603"
  },
  {
    "code": "CCCH4005",
    "classNo": "CL03",
    "name": "Classical Chinese Language",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK603"
  },
  {
    "code": "CCCH4005",
    "classNo": "CL04",
    "name": "Classical Chinese Language",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK801"
  },
  {
    "code": "CCCH4005",
    "classNo": "CL04",
    "name": "Classical Chinese Language",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK801"
  },
  {
    "code": "CCCH4007",
    "classNo": "CL01",
    "name": "Introduction to Chinese Literary Criticism",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK602"
  },
  {
    "code": "CCCH4007",
    "classNo": "CL01",
    "name": "Introduction to Chinese Literary Criticism",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK602"
  },
  {
    "code": "CCCH4007",
    "classNo": "CL02",
    "name": "Introduction to Chinese Literary Criticism",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK603"
  },
  {
    "code": "CCCH4007",
    "classNo": "CL02",
    "name": "Introduction to Chinese Literary Criticism",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK603"
  },
  {
    "code": "CCCH4007",
    "classNo": "CL03",
    "name": "Introduction to Chinese Literary Criticism",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK603"
  },
  {
    "code": "CCCH4007",
    "classNo": "CL03",
    "name": "Introduction to Chinese Literary Criticism",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK603"
  },
  {
    "code": "CCCH4007",
    "classNo": "CL04",
    "name": "Introduction to Chinese Literary Criticism",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK602"
  },
  {
    "code": "CCCH4007",
    "classNo": "CL04",
    "name": "Introduction to Chinese Literary Criticism",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK602"
  },
  {
    "code": "CCCH4007",
    "classNo": "CL05",
    "name": "Introduction to Chinese Literary Criticism",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK701"
  },
  {
    "code": "CCCH4007",
    "classNo": "CL05",
    "name": "Introduction to Chinese Literary Criticism",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK701"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL01",
    "name": "Introduction to Chinese Literature",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK602"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL01",
    "name": "Introduction to Chinese Literature",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK602"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL02",
    "name": "Introduction to Chinese Literature",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK702"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL02",
    "name": "Introduction to Chinese Literature",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK702"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL03",
    "name": "Introduction to Chinese Literature",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK701"
  },
  {
    "code": "CCCH4008",
    "classNo": "CL03",
    "name": "Introduction to Chinese Literature",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK701"
  },
  {
    "code": "CCCH4009",
    "classNo": "CL01",
    "name": "Studies of Modern and Contemporary Chinese Literature",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK602"
  },
  {
    "code": "CCCH4009",
    "classNo": "CL01",
    "name": "Studies of Modern and Contemporary Chinese Literature",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK602"
  },
  {
    "code": "CCCH4009",
    "classNo": "CL02",
    "name": "Studies of Modern and Contemporary Chinese Literature",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK602"
  },
  {
    "code": "CCCH4009",
    "classNo": "CL02",
    "name": "Studies of Modern and Contemporary Chinese Literature",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK602"
  },
  {
    "code": "CCCH4009",
    "classNo": "CL03",
    "name": "Studies of Modern and Contemporary Chinese Literature",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK603"
  },
  {
    "code": "CCCH4009",
    "classNo": "CL03",
    "name": "Studies of Modern and Contemporary Chinese Literature",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK603"
  },
  {
    "code": "CCCH4009",
    "classNo": "CL04",
    "name": "Studies of Modern and Contemporary Chinese Literature",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK702"
  },
  {
    "code": "CCCH4009",
    "classNo": "CL04",
    "name": "Studies of Modern and Contemporary Chinese Literature",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK702"
  },
  {
    "code": "CCCH4009",
    "classNo": "CL05",
    "name": "Studies of Modern and Contemporary Chinese Literature",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK603"
  },
  {
    "code": "CCCH4009",
    "classNo": "CL05",
    "name": "Studies of Modern and Contemporary Chinese Literature",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK603"
  },
  {
    "code": "CCCH4012",
    "classNo": "CL01",
    "name": "Practical Chinese",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC603"
  },
  {
    "code": "CCCH4012",
    "classNo": "CL01",
    "name": "Practical Chinese",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC603"
  },
  {
    "code": "CCCH4012",
    "classNo": "CL02",
    "name": "Practical Chinese",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC906"
  },
  {
    "code": "CCCH4012",
    "classNo": "CL02",
    "name": "Practical Chinese",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC906"
  },
  {
    "code": "CCCH4012",
    "classNo": "CL03",
    "name": "Practical Chinese",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC809"
  },
  {
    "code": "CCCH4012",
    "classNo": "CL03",
    "name": "Practical Chinese",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC809"
  },
  {
    "code": "CCCH4012",
    "classNo": "CL04",
    "name": "Practical Chinese",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC808"
  },
  {
    "code": "CCCH4012",
    "classNo": "CL04",
    "name": "Practical Chinese",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC808"
  },
  {
    "code": "CCCH4013",
    "classNo": "CL01",
    "name": "Reading and Writing in Chinese",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK702"
  },
  {
    "code": "CCCH4013",
    "classNo": "CL01",
    "name": "Reading and Writing in Chinese",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK702"
  },
  {
    "code": "CCCH4013",
    "classNo": "CL02",
    "name": "Reading and Writing in Chinese",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK603"
  },
  {
    "code": "CCCH4013",
    "classNo": "CL02",
    "name": "Reading and Writing in Chinese",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK603"
  },
  {
    "code": "CCCH4013",
    "classNo": "CL03",
    "name": "Reading and Writing in Chinese",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK603"
  },
  {
    "code": "CCCH4013",
    "classNo": "CL03",
    "name": "Reading and Writing in Chinese",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK603"
  },
  {
    "code": "CCCH4013",
    "classNo": "CL04",
    "name": "Reading and Writing in Chinese",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK602"
  },
  {
    "code": "CCCH4013",
    "classNo": "CL04",
    "name": "Reading and Writing in Chinese",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK602"
  },
  {
    "code": "CCCH4013",
    "classNo": "CL05",
    "name": "Reading and Writing in Chinese",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK603"
  },
  {
    "code": "CCCH4013",
    "classNo": "CL05",
    "name": "Reading and Writing in Chinese",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK603"
  },
  {
    "code": "CCCH4013",
    "classNo": "CL06",
    "name": "Reading and Writing in Chinese",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK602"
  },
  {
    "code": "CCCH4013",
    "classNo": "CL06",
    "name": "Reading and Writing in Chinese",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK602"
  },
  {
    "code": "CCCH4014",
    "classNo": "CL01",
    "name": "Studies of Classical Texts and Culture",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK702"
  },
  {
    "code": "CCCH4014",
    "classNo": "CL01",
    "name": "Studies of Classical Texts and Culture",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK702"
  },
  {
    "code": "CCCH4014",
    "classNo": "CL02",
    "name": "Studies of Classical Texts and Culture",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK603"
  },
  {
    "code": "CCCH4014",
    "classNo": "CL02",
    "name": "Studies of Classical Texts and Culture",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK603"
  },
  {
    "code": "CCCH4014",
    "classNo": "CL03",
    "name": "Studies of Classical Texts and Culture",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK702"
  },
  {
    "code": "CCCH4014",
    "classNo": "CL03",
    "name": "Studies of Classical Texts and Culture",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK702"
  },
  {
    "code": "CCCH4014",
    "classNo": "CL04",
    "name": "Studies of Classical Texts and Culture",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK702"
  },
  {
    "code": "CCCH4014",
    "classNo": "CL04",
    "name": "Studies of Classical Texts and Culture",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK702"
  },
  {
    "code": "CCCH4014",
    "classNo": "CL05",
    "name": "Studies of Classical Texts and Culture",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK602"
  },
  {
    "code": "CCCH4014",
    "classNo": "CL05",
    "name": "Studies of Classical Texts and Culture",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK602"
  },
  {
    "code": "CCCH4019",
    "classNo": "CL01",
    "name": "Professional Putonghua",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK803"
  },
  {
    "code": "CCCH4019",
    "classNo": "CL01",
    "name": "Professional Putonghua",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK803"
  },
  {
    "code": "CCCH4021",
    "classNo": "CL01",
    "name": "Chinese Culture and Society",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC504"
  },
  {
    "code": "CCCH4021",
    "classNo": "CL01",
    "name": "Chinese Culture and Society",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC504"
  },
  {
    "code": "CCCH4022",
    "classNo": "CL01",
    "name": "Language, Society and Culture",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK801"
  },
  {
    "code": "CCCH4022",
    "classNo": "CL01",
    "name": "Language, Society and Culture",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK801"
  },
  {
    "code": "CCCH4022",
    "classNo": "CL02",
    "name": "Language, Society and Culture",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK702"
  },
  {
    "code": "CCCH4022",
    "classNo": "CL02",
    "name": "Language, Society and Culture",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK702"
  },
  {
    "code": "CCCH4022",
    "classNo": "CL03",
    "name": "Language, Society and Culture",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK702"
  },
  {
    "code": "CCCH4022",
    "classNo": "CL03",
    "name": "Language, Society and Culture",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK702"
  },
  {
    "code": "CCCH4022",
    "classNo": "CL04",
    "name": "Language, Society and Culture",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK702"
  },
  {
    "code": "CCCH4022",
    "classNo": "CL04",
    "name": "Language, Society and Culture",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK702"
  },
  {
    "code": "CCCU4001",
    "classNo": "CL01",
    "name": "Introduction to Film Studies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC609"
  },
  {
    "code": "CCCU4001",
    "classNo": "CL01",
    "name": "Introduction to Film Studies",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC609"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL01",
    "name": "Understanding Culture and Everyday Life",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC8A3"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL01",
    "name": "Understanding Culture and Everyday Life",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC8A3"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL02",
    "name": "Understanding Culture and Everyday Life",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL02",
    "name": "Understanding Culture and Everyday Life",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL03",
    "name": "Understanding Culture and Everyday Life",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL03",
    "name": "Understanding Culture and Everyday Life",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL04",
    "name": "Understanding Culture and Everyday Life",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC8A3"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL04",
    "name": "Understanding Culture and Everyday Life",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC8A3"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL05",
    "name": "Understanding Culture and Everyday Life",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC503"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL05",
    "name": "Understanding Culture and Everyday Life",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC503"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL06",
    "name": "Understanding Culture and Everyday Life",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC503"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL06",
    "name": "Understanding Culture and Everyday Life",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC503"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL07",
    "name": "Understanding Culture and Everyday Life",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL07",
    "name": "Understanding Culture and Everyday Life",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL08",
    "name": "Understanding Culture and Everyday Life",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC8A3"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL08",
    "name": "Understanding Culture and Everyday Life",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC8A3"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL09",
    "name": "Understanding Culture and Everyday Life",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC8A3"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL09",
    "name": "Understanding Culture and Everyday Life",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC8A3"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL10",
    "name": "Understanding Culture and Everyday Life",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC502"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL10",
    "name": "Understanding Culture and Everyday Life",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC502"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL11",
    "name": "Understanding Culture and Everyday Life",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL11",
    "name": "Understanding Culture and Everyday Life",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL12",
    "name": "Understanding Culture and Everyday Life",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL12",
    "name": "Understanding Culture and Everyday Life",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC1202"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL13",
    "name": "Understanding Culture and Everyday Life",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC8A3"
  },
  {
    "code": "CCCU4003",
    "classNo": "CL13",
    "name": "Understanding Culture and Everyday Life",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC8A3"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL01",
    "name": "The Journey of Self-Discovery",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC502"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL01",
    "name": "The Journey of Self-Discovery",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC502"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL02",
    "name": "The Journey of Self-Discovery",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL02",
    "name": "The Journey of Self-Discovery",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL03",
    "name": "The Journey of Self-Discovery",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL03",
    "name": "The Journey of Self-Discovery",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL04",
    "name": "The Journey of Self-Discovery",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC11A3"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL04",
    "name": "The Journey of Self-Discovery",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL05",
    "name": "The Journey of Self-Discovery",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC11A3"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL05",
    "name": "The Journey of Self-Discovery",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL06",
    "name": "The Journey of Self-Discovery",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL06",
    "name": "The Journey of Self-Discovery",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL07",
    "name": "The Journey of Self-Discovery",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL07",
    "name": "The Journey of Self-Discovery",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL08",
    "name": "The Journey of Self-Discovery",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL08",
    "name": "The Journey of Self-Discovery",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL09",
    "name": "The Journey of Self-Discovery",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL09",
    "name": "The Journey of Self-Discovery",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL10",
    "name": "The Journey of Self-Discovery",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL10",
    "name": "The Journey of Self-Discovery",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL11",
    "name": "The Journey of Self-Discovery",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL11",
    "name": "The Journey of Self-Discovery",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL12",
    "name": "The Journey of Self-Discovery",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL12",
    "name": "The Journey of Self-Discovery",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL13",
    "name": "The Journey of Self-Discovery",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL13",
    "name": "The Journey of Self-Discovery",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1205"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL14",
    "name": "The Journey of Self-Discovery",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC8A3"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL14",
    "name": "The Journey of Self-Discovery",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC8A3"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL15",
    "name": "The Journey of Self-Discovery",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC709"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL15",
    "name": "The Journey of Self-Discovery",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC709"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL16",
    "name": "The Journey of Self-Discovery",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC806"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL16",
    "name": "The Journey of Self-Discovery",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC806"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL17",
    "name": "The Journey of Self-Discovery",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL17",
    "name": "The Journey of Self-Discovery",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL18",
    "name": "The Journey of Self-Discovery",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL18",
    "name": "The Journey of Self-Discovery",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL19",
    "name": "The Journey of Self-Discovery",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL19",
    "name": "The Journey of Self-Discovery",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL20",
    "name": "The Journey of Self-Discovery",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL20",
    "name": "The Journey of Self-Discovery",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL21",
    "name": "The Journey of Self-Discovery",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL21",
    "name": "The Journey of Self-Discovery",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL22",
    "name": "The Journey of Self-Discovery",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC801"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL22",
    "name": "The Journey of Self-Discovery",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC801"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL23",
    "name": "The Journey of Self-Discovery",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC704"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL23",
    "name": "The Journey of Self-Discovery",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC704"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL24",
    "name": "The Journey of Self-Discovery",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC503"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL24",
    "name": "The Journey of Self-Discovery",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC503"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL25",
    "name": "The Journey of Self-Discovery",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC604"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL25",
    "name": "The Journey of Self-Discovery",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC604"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL26",
    "name": "The Journey of Self-Discovery",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC503"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL26",
    "name": "The Journey of Self-Discovery",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC503"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL27",
    "name": "The Journey of Self-Discovery",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC503"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL27",
    "name": "The Journey of Self-Discovery",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC503"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL28",
    "name": "The Journey of Self-Discovery",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL28",
    "name": "The Journey of Self-Discovery",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL29",
    "name": "The Journey of Self-Discovery",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL29",
    "name": "The Journey of Self-Discovery",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC507"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL30",
    "name": "The Journey of Self-Discovery",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC604"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL30",
    "name": "The Journey of Self-Discovery",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC604"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL31",
    "name": "The Journey of Self-Discovery",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC801"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL31",
    "name": "The Journey of Self-Discovery",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC801"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL32",
    "name": "The Journey of Self-Discovery",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC704"
  },
  {
    "code": "CCCU4007",
    "classNo": "CL32",
    "name": "The Journey of Self-Discovery",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC704"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL01",
    "name": "Introduction to Media and Communications",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL01",
    "name": "Introduction to Media and Communications",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL02",
    "name": "Introduction to Media and Communications",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC8A3"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL02",
    "name": "Introduction to Media and Communications",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC8A3"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL03",
    "name": "Introduction to Media and Communications",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC8A3"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL03",
    "name": "Introduction to Media and Communications",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC8A3"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL04",
    "name": "Introduction to Media and Communications",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC806"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL04",
    "name": "Introduction to Media and Communications",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC806"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL05",
    "name": "Introduction to Media and Communications",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK701"
  },
  {
    "code": "CCCU4013",
    "classNo": "CL05",
    "name": "Introduction to Media and Communications",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK701"
  },
  {
    "code": "CCCU4014",
    "classNo": "CL01",
    "name": "Effective Public Relations Campaigns",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4014",
    "classNo": "CL01",
    "name": "Effective Public Relations Campaigns",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4018",
    "classNo": "CL01",
    "name": "Fundamentals of Journalism",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4018",
    "classNo": "CL01",
    "name": "Fundamentals of Journalism",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4018",
    "classNo": "CL02",
    "name": "Fundamentals of Journalism",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4018",
    "classNo": "CL02",
    "name": "Fundamentals of Journalism",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4019",
    "classNo": "CL01",
    "name": "Advertising: Principles and Practice",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4019",
    "classNo": "CL01",
    "name": "Advertising: Principles and Practice",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4019",
    "classNo": "CL02",
    "name": "Advertising: Principles and Practice",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4019",
    "classNo": "CL02",
    "name": "Advertising: Principles and Practice",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4019",
    "classNo": "CL03",
    "name": "Advertising: Principles and Practice",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4019",
    "classNo": "CL03",
    "name": "Advertising: Principles and Practice",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4019",
    "classNo": "CL04",
    "name": "Advertising: Principles and Practice",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4019",
    "classNo": "CL04",
    "name": "Advertising: Principles and Practice",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4019",
    "classNo": "CL05",
    "name": "Advertising: Principles and Practice",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-805"
  },
  {
    "code": "CCCU4019",
    "classNo": "CL05",
    "name": "Advertising: Principles and Practice",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-805"
  },
  {
    "code": "CCCU4019",
    "classNo": "CL06",
    "name": "Advertising: Principles and Practice",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-801"
  },
  {
    "code": "CCCU4019",
    "classNo": "CL06",
    "name": "Advertising: Principles and Practice",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-801"
  },
  {
    "code": "CCCU4019",
    "classNo": "CL07",
    "name": "Advertising: Principles and Practice",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-806"
  },
  {
    "code": "CCCU4019",
    "classNo": "CL07",
    "name": "Advertising: Principles and Practice",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-806"
  },
  {
    "code": "CCCU4019",
    "classNo": "CL08",
    "name": "Advertising: Principles and Practice",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCCU4019",
    "classNo": "CL08",
    "name": "Advertising: Principles and Practice",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCCU4019",
    "classNo": "CL09",
    "name": "Advertising: Principles and Practice",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-802"
  },
  {
    "code": "CCCU4019",
    "classNo": "CL09",
    "name": "Advertising: Principles and Practice",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-802"
  },
  {
    "code": "CCCU4019",
    "classNo": "CL10",
    "name": "Advertising: Principles and Practice",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-804"
  },
  {
    "code": "CCCU4019",
    "classNo": "CL10",
    "name": "Advertising: Principles and Practice",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-804"
  },
  {
    "code": "CCCU4019",
    "classNo": "CL11",
    "name": "Advertising: Principles and Practice",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1006"
  },
  {
    "code": "CCCU4019",
    "classNo": "CL11",
    "name": "Advertising: Principles and Practice",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1006"
  },
  {
    "code": "CCCU4020",
    "classNo": "CL01",
    "name": "Gender and Society",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC705"
  },
  {
    "code": "CCCU4020",
    "classNo": "CL01",
    "name": "Gender and Society",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC705"
  },
  {
    "code": "CCCU4020",
    "classNo": "CL02",
    "name": "Gender and Society",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC8A3"
  },
  {
    "code": "CCCU4020",
    "classNo": "CL02",
    "name": "Gender and Society",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC8A3"
  },
  {
    "code": "CCCU4020",
    "classNo": "CL03",
    "name": "Gender and Society",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC8A3"
  },
  {
    "code": "CCCU4020",
    "classNo": "CL03",
    "name": "Gender and Society",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC8A3"
  },
  {
    "code": "CCCU4024",
    "classNo": "CL01",
    "name": "Principles of Public Relations and Corporate Communications",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4024",
    "classNo": "CL01",
    "name": "Principles of Public Relations and Corporate Communications",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4024",
    "classNo": "CL02",
    "name": "Principles of Public Relations and Corporate Communications",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCCU4024",
    "classNo": "CL02",
    "name": "Principles of Public Relations and Corporate Communications",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC11A3"
  },
  {
    "code": "CCCU4024",
    "classNo": "CL03",
    "name": "Principles of Public Relations and Corporate Communications",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC8A3"
  },
  {
    "code": "CCCU4024",
    "classNo": "CL03",
    "name": "Principles of Public Relations and Corporate Communications",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC8A3"
  },
  {
    "code": "CCCU4031",
    "classNo": "CL01",
    "name": "Cultural Spaces: Examining and Enabling People and Place",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1203"
  },
  {
    "code": "CCCU4031",
    "classNo": "CL01",
    "name": "Cultural Spaces: Examining and Enabling People and Place",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1203"
  },
  {
    "code": "CCCU4031",
    "classNo": "CL02",
    "name": "Cultural Spaces: Examining and Enabling People and Place",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1203"
  },
  {
    "code": "CCCU4031",
    "classNo": "CL02",
    "name": "Cultural Spaces: Examining and Enabling People and Place",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1203"
  },
  {
    "code": "CCCU4031",
    "classNo": "CL03",
    "name": "Cultural Spaces: Examining and Enabling People and Place",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1203"
  },
  {
    "code": "CCCU4031",
    "classNo": "CL03",
    "name": "Cultural Spaces: Examining and Enabling People and Place",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1203"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL01",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC705"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL01",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC705"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL02",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC708"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL02",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC708"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL03",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC708"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL03",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC708"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL04",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE107"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL04",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE107"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL05",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE108"
  },
  {
    "code": "CCCU4038",
    "classNo": "CL05",
    "name": "Global and Local Cultures: Perspectives and Lenses to Examine Communities and Self",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE108"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL01",
    "name": "Intercultural Communication",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC604"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL01",
    "name": "Intercultural Communication",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC604"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL02",
    "name": "Intercultural Communication",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC709"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL02",
    "name": "Intercultural Communication",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC709"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL03",
    "name": "Intercultural Communication",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC604"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL03",
    "name": "Intercultural Communication",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC604"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL04",
    "name": "Intercultural Communication",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC601"
  },
  {
    "code": "CCCU4039",
    "classNo": "CL04",
    "name": "Intercultural Communication",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC601"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL01",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC507"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL01",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC507"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL02",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC705"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL02",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC705"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL03",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC806"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL03",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC806"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL04",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC604"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL04",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC604"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL05",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC708"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL05",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC708"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL06",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC604"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL06",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC604"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL07",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC708"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL07",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC708"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL08",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC806"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL08",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC806"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL09",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC507"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL09",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC507"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL10",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC806"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL10",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC806"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL11",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC608"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL11",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC608"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL12",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-804"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL12",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-804"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL13",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL13",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL14",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1005"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL14",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1005"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL15",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-803"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL15",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-803"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL16",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-805"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL16",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-805"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL17",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-701"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL17",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-701"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL18",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-701"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL18",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-701"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL19",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-701"
  },
  {
    "code": "CCCU4040",
    "classNo": "CL19",
    "name": "Exploring Hong Kong through Film and Popular Music",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-701"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL01",
    "name": "Representation of People in Popular Art Forms",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC609"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL01",
    "name": "Representation of People in Popular Art Forms",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC609"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL02",
    "name": "Representation of People in Popular Art Forms",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC311"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL02",
    "name": "Representation of People in Popular Art Forms",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC311"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL03",
    "name": "Representation of People in Popular Art Forms",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC314"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL03",
    "name": "Representation of People in Popular Art Forms",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC314"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL04",
    "name": "Representation of People in Popular Art Forms",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC315"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL04",
    "name": "Representation of People in Popular Art Forms",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC315"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL05",
    "name": "Representation of People in Popular Art Forms",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC806"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL05",
    "name": "Representation of People in Popular Art Forms",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC806"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL06",
    "name": "Representation of People in Popular Art Forms",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC609"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL06",
    "name": "Representation of People in Popular Art Forms",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC609"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL07",
    "name": "Representation of People in Popular Art Forms",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC508"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL07",
    "name": "Representation of People in Popular Art Forms",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC508"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL08",
    "name": "Representation of People in Popular Art Forms",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC709"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL08",
    "name": "Representation of People in Popular Art Forms",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC709"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL09",
    "name": "Representation of People in Popular Art Forms",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL09",
    "name": "Representation of People in Popular Art Forms",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL10",
    "name": "Representation of People in Popular Art Forms",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC11A3"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL10",
    "name": "Representation of People in Popular Art Forms",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL11",
    "name": "Representation of People in Popular Art Forms",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4041",
    "classNo": "CL11",
    "name": "Representation of People in Popular Art Forms",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4042",
    "classNo": "CL01",
    "name": "Researching Culture and Media",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC11A3"
  },
  {
    "code": "CCCU4042",
    "classNo": "CL01",
    "name": "Researching Culture and Media",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCCU4042",
    "classNo": "CL02",
    "name": "Researching Culture and Media",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC8A3"
  },
  {
    "code": "CCCU4042",
    "classNo": "CL02",
    "name": "Researching Culture and Media",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC8A3"
  },
  {
    "code": "CCCU4042",
    "classNo": "CL03",
    "name": "Researching Culture and Media",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4042",
    "classNo": "CL03",
    "name": "Researching Culture and Media",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4042",
    "classNo": "CL04",
    "name": "Researching Culture and Media",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4042",
    "classNo": "CL04",
    "name": "Researching Culture and Media",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4042",
    "classNo": "CL05",
    "name": "Researching Culture and Media",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1203"
  },
  {
    "code": "CCCU4042",
    "classNo": "CL05",
    "name": "Researching Culture and Media",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1203"
  },
  {
    "code": "CCCU4043",
    "classNo": "CL01",
    "name": "Visual Culture",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4043",
    "classNo": "CL01",
    "name": "Visual Culture",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4043",
    "classNo": "CL02",
    "name": "Visual Culture",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1203"
  },
  {
    "code": "CCCU4043",
    "classNo": "CL02",
    "name": "Visual Culture",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1203"
  },
  {
    "code": "CCCU4043",
    "classNo": "CL03",
    "name": "Visual Culture",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4043",
    "classNo": "CL03",
    "name": "Visual Culture",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4043",
    "classNo": "CL04",
    "name": "Visual Culture",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4043",
    "classNo": "CL04",
    "name": "Visual Culture",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC7A6"
  },
  {
    "code": "CCCU4043",
    "classNo": "CL05",
    "name": "Visual Culture",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCCU4043",
    "classNo": "CL05",
    "name": "Visual Culture",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC11A3"
  },
  {
    "code": "CCCU4044",
    "classNo": "CL01",
    "name": "New Media Art",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4044",
    "classNo": "CL01",
    "name": "New Media Art",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4044",
    "classNo": "CL02",
    "name": "New Media Art",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4044",
    "classNo": "CL02",
    "name": "New Media Art",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4044",
    "classNo": "CL03",
    "name": "New Media Art",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCCU4044",
    "classNo": "CL03",
    "name": "New Media Art",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC11A3"
  },
  {
    "code": "CCCU4044",
    "classNo": "CL04",
    "name": "New Media Art",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4044",
    "classNo": "CL04",
    "name": "New Media Art",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4044",
    "classNo": "CL05",
    "name": "New Media Art",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4044",
    "classNo": "CL05",
    "name": "New Media Art",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4044",
    "classNo": "CL06",
    "name": "New Media Art",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4044",
    "classNo": "CL06",
    "name": "New Media Art",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCCU4046",
    "classNo": "CL01",
    "name": "Introduction to Cultural Heritage and Museum Studies",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCCU4046",
    "classNo": "CL01",
    "name": "Introduction to Cultural Heritage and Museum Studies",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL01",
    "name": "Grammar for College Studies",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KED101"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL01",
    "name": "Grammar for College Studies",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KED104"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL02",
    "name": "Grammar for College Studies",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KED103"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL02",
    "name": "Grammar for College Studies",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KED104"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL03",
    "name": "Grammar for College Studies",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KED103"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL03",
    "name": "Grammar for College Studies",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KED105"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL04",
    "name": "Grammar for College Studies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KED105"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL04",
    "name": "Grammar for College Studies",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KED104"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL05",
    "name": "Grammar for College Studies",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KED102"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL05",
    "name": "Grammar for College Studies",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KED104"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL06",
    "name": "Grammar for College Studies",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KED103"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL06",
    "name": "Grammar for College Studies",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KED101"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL07",
    "name": "Grammar for College Studies",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KED104"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL07",
    "name": "Grammar for College Studies",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KED103"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL08",
    "name": "Grammar for College Studies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KED104"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL08",
    "name": "Grammar for College Studies",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KED103"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL09",
    "name": "Grammar for College Studies",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KED103"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL09",
    "name": "Grammar for College Studies",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KED105"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL10",
    "name": "Grammar for College Studies",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KED105"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL10",
    "name": "Grammar for College Studies",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KED105"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL11",
    "name": "Grammar for College Studies",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KED104"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL11",
    "name": "Grammar for College Studies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KED103"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL12",
    "name": "Grammar for College Studies",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KED102"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL12",
    "name": "Grammar for College Studies",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KED103"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL13",
    "name": "Grammar for College Studies",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC311"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL13",
    "name": "Grammar for College Studies",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CTC503"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL14",
    "name": "Grammar for College Studies",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CTC503"
  },
  {
    "code": "CCEN3001",
    "classNo": "CL14",
    "name": "Grammar for College Studies",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CTC502"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL01",
    "name": "General English I (Group 1)",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KED101"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL01",
    "name": "General English I (Group 1)",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KED103"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL02",
    "name": "General English I (Group 1)",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KED106"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL02",
    "name": "General English I (Group 1)",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KED106"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL03",
    "name": "General English I (Group 1)",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KED102"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL03",
    "name": "General English I (Group 1)",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KED102"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL04",
    "name": "General English I (Group 1)",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KED101"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL04",
    "name": "General English I (Group 1)",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KED102"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL05",
    "name": "General English I (Group 2)",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KED101"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL05",
    "name": "General English I (Group 2)",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KED102"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL06",
    "name": "General English I (Group 2)",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KED106"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL06",
    "name": "General English I (Group 2)",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KED105"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL07",
    "name": "General English I (Group 2)",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KED102"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL07",
    "name": "General English I (Group 2)",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KED104"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL08",
    "name": "General English I (Group 2)",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KED103"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL08",
    "name": "General English I (Group 2)",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KED104"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL09",
    "name": "General English I (Group 2)",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KED104"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL09",
    "name": "General English I (Group 2)",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KED103"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL10",
    "name": "General English I (Group 2)",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KED101"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL10",
    "name": "General English I (Group 2)",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KED101"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL11",
    "name": "General English I (Group 2)",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KED102"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL11",
    "name": "General English I (Group 2)",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KED103"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL12",
    "name": "General English I (Group 2)",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KED102"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL12",
    "name": "General English I (Group 2)",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KED103"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL13",
    "name": "General English I (Group 2)",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KED101"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL13",
    "name": "General English I (Group 2)",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KED102"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL14",
    "name": "General English I (Group 2)",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KED105"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL14",
    "name": "General English I (Group 2)",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KED101"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL15",
    "name": "General English I (Group 2)",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KED103"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL15",
    "name": "General English I (Group 2)",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KED101"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL16",
    "name": "General English I (Group 2)",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KED103"
  },
  {
    "code": "CCEN3002",
    "classNo": "CL16",
    "name": "General English I (Group 2)",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KED101"
  },
  {
    "code": "CCEN3003",
    "classNo": "HL01",
    "name": "General English II",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "HPC701"
  },
  {
    "code": "CCEN3003",
    "classNo": "HL01",
    "name": "General English II",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "HPC701"
  },
  {
    "code": "CCEN3005",
    "classNo": "CL01",
    "name": "College Writing",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KED103"
  },
  {
    "code": "CCEN3005",
    "classNo": "CL01",
    "name": "College Writing",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KED103"
  },
  {
    "code": "CCEN3005",
    "classNo": "CL02",
    "name": "College Writing",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KED101"
  },
  {
    "code": "CCEN3005",
    "classNo": "CL02",
    "name": "College Writing",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KED106"
  },
  {
    "code": "CCEN3005",
    "classNo": "CL03",
    "name": "College Writing",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KED106"
  },
  {
    "code": "CCEN3005",
    "classNo": "CL03",
    "name": "College Writing",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KED101"
  },
  {
    "code": "CCEN3005",
    "classNo": "CL04",
    "name": "College Writing",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KED104"
  },
  {
    "code": "CCEN3005",
    "classNo": "CL04",
    "name": "College Writing",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KED102"
  },
  {
    "code": "CCEN3005",
    "classNo": "CL05",
    "name": "College Writing",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CTC502"
  },
  {
    "code": "CCEN3005",
    "classNo": "CL05",
    "name": "College Writing",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CTC501"
  },
  {
    "code": "CCEN4002",
    "classNo": "CL01",
    "name": "English Enhancement for College Studies",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC906"
  },
  {
    "code": "CCEN4002",
    "classNo": "CL01",
    "name": "English Enhancement for College Studies",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC610"
  },
  {
    "code": "CCEN4002",
    "classNo": "CL02",
    "name": "English Enhancement for College Studies",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC707"
  },
  {
    "code": "CCEN4002",
    "classNo": "CL02",
    "name": "English Enhancement for College Studies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC505"
  },
  {
    "code": "CCEN4002",
    "classNo": "CL03",
    "name": "English Enhancement for College Studies",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC706"
  },
  {
    "code": "CCEN4002",
    "classNo": "CL03",
    "name": "English Enhancement for College Studies",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC611"
  },
  {
    "code": "CCEN4002",
    "classNo": "CL04",
    "name": "English Enhancement for College Studies",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC609"
  },
  {
    "code": "CCEN4002",
    "classNo": "CL04",
    "name": "English Enhancement for College Studies",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC603"
  },
  {
    "code": "CCEN4002",
    "classNo": "CL05",
    "name": "English Enhancement for College Studies",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE110"
  },
  {
    "code": "CCEN4002",
    "classNo": "CL05",
    "name": "English Enhancement for College Studies",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE111"
  },
  {
    "code": "CCEN4002",
    "classNo": "CL06",
    "name": "English Enhancement for College Studies",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4002",
    "classNo": "CL06",
    "name": "English Enhancement for College Studies",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4002",
    "classNo": "CL07",
    "name": "English Enhancement for College Studies",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4002",
    "classNo": "CL07",
    "name": "English Enhancement for College Studies",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4002",
    "classNo": "CL08",
    "name": "English Enhancement for College Studies",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4002",
    "classNo": "CL08",
    "name": "English Enhancement for College Studies",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE107"
  },
  {
    "code": "CCEN4002",
    "classNo": "CL09",
    "name": "English Enhancement for College Studies",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE111"
  },
  {
    "code": "CCEN4002",
    "classNo": "CL09",
    "name": "English Enhancement for College Studies",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4002",
    "classNo": "CL10",
    "name": "English Enhancement for College Studies",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC507"
  },
  {
    "code": "CCEN4002",
    "classNo": "CL10",
    "name": "English Enhancement for College Studies",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1201"
  },
  {
    "code": "CCEN4002",
    "classNo": "CL11",
    "name": "English Enhancement for College Studies",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC1201"
  },
  {
    "code": "CCEN4002",
    "classNo": "CL11",
    "name": "English Enhancement for College Studies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC506"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL01",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC608"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL01",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC608"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL02",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC308"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL02",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC607"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL03",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC609"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL03",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC608"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL04",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CTC504"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL04",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CTC504"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL05",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC616"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL05",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC604"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL06",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC608"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL06",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC608"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL07",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC608"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL07",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC609"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL08",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC608"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL08",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC308"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL09",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC607"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL09",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC609"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL10",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC608"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL10",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC308"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL11",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC608"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL11",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC608"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL12",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC602"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL12",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "UNC602"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL13",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC601"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL13",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC608"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL14",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC607"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL14",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC616"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL15",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC607"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL15",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC616"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL16",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC604"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL16",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC602"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL17",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC304"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL17",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC308"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL18",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC604"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL18",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC608"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL19",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC601"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL19",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC603"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL20",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC304"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL20",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC602"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL21",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC304"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL21",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC601"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL22",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC304"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL22",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC304"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL23",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC304"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL23",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC601"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL24",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC304"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL24",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC602"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL25",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC602"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL25",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC304"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL26",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC304"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL26",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC607"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL27",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC608"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL27",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC608"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL28",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC304"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL28",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC608"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL29",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC608"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL29",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC304"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL30",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC304"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL30",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC304"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL31",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC603"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL31",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC304"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL32",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC603"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL32",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC304"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL33",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC604"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL33",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC603"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL34",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC603"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL34",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC607"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL35",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC616"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL35",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC604"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL36",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC314"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL36",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC304"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL37",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC604"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL37",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC604"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL38",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC6A5"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL38",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC6A5"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL39",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC506"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL39",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1201"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL40",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC6A5"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL40",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC507"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL41",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC507"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL41",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC6A5"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL42",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC6A5"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL42",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC6A5"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL43",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC6A5"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL43",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC505"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL44",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC6A5"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL44",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC507"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL45",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC507"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL45",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC507"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL46",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC6A3"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL46",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1201"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL47",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC6A3"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL47",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL48",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC6A3"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL48",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC6A3"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL49",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC6A5"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL49",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC6A3"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL50",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC506"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL50",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC507"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL51",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL51",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC506"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL52",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC6A3"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL52",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC6A3"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL53",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC6A3"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL53",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC6A3"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL54",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC6A3"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL54",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC506"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL55",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1201"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL55",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC507"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL56",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC507"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL56",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC505"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL57",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC506"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL57",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL58",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL58",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL59",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC507"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL59",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC506"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL60",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC507"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL60",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC506"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL61",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC505"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL61",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC505"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL62",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC505"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL62",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC507"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL63",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC505"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL63",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC507"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL64",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1201"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL64",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC507"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL65",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC507"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL65",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC507"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL66",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC506"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL66",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC506"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL67",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC506"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL67",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC507"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL68",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC505"
  },
  {
    "code": "CCEN4003",
    "classNo": "AL68",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC506"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL01",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC606"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL01",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC707"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL02",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC510"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL02",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC510"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL03",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC602"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL03",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC505"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL04",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC606"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL04",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC805"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL05",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC510"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL05",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC602"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL06",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC606"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL06",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC710"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL07",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC605"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL07",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC504"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL08",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC605"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL08",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC710"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL09",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC509"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL09",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC805"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL10",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC707"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL10",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC607"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL11",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC707"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL11",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC706"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL12",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC504"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL12",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC602"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL13",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC506"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL13",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC706"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL14",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC805"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL14",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC505"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL15",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC706"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL15",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC611"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL16",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC602"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL16",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC605"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL17",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC506"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL17",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC505"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL18",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC706"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL18",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC605"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL19",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC505"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL19",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC509"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL20",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC602"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL20",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC602"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL21",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC805"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL21",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC602"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL22",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL22",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE107"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL23",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE111"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL23",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE111"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL24",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE111"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL24",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL25",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE111"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL25",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE111"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL26",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE111"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL26",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE105"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL27",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE107"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL27",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL28",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE102"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL28",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL29",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE105"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL29",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL30",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE111"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL30",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL31",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL31",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE110"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL32",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE110"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL32",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE105"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL33",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE105"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL33",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL34",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL34",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE107"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL35",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE111"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL35",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE107"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL36",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE107"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL36",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL37",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE111"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL37",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE107"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL38",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE108"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL38",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE107"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL39",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE107"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL39",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL40",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE111"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL40",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL41",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE107"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL41",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE110"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL42",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL42",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE107"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL43",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE105"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL43",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL44",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE105"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL44",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL45",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL45",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE110"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL46",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE107"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL46",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE107"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL47",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE105"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL47",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE105"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL48",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE110"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL48",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE107"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL49",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE111"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL49",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE107"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL50",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL50",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL51",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL51",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL52",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL52",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE110"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL53",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE102"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL53",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL54",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE102"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL54",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE107"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL55",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL55",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE107"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL56",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL56",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE105"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL57",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL57",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL58",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL58",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL59",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL59",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL60",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL60",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE110"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL61",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL61",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE105"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL62",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL62",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL63",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL63",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE105"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL64",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE110"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL64",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL65",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE110"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL65",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE107"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL66",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE105"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL66",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL67",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL67",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL68",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE105"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL68",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE107"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL69",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE105"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL69",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE107"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL70",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL70",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE107"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL71",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL71",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL72",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL72",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE107"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL73",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL73",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE107"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL74",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL74",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL75",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL75",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL76",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL76",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL77",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL77",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL78",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL78",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL79",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL79",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE106"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL80",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL80",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL81",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE107"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL81",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE105"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL82",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE107"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL82",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL83",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL83",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL84",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL84",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL85",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE106"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL85",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL86",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE105"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL86",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE106"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL87",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE105"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL87",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE105"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL88",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL88",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL89",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE105"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL89",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL90",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL90",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE105"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL91",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL91",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL92",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE102"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL92",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL93",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL93",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE105"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL94",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL94",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE105"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL95",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL95",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL96",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL96",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL97",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL97",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE101"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL98",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC304"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL98",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC613"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL99",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC609"
  },
  {
    "code": "CCEN4003",
    "classNo": "BL99",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC604"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL01",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC809"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL01",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC808"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL02",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC509"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL02",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC907"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL03",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC808"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL03",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC611"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL04",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC509"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL04",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC609"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL05",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC610"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL05",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC706"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL06",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC507"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL06",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC608"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL07",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC610"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL07",
    "name": "Introduction to Academic English",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC204"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL08",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC906"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL08",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC611"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL09",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC610"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL09",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC707"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL10",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC907"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL10",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC707"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL11",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC707"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL11",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC505"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL12",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC708"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL12",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC611"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL13",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC808"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL13",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC907"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL14",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC611"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL14",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC606"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL15",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC711"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL15",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC606"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL16",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC709"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL16",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC907"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL17",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC605"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL17",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC907"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL18",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC510"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL18",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC906"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL19",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC510"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL19",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC608"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL20",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC506"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL20",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC906"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL21",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC706"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL21",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC510"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL22",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC809"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL22",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC607"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL23",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC808"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL23",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC611"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL24",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC809"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL24",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC607"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL25",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC808"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL25",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC509"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL26",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC906"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL26",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC907"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL27",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC809"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL27",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC907"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL28",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC906"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL28",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC711"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL29",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC707"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL29",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC711"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL30",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC707"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL30",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC809"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL31",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC608"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL31",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC710"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL32",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC608"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL32",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC711"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL33",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC808"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL33",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC611"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL34",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC808"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL34",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC505"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL35",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC711"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL35",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC710"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL36",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC711"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL36",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC707"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL37",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC809"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL37",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC808"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL38",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC808"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL38",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC707"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL39",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC504"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL39",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC906"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL40",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC809"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL40",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC505"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL41",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC808"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL41",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC710"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL42",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC808"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL42",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC711"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL43",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC706"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL43",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC711"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL44",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC711"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL44",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC506"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL45",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC707"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL45",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC809"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL46",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC710"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL46",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC707"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL47",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC805"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL47",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC809"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL48",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC711"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL48",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC710"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL49",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC706"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL49",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC710"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL50",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC611"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL50",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC808"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL51",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC707"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL51",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC707"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL52",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC710"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL52",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC808"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL53",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC710"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL53",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC710"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL54",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC707"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL54",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC710"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL55",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC611"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL55",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC707"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL56",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC611"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL56",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC711"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL57",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC707"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL57",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC711"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL58",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC611"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL58",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC708"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL59",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC710"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL59",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC611"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL60",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC611"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL60",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC501"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL61",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC710"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL61",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC607"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL62",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC607"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL62",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC809"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL63",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC606"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL63",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC809"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL64",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC607"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL64",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC607"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL65",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC505"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL65",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC610"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL66",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC706"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL66",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC607"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL67",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC706"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL67",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC510"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL68",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC607"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL68",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC607"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL69",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC611"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL69",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1004"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL70",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC707"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL70",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC808"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL71",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC607"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL71",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC808"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL72",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC706"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL72",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC605"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL73",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC607"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL73",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC605"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL74",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC706"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL74",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC707"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL75",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC606"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL75",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC710"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL76",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC611"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL76",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC710"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL77",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC611"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL77",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC808"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL78",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC606"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL78",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC808"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL79",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1004"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL79",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1004"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL80",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC506"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL80",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC710"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL81",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC607"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL81",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC510"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL82",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC607"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL82",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC710"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL83",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC706"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL83",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC706"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL84",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC607"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL84",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC509"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL85",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC706"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL85",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC706"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL86",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC606"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL86",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC706"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL87",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC805"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL87",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC605"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL88",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC711"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL88",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC805"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL89",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC605"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL89",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC805"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL90",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC501"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL90",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC504"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL91",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC502"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL91",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC711"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL92",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC711"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL92",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC805"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL93",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC505"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL93",
    "name": "Introduction to Academic English",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC509"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL94",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC605"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL94",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC509"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL95",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC706"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL95",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC707"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL96",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC706"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL96",
    "name": "Introduction to Academic English",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC504"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL97",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC504"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL97",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC706"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL98",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC607"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL98",
    "name": "Introduction to Academic English",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC605"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL99",
    "name": "Introduction to Academic English",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC606"
  },
  {
    "code": "CCEN4003",
    "classNo": "CL99",
    "name": "Introduction to Academic English",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC606"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL01",
    "name": "English for Academic Purposes I",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KED106"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL01",
    "name": "English for Academic Purposes I",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "KED106"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL02",
    "name": "English for Academic Purposes I",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KED105"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL02",
    "name": "English for Academic Purposes I",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "KED105"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL03",
    "name": "English for Academic Purposes I",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KED104"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL03",
    "name": "English for Academic Purposes I",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "KED104"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL04",
    "name": "English for Academic Purposes I",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KED103"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL04",
    "name": "English for Academic Purposes I",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "KED103"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL05",
    "name": "English for Academic Purposes I",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KED102"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL05",
    "name": "English for Academic Purposes I",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "KED102"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL06",
    "name": "English for Academic Purposes I",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KED101"
  },
  {
    "code": "CCEN4004",
    "classNo": "CL06",
    "name": "English for Academic Purposes I",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "KED101"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL01",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC708"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL01",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC507"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL02",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC708"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL02",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC608"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL03",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC508"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL03",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC608"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL04",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC708"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL04",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC507"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL05",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC608"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL05",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC708"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL06",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC608"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL06",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC601"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL07",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC601"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL07",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC807"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL08",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC507"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL08",
    "name": "English for Academic Purposes II",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KED107"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL09",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC609"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL09",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC608"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL10",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC709"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL10",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC608"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL11",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC507"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL11",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC708"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL12",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC608"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL12",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC609"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL13",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC508"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL13",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC507"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL14",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC709"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL14",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC508"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL15",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC806"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL15",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC601"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL16",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC608"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL16",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC601"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL17",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC608"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL17",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC709"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL18",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC609"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL18",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC608"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL19",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC807"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL19",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC608"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL20",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC709"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL20",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC601"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL21",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC608"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL21",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC609"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL22",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC601"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL22",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC609"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL23",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC609"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL23",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC601"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL24",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC807"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL24",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC806"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL25",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC806"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL25",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC609"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL26",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC806"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL26",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC806"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL27",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC601"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL27",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC601"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL28",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC609"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL28",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC601"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL29",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC508"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL29",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC609"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL30",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC508"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL30",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC609"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL31",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC609"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL31",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC609"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL32",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC508"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL32",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC508"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL33",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC604"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL33",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC609"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL34",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC709"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL34",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC502"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL35",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC604"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL35",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC508"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL36",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC508"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL36",
    "name": "English for Academic Purposes II",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC502"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL37",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC709"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL37",
    "name": "English for Academic Purposes II",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC201"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL38",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC709"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL38",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC709"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL39",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC709"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL39",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC709"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL40",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC507"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL40",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC508"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL41",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC508"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL41",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC508"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL42",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC314"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL42",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC613"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL43",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC314"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL43",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC315"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL44",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC613"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL44",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC613"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL45",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC301"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL45",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC301"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL46",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC315"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL46",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC314"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL47",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC301"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL47",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC612"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL48",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC612"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL48",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC612"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL49",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC312"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL49",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC303"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL50",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC312"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL50",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC303"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL51",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC613"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL51",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC602"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL52",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC612"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL52",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC602"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL53",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC301"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL53",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC312"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL54",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC312"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL54",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC303"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL55",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC311"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL55",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC612"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL56",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC311"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL56",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC311"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL57",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC301"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL57",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC311"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL58",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC612"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL58",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC315"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL59",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC612"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL59",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC315"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL60",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC314"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL60",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC303"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL61",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC314"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL61",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC314"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL62",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC311"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL62",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC303"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL63",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC315"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL63",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC315"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL64",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1203"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL64",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC11A3"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL65",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1203"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL65",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL66",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC7A6"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL66",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC7A6"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL67",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL67",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL68",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC7A6"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL68",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL69",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL69",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL70",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL70",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL71",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL71",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC11A3"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL72",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL72",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL73",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL73",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL74",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC11A3"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL74",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC1203"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL75",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC10A3"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL75",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1203"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL76",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL76",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL77",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL77",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC11A3"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL78",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC11A3"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL78",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC10A3"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL79",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL79",
    "name": "English for Academic Purposes II",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL80",
    "name": "English for Academic Purposes II",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC11A3"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL80",
    "name": "English for Academic Purposes II",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL81",
    "name": "English for Academic Purposes II",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC8A3"
  },
  {
    "code": "CCEN4005",
    "classNo": "CL81",
    "name": "English for Academic Purposes II",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1203"
  },
  {
    "code": "CCEN4007",
    "classNo": "CL01",
    "name": "English Phonetics and Phonology",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK801"
  },
  {
    "code": "CCEN4007",
    "classNo": "CL01",
    "name": "English Phonetics and Phonology",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK801"
  },
  {
    "code": "CCEN4007",
    "classNo": "CL02",
    "name": "English Phonetics and Phonology",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK702"
  },
  {
    "code": "CCEN4007",
    "classNo": "CL02",
    "name": "English Phonetics and Phonology",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK702"
  },
  {
    "code": "CCEN4007",
    "classNo": "CL03",
    "name": "English Phonetics and Phonology",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK602"
  },
  {
    "code": "CCEN4007",
    "classNo": "CL03",
    "name": "English Phonetics and Phonology",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK602"
  },
  {
    "code": "CCEN4007",
    "classNo": "CL04",
    "name": "English Phonetics and Phonology",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK801"
  },
  {
    "code": "CCEN4007",
    "classNo": "CL04",
    "name": "English Phonetics and Phonology",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK801"
  },
  {
    "code": "CCEN4007",
    "classNo": "CL05",
    "name": "English Phonetics and Phonology",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK803"
  },
  {
    "code": "CCEN4007",
    "classNo": "CL05",
    "name": "English Phonetics and Phonology",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK803"
  },
  {
    "code": "CCEN4007",
    "classNo": "CL06",
    "name": "English Phonetics and Phonology",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK603"
  },
  {
    "code": "CCEN4007",
    "classNo": "CL06",
    "name": "English Phonetics and Phonology",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK603"
  },
  {
    "code": "CCEN4008",
    "classNo": "CL01",
    "name": "Introduction to Linguistics",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK803"
  },
  {
    "code": "CCEN4008",
    "classNo": "CL01",
    "name": "Introduction to Linguistics",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK803"
  },
  {
    "code": "CCEN4008",
    "classNo": "CL02",
    "name": "Introduction to Linguistics",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK801"
  },
  {
    "code": "CCEN4008",
    "classNo": "CL02",
    "name": "Introduction to Linguistics",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK801"
  },
  {
    "code": "CCEN4008",
    "classNo": "CL03",
    "name": "Introduction to Linguistics",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK801"
  },
  {
    "code": "CCEN4008",
    "classNo": "CL03",
    "name": "Introduction to Linguistics",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK801"
  },
  {
    "code": "CCEN4008",
    "classNo": "CL04",
    "name": "Introduction to Linguistics",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK801"
  },
  {
    "code": "CCEN4008",
    "classNo": "CL04",
    "name": "Introduction to Linguistics",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK801"
  },
  {
    "code": "CCEN4008",
    "classNo": "CL05",
    "name": "Introduction to Linguistics",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK602"
  },
  {
    "code": "CCEN4008",
    "classNo": "CL05",
    "name": "Introduction to Linguistics",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK602"
  },
  {
    "code": "CCEN4008",
    "classNo": "CL06",
    "name": "Introduction to Linguistics",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK803"
  },
  {
    "code": "CCEN4008",
    "classNo": "CL06",
    "name": "Introduction to Linguistics",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK803"
  },
  {
    "code": "CCEN4008",
    "classNo": "CL07",
    "name": "Introduction to Linguistics",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK702"
  },
  {
    "code": "CCEN4008",
    "classNo": "CL07",
    "name": "Introduction to Linguistics",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK702"
  },
  {
    "code": "CCEN4010",
    "classNo": "CL01",
    "name": "Introduction to Literature in English",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK801"
  },
  {
    "code": "CCEN4010",
    "classNo": "CL01",
    "name": "Introduction to Literature in English",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK801"
  },
  {
    "code": "CCEN4010",
    "classNo": "CL02",
    "name": "Introduction to Literature in English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK803"
  },
  {
    "code": "CCEN4010",
    "classNo": "CL02",
    "name": "Introduction to Literature in English",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK803"
  },
  {
    "code": "CCEN4010",
    "classNo": "CL03",
    "name": "Introduction to Literature in English",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK802"
  },
  {
    "code": "CCEN4010",
    "classNo": "CL03",
    "name": "Introduction to Literature in English",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK802"
  },
  {
    "code": "CCEN4010",
    "classNo": "CL04",
    "name": "Introduction to Literature in English",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK801"
  },
  {
    "code": "CCEN4010",
    "classNo": "CL04",
    "name": "Introduction to Literature in English",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK801"
  },
  {
    "code": "CCEN4010",
    "classNo": "CL05",
    "name": "Introduction to Literature in English",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK802"
  },
  {
    "code": "CCEN4010",
    "classNo": "CL05",
    "name": "Introduction to Literature in English",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK802"
  },
  {
    "code": "CCEN4010",
    "classNo": "CL06",
    "name": "Introduction to Literature in English",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK803"
  },
  {
    "code": "CCEN4010",
    "classNo": "CL06",
    "name": "Introduction to Literature in English",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK803"
  },
  {
    "code": "CCEN4010",
    "classNo": "CL07",
    "name": "Introduction to Literature in English",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK801"
  },
  {
    "code": "CCEN4010",
    "classNo": "CL07",
    "name": "Introduction to Literature in English",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK801"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL01",
    "name": "English for Business",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC505"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL01",
    "name": "English for Business",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1201"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL02",
    "name": "English for Business",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC505"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL02",
    "name": "English for Business",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1004"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL03",
    "name": "English for Business",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC609"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL03",
    "name": "English for Business",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC602"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL04",
    "name": "English for Business",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC604"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL04",
    "name": "English for Business",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC304"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL05",
    "name": "English for Business",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC304"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL05",
    "name": "English for Business",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC308"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL06",
    "name": "English for Business",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE105"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL06",
    "name": "English for Business",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL07",
    "name": "English for Business",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE106"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL07",
    "name": "English for Business",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL08",
    "name": "English for Business",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE105"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL08",
    "name": "English for Business",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE105"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL09",
    "name": "English for Business",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE106"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL09",
    "name": "English for Business",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE111"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL10",
    "name": "English for Business",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE102"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL10",
    "name": "English for Business",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL11",
    "name": "English for Business",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE105"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL11",
    "name": "English for Business",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE105"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL12",
    "name": "English for Business",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE105"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL12",
    "name": "English for Business",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL13",
    "name": "English for Business",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL13",
    "name": "English for Business",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE107"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL14",
    "name": "English for Business",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE105"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL14",
    "name": "English for Business",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE110"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL15",
    "name": "English for Business",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE105"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL15",
    "name": "English for Business",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE101"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL16",
    "name": "English for Business",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL16",
    "name": "English for Business",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE110"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL17",
    "name": "English for Business",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE106"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL17",
    "name": "English for Business",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL18",
    "name": "English for Business",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL18",
    "name": "English for Business",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL19",
    "name": "English for Business",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL19",
    "name": "English for Business",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL20",
    "name": "English for Business",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE106"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL20",
    "name": "English for Business",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE102"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL21",
    "name": "English for Business",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE102"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL21",
    "name": "English for Business",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL22",
    "name": "English for Business",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE105"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL22",
    "name": "English for Business",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL23",
    "name": "English for Business",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE106"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL23",
    "name": "English for Business",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL24",
    "name": "English for Business",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE106"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL24",
    "name": "English for Business",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL25",
    "name": "English for Business",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL25",
    "name": "English for Business",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL26",
    "name": "English for Business",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL26",
    "name": "English for Business",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE102"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL27",
    "name": "English for Business",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE102"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL27",
    "name": "English for Business",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE102"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL28",
    "name": "English for Business",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL28",
    "name": "English for Business",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL29",
    "name": "English for Business",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL29",
    "name": "English for Business",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL30",
    "name": "English for Business",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL30",
    "name": "English for Business",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE105"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL31",
    "name": "English for Business",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL31",
    "name": "English for Business",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL32",
    "name": "English for Business",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE106"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL32",
    "name": "English for Business",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE107"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL33",
    "name": "English for Business",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL33",
    "name": "English for Business",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL34",
    "name": "English for Business",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL34",
    "name": "English for Business",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE109"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL35",
    "name": "English for Business",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL35",
    "name": "English for Business",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE106"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL36",
    "name": "English for Business",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL36",
    "name": "English for Business",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE109"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL37",
    "name": "English for Business",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL37",
    "name": "English for Business",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL38",
    "name": "English for Business",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL38",
    "name": "English for Business",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE106"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL39",
    "name": "English for Business",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL39",
    "name": "English for Business",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE106"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL40",
    "name": "English for Business",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE103"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL40",
    "name": "English for Business",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE103"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL41",
    "name": "English for Business",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL41",
    "name": "English for Business",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE102"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL42",
    "name": "English for Business",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE102"
  },
  {
    "code": "CCEN4011",
    "classNo": "CL42",
    "name": "English for Business",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE102"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL01",
    "name": "English for Science and Technology",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC501"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL01",
    "name": "English for Science and Technology",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC611"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL02",
    "name": "English for Science and Technology",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC605"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL02",
    "name": "English for Science and Technology",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC602"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL03",
    "name": "English for Science and Technology",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC706"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL03",
    "name": "English for Science and Technology",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC607"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL04",
    "name": "English for Science and Technology",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC606"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL04",
    "name": "English for Science and Technology",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC607"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL05",
    "name": "English for Science and Technology",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC605"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL05",
    "name": "English for Science and Technology",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC611"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL06",
    "name": "English for Science and Technology",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC501"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL06",
    "name": "English for Science and Technology",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1004"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL07",
    "name": "English for Science and Technology",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC805"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL07",
    "name": "English for Science and Technology",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1004"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL08",
    "name": "English for Science and Technology",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC607"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL08",
    "name": "English for Science and Technology",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC602"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL09",
    "name": "English for Science and Technology",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC501"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL09",
    "name": "English for Science and Technology",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC504"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL10",
    "name": "English for Science and Technology",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC607"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL10",
    "name": "English for Science and Technology",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC805"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL11",
    "name": "English for Science and Technology",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC606"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL11",
    "name": "English for Science and Technology",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC501"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL12",
    "name": "English for Science and Technology",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC606"
  },
  {
    "code": "CCEN4013",
    "classNo": "CL12",
    "name": "English for Science and Technology",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC501"
  },
  {
    "code": "CCEN4015",
    "classNo": "CL01",
    "name": "English for Healthcare Professionals",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1003A"
  },
  {
    "code": "CCEN4015",
    "classNo": "CL02",
    "name": "English for Healthcare Professionals",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1001"
  },
  {
    "code": "CCEN4015",
    "classNo": "CL03",
    "name": "English for Healthcare Professionals",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC503"
  },
  {
    "code": "CCEN4015",
    "classNo": "CL04",
    "name": "English for Healthcare Professionals",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC507"
  },
  {
    "code": "CCEN4015",
    "classNo": "CL05",
    "name": "English for Healthcare Professionals",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1001"
  },
  {
    "code": "CCEN4015",
    "classNo": "CL06",
    "name": "English for Healthcare Professionals",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC808"
  },
  {
    "code": "CCEN4015",
    "classNo": "CL07",
    "name": "English for Healthcare Professionals",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1001"
  },
  {
    "code": "CCEN4015",
    "classNo": "CL08",
    "name": "English for Healthcare Professionals",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CTC502"
  },
  {
    "code": "CCEN4015",
    "classNo": "CL09",
    "name": "English for Healthcare Professionals",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CTC502"
  },
  {
    "code": "CCEN4015",
    "classNo": "CL10",
    "name": "English for Healthcare Professionals",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CTC502"
  },
  {
    "code": "CCEN4015",
    "classNo": "CL11",
    "name": "English for Healthcare Professionals",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CTC502"
  },
  {
    "code": "CCEN4020",
    "classNo": "CL01",
    "name": "Professional Communication Strategies",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK602"
  },
  {
    "code": "CCEN4020",
    "classNo": "CL01",
    "name": "Professional Communication Strategies",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK602"
  },
  {
    "code": "CCEN4020",
    "classNo": "CL02",
    "name": "Professional Communication Strategies",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK802"
  },
  {
    "code": "CCEN4020",
    "classNo": "CL02",
    "name": "Professional Communication Strategies",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK802"
  },
  {
    "code": "CCEN4025",
    "classNo": "CL01",
    "name": "Introduction to Translation",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK802"
  },
  {
    "code": "CCEN4025",
    "classNo": "CL01",
    "name": "Introduction to Translation",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK802"
  },
  {
    "code": "CCEN4200",
    "classNo": "CL01",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC704"
  },
  {
    "code": "CCEN4200",
    "classNo": "CL02",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC704"
  },
  {
    "code": "CCEN4200",
    "classNo": "CT01",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC809"
  },
  {
    "code": "CCEN4200",
    "classNo": "CT02",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC809"
  },
  {
    "code": "CCEN4200",
    "classNo": "CT03",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK706"
  },
  {
    "code": "CCEN4200",
    "classNo": "CT04",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK706"
  },
  {
    "code": "CCEN4200",
    "classNo": "CT05",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK706"
  },
  {
    "code": "CCEN4200",
    "classNo": "CT06",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK706"
  },
  {
    "code": "CCEN4200",
    "classNo": "CT07",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC705"
  },
  {
    "code": "CCEN4200",
    "classNo": "CT08",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC705"
  },
  {
    "code": "CCEN4200",
    "classNo": "CT09",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK706"
  },
  {
    "code": "CCEN4200",
    "classNo": "CT10",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK706"
  },
  {
    "code": "CCFN4002",
    "classNo": "CL01",
    "name": "Foundation of Financial Planning",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-806"
  },
  {
    "code": "CCFN4002",
    "classNo": "CL01",
    "name": "Foundation of Financial Planning",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-806"
  },
  {
    "code": "CCFN4006",
    "classNo": "CL01",
    "name": "Introduction to Finance",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCFN4006",
    "classNo": "CL01",
    "name": "Introduction to Finance",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCFN4006",
    "classNo": "CL02",
    "name": "Introduction to Finance",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCFN4006",
    "classNo": "CL02",
    "name": "Introduction to Finance",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCFN4007",
    "classNo": "CL01",
    "name": "Investments",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCFN4007",
    "classNo": "CL01",
    "name": "Investments",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCFN4008",
    "classNo": "CL01",
    "name": "Macroeconomics",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-705"
  },
  {
    "code": "CCFN4008",
    "classNo": "CL01",
    "name": "Macroeconomics",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-705"
  },
  {
    "code": "CCFN4020",
    "classNo": "CL01",
    "name": "Medical Insurance",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC605"
  },
  {
    "code": "CCFN4020",
    "classNo": "CL01",
    "name": "Medical Insurance",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC605"
  },
  {
    "code": "CCFN4021",
    "classNo": "CL01",
    "name": "Introduction to Financial Technology",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCFN4021",
    "classNo": "CL01",
    "name": "Introduction to Financial Technology",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCIM4111",
    "classNo": "NL01",
    "name": "Engineering Mathematics I",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "FTC1405"
  },
  {
    "code": "CCIM4111",
    "classNo": "NL01",
    "name": "Engineering Mathematics I",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "FTC1405"
  },
  {
    "code": "CCIT4014",
    "classNo": "CL01",
    "name": "Introduction to Information Security",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC603"
  },
  {
    "code": "CCIT4014",
    "classNo": "CL02",
    "name": "Introduction to Information Security",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC603"
  },
  {
    "code": "CCIT4014",
    "classNo": "CL03",
    "name": "Introduction to Information Security",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC502"
  },
  {
    "code": "CCIT4014",
    "classNo": "CL04",
    "name": "Introduction to Information Security",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC502"
  },
  {
    "code": "CCIT4014",
    "classNo": "CL05",
    "name": "Introduction to Information Security",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC502"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL01",
    "name": "Introduction to Computer Programming",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL01",
    "name": "Introduction to Computer Programming",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL02",
    "name": "Introduction to Computer Programming",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK703"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL02",
    "name": "Introduction to Computer Programming",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEK703"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL03",
    "name": "Introduction to Computer Programming",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK703"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL03",
    "name": "Introduction to Computer Programming",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK703"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL04",
    "name": "Introduction to Computer Programming",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL04",
    "name": "Introduction to Computer Programming",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL05",
    "name": "Introduction to Computer Programming",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL05",
    "name": "Introduction to Computer Programming",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL06",
    "name": "Introduction to Computer Programming",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL06",
    "name": "Introduction to Computer Programming",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL07",
    "name": "Introduction to Computer Programming",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL07",
    "name": "Introduction to Computer Programming",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL08",
    "name": "Introduction to Computer Programming",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL08",
    "name": "Introduction to Computer Programming",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL09",
    "name": "Introduction to Computer Programming",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL09",
    "name": "Introduction to Computer Programming",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL10",
    "name": "Introduction to Computer Programming",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL10",
    "name": "Introduction to Computer Programming",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL11",
    "name": "Introduction to Computer Programming",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL11",
    "name": "Introduction to Computer Programming",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL12",
    "name": "Introduction to Computer Programming",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL12",
    "name": "Introduction to Computer Programming",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL13",
    "name": "Introduction to Computer Programming",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL13",
    "name": "Introduction to Computer Programming",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL14",
    "name": "Introduction to Computer Programming",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL14",
    "name": "Introduction to Computer Programming",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL15",
    "name": "Introduction to Computer Programming",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL15",
    "name": "Introduction to Computer Programming",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL16",
    "name": "Introduction to Computer Programming",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL16",
    "name": "Introduction to Computer Programming",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL17",
    "name": "Introduction to Computer Programming",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL17",
    "name": "Introduction to Computer Programming",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL18",
    "name": "Introduction to Computer Programming",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL18",
    "name": "Introduction to Computer Programming",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL19",
    "name": "Introduction to Computer Programming",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL19",
    "name": "Introduction to Computer Programming",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL20",
    "name": "Introduction to Computer Programming",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KED108"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL20",
    "name": "Introduction to Computer Programming",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KED108"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL21",
    "name": "Introduction to Computer Programming",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL21",
    "name": "Introduction to Computer Programming",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL22",
    "name": "Introduction to Computer Programming",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL22",
    "name": "Introduction to Computer Programming",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL23",
    "name": "Introduction to Computer Programming",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL23",
    "name": "Introduction to Computer Programming",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL24",
    "name": "Introduction to Computer Programming",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL24",
    "name": "Introduction to Computer Programming",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL25",
    "name": "Introduction to Computer Programming",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL25",
    "name": "Introduction to Computer Programming",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL26",
    "name": "Introduction to Computer Programming",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL26",
    "name": "Introduction to Computer Programming",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL27",
    "name": "Introduction to Computer Programming",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL27",
    "name": "Introduction to Computer Programming",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL28",
    "name": "Introduction to Computer Programming",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL28",
    "name": "Introduction to Computer Programming",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL29",
    "name": "Introduction to Computer Programming",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL29",
    "name": "Introduction to Computer Programming",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL30",
    "name": "Introduction to Computer Programming",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL30",
    "name": "Introduction to Computer Programming",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL31",
    "name": "Introduction to Computer Programming",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL31",
    "name": "Introduction to Computer Programming",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL32",
    "name": "Introduction to Computer Programming",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4020",
    "classNo": "CL32",
    "name": "Introduction to Computer Programming",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4021",
    "classNo": "CL01",
    "name": "Discrete Mathematics",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC603"
  },
  {
    "code": "CCIT4021",
    "classNo": "CL01",
    "name": "Discrete Mathematics",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC603"
  },
  {
    "code": "CCIT4021",
    "classNo": "CL02",
    "name": "Discrete Mathematics",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC502"
  },
  {
    "code": "CCIT4021",
    "classNo": "CL02",
    "name": "Discrete Mathematics",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC502"
  },
  {
    "code": "CCIT4021",
    "classNo": "CL03",
    "name": "Discrete Mathematics",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC502"
  },
  {
    "code": "CCIT4021",
    "classNo": "CL03",
    "name": "Discrete Mathematics",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC502"
  },
  {
    "code": "CCIT4023",
    "classNo": "CL01",
    "name": "Object-Oriented Programming",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK703"
  },
  {
    "code": "CCIT4023",
    "classNo": "CL01",
    "name": "Object-Oriented Programming",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK703"
  },
  {
    "code": "CCIT4023",
    "classNo": "CL02",
    "name": "Object-Oriented Programming",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK703"
  },
  {
    "code": "CCIT4023",
    "classNo": "CL02",
    "name": "Object-Oriented Programming",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK703"
  },
  {
    "code": "CCIT4023",
    "classNo": "CL03",
    "name": "Object-Oriented Programming",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK703"
  },
  {
    "code": "CCIT4023",
    "classNo": "CL03",
    "name": "Object-Oriented Programming",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK703"
  },
  {
    "code": "CCIT4023",
    "classNo": "CL04",
    "name": "Object-Oriented Programming",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK703"
  },
  {
    "code": "CCIT4023",
    "classNo": "CL04",
    "name": "Object-Oriented Programming",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK703"
  },
  {
    "code": "CCIT4023",
    "classNo": "CL05",
    "name": "Object-Oriented Programming",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK703"
  },
  {
    "code": "CCIT4023",
    "classNo": "CL05",
    "name": "Object-Oriented Programming",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK703"
  },
  {
    "code": "CCIT4023",
    "classNo": "CL06",
    "name": "Object-Oriented Programming",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK703"
  },
  {
    "code": "CCIT4023",
    "classNo": "CL06",
    "name": "Object-Oriented Programming",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK703"
  },
  {
    "code": "CCIT4023",
    "classNo": "CL07",
    "name": "Object-Oriented Programming",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK703"
  },
  {
    "code": "CCIT4023",
    "classNo": "CL07",
    "name": "Object-Oriented Programming",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK703"
  },
  {
    "code": "CCIT4023",
    "classNo": "CL08",
    "name": "Object-Oriented Programming",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK703"
  },
  {
    "code": "CCIT4023",
    "classNo": "CL08",
    "name": "Object-Oriented Programming",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK703"
  },
  {
    "code": "CCIT4023",
    "classNo": "CL09",
    "name": "Object-Oriented Programming",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEK703"
  },
  {
    "code": "CCIT4023",
    "classNo": "CL09",
    "name": "Object-Oriented Programming",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK703"
  },
  {
    "code": "CCIT4023",
    "classNo": "CL10",
    "name": "Object-Oriented Programming",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK703"
  },
  {
    "code": "CCIT4023",
    "classNo": "CL10",
    "name": "Object-Oriented Programming",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK703"
  },
  {
    "code": "CCIT4023",
    "classNo": "CL11",
    "name": "Object-Oriented Programming",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK703"
  },
  {
    "code": "CCIT4023",
    "classNo": "CL11",
    "name": "Object-Oriented Programming",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEK703"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL01",
    "name": "Introduction to Computer Organisation",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK703"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL01",
    "name": "Introduction to Computer Organisation",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK703"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL02",
    "name": "Introduction to Computer Organisation",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK703"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL02",
    "name": "Introduction to Computer Organisation",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK703"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL03",
    "name": "Introduction to Computer Organisation",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK703"
  },
  {
    "code": "CCIT4026",
    "classNo": "CL03",
    "name": "Introduction to Computer Organisation",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK703"
  },
  {
    "code": "CCIT4030",
    "classNo": "CL01",
    "name": "Signal and Communication",
    "day": "Wed",
    "start": "19:00",
    "end": "22:00",
    "room": "KEC701"
  },
  {
    "code": "CCIT4030",
    "classNo": "CL02",
    "name": "Signal and Communication",
    "day": "Thu",
    "start": "19:00",
    "end": "22:00",
    "room": "KEC701"
  },
  {
    "code": "CCIT4030",
    "classNo": "CL03",
    "name": "Signal and Communication",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4030",
    "classNo": "CL03",
    "name": "Signal and Communication",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4030",
    "classNo": "CL04",
    "name": "Signal and Communication",
    "day": "Thu",
    "start": "19:00",
    "end": "22:00",
    "room": "KEC909"
  },
  {
    "code": "CCIT4035",
    "classNo": "CL01",
    "name": "System Administration",
    "day": "Tue",
    "start": "19:00",
    "end": "22:00",
    "room": "KEC401"
  },
  {
    "code": "CCIT4035",
    "classNo": "CL02",
    "name": "System Administration",
    "day": "Thu",
    "start": "19:00",
    "end": "22:00",
    "room": "KEC401"
  },
  {
    "code": "CCIT4035",
    "classNo": "CL03",
    "name": "System Administration",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC401"
  },
  {
    "code": "CCIT4035",
    "classNo": "CL03",
    "name": "System Administration",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC401"
  },
  {
    "code": "CCIT4035",
    "classNo": "CL04",
    "name": "System Administration",
    "day": "Fri",
    "start": "19:00",
    "end": "22:00",
    "room": "KEC401"
  },
  {
    "code": "CCIT4038",
    "classNo": "CL01",
    "name": "Information Security Management System",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC403"
  },
  {
    "code": "CCIT4038",
    "classNo": "CL01",
    "name": "Information Security Management System",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC403"
  },
  {
    "code": "CCIT4052",
    "classNo": "CL01",
    "name": "Shell Programming",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4052",
    "classNo": "CL01",
    "name": "Shell Programming",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4052",
    "classNo": "CL02",
    "name": "Shell Programming",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4052",
    "classNo": "CL02",
    "name": "Shell Programming",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4053",
    "classNo": "CL01",
    "name": "Computer Systems and Network Protocol Essentials",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC401"
  },
  {
    "code": "CCIT4053",
    "classNo": "CL01",
    "name": "Computer Systems and Network Protocol Essentials",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC401"
  },
  {
    "code": "CCIT4053",
    "classNo": "CL02",
    "name": "Computer Systems and Network Protocol Essentials",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC401"
  },
  {
    "code": "CCIT4053",
    "classNo": "CL02",
    "name": "Computer Systems and Network Protocol Essentials",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC401"
  },
  {
    "code": "CCIT4053",
    "classNo": "CL03",
    "name": "Computer Systems and Network Protocol Essentials",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC401"
  },
  {
    "code": "CCIT4053",
    "classNo": "CL03",
    "name": "Computer Systems and Network Protocol Essentials",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC401"
  },
  {
    "code": "CCIT4053",
    "classNo": "CL04",
    "name": "Computer Systems and Network Protocol Essentials",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC401"
  },
  {
    "code": "CCIT4053",
    "classNo": "CL04",
    "name": "Computer Systems and Network Protocol Essentials",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC401"
  },
  {
    "code": "CCIT4053",
    "classNo": "CL05",
    "name": "Computer Systems and Network Protocol Essentials",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC401"
  },
  {
    "code": "CCIT4053",
    "classNo": "CL05",
    "name": "Computer Systems and Network Protocol Essentials",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC401"
  },
  {
    "code": "CCIT4053",
    "classNo": "CL06",
    "name": "Computer Systems and Network Protocol Essentials",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC401"
  },
  {
    "code": "CCIT4053",
    "classNo": "CL06",
    "name": "Computer Systems and Network Protocol Essentials",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC401"
  },
  {
    "code": "CCIT4053",
    "classNo": "CL07",
    "name": "Computer Systems and Network Protocol Essentials",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC401"
  },
  {
    "code": "CCIT4053",
    "classNo": "CL07",
    "name": "Computer Systems and Network Protocol Essentials",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC401"
  },
  {
    "code": "CCIT4053",
    "classNo": "CL08",
    "name": "Computer Systems and Network Protocol Essentials",
    "day": "Sat",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC401"
  },
  {
    "code": "CCIT4053",
    "classNo": "CL08",
    "name": "Computer Systems and Network Protocol Essentials",
    "day": "Sat",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC401"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL01",
    "name": "Information Management",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL01",
    "name": "Information Management",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL02",
    "name": "Information Management",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL02",
    "name": "Information Management",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL03",
    "name": "Information Management",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL03",
    "name": "Information Management",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL04",
    "name": "Information Management",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL04",
    "name": "Information Management",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL05",
    "name": "Information Management",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL05",
    "name": "Information Management",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL06",
    "name": "Information Management",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL06",
    "name": "Information Management",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL07",
    "name": "Information Management",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL07",
    "name": "Information Management",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL08",
    "name": "Information Management",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL08",
    "name": "Information Management",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL09",
    "name": "Information Management",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL09",
    "name": "Information Management",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL10",
    "name": "Information Management",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL10",
    "name": "Information Management",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL11",
    "name": "Information Management",
    "day": "Mon",
    "start": "19:00",
    "end": "22:00",
    "room": "KEC908"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL12",
    "name": "Information Management",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL12",
    "name": "Information Management",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL13",
    "name": "Information Management",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL13",
    "name": "Information Management",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL14",
    "name": "Information Management",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL14",
    "name": "Information Management",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL15",
    "name": "Information Management",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL15",
    "name": "Information Management",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL16",
    "name": "Information Management",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4057",
    "classNo": "CL16",
    "name": "Information Management",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1002"
  },
  {
    "code": "CCIT4058",
    "classNo": "CL01",
    "name": "Internet Programming",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4058",
    "classNo": "CL01",
    "name": "Internet Programming",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4058",
    "classNo": "CL02",
    "name": "Internet Programming",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4058",
    "classNo": "CL02",
    "name": "Internet Programming",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4062",
    "classNo": "CL01",
    "name": "Data Centre Security Requirements and Compliances",
    "day": "Tue",
    "start": "19:00",
    "end": "22:00",
    "room": "KEC603"
  },
  {
    "code": "CCIT4074",
    "classNo": "CL01",
    "name": "Information Security Administration",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC401"
  },
  {
    "code": "CCIT4074",
    "classNo": "CL01",
    "name": "Information Security Administration",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC401"
  },
  {
    "code": "CCIT4074",
    "classNo": "CL02",
    "name": "Information Security Administration",
    "day": "Mon",
    "start": "19:00",
    "end": "22:00",
    "room": "KEC401"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL01",
    "name": "Engineering and Information Science",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL01",
    "name": "Engineering and Information Science",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL02",
    "name": "Engineering and Information Science",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL02",
    "name": "Engineering and Information Science",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL03",
    "name": "Engineering and Information Science",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL03",
    "name": "Engineering and Information Science",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL04",
    "name": "Engineering and Information Science",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL04",
    "name": "Engineering and Information Science",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL05",
    "name": "Engineering and Information Science",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL05",
    "name": "Engineering and Information Science",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL06",
    "name": "Engineering and Information Science",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL06",
    "name": "Engineering and Information Science",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL07",
    "name": "Engineering and Information Science",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL07",
    "name": "Engineering and Information Science",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL08",
    "name": "Engineering and Information Science",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL08",
    "name": "Engineering and Information Science",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL09",
    "name": "Engineering and Information Science",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL09",
    "name": "Engineering and Information Science",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL10",
    "name": "Engineering and Information Science",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL10",
    "name": "Engineering and Information Science",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL11",
    "name": "Engineering and Information Science",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL11",
    "name": "Engineering and Information Science",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL12",
    "name": "Engineering and Information Science",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL12",
    "name": "Engineering and Information Science",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL13",
    "name": "Engineering and Information Science",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL13",
    "name": "Engineering and Information Science",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL14",
    "name": "Engineering and Information Science",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL14",
    "name": "Engineering and Information Science",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL15",
    "name": "Engineering and Information Science",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL15",
    "name": "Engineering and Information Science",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL16",
    "name": "Engineering and Information Science",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL16",
    "name": "Engineering and Information Science",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL17",
    "name": "Engineering and Information Science",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL17",
    "name": "Engineering and Information Science",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL18",
    "name": "Engineering and Information Science",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL18",
    "name": "Engineering and Information Science",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL19",
    "name": "Engineering and Information Science",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL19",
    "name": "Engineering and Information Science",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL20",
    "name": "Engineering and Information Science",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL20",
    "name": "Engineering and Information Science",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL21",
    "name": "Engineering and Information Science",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL21",
    "name": "Engineering and Information Science",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL22",
    "name": "Engineering and Information Science",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL22",
    "name": "Engineering and Information Science",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL23",
    "name": "Engineering and Information Science",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL23",
    "name": "Engineering and Information Science",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL24",
    "name": "Engineering and Information Science",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL24",
    "name": "Engineering and Information Science",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KED108"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL25",
    "name": "Engineering and Information Science",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL25",
    "name": "Engineering and Information Science",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL26",
    "name": "Engineering and Information Science",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL26",
    "name": "Engineering and Information Science",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL27",
    "name": "Engineering and Information Science",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4076",
    "classNo": "CL27",
    "name": "Engineering and Information Science",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4077",
    "classNo": "CL01",
    "name": "Project (Information Security)",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4077",
    "classNo": "CL01",
    "name": "Project (Information Security)",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4078",
    "classNo": "CL01",
    "name": "Project (Information Technology)",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4078",
    "classNo": "CL01",
    "name": "Project (Information Technology)",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4078",
    "classNo": "CL03",
    "name": "Project (Information Technology)",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC401"
  },
  {
    "code": "CCIT4078",
    "classNo": "CL03",
    "name": "Project (Information Technology)",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC401"
  },
  {
    "code": "CCIT4079",
    "classNo": "CL01",
    "name": "Big Data Applications and Analytics",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4079",
    "classNo": "CL01",
    "name": "Big Data Applications and Analytics",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4079",
    "classNo": "CL02",
    "name": "Big Data Applications and Analytics",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4079",
    "classNo": "CL02",
    "name": "Big Data Applications and Analytics",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL01",
    "name": "Project on Knowledge Products Development",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL01",
    "name": "Project on Knowledge Products Development",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL02",
    "name": "Project on Knowledge Products Development",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL02",
    "name": "Project on Knowledge Products Development",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL03",
    "name": "Project on Knowledge Products Development",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL03",
    "name": "Project on Knowledge Products Development",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL04",
    "name": "Project on Knowledge Products Development",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL04",
    "name": "Project on Knowledge Products Development",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL05",
    "name": "Project on Knowledge Products Development",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL05",
    "name": "Project on Knowledge Products Development",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL06",
    "name": "Project on Knowledge Products Development",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL06",
    "name": "Project on Knowledge Products Development",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL07",
    "name": "Project on Knowledge Products Development",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL07",
    "name": "Project on Knowledge Products Development",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL08",
    "name": "Project on Knowledge Products Development",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL08",
    "name": "Project on Knowledge Products Development",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL09",
    "name": "Project on Knowledge Products Development",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL09",
    "name": "Project on Knowledge Products Development",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL10",
    "name": "Project on Knowledge Products Development",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL10",
    "name": "Project on Knowledge Products Development",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL11",
    "name": "Project on Knowledge Products Development",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL11",
    "name": "Project on Knowledge Products Development",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL12",
    "name": "Project on Knowledge Products Development",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL12",
    "name": "Project on Knowledge Products Development",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL13",
    "name": "Project on Knowledge Products Development",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4080",
    "classNo": "CL13",
    "name": "Project on Knowledge Products Development",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4081",
    "classNo": "CL01",
    "name": "Introduction to Analog Circuits",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4081",
    "classNo": "CL01",
    "name": "Introduction to Analog Circuits",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4081",
    "classNo": "CL02",
    "name": "Introduction to Analog Circuits",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4081",
    "classNo": "CL02",
    "name": "Introduction to Analog Circuits",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4081",
    "classNo": "CL03",
    "name": "Introduction to Analog Circuits",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4081",
    "classNo": "CL03",
    "name": "Introduction to Analog Circuits",
    "day": "Mon",
    "start": "19:00",
    "end": "20:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4081",
    "classNo": "CL04",
    "name": "Introduction to Analog Circuits",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4081",
    "classNo": "CL04",
    "name": "Introduction to Analog Circuits",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4081",
    "classNo": "CL05",
    "name": "Introduction to Analog Circuits",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC701"
  },
  {
    "code": "CCIT4081",
    "classNo": "CL05",
    "name": "Introduction to Analog Circuits",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC701"
  },
  {
    "code": "CCIT4087",
    "classNo": "CL01",
    "name": "Statistics for Data Science I",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4087",
    "classNo": "CL01",
    "name": "Statistics for Data Science I",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4087",
    "classNo": "CL02",
    "name": "Statistics for Data Science I",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4087",
    "classNo": "CL02",
    "name": "Statistics for Data Science I",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4089",
    "classNo": "CL01",
    "name": "Elements of Geology",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC709"
  },
  {
    "code": "CCIT4089",
    "classNo": "CL01",
    "name": "Elements of Geology",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC709"
  },
  {
    "code": "CCIT4089",
    "classNo": "CL02",
    "name": "Elements of Geology",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC508"
  },
  {
    "code": "CCIT4089",
    "classNo": "CL02",
    "name": "Elements of Geology",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC508"
  },
  {
    "code": "CCIT4089",
    "classNo": "CL03",
    "name": "Elements of Geology",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC508"
  },
  {
    "code": "CCIT4089",
    "classNo": "CL03",
    "name": "Elements of Geology",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC508"
  },
  {
    "code": "CCIT4090",
    "classNo": "CL01",
    "name": "Description of Rocks and Minerals",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "ISP301"
  },
  {
    "code": "CCIT4090",
    "classNo": "CL01",
    "name": "Description of Rocks and Minerals",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "ISP301"
  },
  {
    "code": "CCIT4093",
    "classNo": "CL01",
    "name": "Machine Learning",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4093",
    "classNo": "CL01",
    "name": "Machine Learning",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4093",
    "classNo": "CL02",
    "name": "Machine Learning",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4093",
    "classNo": "CL02",
    "name": "Machine Learning",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4093",
    "classNo": "CL03",
    "name": "Machine Learning",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4093",
    "classNo": "CL03",
    "name": "Machine Learning",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4094",
    "classNo": "CL01",
    "name": "Statistics for Data Science II",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4094",
    "classNo": "CL01",
    "name": "Statistics for Data Science II",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4096",
    "classNo": "CL01",
    "name": "Project (Data Science)",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4096",
    "classNo": "CL01",
    "name": "Project (Data Science)",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4101",
    "classNo": "CL01",
    "name": "Soil Mechanics",
    "day": "Thu",
    "start": "19:00",
    "end": "22:00",
    "room": "KEC506"
  },
  {
    "code": "CCIT4106",
    "classNo": "CL01",
    "name": "Cloud Architecting Solution",
    "day": "Wed",
    "start": "19:00",
    "end": "22:00",
    "room": "KEC401"
  },
  {
    "code": "CCIT4107",
    "classNo": "CL01",
    "name": "Project (Geotechnical Engineering)",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4107",
    "classNo": "CL01",
    "name": "Project (Geotechnical Engineering)",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL01",
    "name": "AI and Digital Literacy",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC310"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL01",
    "name": "AI and Digital Literacy",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC310"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL02",
    "name": "AI and Digital Literacy",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CTC508"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL02",
    "name": "AI and Digital Literacy",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CTC508"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL03",
    "name": "AI and Digital Literacy",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC203"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL03",
    "name": "AI and Digital Literacy",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC203"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL04",
    "name": "AI and Digital Literacy",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC203"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL04",
    "name": "AI and Digital Literacy",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC203"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL05",
    "name": "AI and Digital Literacy",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC203"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL05",
    "name": "AI and Digital Literacy",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC203"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL06",
    "name": "AI and Digital Literacy",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC203"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL06",
    "name": "AI and Digital Literacy",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC203"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL07",
    "name": "AI and Digital Literacy",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC310"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL07",
    "name": "AI and Digital Literacy",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC310"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL08",
    "name": "AI and Digital Literacy",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC310"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL08",
    "name": "AI and Digital Literacy",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC310"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL09",
    "name": "AI and Digital Literacy",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC310"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL09",
    "name": "AI and Digital Literacy",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC310"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL10",
    "name": "AI and Digital Literacy",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC203"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL10",
    "name": "AI and Digital Literacy",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC203"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL11",
    "name": "AI and Digital Literacy",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC203"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL11",
    "name": "AI and Digital Literacy",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC203"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL12",
    "name": "AI and Digital Literacy",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC310"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL12",
    "name": "AI and Digital Literacy",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC310"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL13",
    "name": "AI and Digital Literacy",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1204"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL13",
    "name": "AI and Digital Literacy",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1204"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL14",
    "name": "AI and Digital Literacy",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1204"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL14",
    "name": "AI and Digital Literacy",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1204"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL15",
    "name": "AI and Digital Literacy",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC309"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL15",
    "name": "AI and Digital Literacy",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC309"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL16",
    "name": "AI and Digital Literacy",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL16",
    "name": "AI and Digital Literacy",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL17",
    "name": "AI and Digital Literacy",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC309"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL17",
    "name": "AI and Digital Literacy",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC309"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL18",
    "name": "AI and Digital Literacy",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL18",
    "name": "AI and Digital Literacy",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL19",
    "name": "AI and Digital Literacy",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC309"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL19",
    "name": "AI and Digital Literacy",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC309"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL20",
    "name": "AI and Digital Literacy",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC309"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL20",
    "name": "AI and Digital Literacy",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC309"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL21",
    "name": "AI and Digital Literacy",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC309"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL21",
    "name": "AI and Digital Literacy",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC309"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL22",
    "name": "AI and Digital Literacy",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC910"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL22",
    "name": "AI and Digital Literacy",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC910"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL23",
    "name": "AI and Digital Literacy",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL23",
    "name": "AI and Digital Literacy",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL24",
    "name": "AI and Digital Literacy",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC309"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL24",
    "name": "AI and Digital Literacy",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC309"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL25",
    "name": "AI and Digital Literacy",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC309"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL25",
    "name": "AI and Digital Literacy",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC309"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL26",
    "name": "AI and Digital Literacy",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL26",
    "name": "AI and Digital Literacy",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL27",
    "name": "AI and Digital Literacy",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC309"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL27",
    "name": "AI and Digital Literacy",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC309"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL28",
    "name": "AI and Digital Literacy",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL28",
    "name": "AI and Digital Literacy",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL29",
    "name": "AI and Digital Literacy",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC309"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL29",
    "name": "AI and Digital Literacy",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC309"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL30",
    "name": "AI and Digital Literacy",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL30",
    "name": "AI and Digital Literacy",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL31",
    "name": "AI and Digital Literacy",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC309"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL31",
    "name": "AI and Digital Literacy",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC309"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL32",
    "name": "AI and Digital Literacy",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL32",
    "name": "AI and Digital Literacy",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL33",
    "name": "AI and Digital Literacy",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL33",
    "name": "AI and Digital Literacy",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL34",
    "name": "AI and Digital Literacy",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC909"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL34",
    "name": "AI and Digital Literacy",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC909"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL35",
    "name": "AI and Digital Literacy",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL35",
    "name": "AI and Digital Literacy",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL36",
    "name": "AI and Digital Literacy",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC901"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL36",
    "name": "AI and Digital Literacy",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC901"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL37",
    "name": "AI and Digital Literacy",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL37",
    "name": "AI and Digital Literacy",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL38",
    "name": "AI and Digital Literacy",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC902"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL38",
    "name": "AI and Digital Literacy",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC902"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL39",
    "name": "AI and Digital Literacy",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC908"
  },
  {
    "code": "CCIT4109",
    "classNo": "CL39",
    "name": "AI and Digital Literacy",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC908"
  },
  {
    "code": "CCIT4200",
    "classNo": "CL01",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KECTheatre"
  },
  {
    "code": "CCIT4200",
    "classNo": "CL02",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KECTheatre"
  },
  {
    "code": "CCIT4200",
    "classNo": "CL03",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KECTheatre"
  },
  {
    "code": "CCIT4200",
    "classNo": "CL04",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KECTheatre"
  },
  {
    "code": "CCIT4200",
    "classNo": "CL05",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KECTheatre"
  },
  {
    "code": "CCIT4200",
    "classNo": "CL06",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KECTheatre"
  },
  {
    "code": "CCIT4200",
    "classNo": "CL07",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KECTheatre"
  },
  {
    "code": "CCIT4200",
    "classNo": "CL08",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC704"
  },
  {
    "code": "CCIT4200",
    "classNo": "CL09",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC801"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT01",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1001"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT02",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1001"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT03",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1003A"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT04",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1003A"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT05",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC402"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT06",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC402"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT07",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1003A"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT08",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1003A"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT09",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1003A"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT10",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1003A"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT11",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC402"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT12",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC402"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT13",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC402"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT14",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC402"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT15",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC704"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT16",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC704"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT17",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC402"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT18",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC402"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT19",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1001"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT20",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1001"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT21",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC402"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT22",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC402"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT23",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC605"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT24",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC605"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT25",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC605"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT26",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC605"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT27",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1001"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT28",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1001"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT29",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1003A"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT30",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1003A"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT31",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC402"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT32",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC402"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT33",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1003A"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT34",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1003A"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT35",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC402"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT36",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC402"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT37",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC402"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT38",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC402"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT39",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC402"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT40",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC402"
  },
  {
    "code": "CCIT4200",
    "classNo": "CT41",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1003A"
  },
  {
    "code": "CCJK3002",
    "classNo": "CL01",
    "name": "Japanese I",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK803"
  },
  {
    "code": "CCJK3002",
    "classNo": "CL01",
    "name": "Japanese I",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK803"
  },
  {
    "code": "CCJK3002",
    "classNo": "CL01",
    "name": "Japanese I",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK801"
  },
  {
    "code": "CCJK3002",
    "classNo": "CL01",
    "name": "Japanese I",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK801"
  },
  {
    "code": "CCJK3002",
    "classNo": "CL01",
    "name": "Japanese I",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK803"
  },
  {
    "code": "CCJK3002",
    "classNo": "CL01",
    "name": "Japanese I",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK803"
  },
  {
    "code": "CCJK3002",
    "classNo": "CL02",
    "name": "Japanese I",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK702"
  },
  {
    "code": "CCJK3002",
    "classNo": "CL02",
    "name": "Japanese I",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK702"
  },
  {
    "code": "CCJK3002",
    "classNo": "CL02",
    "name": "Japanese I",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK602"
  },
  {
    "code": "CCJK3002",
    "classNo": "CL02",
    "name": "Japanese I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK602"
  },
  {
    "code": "CCJK3002",
    "classNo": "CL02",
    "name": "Japanese I",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK702"
  },
  {
    "code": "CCJK3002",
    "classNo": "CL02",
    "name": "Japanese I",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK702"
  },
  {
    "code": "CCJK3002",
    "classNo": "CL03",
    "name": "Japanese I",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK801"
  },
  {
    "code": "CCJK3002",
    "classNo": "CL03",
    "name": "Japanese I",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK801"
  },
  {
    "code": "CCJK3002",
    "classNo": "CL03",
    "name": "Japanese I",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK702"
  },
  {
    "code": "CCJK3002",
    "classNo": "CL03",
    "name": "Japanese I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK702"
  },
  {
    "code": "CCJK3002",
    "classNo": "CL03",
    "name": "Japanese I",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK801"
  },
  {
    "code": "CCJK3002",
    "classNo": "CL03",
    "name": "Japanese I",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK801"
  },
  {
    "code": "CCJK3002",
    "classNo": "CL04",
    "name": "Japanese I",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK802"
  },
  {
    "code": "CCJK3002",
    "classNo": "CL04",
    "name": "Japanese I",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK802"
  },
  {
    "code": "CCJK3002",
    "classNo": "CL04",
    "name": "Japanese I",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK803"
  },
  {
    "code": "CCJK3002",
    "classNo": "CL04",
    "name": "Japanese I",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK803"
  },
  {
    "code": "CCJK3002",
    "classNo": "CL04",
    "name": "Japanese I",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK802"
  },
  {
    "code": "CCJK3002",
    "classNo": "CL04",
    "name": "Japanese I",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK802"
  },
  {
    "code": "CCJK3005",
    "classNo": "CL01",
    "name": "Korean I",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK803"
  },
  {
    "code": "CCJK3005",
    "classNo": "CL01",
    "name": "Korean I",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK803"
  },
  {
    "code": "CCJK3005",
    "classNo": "CL01",
    "name": "Korean I",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK801"
  },
  {
    "code": "CCJK3005",
    "classNo": "CL01",
    "name": "Korean I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK801"
  },
  {
    "code": "CCJK3005",
    "classNo": "CL01",
    "name": "Korean I",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK803"
  },
  {
    "code": "CCJK3005",
    "classNo": "CL01",
    "name": "Korean I",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK803"
  },
  {
    "code": "CCJK3005",
    "classNo": "CL02",
    "name": "Korean I",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK802"
  },
  {
    "code": "CCJK3005",
    "classNo": "CL02",
    "name": "Korean I",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK802"
  },
  {
    "code": "CCJK3005",
    "classNo": "CL02",
    "name": "Korean I",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK803"
  },
  {
    "code": "CCJK3005",
    "classNo": "CL02",
    "name": "Korean I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK803"
  },
  {
    "code": "CCJK3005",
    "classNo": "CL02",
    "name": "Korean I",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK802"
  },
  {
    "code": "CCJK3005",
    "classNo": "CL02",
    "name": "Korean I",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK802"
  },
  {
    "code": "CCJK4005",
    "classNo": "CL01",
    "name": "Understanding Popular Culture in Japan",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK803"
  },
  {
    "code": "CCJK4005",
    "classNo": "CL01",
    "name": "Understanding Popular Culture in Japan",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK803"
  },
  {
    "code": "CCJK4005",
    "classNo": "CL02",
    "name": "Understanding Popular Culture in Japan",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK802"
  },
  {
    "code": "CCJK4005",
    "classNo": "CL02",
    "name": "Understanding Popular Culture in Japan",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK802"
  },
  {
    "code": "CCJK4005",
    "classNo": "CL03",
    "name": "Understanding Popular Culture in Japan",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK802"
  },
  {
    "code": "CCJK4005",
    "classNo": "CL03",
    "name": "Understanding Popular Culture in Japan",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK802"
  },
  {
    "code": "CCJK4005",
    "classNo": "CL04",
    "name": "Understanding Popular Culture in Japan",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK601"
  },
  {
    "code": "CCJK4005",
    "classNo": "CL04",
    "name": "Understanding Popular Culture in Japan",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK601"
  },
  {
    "code": "CCJK4010",
    "classNo": "CL01",
    "name": "Understanding Korean Culture",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK802"
  },
  {
    "code": "CCJK4010",
    "classNo": "CL01",
    "name": "Understanding Korean Culture",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK802"
  },
  {
    "code": "CCJK4010",
    "classNo": "CL02",
    "name": "Understanding Korean Culture",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK802"
  },
  {
    "code": "CCJK4010",
    "classNo": "CL02",
    "name": "Understanding Korean Culture",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK802"
  },
  {
    "code": "CCJK4010",
    "classNo": "CL03",
    "name": "Understanding Korean Culture",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEK601"
  },
  {
    "code": "CCJK4010",
    "classNo": "CL03",
    "name": "Understanding Korean Culture",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEK601"
  },
  {
    "code": "CCJK4010",
    "classNo": "CL04",
    "name": "Understanding Korean Culture",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEK701"
  },
  {
    "code": "CCJK4010",
    "classNo": "CL04",
    "name": "Understanding Korean Culture",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEK701"
  },
  {
    "code": "CCLW4001",
    "classNo": "CL01",
    "name": "Introduction to Hong Kong Law and Legal Practice",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC312"
  },
  {
    "code": "CCLW4001",
    "classNo": "CL01",
    "name": "Introduction to Hong Kong Law and Legal Practice",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC312"
  },
  {
    "code": "CCLW4001",
    "classNo": "CL02",
    "name": "Introduction to Hong Kong Law and Legal Practice",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC311"
  },
  {
    "code": "CCLW4001",
    "classNo": "CL02",
    "name": "Introduction to Hong Kong Law and Legal Practice",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC311"
  },
  {
    "code": "CCLW4005",
    "classNo": "CL01",
    "name": "Criminal Law and Procedure",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC616"
  },
  {
    "code": "CCLW4005",
    "classNo": "CL01",
    "name": "Criminal Law and Procedure",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC616"
  },
  {
    "code": "CCLW4005",
    "classNo": "CL02",
    "name": "Criminal Law and Procedure",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC602"
  },
  {
    "code": "CCLW4005",
    "classNo": "CL02",
    "name": "Criminal Law and Procedure",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC602"
  },
  {
    "code": "CCLW4008",
    "classNo": "CL01",
    "name": "Introduction to Law and Hong Kong Legal System",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CTC501"
  },
  {
    "code": "CCLW4008",
    "classNo": "CL01",
    "name": "Introduction to Law and Hong Kong Legal System",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CTC501"
  },
  {
    "code": "CCLW4009",
    "classNo": "CL01",
    "name": "Business Associations",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CTC505"
  },
  {
    "code": "CCLW4009",
    "classNo": "CL01",
    "name": "Business Associations",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CTC505"
  },
  {
    "code": "CCLW4012",
    "classNo": "CL01",
    "name": "Law and Contractual Transactions",
    "day": "Sat",
    "start": "14:30",
    "end": "15:50",
    "room": "CTC505"
  },
  {
    "code": "CCLW4012",
    "classNo": "CL01",
    "name": "Law and Contractual Transactions",
    "day": "Sat",
    "start": "16:00",
    "end": "17:20",
    "room": "CTC505"
  },
  {
    "code": "CCLW4015",
    "classNo": "CL01",
    "name": "Law of Succession and Probate Practice",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CTC501"
  },
  {
    "code": "CCLW4015",
    "classNo": "CL01",
    "name": "Law of Succession and Probate Practice",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CTC501"
  },
  {
    "code": "CCLW4017",
    "classNo": "CL01",
    "name": "Introduction to the Mainland Legal System",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CTC501"
  },
  {
    "code": "CCLW4017",
    "classNo": "CL01",
    "name": "Introduction to the Mainland Legal System",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CTC501"
  },
  {
    "code": "CCLW4018",
    "classNo": "CL01",
    "name": "Civil Procedure I and II",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CTC501"
  },
  {
    "code": "CCLW4018",
    "classNo": "CL01",
    "name": "Civil Procedure I and II",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CTC501"
  },
  {
    "code": "CCLW4019",
    "classNo": "CL01",
    "name": "Professional Responsibility and Advocacy (09:00 AM-12:00 PM)",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "CTC505"
  },
  {
    "code": "CCLW4019",
    "classNo": "CL01",
    "name": "Professional Responsibility and Advocacy (09:00 AM-12:00 PM)",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "CTC505"
  },
  {
    "code": "CCLW4019",
    "classNo": "CL01",
    "name": "Professional Responsibility and Advocacy (09:00 AM-12:00 PM)",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "CTC505"
  },
  {
    "code": "CCLW4023",
    "classNo": "CL01",
    "name": "Legal Research and Writing",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC314"
  },
  {
    "code": "CCLW4023",
    "classNo": "CL02",
    "name": "Legal Research and Writing",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC314"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL01",
    "name": "Basic Mathematics",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KED103"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL01",
    "name": "Basic Mathematics",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KED103"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL02",
    "name": "Basic Mathematics",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KED102"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL02",
    "name": "Basic Mathematics",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KED102"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL03",
    "name": "Basic Mathematics",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KED103"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL03",
    "name": "Basic Mathematics",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KED103"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL04",
    "name": "Basic Mathematics",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KED102"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL04",
    "name": "Basic Mathematics",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KED102"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL05",
    "name": "Basic Mathematics",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KED104"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL05",
    "name": "Basic Mathematics",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KED104"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL06",
    "name": "Basic Mathematics",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KED101"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL06",
    "name": "Basic Mathematics",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KED101"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL07",
    "name": "Basic Mathematics",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KED101"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL07",
    "name": "Basic Mathematics",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KED101"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL08",
    "name": "Basic Mathematics",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KED102"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL08",
    "name": "Basic Mathematics",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KED102"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL09",
    "name": "Basic Mathematics",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KED102"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL09",
    "name": "Basic Mathematics",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KED102"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL10",
    "name": "Basic Mathematics",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KED102"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL10",
    "name": "Basic Mathematics",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KED102"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL11",
    "name": "Basic Mathematics",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KED101"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL11",
    "name": "Basic Mathematics",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KED101"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL12",
    "name": "Basic Mathematics",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KED101"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL12",
    "name": "Basic Mathematics",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KED101"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL13",
    "name": "Basic Mathematics",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CTC506"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL13",
    "name": "Basic Mathematics",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CTC506"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL14",
    "name": "Basic Mathematics",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CTC506"
  },
  {
    "code": "CCMA3003",
    "classNo": "CL14",
    "name": "Basic Mathematics",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CTC506"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL01",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC607"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL01",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC607"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL02",
    "name": "Quantitative Analysis I",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC711"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL02",
    "name": "Quantitative Analysis I",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC711"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL03",
    "name": "Quantitative Analysis I",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC605"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL03",
    "name": "Quantitative Analysis I",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC605"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL04",
    "name": "Quantitative Analysis I",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC506"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL04",
    "name": "Quantitative Analysis I",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC506"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL05",
    "name": "Quantitative Analysis I",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC204"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL05",
    "name": "Quantitative Analysis I",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC204"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL06",
    "name": "Quantitative Analysis I",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC611"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL06",
    "name": "Quantitative Analysis I",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC611"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL07",
    "name": "Quantitative Analysis I",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC510"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL07",
    "name": "Quantitative Analysis I",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC510"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL08",
    "name": "Quantitative Analysis I",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC710"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL08",
    "name": "Quantitative Analysis I",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC710"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL09",
    "name": "Quantitative Analysis I",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC611"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL09",
    "name": "Quantitative Analysis I",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC611"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL10",
    "name": "Quantitative Analysis I",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC607"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL10",
    "name": "Quantitative Analysis I",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC607"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL11",
    "name": "Quantitative Analysis I",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC606"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL11",
    "name": "Quantitative Analysis I",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC606"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL12",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC606"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL12",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC606"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL13",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC611"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL13",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC611"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL14",
    "name": "Quantitative Analysis I",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC201"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL14",
    "name": "Quantitative Analysis I",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC201"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL15",
    "name": "Quantitative Analysis I",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC710"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL15",
    "name": "Quantitative Analysis I",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC710"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL16",
    "name": "Quantitative Analysis I",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC607"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL16",
    "name": "Quantitative Analysis I",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC607"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL17",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC605"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL17",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC605"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL18",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC607"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL18",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC607"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL19",
    "name": "Quantitative Analysis I",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC707"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL19",
    "name": "Quantitative Analysis I",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC707"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL20",
    "name": "Quantitative Analysis I",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC606"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL20",
    "name": "Quantitative Analysis I",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC606"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL21",
    "name": "Quantitative Analysis I",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC706"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL21",
    "name": "Quantitative Analysis I",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC706"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL22",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC606"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL22",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC606"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL23",
    "name": "Quantitative Analysis I",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC510"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL23",
    "name": "Quantitative Analysis I",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC510"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL24",
    "name": "Quantitative Analysis I",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC606"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL24",
    "name": "Quantitative Analysis I",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC606"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL25",
    "name": "Quantitative Analysis I",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC606"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL25",
    "name": "Quantitative Analysis I",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC606"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL26",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC510"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL26",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC510"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL27",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC509"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL27",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC509"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL28",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC602"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL28",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC602"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL29",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC304"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL29",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC304"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL30",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL30",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL31",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1201"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL31",
    "name": "Quantitative Analysis I",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1201"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL32",
    "name": "Quantitative Analysis I",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC507"
  },
  {
    "code": "CCMA4001",
    "classNo": "CL32",
    "name": "Quantitative Analysis I",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC507"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL01",
    "name": "Algebra",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC605"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL01",
    "name": "Algebra",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC605"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL02",
    "name": "Algebra",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC509"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL02",
    "name": "Algebra",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC509"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL03",
    "name": "Algebra",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC605"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL03",
    "name": "Algebra",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC605"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL04",
    "name": "Algebra",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC509"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL04",
    "name": "Algebra",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC509"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL05",
    "name": "Algebra",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC504"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL05",
    "name": "Algebra",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC504"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL06",
    "name": "Algebra",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC611"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL06",
    "name": "Algebra",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC611"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL07",
    "name": "Algebra",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC506"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL07",
    "name": "Algebra",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC506"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL08",
    "name": "Algebra",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC607"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL08",
    "name": "Algebra",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC607"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL09",
    "name": "Algebra",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC605"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL09",
    "name": "Algebra",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC605"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL10",
    "name": "Algebra",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC510"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL10",
    "name": "Algebra",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC510"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL11",
    "name": "Algebra",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC506"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL11",
    "name": "Algebra",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC506"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL12",
    "name": "Algebra",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC605"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL12",
    "name": "Algebra",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC605"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL13",
    "name": "Algebra",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC505"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL13",
    "name": "Algebra",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC505"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL14",
    "name": "Algebra",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC510"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL14",
    "name": "Algebra",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC510"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL15",
    "name": "Algebra",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC510"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL15",
    "name": "Algebra",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC510"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL16",
    "name": "Algebra",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC504"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL16",
    "name": "Algebra",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC504"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL17",
    "name": "Algebra",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC509"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL17",
    "name": "Algebra",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC509"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL18",
    "name": "Algebra",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC506"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL18",
    "name": "Algebra",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC506"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL19",
    "name": "Algebra",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC606"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL19",
    "name": "Algebra",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC606"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL20",
    "name": "Algebra",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC505"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL20",
    "name": "Algebra",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC505"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL21",
    "name": "Algebra",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC505"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL21",
    "name": "Algebra",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC505"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL22",
    "name": "Algebra",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC506"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL22",
    "name": "Algebra",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC506"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL23",
    "name": "Algebra",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC805"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL23",
    "name": "Algebra",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC805"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL24",
    "name": "Algebra",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC605"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL24",
    "name": "Algebra",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC605"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL25",
    "name": "Algebra",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC509"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL25",
    "name": "Algebra",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC509"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL26",
    "name": "Algebra",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC509"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL26",
    "name": "Algebra",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC509"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL27",
    "name": "Algebra",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC504"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL27",
    "name": "Algebra",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC504"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL28",
    "name": "Algebra",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC510"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL28",
    "name": "Algebra",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC510"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL29",
    "name": "Algebra",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC505"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL29",
    "name": "Algebra",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC505"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL30",
    "name": "Algebra",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC602"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL30",
    "name": "Algebra",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC602"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL31",
    "name": "Algebra",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC504"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL31",
    "name": "Algebra",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC504"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL32",
    "name": "Algebra",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC504"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL32",
    "name": "Algebra",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC504"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL33",
    "name": "Algebra",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC505"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL33",
    "name": "Algebra",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC505"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL34",
    "name": "Algebra",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC506"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL34",
    "name": "Algebra",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC506"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL35",
    "name": "Algebra",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC510"
  },
  {
    "code": "CCMA4002",
    "classNo": "CL35",
    "name": "Algebra",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC510"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL01",
    "name": "Elementary Statistics",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC506"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL01",
    "name": "Elementary Statistics",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC506"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL02",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC510"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL02",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC510"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL03",
    "name": "Elementary Statistics",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC509"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL03",
    "name": "Elementary Statistics",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC509"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL04",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC509"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL04",
    "name": "Elementary Statistics",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC509"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL05",
    "name": "Elementary Statistics",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC509"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL05",
    "name": "Elementary Statistics",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC509"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL06",
    "name": "Elementary Statistics",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC805"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL06",
    "name": "Elementary Statistics",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC805"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL07",
    "name": "Elementary Statistics",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC505"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL07",
    "name": "Elementary Statistics",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC505"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL08",
    "name": "Elementary Statistics",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1004"
  },
  {
    "code": "CCMA4008",
    "classNo": "CL08",
    "name": "Elementary Statistics",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1004"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL01",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-401"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL01",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-401"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL02",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-401"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL02",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-401"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL03",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-401"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL03",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-401"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL04",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-601"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL04",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-601"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL05",
    "name": "Applied Statistics",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-402"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL05",
    "name": "Applied Statistics",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-402"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL06",
    "name": "Applied Statistics",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-601"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL06",
    "name": "Applied Statistics",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-601"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL07",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-801"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL07",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-801"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL08",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-101"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL08",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-101"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL09",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-801"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL09",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-801"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL10",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL10",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL11",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-101"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL11",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-101"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL12",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-806"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL12",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-806"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL13",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-802"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL13",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-802"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL14",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-806"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL14",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-806"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL15",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL15",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL16",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-603"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL16",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-603"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL17",
    "name": "Applied Statistics",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-806"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL17",
    "name": "Applied Statistics",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-806"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL18",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-1007"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL18",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-1007"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL19",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-401"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL19",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-401"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL20",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-401"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL20",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-401"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL21",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-601"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL21",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-601"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL22",
    "name": "Applied Statistics",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-401"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL22",
    "name": "Applied Statistics",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-401"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL23",
    "name": "Applied Statistics",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-402"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL23",
    "name": "Applied Statistics",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-402"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL24",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-601"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL24",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-601"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL25",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-601"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL25",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-601"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL26",
    "name": "Applied Statistics",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-601"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL26",
    "name": "Applied Statistics",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-601"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL27",
    "name": "Applied Statistics",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-401"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL27",
    "name": "Applied Statistics",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-401"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL28",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC603"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL28",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC603"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL29",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC603"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL29",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC603"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL30",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC308"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL30",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC308"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL31",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC308"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL31",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC308"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL32",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC604"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL32",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC604"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL33",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC616"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL33",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC616"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL34",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC601"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL34",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC601"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL35",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC616"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL35",
    "name": "Applied Statistics",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC616"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL36",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC607"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL36",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC607"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL37",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC607"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL37",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC607"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL38",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC309"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL38",
    "name": "Applied Statistics",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC309"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL39",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC607"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL39",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC607"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL40",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC616"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL40",
    "name": "Applied Statistics",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC616"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL41",
    "name": "Applied Statistics",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC616"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL41",
    "name": "Applied Statistics",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC616"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL42",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC308"
  },
  {
    "code": "CCMA4009",
    "classNo": "CL42",
    "name": "Applied Statistics",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC308"
  },
  {
    "code": "CCMK4001",
    "classNo": "CL01",
    "name": "Advertising and Promotion",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-601"
  },
  {
    "code": "CCMK4001",
    "classNo": "CL01",
    "name": "Advertising and Promotion",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-601"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL01",
    "name": "Business Economics",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-701"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL01",
    "name": "Business Economics",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-701"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL02",
    "name": "Business Economics",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-705"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL02",
    "name": "Business Economics",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-705"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL03",
    "name": "Business Economics",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-803"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL03",
    "name": "Business Economics",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-803"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL04",
    "name": "Business Economics",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-704"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL04",
    "name": "Business Economics",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-704"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL05",
    "name": "Business Economics",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-704"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL05",
    "name": "Business Economics",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-704"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL06",
    "name": "Business Economics",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-803"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL06",
    "name": "Business Economics",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-803"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL07",
    "name": "Business Economics",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-704"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL07",
    "name": "Business Economics",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-704"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL08",
    "name": "Business Economics",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-704"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL08",
    "name": "Business Economics",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-704"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL09",
    "name": "Business Economics",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-705"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL09",
    "name": "Business Economics",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-705"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL10",
    "name": "Business Economics",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-705"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL10",
    "name": "Business Economics",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-705"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL11",
    "name": "Business Economics",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-704"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL11",
    "name": "Business Economics",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-704"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL12",
    "name": "Business Economics",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-704"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL12",
    "name": "Business Economics",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-704"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL13",
    "name": "Business Economics",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-704"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL13",
    "name": "Business Economics",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-704"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL14",
    "name": "Business Economics",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-704"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL14",
    "name": "Business Economics",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-704"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL15",
    "name": "Business Economics",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-702"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL15",
    "name": "Business Economics",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-702"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL16",
    "name": "Business Economics",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-702"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL16",
    "name": "Business Economics",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-702"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL17",
    "name": "Business Economics",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-604"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL17",
    "name": "Business Economics",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-604"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL18",
    "name": "Business Economics",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL18",
    "name": "Business Economics",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL19",
    "name": "Business Economics",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-705"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL19",
    "name": "Business Economics",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-705"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL20",
    "name": "Business Economics",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-903"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL20",
    "name": "Business Economics",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-903"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL21",
    "name": "Business Economics",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL21",
    "name": "Business Economics",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL22",
    "name": "Business Economics",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-702"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL22",
    "name": "Business Economics",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-702"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL23",
    "name": "Business Economics",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-704"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL23",
    "name": "Business Economics",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-704"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL24",
    "name": "Business Economics",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL24",
    "name": "Business Economics",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL25",
    "name": "Business Economics",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL25",
    "name": "Business Economics",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL26",
    "name": "Business Economics",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL26",
    "name": "Business Economics",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL27",
    "name": "Business Economics",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-702"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL27",
    "name": "Business Economics",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-702"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL28",
    "name": "Business Economics",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-604"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL28",
    "name": "Business Economics",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-604"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL29",
    "name": "Business Economics",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL29",
    "name": "Business Economics",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL30",
    "name": "Business Economics",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL30",
    "name": "Business Economics",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL31",
    "name": "Business Economics",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-803"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL31",
    "name": "Business Economics",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-803"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL32",
    "name": "Business Economics",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-704"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL32",
    "name": "Business Economics",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-704"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL33",
    "name": "Business Economics",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4002",
    "classNo": "CL33",
    "name": "Business Economics",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-602"
  },
  {
    "code": "CCMK4007",
    "classNo": "CL01",
    "name": "Marketing Research and Information",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-601"
  },
  {
    "code": "CCMK4007",
    "classNo": "CL01",
    "name": "Marketing Research and Information",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-601"
  },
  {
    "code": "CCMK4007",
    "classNo": "CL02",
    "name": "Marketing Research and Information",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-601"
  },
  {
    "code": "CCMK4007",
    "classNo": "CL02",
    "name": "Marketing Research and Information",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-601"
  },
  {
    "code": "CCMK4009",
    "classNo": "CL01",
    "name": "Public Relations",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-601"
  },
  {
    "code": "CCMK4009",
    "classNo": "CL01",
    "name": "Public Relations",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-601"
  },
  {
    "code": "CCMK4017",
    "classNo": "CL01",
    "name": "Essentials of Accounting",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-804"
  },
  {
    "code": "CCMK4017",
    "classNo": "CL01",
    "name": "Essentials of Accounting",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-804"
  },
  {
    "code": "CCMK4018",
    "classNo": "CL01",
    "name": "Event Management",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-801"
  },
  {
    "code": "CCMK4018",
    "classNo": "CL01",
    "name": "Event Management",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-801"
  },
  {
    "code": "CCMK4018",
    "classNo": "CL02",
    "name": "Event Management",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-402"
  },
  {
    "code": "CCMK4018",
    "classNo": "CL02",
    "name": "Event Management",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-402"
  },
  {
    "code": "CCPA4003",
    "classNo": "CL01",
    "name": "Introduction to Musics of the World",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC506"
  },
  {
    "code": "CCPA4003",
    "classNo": "CL01",
    "name": "Introduction to Musics of the World",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC506"
  },
  {
    "code": "CCPA4006",
    "classNo": "CL01",
    "name": "Music in Western History (Baroque through Late Romantic Periods)",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCPA4006",
    "classNo": "CL01",
    "name": "Music in Western History (Baroque through Late Romantic Periods)",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCPA4006",
    "classNo": "CL02",
    "name": "Music in Western History (Baroque through Late Romantic Periods)",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCPA4006",
    "classNo": "CL02",
    "name": "Music in Western History (Baroque through Late Romantic Periods)",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCSA8002",
    "classNo": "CL01",
    "name": "Seminar Series",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC204"
  },
  {
    "code": "CCSA8002",
    "classNo": "CL01",
    "name": "Seminar Series",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC204"
  },
  {
    "code": "CCSA8002",
    "classNo": "CL02",
    "name": "Seminar Series",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC311"
  },
  {
    "code": "CCSA8002",
    "classNo": "CL02",
    "name": "Seminar Series",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC311"
  },
  {
    "code": "CCSS3002",
    "classNo": "CL01",
    "name": "Multiple Intelligences and Competencies",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KED103"
  },
  {
    "code": "CCSS3002",
    "classNo": "CL01",
    "name": "Multiple Intelligences and Competencies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KED103"
  },
  {
    "code": "CCSS3002",
    "classNo": "CL02",
    "name": "Multiple Intelligences and Competencies",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KED103"
  },
  {
    "code": "CCSS3002",
    "classNo": "CL02",
    "name": "Multiple Intelligences and Competencies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KED103"
  },
  {
    "code": "CCSS3002",
    "classNo": "CL03",
    "name": "Multiple Intelligences and Competencies",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KED102"
  },
  {
    "code": "CCSS3002",
    "classNo": "CL03",
    "name": "Multiple Intelligences and Competencies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KED102"
  },
  {
    "code": "CCSS3002",
    "classNo": "CL04",
    "name": "Multiple Intelligences and Competencies",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KED102"
  },
  {
    "code": "CCSS3002",
    "classNo": "CL04",
    "name": "Multiple Intelligences and Competencies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KED102"
  },
  {
    "code": "CCSS3002",
    "classNo": "CL05",
    "name": "Multiple Intelligences and Competencies",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KED101"
  },
  {
    "code": "CCSS3002",
    "classNo": "CL05",
    "name": "Multiple Intelligences and Competencies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KED101"
  },
  {
    "code": "CCSS3002",
    "classNo": "CL06",
    "name": "Multiple Intelligences and Competencies",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KED101"
  },
  {
    "code": "CCSS3002",
    "classNo": "CL06",
    "name": "Multiple Intelligences and Competencies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KED101"
  },
  {
    "code": "CCSS3002",
    "classNo": "CL07",
    "name": "Multiple Intelligences and Competencies",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KED104"
  },
  {
    "code": "CCSS3002",
    "classNo": "CL07",
    "name": "Multiple Intelligences and Competencies",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KED104"
  },
  {
    "code": "CCSS3002",
    "classNo": "CL08",
    "name": "Multiple Intelligences and Competencies",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KED104"
  },
  {
    "code": "CCSS3002",
    "classNo": "CL08",
    "name": "Multiple Intelligences and Competencies",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KED104"
  },
  {
    "code": "CCSS3002",
    "classNo": "CL09",
    "name": "Multiple Intelligences and Competencies",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CTC505"
  },
  {
    "code": "CCSS3002",
    "classNo": "CL09",
    "name": "Multiple Intelligences and Competencies",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "CTC505"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL01",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC312"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL01",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC312"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL02",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC311"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL02",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC311"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL03",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC311"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL03",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC311"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL04",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC301"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL04",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC301"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL05",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC301"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL05",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC301"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL06",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC301"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL06",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC301"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL07",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC312"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL07",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC312"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL08",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC301"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL08",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC301"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL09",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC311"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL09",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC311"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL10",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC311"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL10",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC311"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL11",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC301"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL11",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC301"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL12",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC613"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL12",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC613"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL13",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC312"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL13",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC312"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL14",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC613"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL14",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC613"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL15",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC301"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL15",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC301"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL16",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC302"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL16",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC302"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL17",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE106"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL17",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE106"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL18",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE106"
  },
  {
    "code": "CCSS4004",
    "classNo": "CL18",
    "name": "Intra- and Interpersonal Competencies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE106"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL01",
    "name": "Social Problems in Contemporary Societies",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC506"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL01",
    "name": "Social Problems in Contemporary Societies",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC506"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL02",
    "name": "Social Problems in Contemporary Societies",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC504"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL02",
    "name": "Social Problems in Contemporary Societies",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC504"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL03",
    "name": "Social Problems in Contemporary Societies",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC509"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL03",
    "name": "Social Problems in Contemporary Societies",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC509"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL04",
    "name": "Social Problems in Contemporary Societies",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE106"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL04",
    "name": "Social Problems in Contemporary Societies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE106"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL05",
    "name": "Social Problems in Contemporary Societies",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE106"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL05",
    "name": "Social Problems in Contemporary Societies",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE106"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL06",
    "name": "Social Problems in Contemporary Societies",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE106"
  },
  {
    "code": "CCSS4005",
    "classNo": "CL06",
    "name": "Social Problems in Contemporary Societies",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE106"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL01",
    "name": "Introduction to Political Science",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC604"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL01",
    "name": "Introduction to Political Science",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC604"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL02",
    "name": "Introduction to Political Science",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC604"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL02",
    "name": "Introduction to Political Science",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC604"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL03",
    "name": "Introduction to Political Science",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC604"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL03",
    "name": "Introduction to Political Science",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC604"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL04",
    "name": "Introduction to Political Science",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC603"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL04",
    "name": "Introduction to Political Science",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC603"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL05",
    "name": "Introduction to Political Science",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC609"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL05",
    "name": "Introduction to Political Science",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "UNC609"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL06",
    "name": "Introduction to Political Science",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC603"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL06",
    "name": "Introduction to Political Science",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC603"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL07",
    "name": "Introduction to Political Science",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC309"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL07",
    "name": "Introduction to Political Science",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC309"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL08",
    "name": "Introduction to Political Science",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC309"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL08",
    "name": "Introduction to Political Science",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC309"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL09",
    "name": "Introduction to Political Science",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC604"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL09",
    "name": "Introduction to Political Science",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC604"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL10",
    "name": "Introduction to Political Science",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC309"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL10",
    "name": "Introduction to Political Science",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC309"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL11",
    "name": "Introduction to Political Science",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC616"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL11",
    "name": "Introduction to Political Science",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC616"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL12",
    "name": "Introduction to Political Science",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC616"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL12",
    "name": "Introduction to Political Science",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC616"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL13",
    "name": "Introduction to Political Science",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC607"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL13",
    "name": "Introduction to Political Science",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC607"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL14",
    "name": "Introduction to Political Science",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC604"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL14",
    "name": "Introduction to Political Science",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC604"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL15",
    "name": "Introduction to Political Science",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC603"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL15",
    "name": "Introduction to Political Science",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC603"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL16",
    "name": "Introduction to Political Science",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC308"
  },
  {
    "code": "CCSS4007",
    "classNo": "CL16",
    "name": "Introduction to Political Science",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC308"
  },
  {
    "code": "CCSS4008",
    "classNo": "CL01",
    "name": "Introduction to International Relations",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC602"
  },
  {
    "code": "CCSS4008",
    "classNo": "CL01",
    "name": "Introduction to International Relations",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC602"
  },
  {
    "code": "CCSS4008",
    "classNo": "CL02",
    "name": "Introduction to International Relations",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC603"
  },
  {
    "code": "CCSS4008",
    "classNo": "CL02",
    "name": "Introduction to International Relations",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC603"
  },
  {
    "code": "CCSS4008",
    "classNo": "CL03",
    "name": "Introduction to International Relations",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC603"
  },
  {
    "code": "CCSS4008",
    "classNo": "CL03",
    "name": "Introduction to International Relations",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC603"
  },
  {
    "code": "CCSS4009",
    "classNo": "CL01",
    "name": "Introduction to Psychology",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC303"
  },
  {
    "code": "CCSS4009",
    "classNo": "CL01",
    "name": "Introduction to Psychology",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC303"
  },
  {
    "code": "CCSS4009",
    "classNo": "CL02",
    "name": "Introduction to Psychology",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC303"
  },
  {
    "code": "CCSS4009",
    "classNo": "CL02",
    "name": "Introduction to Psychology",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC303"
  },
  {
    "code": "CCSS4009",
    "classNo": "CL03",
    "name": "Introduction to Psychology",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC303"
  },
  {
    "code": "CCSS4009",
    "classNo": "CL03",
    "name": "Introduction to Psychology",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC303"
  },
  {
    "code": "CCSS4009",
    "classNo": "CL04",
    "name": "Introduction to Psychology",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC303"
  },
  {
    "code": "CCSS4009",
    "classNo": "CL04",
    "name": "Introduction to Psychology",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC303"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT01",
    "name": "Introduction to Psychology",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC607"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT02",
    "name": "Introduction to Psychology",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC607"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT03",
    "name": "Introduction to Psychology",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "UNC602"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT04",
    "name": "Introduction to Psychology",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "UNC602"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT05",
    "name": "Introduction to Psychology",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC602"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT06",
    "name": "Introduction to Psychology",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC602"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT07",
    "name": "Introduction to Psychology",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC309"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT08",
    "name": "Introduction to Psychology",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC309"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT09",
    "name": "Introduction to Psychology",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "UNC602"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT10",
    "name": "Introduction to Psychology",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "UNC602"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT11",
    "name": "Introduction to Psychology",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC309"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT12",
    "name": "Introduction to Psychology",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC309"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT13",
    "name": "Introduction to Psychology",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC304"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT14",
    "name": "Introduction to Psychology",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC304"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT15",
    "name": "Introduction to Psychology",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC308"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT16",
    "name": "Introduction to Psychology",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC308"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT17",
    "name": "Introduction to Psychology",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC308"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT18",
    "name": "Introduction to Psychology",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC308"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT19",
    "name": "Introduction to Psychology",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC603"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT20",
    "name": "Introduction to Psychology",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC603"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT21",
    "name": "Introduction to Psychology",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC602"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT22",
    "name": "Introduction to Psychology",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC602"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT23",
    "name": "Introduction to Psychology",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC308"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT24",
    "name": "Introduction to Psychology",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC308"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT25",
    "name": "Introduction to Psychology",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC308"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT26",
    "name": "Introduction to Psychology",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC308"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT27",
    "name": "Introduction to Psychology",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC602"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT28",
    "name": "Introduction to Psychology",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC602"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT29",
    "name": "Introduction to Psychology",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC601"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT30",
    "name": "Introduction to Psychology",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC601"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT31",
    "name": "Introduction to Psychology",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT32",
    "name": "Introduction to Psychology",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT33",
    "name": "Introduction to Psychology",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT34",
    "name": "Introduction to Psychology",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT35",
    "name": "Introduction to Psychology",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC607"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT36",
    "name": "Introduction to Psychology",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC607"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT37",
    "name": "Introduction to Psychology",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC616"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT38",
    "name": "Introduction to Psychology",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC616"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT39",
    "name": "Introduction to Psychology",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC309"
  },
  {
    "code": "CCSS4009",
    "classNo": "CT40",
    "name": "Introduction to Psychology",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC309"
  },
  {
    "code": "CCSS4010",
    "classNo": "CL01",
    "name": "Introduction to Criminology",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC301"
  },
  {
    "code": "CCSS4010",
    "classNo": "CL01",
    "name": "Introduction to Criminology",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC301"
  },
  {
    "code": "CCSS4010",
    "classNo": "CL02",
    "name": "Introduction to Criminology",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC613"
  },
  {
    "code": "CCSS4010",
    "classNo": "CL02",
    "name": "Introduction to Criminology",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC613"
  },
  {
    "code": "CCSS4010",
    "classNo": "CL03",
    "name": "Introduction to Criminology",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC613"
  },
  {
    "code": "CCSS4010",
    "classNo": "CL03",
    "name": "Introduction to Criminology",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC613"
  },
  {
    "code": "CCSS4010",
    "classNo": "CL04",
    "name": "Introduction to Criminology",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC613"
  },
  {
    "code": "CCSS4010",
    "classNo": "CL04",
    "name": "Introduction to Criminology",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC613"
  },
  {
    "code": "CCSS4010",
    "classNo": "CL05",
    "name": "Introduction to Criminology",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC301"
  },
  {
    "code": "CCSS4010",
    "classNo": "CL05",
    "name": "Introduction to Criminology",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC301"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL01",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC612"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL01",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC612"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL02",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC613"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL02",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC613"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL03",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC311"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL03",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC311"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL04",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC613"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL04",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC613"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL05",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC613"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL05",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC613"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL06",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC314"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL06",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC314"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL07",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC314"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL07",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC314"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL08",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC314"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL08",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC314"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL09",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC314"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL09",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC314"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL10",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC314"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL10",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC314"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL11",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL11",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC11A3"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL12",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL12",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL13",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCSS4020",
    "classNo": "CL13",
    "name": "Introduction to Research Methods in Social Sciences",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCSS4022",
    "classNo": "CL01",
    "name": "Abnormal Psychology",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC612"
  },
  {
    "code": "CCSS4022",
    "classNo": "CL01",
    "name": "Abnormal Psychology",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC612"
  },
  {
    "code": "CCSS4022",
    "classNo": "CL02",
    "name": "Abnormal Psychology",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC302"
  },
  {
    "code": "CCSS4022",
    "classNo": "CL02",
    "name": "Abnormal Psychology",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC302"
  },
  {
    "code": "CCSS4022",
    "classNo": "CL03",
    "name": "Abnormal Psychology",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC301"
  },
  {
    "code": "CCSS4022",
    "classNo": "CL03",
    "name": "Abnormal Psychology",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC301"
  },
  {
    "code": "CCSS4022",
    "classNo": "CL04",
    "name": "Abnormal Psychology",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC315"
  },
  {
    "code": "CCSS4022",
    "classNo": "CL04",
    "name": "Abnormal Psychology",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC315"
  },
  {
    "code": "CCSS4022",
    "classNo": "CL05",
    "name": "Abnormal Psychology",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC613"
  },
  {
    "code": "CCSS4022",
    "classNo": "CL05",
    "name": "Abnormal Psychology",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC613"
  },
  {
    "code": "CCSS4023",
    "classNo": "CL01",
    "name": "Introduction to Positive Psychology",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC603"
  },
  {
    "code": "CCSS4023",
    "classNo": "CL01",
    "name": "Introduction to Positive Psychology",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC603"
  },
  {
    "code": "CCSS4023",
    "classNo": "CL02",
    "name": "Introduction to Positive Psychology",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC502"
  },
  {
    "code": "CCSS4023",
    "classNo": "CL02",
    "name": "Introduction to Positive Psychology",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC502"
  },
  {
    "code": "CCSS4025",
    "classNo": "CL01",
    "name": "Contemporary Social Work and Social Welfare",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC612"
  },
  {
    "code": "CCSS4025",
    "classNo": "CL01",
    "name": "Contemporary Social Work and Social Welfare",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC612"
  },
  {
    "code": "CCSS4025",
    "classNo": "CL02",
    "name": "Contemporary Social Work and Social Welfare",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC612"
  },
  {
    "code": "CCSS4025",
    "classNo": "CL02",
    "name": "Contemporary Social Work and Social Welfare",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC612"
  },
  {
    "code": "CCSS4025",
    "classNo": "CL03",
    "name": "Contemporary Social Work and Social Welfare",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC612"
  },
  {
    "code": "CCSS4025",
    "classNo": "CL03",
    "name": "Contemporary Social Work and Social Welfare",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC612"
  },
  {
    "code": "CCSS4025",
    "classNo": "CL04",
    "name": "Contemporary Social Work and Social Welfare",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC315"
  },
  {
    "code": "CCSS4025",
    "classNo": "CL04",
    "name": "Contemporary Social Work and Social Welfare",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC315"
  },
  {
    "code": "CCSS4025",
    "classNo": "CL05",
    "name": "Contemporary Social Work and Social Welfare",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC315"
  },
  {
    "code": "CCSS4025",
    "classNo": "CL05",
    "name": "Contemporary Social Work and Social Welfare",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC315"
  },
  {
    "code": "CCSS4025",
    "classNo": "CL06",
    "name": "Contemporary Social Work and Social Welfare",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC612"
  },
  {
    "code": "CCSS4025",
    "classNo": "CL06",
    "name": "Contemporary Social Work and Social Welfare",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC612"
  },
  {
    "code": "CCSS4025",
    "classNo": "CL07",
    "name": "Contemporary Social Work and Social Welfare",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC315"
  },
  {
    "code": "CCSS4025",
    "classNo": "CL07",
    "name": "Contemporary Social Work and Social Welfare",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC315"
  },
  {
    "code": "CCSS4030",
    "classNo": "CL01",
    "name": "Lifespan Development Psychology",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC612"
  },
  {
    "code": "CCSS4030",
    "classNo": "CL01",
    "name": "Lifespan Development Psychology",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC612"
  },
  {
    "code": "CCSS4030",
    "classNo": "CL02",
    "name": "Lifespan Development Psychology",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC613"
  },
  {
    "code": "CCSS4030",
    "classNo": "CL02",
    "name": "Lifespan Development Psychology",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC613"
  },
  {
    "code": "CCSS4030",
    "classNo": "CL03",
    "name": "Lifespan Development Psychology",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC612"
  },
  {
    "code": "CCSS4030",
    "classNo": "CL03",
    "name": "Lifespan Development Psychology",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC612"
  },
  {
    "code": "CCSS4030",
    "classNo": "CL04",
    "name": "Lifespan Development Psychology",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC315"
  },
  {
    "code": "CCSS4030",
    "classNo": "CL04",
    "name": "Lifespan Development Psychology",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC315"
  },
  {
    "code": "CCSS4030",
    "classNo": "CL05",
    "name": "Lifespan Development Psychology",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC315"
  },
  {
    "code": "CCSS4030",
    "classNo": "CL05",
    "name": "Lifespan Development Psychology",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC315"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL01",
    "name": "The Basics of Sociology",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC607"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL01",
    "name": "The Basics of Sociology",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC607"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL02",
    "name": "The Basics of Sociology",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC308"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL02",
    "name": "The Basics of Sociology",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC308"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL03",
    "name": "The Basics of Sociology",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC311"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL03",
    "name": "The Basics of Sociology",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC311"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL04",
    "name": "The Basics of Sociology",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC309"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL04",
    "name": "The Basics of Sociology",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC309"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL05",
    "name": "The Basics of Sociology",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC309"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL05",
    "name": "The Basics of Sociology",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC309"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL06",
    "name": "The Basics of Sociology",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC607"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL06",
    "name": "The Basics of Sociology",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "UNC607"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL07",
    "name": "The Basics of Sociology",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC601"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL07",
    "name": "The Basics of Sociology",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL08",
    "name": "The Basics of Sociology",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC601"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL08",
    "name": "The Basics of Sociology",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL09",
    "name": "The Basics of Sociology",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC607"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL09",
    "name": "The Basics of Sociology",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC607"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL10",
    "name": "The Basics of Sociology",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC608"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL10",
    "name": "The Basics of Sociology",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC608"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL11",
    "name": "The Basics of Sociology",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC601"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL11",
    "name": "The Basics of Sociology",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL12",
    "name": "The Basics of Sociology",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL12",
    "name": "The Basics of Sociology",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC601"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL13",
    "name": "The Basics of Sociology",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC601"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL13",
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
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC303"
  },
  {
    "code": "CCSS4035",
    "classNo": "CL14",
    "name": "The Basics of Sociology",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC303"
  },
  {
    "code": "CCSS4036",
    "classNo": "CL01",
    "name": "Ageing and Gerontology",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC314"
  },
  {
    "code": "CCSS4036",
    "classNo": "CL01",
    "name": "Ageing and Gerontology",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC314"
  },
  {
    "code": "CCSS4036",
    "classNo": "CL02",
    "name": "Ageing and Gerontology",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC315"
  },
  {
    "code": "CCSS4036",
    "classNo": "CL02",
    "name": "Ageing and Gerontology",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC315"
  },
  {
    "code": "CCSS4036",
    "classNo": "CL03",
    "name": "Ageing and Gerontology",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC314"
  },
  {
    "code": "CCSS4036",
    "classNo": "CL03",
    "name": "Ageing and Gerontology",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC314"
  },
  {
    "code": "CCSS4036",
    "classNo": "CL04",
    "name": "Ageing and Gerontology",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC315"
  },
  {
    "code": "CCSS4036",
    "classNo": "CL04",
    "name": "Ageing and Gerontology",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC315"
  },
  {
    "code": "CCSS4036",
    "classNo": "CL05",
    "name": "Ageing and Gerontology",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC302"
  },
  {
    "code": "CCSS4036",
    "classNo": "CL05",
    "name": "Ageing and Gerontology",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC302"
  },
  {
    "code": "CCSS4036",
    "classNo": "CL06",
    "name": "Ageing and Gerontology",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC314"
  },
  {
    "code": "CCSS4036",
    "classNo": "CL06",
    "name": "Ageing and Gerontology",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC314"
  },
  {
    "code": "CCSS4036",
    "classNo": "CL07",
    "name": "Ageing and Gerontology",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC315"
  },
  {
    "code": "CCSS4036",
    "classNo": "CL07",
    "name": "Ageing and Gerontology",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC315"
  },
  {
    "code": "CCSS4038",
    "classNo": "CL01",
    "name": "Comparative Politics in Pacific Asia",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC315"
  },
  {
    "code": "CCSS4038",
    "classNo": "CL01",
    "name": "Comparative Politics in Pacific Asia",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC315"
  },
  {
    "code": "CCSS4038",
    "classNo": "CL02",
    "name": "Comparative Politics in Pacific Asia",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC314"
  },
  {
    "code": "CCSS4038",
    "classNo": "CL02",
    "name": "Comparative Politics in Pacific Asia",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC314"
  },
  {
    "code": "CCSS4038",
    "classNo": "CL03",
    "name": "Comparative Politics in Pacific Asia",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC612"
  },
  {
    "code": "CCSS4038",
    "classNo": "CL03",
    "name": "Comparative Politics in Pacific Asia",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC612"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL01",
    "name": "Global Issues and Everyday Life",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC504"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL01",
    "name": "Global Issues and Everyday Life",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC504"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL02",
    "name": "Global Issues and Everyday Life",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC607"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL02",
    "name": "Global Issues and Everyday Life",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC607"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL03",
    "name": "Global Issues and Everyday Life",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC506"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL03",
    "name": "Global Issues and Everyday Life",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC506"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL04",
    "name": "Global Issues and Everyday Life",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE102"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL04",
    "name": "Global Issues and Everyday Life",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE102"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL05",
    "name": "Global Issues and Everyday Life",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE102"
  },
  {
    "code": "CCSS4043",
    "classNo": "CL05",
    "name": "Global Issues and Everyday Life",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE102"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL01",
    "name": "Health, Technology and Society",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC601"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL01",
    "name": "Health, Technology and Society",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL02",
    "name": "Health, Technology and Society",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC609"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL02",
    "name": "Health, Technology and Society",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC609"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL03",
    "name": "Health, Technology and Society",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEE106"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL03",
    "name": "Health, Technology and Society",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEE106"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL04",
    "name": "Health, Technology and Society",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE106"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL04",
    "name": "Health, Technology and Society",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEE106"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL05",
    "name": "Health, Technology and Society",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC501"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL05",
    "name": "Health, Technology and Society",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC501"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL06",
    "name": "Health, Technology and Society",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC6A3"
  },
  {
    "code": "CCSS4044",
    "classNo": "CL06",
    "name": "Health, Technology and Society",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC6A3"
  },
  {
    "code": "CCSS4045",
    "classNo": "CL01",
    "name": "Class and Inequality",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC601"
  },
  {
    "code": "CCSS4045",
    "classNo": "CL01",
    "name": "Class and Inequality",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4045",
    "classNo": "CL02",
    "name": "Class and Inequality",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC602"
  },
  {
    "code": "CCSS4045",
    "classNo": "CL02",
    "name": "Class and Inequality",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC602"
  },
  {
    "code": "CCSS4045",
    "classNo": "CL03",
    "name": "Class and Inequality",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC602"
  },
  {
    "code": "CCSS4045",
    "classNo": "CL03",
    "name": "Class and Inequality",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "UNC602"
  },
  {
    "code": "CCSS4045",
    "classNo": "CL04",
    "name": "Class and Inequality",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC602"
  },
  {
    "code": "CCSS4045",
    "classNo": "CL04",
    "name": "Class and Inequality",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC602"
  },
  {
    "code": "CCSS4045",
    "classNo": "CL05",
    "name": "Class and Inequality",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC607"
  },
  {
    "code": "CCSS4045",
    "classNo": "CL05",
    "name": "Class and Inequality",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC607"
  },
  {
    "code": "CCSS4048",
    "classNo": "CL01",
    "name": "Introduction to Human Geography",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC507"
  },
  {
    "code": "CCSS4048",
    "classNo": "CL01",
    "name": "Introduction to Human Geography",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC507"
  },
  {
    "code": "CCSS4048",
    "classNo": "CL02",
    "name": "Introduction to Human Geography",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC505"
  },
  {
    "code": "CCSS4048",
    "classNo": "CL02",
    "name": "Introduction to Human Geography",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC505"
  },
  {
    "code": "CCSS4048",
    "classNo": "CL03",
    "name": "Introduction to Human Geography",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC6A3"
  },
  {
    "code": "CCSS4048",
    "classNo": "CL03",
    "name": "Introduction to Human Geography",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC6A3"
  },
  {
    "code": "CCSS4048",
    "classNo": "CL04",
    "name": "Introduction to Human Geography",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC505"
  },
  {
    "code": "CCSS4048",
    "classNo": "CL04",
    "name": "Introduction to Human Geography",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC505"
  },
  {
    "code": "CCSS4048",
    "classNo": "CL05",
    "name": "Introduction to Human Geography",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC507"
  },
  {
    "code": "CCSS4048",
    "classNo": "CL05",
    "name": "Introduction to Human Geography",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC507"
  },
  {
    "code": "CCSS4048",
    "classNo": "CL06",
    "name": "Introduction to Human Geography",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC506"
  },
  {
    "code": "CCSS4048",
    "classNo": "CL06",
    "name": "Introduction to Human Geography",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC506"
  },
  {
    "code": "CCSS4048",
    "classNo": "CL07",
    "name": "Introduction to Human Geography",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4048",
    "classNo": "CL07",
    "name": "Introduction to Human Geography",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4051",
    "classNo": "CL01",
    "name": "Introduction to Physical Geography",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC6A5"
  },
  {
    "code": "CCSS4051",
    "classNo": "CL01",
    "name": "Introduction to Physical Geography",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC6A5"
  },
  {
    "code": "CCSS4051",
    "classNo": "CL02",
    "name": "Introduction to Physical Geography",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC506"
  },
  {
    "code": "CCSS4051",
    "classNo": "CL02",
    "name": "Introduction to Physical Geography",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC506"
  },
  {
    "code": "CCSS4051",
    "classNo": "CL03",
    "name": "Introduction to Physical Geography",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC6A3"
  },
  {
    "code": "CCSS4051",
    "classNo": "CL03",
    "name": "Introduction to Physical Geography",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC6A3"
  },
  {
    "code": "CCSS4051",
    "classNo": "CL04",
    "name": "Introduction to Physical Geography",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC506"
  },
  {
    "code": "CCSS4051",
    "classNo": "CL04",
    "name": "Introduction to Physical Geography",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC506"
  },
  {
    "code": "CCSS4051",
    "classNo": "CL05",
    "name": "Introduction to Physical Geography",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC506"
  },
  {
    "code": "CCSS4051",
    "classNo": "CL05",
    "name": "Introduction to Physical Geography",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC506"
  },
  {
    "code": "CCSS4051",
    "classNo": "CL06",
    "name": "Introduction to Physical Geography",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4051",
    "classNo": "CL06",
    "name": "Introduction to Physical Geography",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4051",
    "classNo": "CL07",
    "name": "Introduction to Physical Geography",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC505"
  },
  {
    "code": "CCSS4051",
    "classNo": "CL07",
    "name": "Introduction to Physical Geography",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC505"
  },
  {
    "code": "CCSS4052",
    "classNo": "CL01",
    "name": "Urban and Regional Development in China",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC505"
  },
  {
    "code": "CCSS4052",
    "classNo": "CL01",
    "name": "Urban and Regional Development in China",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC505"
  },
  {
    "code": "CCSS4052",
    "classNo": "CL02",
    "name": "Urban and Regional Development in China",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC505"
  },
  {
    "code": "CCSS4052",
    "classNo": "CL02",
    "name": "Urban and Regional Development in China",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC505"
  },
  {
    "code": "CCSS4052",
    "classNo": "CL03",
    "name": "Urban and Regional Development in China",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC6A3"
  },
  {
    "code": "CCSS4052",
    "classNo": "CL03",
    "name": "Urban and Regional Development in China",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC6A3"
  },
  {
    "code": "CCSS4053",
    "classNo": "CL01",
    "name": "Understanding and Managing Public Organisations",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC10A6"
  },
  {
    "code": "CCSS4053",
    "classNo": "CL01",
    "name": "Understanding and Managing Public Organisations",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC10A6"
  },
  {
    "code": "CCSS4055",
    "classNo": "CL01",
    "name": "Urban Planning for Smart and Sustainable Cities",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC505"
  },
  {
    "code": "CCSS4055",
    "classNo": "CL01",
    "name": "Urban Planning for Smart and Sustainable Cities",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC505"
  },
  {
    "code": "CCSS4055",
    "classNo": "CL02",
    "name": "Urban Planning for Smart and Sustainable Cities",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4055",
    "classNo": "CL02",
    "name": "Urban Planning for Smart and Sustainable Cities",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4055",
    "classNo": "CL03",
    "name": "Urban Planning for Smart and Sustainable Cities",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4055",
    "classNo": "CL03",
    "name": "Urban Planning for Smart and Sustainable Cities",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4055",
    "classNo": "CL04",
    "name": "Urban Planning for Smart and Sustainable Cities",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC505"
  },
  {
    "code": "CCSS4055",
    "classNo": "CL04",
    "name": "Urban Planning for Smart and Sustainable Cities",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC505"
  },
  {
    "code": "CCSS4055",
    "classNo": "CL05",
    "name": "Urban Planning for Smart and Sustainable Cities",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC505"
  },
  {
    "code": "CCSS4055",
    "classNo": "CL05",
    "name": "Urban Planning for Smart and Sustainable Cities",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC505"
  },
  {
    "code": "CCSS4200",
    "classNo": "CL01",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC502+503"
  },
  {
    "code": "CCSS4200",
    "classNo": "CL02",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC502+503"
  },
  {
    "code": "CCSS4200",
    "classNo": "CL03",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1205"
  },
  {
    "code": "CCSS4200",
    "classNo": "CL04",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1205"
  },
  {
    "code": "CCSS4200",
    "classNo": "CL05",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1205"
  },
  {
    "code": "CCSS4200",
    "classNo": "CL06",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1205"
  },
  {
    "code": "CCSS4200",
    "classNo": "CL07",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC502+503"
  },
  {
    "code": "CCSS4200",
    "classNo": "CL08",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC502+503"
  },
  {
    "code": "CCSS4200",
    "classNo": "CL09",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC312"
  },
  {
    "code": "CCSS4200",
    "classNo": "CL10",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC312"
  },
  {
    "code": "CCSS4200",
    "classNo": "CL11",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC312"
  },
  {
    "code": "CCSS4200",
    "classNo": "CL12",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC312"
  },
  {
    "code": "CCSS4200",
    "classNo": "CL13",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC312"
  },
  {
    "code": "CCSS4200",
    "classNo": "CL14",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC312"
  },
  {
    "code": "CCSS4200",
    "classNo": "CL15",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC312"
  },
  {
    "code": "CCSS4200",
    "classNo": "CL16",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC312"
  },
  {
    "code": "CCSS4200",
    "classNo": "CL17",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC312"
  },
  {
    "code": "CCSS4200",
    "classNo": "CL18",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC312"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT01",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT02",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT03",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC505"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT04",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC505"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT05",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT06",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT07",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT08",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT09",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT10",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT11",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT12",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT13",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT14",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT15",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT16",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT17",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT18",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT19",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT20",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT21",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT22",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT23",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT24",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT25",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC505"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT26",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC505"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT27",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT28",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT29",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT30",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT31",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT32",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT33",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT34",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KWC1201"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT35",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT36",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT37",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT38",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC607"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT39",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC607"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT40",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC309"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT41",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC309"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT42",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT43",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT44",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC308"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT45",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "ADC308"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT46",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC607"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT47",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC607"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT48",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "UNC602"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT49",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "UNC602"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT50",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC601"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT51",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC601"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT52",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "UNC607"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT53",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "UNC607"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT54",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC616"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT55",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC616"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT56",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC309"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT57",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC309"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT58",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC616"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT59",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC616"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT60",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC309"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT61",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC309"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT62",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC607"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT63",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC607"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT64",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC616"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT65",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC616"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT66",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT67",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT68",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC616"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT69",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC616"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT70",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC601"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT71",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC601"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT72",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC309"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT73",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC309"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT74",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT75",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "UNC601"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT76",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "CTC506"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT77",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "CTC506"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT78",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CTC501"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT79",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CTC501"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT80",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC607"
  },
  {
    "code": "CCSS4200",
    "classNo": "CT81",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC607"
  },
  {
    "code": "CCST3001",
    "classNo": "CL01",
    "name": "Foundations of Biology",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KED101"
  },
  {
    "code": "CCST3001",
    "classNo": "CL01",
    "name": "Foundations of Biology",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KED101"
  },
  {
    "code": "CCST3001",
    "classNo": "CL02",
    "name": "Foundations of Biology",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KED103"
  },
  {
    "code": "CCST3001",
    "classNo": "CL02",
    "name": "Foundations of Biology",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KED103"
  },
  {
    "code": "CCST3001",
    "classNo": "CL03",
    "name": "Foundations of Biology",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KED102"
  },
  {
    "code": "CCST3001",
    "classNo": "CL03",
    "name": "Foundations of Biology",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KED102"
  },
  {
    "code": "CCST3001",
    "classNo": "CL04",
    "name": "Foundations of Biology",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KED101"
  },
  {
    "code": "CCST3001",
    "classNo": "CL04",
    "name": "Foundations of Biology",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KED101"
  },
  {
    "code": "CCST3001",
    "classNo": "CL05",
    "name": "Foundations of Biology",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "CTC501"
  },
  {
    "code": "CCST3001",
    "classNo": "CL05",
    "name": "Foundations of Biology",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CTC501"
  },
  {
    "code": "CCST3003",
    "classNo": "CL01",
    "name": "Foundations of Physics",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC501"
  },
  {
    "code": "CCST3005",
    "classNo": "CL01",
    "name": "Introductory Basic Biology",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC602"
  },
  {
    "code": "CCST3005",
    "classNo": "CL02",
    "name": "Introductory Basic Biology",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC501"
  },
  {
    "code": "CCST4009",
    "classNo": "CL01",
    "name": "Environmental Challenges and Sustainability",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC708"
  },
  {
    "code": "CCST4009",
    "classNo": "CL02",
    "name": "Environmental Challenges and Sustainability",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC601"
  },
  {
    "code": "CCST4009",
    "classNo": "CL03",
    "name": "Environmental Challenges and Sustainability",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEE106"
  },
  {
    "code": "CCST4009",
    "classNo": "CL04",
    "name": "Environmental Challenges and Sustainability",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEE106"
  },
  {
    "code": "CCST4009",
    "classNo": "CL05",
    "name": "Environmental Challenges and Sustainability",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC608"
  },
  {
    "code": "CCST4009",
    "classNo": "CL06",
    "name": "Environmental Challenges and Sustainability",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC607"
  },
  {
    "code": "CCST4009",
    "classNo": "CL07",
    "name": "Environmental Challenges and Sustainability",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCST4009",
    "classNo": "CL08",
    "name": "Environmental Challenges and Sustainability",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCST4010",
    "classNo": "CL01",
    "name": "Food and Nutrition Basics",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC802"
  },
  {
    "code": "CCST4010",
    "classNo": "CL01",
    "name": "Food and Nutrition Basics",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC802"
  },
  {
    "code": "CCST4010",
    "classNo": "CL02",
    "name": "Food and Nutrition Basics",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4010",
    "classNo": "CL02",
    "name": "Food and Nutrition Basics",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4010",
    "classNo": "CL03",
    "name": "Food and Nutrition Basics",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4010",
    "classNo": "CL03",
    "name": "Food and Nutrition Basics",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4010",
    "classNo": "CL04",
    "name": "Food and Nutrition Basics",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC802"
  },
  {
    "code": "CCST4010",
    "classNo": "CL04",
    "name": "Food and Nutrition Basics",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC802"
  },
  {
    "code": "CCST4010",
    "classNo": "CL05",
    "name": "Food and Nutrition Basics",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC802"
  },
  {
    "code": "CCST4010",
    "classNo": "CL05",
    "name": "Food and Nutrition Basics",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC802"
  },
  {
    "code": "CCST4012",
    "classNo": "CL01",
    "name": "Introduction to General Chemistry",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC507"
  },
  {
    "code": "CCST4012",
    "classNo": "CL01",
    "name": "Introduction to General Chemistry",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC507"
  },
  {
    "code": "CCST4012",
    "classNo": "CL01",
    "name": "Introduction to General Chemistry",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC601"
  },
  {
    "code": "CCST4012",
    "classNo": "CL02",
    "name": "Introduction to General Chemistry",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC608"
  },
  {
    "code": "CCST4012",
    "classNo": "CL02",
    "name": "Introduction to General Chemistry",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC608"
  },
  {
    "code": "CCST4012",
    "classNo": "CL02",
    "name": "Introduction to General Chemistry",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC601"
  },
  {
    "code": "CCST4012",
    "classNo": "CL03",
    "name": "Introduction to General Chemistry",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC601"
  },
  {
    "code": "CCST4012",
    "classNo": "CL03",
    "name": "Introduction to General Chemistry",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC601"
  },
  {
    "code": "CCST4012",
    "classNo": "CL03",
    "name": "Introduction to General Chemistry",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC601"
  },
  {
    "code": "CCST4012",
    "classNo": "CL04",
    "name": "Introduction to General Chemistry",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC608"
  },
  {
    "code": "CCST4012",
    "classNo": "CL04",
    "name": "Introduction to General Chemistry",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC608"
  },
  {
    "code": "CCST4012",
    "classNo": "CL04",
    "name": "Introduction to General Chemistry",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC601"
  },
  {
    "code": "CCST4012",
    "classNo": "CL05",
    "name": "Introduction to General Chemistry",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC601"
  },
  {
    "code": "CCST4012",
    "classNo": "CL05",
    "name": "Introduction to General Chemistry",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC601"
  },
  {
    "code": "CCST4012",
    "classNo": "CL05",
    "name": "Introduction to General Chemistry",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC601"
  },
  {
    "code": "CCST4014",
    "classNo": "CL01",
    "name": "Fundamentals of Classical Mechanics",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC502"
  },
  {
    "code": "CCST4014",
    "classNo": "CL01",
    "name": "Fundamentals of Classical Mechanics",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC502"
  },
  {
    "code": "CCST4014",
    "classNo": "CL02",
    "name": "Fundamentals of Classical Mechanics",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC502"
  },
  {
    "code": "CCST4014",
    "classNo": "CL02",
    "name": "Fundamentals of Classical Mechanics",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC502"
  },
  {
    "code": "CCST4014",
    "classNo": "CT01",
    "name": "Fundamentals of Classical Mechanics",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC805"
  },
  {
    "code": "CCST4014",
    "classNo": "CT02",
    "name": "Fundamentals of Classical Mechanics",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC805"
  },
  {
    "code": "CCST4014",
    "classNo": "CT03",
    "name": "Fundamentals of Classical Mechanics",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC805"
  },
  {
    "code": "CCST4014",
    "classNo": "CT04",
    "name": "Fundamentals of Classical Mechanics",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC805"
  },
  {
    "code": "CCST4014",
    "classNo": "CT05",
    "name": "Fundamentals of Classical Mechanics",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC501"
  },
  {
    "code": "CCST4014",
    "classNo": "CT06",
    "name": "Fundamentals of Classical Mechanics",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC501"
  },
  {
    "code": "CCST4014",
    "classNo": "CT07",
    "name": "Fundamentals of Classical Mechanics",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC501"
  },
  {
    "code": "CCST4014",
    "classNo": "CT08",
    "name": "Fundamentals of Classical Mechanics",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC501"
  },
  {
    "code": "CCST4014",
    "classNo": "CT09",
    "name": "Fundamentals of Classical Mechanics",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC809"
  },
  {
    "code": "CCST4017",
    "classNo": "CL01",
    "name": "Molecular Biology and Biochemistry",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC805"
  },
  {
    "code": "CCST4017",
    "classNo": "CL01",
    "name": "Molecular Biology and Biochemistry",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC805"
  },
  {
    "code": "CCST4017",
    "classNo": "CL01",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL01",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL01",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL01",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL02",
    "name": "Molecular Biology and Biochemistry",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1004"
  },
  {
    "code": "CCST4017",
    "classNo": "CL02",
    "name": "Molecular Biology and Biochemistry",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1004"
  },
  {
    "code": "CCST4017",
    "classNo": "CL02",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL02",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL02",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL02",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL03",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC506"
  },
  {
    "code": "CCST4017",
    "classNo": "CL03",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC506"
  },
  {
    "code": "CCST4017",
    "classNo": "CL03",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL03",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL03",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL03",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL04",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL04",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL04",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL04",
    "name": "Molecular Biology and Biochemistry",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4017",
    "classNo": "CL04",
    "name": "Molecular Biology and Biochemistry",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC506"
  },
  {
    "code": "CCST4017",
    "classNo": "CL04",
    "name": "Molecular Biology and Biochemistry",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC506"
  },
  {
    "code": "CCST4021",
    "classNo": "CL01",
    "name": "Basic Biochemistry",
    "day": "Tue",
    "start": "15:00",
    "end": "15:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4021",
    "classNo": "CL01",
    "name": "Basic Biochemistry",
    "day": "Fri",
    "start": "15:00",
    "end": "16:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4023",
    "classNo": "CL01",
    "name": "From Molecules to Cells",
    "day": "Wed",
    "start": "11:00",
    "end": "12:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4023",
    "classNo": "CL01",
    "name": "From Molecules to Cells",
    "day": "Fri",
    "start": "11:00",
    "end": "11:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4024",
    "classNo": "CL01",
    "name": "Advanced Physiology and Pathophysiology",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC504"
  },
  {
    "code": "CCST4024",
    "classNo": "CL01",
    "name": "Advanced Physiology and Pathophysiology",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC502"
  },
  {
    "code": "CCST4024",
    "classNo": "CL01",
    "name": "Advanced Physiology and Pathophysiology",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC502"
  },
  {
    "code": "CCST4024",
    "classNo": "CL02",
    "name": "Advanced Physiology and Pathophysiology",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC504"
  },
  {
    "code": "CCST4024",
    "classNo": "CL02",
    "name": "Advanced Physiology and Pathophysiology",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC501"
  },
  {
    "code": "CCST4024",
    "classNo": "CL02",
    "name": "Advanced Physiology and Pathophysiology",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC501"
  },
  {
    "code": "CCST4024",
    "classNo": "CL03",
    "name": "Advanced Physiology and Pathophysiology",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC602"
  },
  {
    "code": "CCST4024",
    "classNo": "CL03",
    "name": "Advanced Physiology and Pathophysiology",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC602"
  },
  {
    "code": "CCST4024",
    "classNo": "CL03",
    "name": "Advanced Physiology and Pathophysiology",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC202"
  },
  {
    "code": "CCST4024",
    "classNo": "CL04",
    "name": "Advanced Physiology and Pathophysiology",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC501"
  },
  {
    "code": "CCST4024",
    "classNo": "CL04",
    "name": "Advanced Physiology and Pathophysiology",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC605"
  },
  {
    "code": "CCST4024",
    "classNo": "CL04",
    "name": "Advanced Physiology and Pathophysiology",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC605"
  },
  {
    "code": "CCST4025",
    "classNo": "CL01",
    "name": "Medical Microbiology",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC505"
  },
  {
    "code": "CCST4025",
    "classNo": "CL01",
    "name": "Medical Microbiology",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC505"
  },
  {
    "code": "CCST4025",
    "classNo": "CL02",
    "name": "Medical Microbiology",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC505"
  },
  {
    "code": "CCST4025",
    "classNo": "CL02",
    "name": "Medical Microbiology",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC505"
  },
  {
    "code": "CCST4025",
    "classNo": "CL03",
    "name": "Medical Microbiology",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC510"
  },
  {
    "code": "CCST4025",
    "classNo": "CL03",
    "name": "Medical Microbiology",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC510"
  },
  {
    "code": "CCST4025",
    "classNo": "CL04",
    "name": "Medical Microbiology",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC805"
  },
  {
    "code": "CCST4025",
    "classNo": "CL04",
    "name": "Medical Microbiology",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC805"
  },
  {
    "code": "CCST4025",
    "classNo": "CL05",
    "name": "Medical Microbiology",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC504"
  },
  {
    "code": "CCST4025",
    "classNo": "CL05",
    "name": "Medical Microbiology",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC504"
  },
  {
    "code": "CCST4026",
    "classNo": "CL01",
    "name": "Molecular and Cellular Immunology",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC505"
  },
  {
    "code": "CCST4026",
    "classNo": "CL01",
    "name": "Molecular and Cellular Immunology",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1004"
  },
  {
    "code": "CCST4026",
    "classNo": "CL02",
    "name": "Molecular and Cellular Immunology",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC505"
  },
  {
    "code": "CCST4026",
    "classNo": "CL02",
    "name": "Molecular and Cellular Immunology",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC504"
  },
  {
    "code": "CCST4026",
    "classNo": "CL03",
    "name": "Molecular and Cellular Immunology",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC504"
  },
  {
    "code": "CCST4026",
    "classNo": "CL03",
    "name": "Molecular and Cellular Immunology",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1004"
  },
  {
    "code": "CCST4026",
    "classNo": "CL04",
    "name": "Molecular and Cellular Immunology",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC504"
  },
  {
    "code": "CCST4026",
    "classNo": "CL04",
    "name": "Molecular and Cellular Immunology",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC509"
  },
  {
    "code": "CCST4026",
    "classNo": "CL05",
    "name": "Molecular and Cellular Immunology",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC602"
  },
  {
    "code": "CCST4026",
    "classNo": "CL05",
    "name": "Molecular and Cellular Immunology",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1004"
  },
  {
    "code": "CCST4029",
    "classNo": "CL01",
    "name": "Inorganic Chemistry I",
    "day": "Mon",
    "start": "09:00",
    "end": "10:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4029",
    "classNo": "CL01",
    "name": "Inorganic Chemistry I",
    "day": "Tue",
    "start": "14:00",
    "end": "17:50",
    "room": "HKU-LAB"
  },
  {
    "code": "CCST4030",
    "classNo": "CL01",
    "name": "Analytical Chemistry I",
    "day": "Thu",
    "start": "12:00",
    "end": "13:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4030",
    "classNo": "CL01",
    "name": "Analytical Chemistry I",
    "day": "Fri",
    "start": "14:00",
    "end": "17:50",
    "room": "HKU-LAB"
  },
  {
    "code": "CCST4032",
    "classNo": "CL01",
    "name": "Principles of Geology",
    "day": "Tue",
    "start": "12:00",
    "end": "13:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4032",
    "classNo": "CL01",
    "name": "Principles of Geology",
    "day": "Fri",
    "start": "15:00",
    "end": "16:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4033",
    "classNo": "CL01",
    "name": "Introduction to Atmosphere and Hydrosphere",
    "day": "Thu",
    "start": "14:00",
    "end": "15:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4033",
    "classNo": "CL01",
    "name": "Introduction to Atmosphere and Hydrosphere",
    "day": "Thu",
    "start": "16:00",
    "end": "17:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4039",
    "classNo": "CL01",
    "name": "Organic Chemistry I",
    "day": "Mon",
    "start": "12:00",
    "end": "12:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4039",
    "classNo": "CL01",
    "name": "Organic Chemistry I",
    "day": "Thu",
    "start": "15:00",
    "end": "16:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4044",
    "classNo": "CL01",
    "name": "Planetary Geology",
    "day": "Mon",
    "start": "11:00",
    "end": "12:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4044",
    "classNo": "CL01",
    "name": "Planetary Geology",
    "day": "Tue",
    "start": "14:00",
    "end": "15:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4047",
    "classNo": "CL01",
    "name": "Fundamentals of the Human Body",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "CTC501"
  },
  {
    "code": "CCST4047",
    "classNo": "CL01",
    "name": "Fundamentals of the Human Body",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "CTC501"
  },
  {
    "code": "CCST4047",
    "classNo": "CL02",
    "name": "Fundamentals of the Human Body",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "CTC501"
  },
  {
    "code": "CCST4047",
    "classNo": "CL02",
    "name": "Fundamentals of the Human Body",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "CTC501"
  },
  {
    "code": "CCST4059",
    "classNo": "CL01",
    "name": "Principles of Biochemistry",
    "day": "Tue",
    "start": "12:00",
    "end": "13:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4059",
    "classNo": "CL01",
    "name": "Principles of Biochemistry",
    "day": "Fri",
    "start": "13:00",
    "end": "17:50",
    "room": "HKU-LAB"
  },
  {
    "code": "CCST4061",
    "classNo": "CL01",
    "name": "Methods in Physics I",
    "day": "Mon",
    "start": "12:00",
    "end": "12:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4061",
    "classNo": "CL01",
    "name": "Methods in Physics I",
    "day": "Fri",
    "start": "13:00",
    "end": "14:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4065",
    "classNo": "CL01",
    "name": "Blue Planet",
    "day": "Mon",
    "start": "17:00",
    "end": "18:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4065",
    "classNo": "CL01",
    "name": "Blue Planet",
    "day": "Fri",
    "start": "13:00",
    "end": "14:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4076",
    "classNo": "CL01",
    "name": "Basic Clinical Nursing",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC508"
  },
  {
    "code": "CCST4076",
    "classNo": "CL01",
    "name": "Basic Clinical Nursing",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC508"
  },
  {
    "code": "CCST4076",
    "classNo": "CL01",
    "name": "Basic Clinical Nursing",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC301"
  },
  {
    "code": "CCST4076",
    "classNo": "CL01",
    "name": "Basic Clinical Nursing",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC301"
  },
  {
    "code": "CCST4076",
    "classNo": "CL01",
    "name": "Basic Clinical Nursing",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC301"
  },
  {
    "code": "CCST4076",
    "classNo": "CL02",
    "name": "Basic Clinical Nursing",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC508"
  },
  {
    "code": "CCST4076",
    "classNo": "CL02",
    "name": "Basic Clinical Nursing",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC508"
  },
  {
    "code": "CCST4076",
    "classNo": "CL02",
    "name": "Basic Clinical Nursing",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1003"
  },
  {
    "code": "CCST4076",
    "classNo": "CL02",
    "name": "Basic Clinical Nursing",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1003"
  },
  {
    "code": "CCST4076",
    "classNo": "CL02",
    "name": "Basic Clinical Nursing",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1003"
  },
  {
    "code": "CCST4076",
    "classNo": "CL03",
    "name": "Basic Clinical Nursing",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC508"
  },
  {
    "code": "CCST4076",
    "classNo": "CL03",
    "name": "Basic Clinical Nursing",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC508"
  },
  {
    "code": "CCST4076",
    "classNo": "CL03",
    "name": "Basic Clinical Nursing",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC301"
  },
  {
    "code": "CCST4076",
    "classNo": "CL03",
    "name": "Basic Clinical Nursing",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC301"
  },
  {
    "code": "CCST4076",
    "classNo": "CL03",
    "name": "Basic Clinical Nursing",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC301"
  },
  {
    "code": "CCST4076",
    "classNo": "CL04",
    "name": "Basic Clinical Nursing",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC503"
  },
  {
    "code": "CCST4076",
    "classNo": "CL04",
    "name": "Basic Clinical Nursing",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC503"
  },
  {
    "code": "CCST4076",
    "classNo": "CL04",
    "name": "Basic Clinical Nursing",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1003"
  },
  {
    "code": "CCST4076",
    "classNo": "CL04",
    "name": "Basic Clinical Nursing",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1003"
  },
  {
    "code": "CCST4076",
    "classNo": "CL04",
    "name": "Basic Clinical Nursing",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1003"
  },
  {
    "code": "CCST4076",
    "classNo": "CL05",
    "name": "Basic Clinical Nursing",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC503"
  },
  {
    "code": "CCST4076",
    "classNo": "CL05",
    "name": "Basic Clinical Nursing",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC503"
  },
  {
    "code": "CCST4076",
    "classNo": "CL05",
    "name": "Basic Clinical Nursing",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC301"
  },
  {
    "code": "CCST4076",
    "classNo": "CL05",
    "name": "Basic Clinical Nursing",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC301"
  },
  {
    "code": "CCST4076",
    "classNo": "CL05",
    "name": "Basic Clinical Nursing",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC301"
  },
  {
    "code": "CCST4076",
    "classNo": "CL06",
    "name": "Basic Clinical Nursing",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC503"
  },
  {
    "code": "CCST4076",
    "classNo": "CL06",
    "name": "Basic Clinical Nursing",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC503"
  },
  {
    "code": "CCST4076",
    "classNo": "CL06",
    "name": "Basic Clinical Nursing",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1003"
  },
  {
    "code": "CCST4076",
    "classNo": "CL06",
    "name": "Basic Clinical Nursing",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1003"
  },
  {
    "code": "CCST4076",
    "classNo": "CL06",
    "name": "Basic Clinical Nursing",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1003"
  },
  {
    "code": "CCST4076",
    "classNo": "CL07",
    "name": "Basic Clinical Nursing",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC609"
  },
  {
    "code": "CCST4076",
    "classNo": "CL07",
    "name": "Basic Clinical Nursing",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC609"
  },
  {
    "code": "CCST4076",
    "classNo": "CL07",
    "name": "Basic Clinical Nursing",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC301"
  },
  {
    "code": "CCST4076",
    "classNo": "CL07",
    "name": "Basic Clinical Nursing",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC301"
  },
  {
    "code": "CCST4076",
    "classNo": "CL07",
    "name": "Basic Clinical Nursing",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC301"
  },
  {
    "code": "CCST4076",
    "classNo": "CL08",
    "name": "Basic Clinical Nursing",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC609"
  },
  {
    "code": "CCST4076",
    "classNo": "CL08",
    "name": "Basic Clinical Nursing",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC609"
  },
  {
    "code": "CCST4076",
    "classNo": "CL08",
    "name": "Basic Clinical Nursing",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1003"
  },
  {
    "code": "CCST4076",
    "classNo": "CL08",
    "name": "Basic Clinical Nursing",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1003"
  },
  {
    "code": "CCST4076",
    "classNo": "CL08",
    "name": "Basic Clinical Nursing",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1003"
  },
  {
    "code": "CCST4076",
    "classNo": "CL09",
    "name": "Basic Clinical Nursing",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC301"
  },
  {
    "code": "CCST4076",
    "classNo": "CL09",
    "name": "Basic Clinical Nursing",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC301"
  },
  {
    "code": "CCST4076",
    "classNo": "CL09",
    "name": "Basic Clinical Nursing",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC301"
  },
  {
    "code": "CCST4076",
    "classNo": "CL09",
    "name": "Basic Clinical Nursing",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC609"
  },
  {
    "code": "CCST4076",
    "classNo": "CL09",
    "name": "Basic Clinical Nursing",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC609"
  },
  {
    "code": "CCST4076",
    "classNo": "CL10",
    "name": "Basic Clinical Nursing",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1003"
  },
  {
    "code": "CCST4076",
    "classNo": "CL10",
    "name": "Basic Clinical Nursing",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1003"
  },
  {
    "code": "CCST4076",
    "classNo": "CL10",
    "name": "Basic Clinical Nursing",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1003"
  },
  {
    "code": "CCST4076",
    "classNo": "CL10",
    "name": "Basic Clinical Nursing",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC609"
  },
  {
    "code": "CCST4076",
    "classNo": "CL10",
    "name": "Basic Clinical Nursing",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC609"
  },
  {
    "code": "CCST4078",
    "classNo": "CL01",
    "name": "Health Promotion and Education",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC403"
  },
  {
    "code": "CCST4078",
    "classNo": "CL01",
    "name": "Health Promotion and Education",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC403"
  },
  {
    "code": "CCST4078",
    "classNo": "CL01",
    "name": "Health Promotion and Education",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC403"
  },
  {
    "code": "CCST4078",
    "classNo": "CL02",
    "name": "Health Promotion and Education",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC807"
  },
  {
    "code": "CCST4078",
    "classNo": "CL02",
    "name": "Health Promotion and Education",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC807"
  },
  {
    "code": "CCST4078",
    "classNo": "CL02",
    "name": "Health Promotion and Education",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC807"
  },
  {
    "code": "CCST4078",
    "classNo": "CL03",
    "name": "Health Promotion and Education",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC403"
  },
  {
    "code": "CCST4078",
    "classNo": "CL03",
    "name": "Health Promotion and Education",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC403"
  },
  {
    "code": "CCST4078",
    "classNo": "CL03",
    "name": "Health Promotion and Education",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC403"
  },
  {
    "code": "CCST4078",
    "classNo": "CL04",
    "name": "Health Promotion and Education",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC807"
  },
  {
    "code": "CCST4078",
    "classNo": "CL04",
    "name": "Health Promotion and Education",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC807"
  },
  {
    "code": "CCST4078",
    "classNo": "CL04",
    "name": "Health Promotion and Education",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC807"
  },
  {
    "code": "CCST4078",
    "classNo": "CL05",
    "name": "Health Promotion and Education",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC709"
  },
  {
    "code": "CCST4078",
    "classNo": "CL05",
    "name": "Health Promotion and Education",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC709"
  },
  {
    "code": "CCST4078",
    "classNo": "CL05",
    "name": "Health Promotion and Education",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC709"
  },
  {
    "code": "CCST4078",
    "classNo": "CL06",
    "name": "Health Promotion and Education",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC906"
  },
  {
    "code": "CCST4078",
    "classNo": "CL06",
    "name": "Health Promotion and Education",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC906"
  },
  {
    "code": "CCST4078",
    "classNo": "CL06",
    "name": "Health Promotion and Education",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC906"
  },
  {
    "code": "CCST4078",
    "classNo": "CL07",
    "name": "Health Promotion and Education",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC709"
  },
  {
    "code": "CCST4078",
    "classNo": "CL07",
    "name": "Health Promotion and Education",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC709"
  },
  {
    "code": "CCST4078",
    "classNo": "CL07",
    "name": "Health Promotion and Education",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC709"
  },
  {
    "code": "CCST4078",
    "classNo": "CL08",
    "name": "Health Promotion and Education",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC705"
  },
  {
    "code": "CCST4078",
    "classNo": "CL08",
    "name": "Health Promotion and Education",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC705"
  },
  {
    "code": "CCST4078",
    "classNo": "CL08",
    "name": "Health Promotion and Education",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC705"
  },
  {
    "code": "CCST4079",
    "classNo": "CL01",
    "name": "Nursing Foundations",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL01",
    "name": "Nursing Foundations",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL01",
    "name": "Nursing Foundations",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC604"
  },
  {
    "code": "CCST4079",
    "classNo": "CL01",
    "name": "Nursing Foundations",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC604"
  },
  {
    "code": "CCST4079",
    "classNo": "CL01",
    "name": "Nursing Foundations",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC604"
  },
  {
    "code": "CCST4079",
    "classNo": "CL02",
    "name": "Nursing Foundations",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL02",
    "name": "Nursing Foundations",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL02",
    "name": "Nursing Foundations",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL02",
    "name": "Nursing Foundations",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL02",
    "name": "Nursing Foundations",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL03",
    "name": "Nursing Foundations",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL03",
    "name": "Nursing Foundations",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL03",
    "name": "Nursing Foundations",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC508"
  },
  {
    "code": "CCST4079",
    "classNo": "CL03",
    "name": "Nursing Foundations",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC508"
  },
  {
    "code": "CCST4079",
    "classNo": "CL03",
    "name": "Nursing Foundations",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC508"
  },
  {
    "code": "CCST4079",
    "classNo": "CL04",
    "name": "Nursing Foundations",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL04",
    "name": "Nursing Foundations",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL04",
    "name": "Nursing Foundations",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL04",
    "name": "Nursing Foundations",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL04",
    "name": "Nursing Foundations",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL05",
    "name": "Nursing Foundations",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL05",
    "name": "Nursing Foundations",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL05",
    "name": "Nursing Foundations",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC508"
  },
  {
    "code": "CCST4079",
    "classNo": "CL05",
    "name": "Nursing Foundations",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC508"
  },
  {
    "code": "CCST4079",
    "classNo": "CL05",
    "name": "Nursing Foundations",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC508"
  },
  {
    "code": "CCST4079",
    "classNo": "CL06",
    "name": "Nursing Foundations",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL06",
    "name": "Nursing Foundations",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL06",
    "name": "Nursing Foundations",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL06",
    "name": "Nursing Foundations",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL06",
    "name": "Nursing Foundations",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL07",
    "name": "Nursing Foundations",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL07",
    "name": "Nursing Foundations",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL07",
    "name": "Nursing Foundations",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC508"
  },
  {
    "code": "CCST4079",
    "classNo": "CL07",
    "name": "Nursing Foundations",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC508"
  },
  {
    "code": "CCST4079",
    "classNo": "CL07",
    "name": "Nursing Foundations",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC508"
  },
  {
    "code": "CCST4079",
    "classNo": "CL08",
    "name": "Nursing Foundations",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL08",
    "name": "Nursing Foundations",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL08",
    "name": "Nursing Foundations",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL08",
    "name": "Nursing Foundations",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC807"
  },
  {
    "code": "CCST4079",
    "classNo": "CL08",
    "name": "Nursing Foundations",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC807"
  },
  {
    "code": "CCST4083",
    "classNo": "CL01",
    "name": "Human Anatomy and Physiology",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC805"
  },
  {
    "code": "CCST4083",
    "classNo": "CL01",
    "name": "Human Anatomy and Physiology",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC403"
  },
  {
    "code": "CCST4083",
    "classNo": "CL01",
    "name": "Human Anatomy and Physiology",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC403"
  },
  {
    "code": "CCST4083",
    "classNo": "CL02",
    "name": "Human Anatomy and Physiology",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC501"
  },
  {
    "code": "CCST4083",
    "classNo": "CL02",
    "name": "Human Anatomy and Physiology",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC805"
  },
  {
    "code": "CCST4083",
    "classNo": "CL02",
    "name": "Human Anatomy and Physiology",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC805"
  },
  {
    "code": "CCST4083",
    "classNo": "CL03",
    "name": "Human Anatomy and Physiology",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC501"
  },
  {
    "code": "CCST4083",
    "classNo": "CL03",
    "name": "Human Anatomy and Physiology",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC602"
  },
  {
    "code": "CCST4083",
    "classNo": "CL03",
    "name": "Human Anatomy and Physiology",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC602"
  },
  {
    "code": "CCST4083",
    "classNo": "CL04",
    "name": "Human Anatomy and Physiology",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC602"
  },
  {
    "code": "CCST4083",
    "classNo": "CL04",
    "name": "Human Anatomy and Physiology",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC602"
  },
  {
    "code": "CCST4083",
    "classNo": "CL04",
    "name": "Human Anatomy and Physiology",
    "day": "Sat",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC507"
  },
  {
    "code": "CCST4083",
    "classNo": "CL05",
    "name": "Human Anatomy and Physiology",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC505"
  },
  {
    "code": "CCST4083",
    "classNo": "CL05",
    "name": "Human Anatomy and Physiology",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC505"
  },
  {
    "code": "CCST4083",
    "classNo": "CL05",
    "name": "Human Anatomy and Physiology",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC501"
  },
  {
    "code": "CCST4084",
    "classNo": "CL01",
    "name": "Cell Biology and Development",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC802"
  },
  {
    "code": "CCST4084",
    "classNo": "CL01",
    "name": "Cell Biology and Development",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC803"
  },
  {
    "code": "CCST4084",
    "classNo": "CL02",
    "name": "Cell Biology and Development",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC802"
  },
  {
    "code": "CCST4084",
    "classNo": "CL02",
    "name": "Cell Biology and Development",
    "day": "Fri",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC803"
  },
  {
    "code": "CCST4084",
    "classNo": "CL03",
    "name": "Cell Biology and Development",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC803"
  },
  {
    "code": "CCST4084",
    "classNo": "CL03",
    "name": "Cell Biology and Development",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC904"
  },
  {
    "code": "CCST4084",
    "classNo": "CL04",
    "name": "Cell Biology and Development",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC803"
  },
  {
    "code": "CCST4084",
    "classNo": "CL04",
    "name": "Cell Biology and Development",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC803"
  },
  {
    "code": "CCST4084",
    "classNo": "CL05",
    "name": "Cell Biology and Development",
    "day": "Mon",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC802"
  },
  {
    "code": "CCST4084",
    "classNo": "CL05",
    "name": "Cell Biology and Development",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC802"
  },
  {
    "code": "CCST4084",
    "classNo": "CL06",
    "name": "Cell Biology and Development",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC802"
  },
  {
    "code": "CCST4084",
    "classNo": "CL06",
    "name": "Cell Biology and Development",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC802"
  },
  {
    "code": "CCST4084",
    "classNo": "CL07",
    "name": "Cell Biology and Development",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC803"
  },
  {
    "code": "CCST4084",
    "classNo": "CL07",
    "name": "Cell Biology and Development",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC803"
  },
  {
    "code": "CCST4086",
    "classNo": "CL01",
    "name": "Nature of the Universe",
    "day": "Mon",
    "start": "18:00",
    "end": "18:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4086",
    "classNo": "CL01",
    "name": "Nature of the Universe",
    "day": "Thu",
    "start": "17:00",
    "end": "18:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4089",
    "classNo": "CL01",
    "name": "Introduction to Environmental Science",
    "day": "Mon",
    "start": "09:00",
    "end": "10:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4089",
    "classNo": "CL01",
    "name": "Introduction to Environmental Science",
    "day": "Thu",
    "start": "09:00",
    "end": "10:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4089",
    "classNo": "CL02",
    "name": "Introduction to Environmental Science",
    "day": "Mon",
    "start": "09:00",
    "end": "10:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4089",
    "classNo": "CL02",
    "name": "Introduction to Environmental Science",
    "day": "Thu",
    "start": "11:00",
    "end": "12:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4091",
    "classNo": "CL01",
    "name": "Biological Sciences Laboratory Course",
    "day": "Mon",
    "start": "09:00",
    "end": "10:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4091",
    "classNo": "CL01",
    "name": "Biological Sciences Laboratory Course",
    "day": "Wed",
    "start": "14:00",
    "end": "17:50",
    "room": "HKU-LAB"
  },
  {
    "code": "CCST4096",
    "classNo": "CL01",
    "name": "Problem Solving in Physics",
    "day": "Mon",
    "start": "15:00",
    "end": "16:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4096",
    "classNo": "CL01",
    "name": "Problem Solving in Physics",
    "day": "Tue",
    "start": "12:00",
    "end": "12:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4097",
    "classNo": "CL01",
    "name": "Fundamental Physics",
    "day": "Mon",
    "start": "11:00",
    "end": "12:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4097",
    "classNo": "CL01",
    "name": "Fundamental Physics",
    "day": "Tue",
    "start": "09:00",
    "end": "09:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4099",
    "classNo": "CL01",
    "name": "University Mathematics II",
    "day": "Tue",
    "start": "09:00",
    "end": "09:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4099",
    "classNo": "CL01",
    "name": "University Mathematics II",
    "day": "Thu",
    "start": "10:00",
    "end": "11:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4110",
    "classNo": "CL01",
    "name": "Multivariable Calculus and Linear Algebra",
    "day": "Wed",
    "start": "11:00",
    "end": "12:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4110",
    "classNo": "CL01",
    "name": "Multivariable Calculus and Linear Algebra",
    "day": "Thu",
    "start": "09:00",
    "end": "09:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4111",
    "classNo": "CL01",
    "name": "General Chemistry II",
    "day": "Wed",
    "start": "11:00",
    "end": "12:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4111",
    "classNo": "CL01",
    "name": "General Chemistry II",
    "day": "Thu",
    "start": "12:00",
    "end": "12:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4112",
    "classNo": "CL01",
    "name": "Nursing Practicum I",
    "day": "Thu",
    "start": "08:30",
    "end": "19:00",
    "room": "TBC"
  },
  {
    "code": "CCST4112",
    "classNo": "CL02",
    "name": "Nursing Practicum I",
    "day": "Thu",
    "start": "08:30",
    "end": "19:00",
    "room": "TBC"
  },
  {
    "code": "CCST4112",
    "classNo": "CL03",
    "name": "Nursing Practicum I",
    "day": "Fri",
    "start": "08:30",
    "end": "19:00",
    "room": "TBC"
  },
  {
    "code": "CCST4112",
    "classNo": "CL04",
    "name": "Nursing Practicum I",
    "day": "Fri",
    "start": "08:30",
    "end": "19:00",
    "room": "TBC"
  },
  {
    "code": "CCST4115",
    "classNo": "CL01",
    "name": "Chemistry for Biomedical Science",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC602"
  },
  {
    "code": "CCST4115",
    "classNo": "CL01",
    "name": "Chemistry for Biomedical Science",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC602"
  },
  {
    "code": "CCST4115",
    "classNo": "CL02",
    "name": "Chemistry for Biomedical Science",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC501"
  },
  {
    "code": "CCST4115",
    "classNo": "CL02",
    "name": "Chemistry for Biomedical Science",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC501"
  },
  {
    "code": "CCST4115",
    "classNo": "CL03",
    "name": "Chemistry for Biomedical Science",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC805"
  },
  {
    "code": "CCST4115",
    "classNo": "CL03",
    "name": "Chemistry for Biomedical Science",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC805"
  },
  {
    "code": "CCST4115",
    "classNo": "CL04",
    "name": "Chemistry for Biomedical Science",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1004"
  },
  {
    "code": "CCST4115",
    "classNo": "CL04",
    "name": "Chemistry for Biomedical Science",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1004"
  },
  {
    "code": "CCST4115",
    "classNo": "CL05",
    "name": "Chemistry for Biomedical Science",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC602"
  },
  {
    "code": "CCST4115",
    "classNo": "CL05",
    "name": "Chemistry for Biomedical Science",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC602"
  },
  {
    "code": "CCST4115",
    "classNo": "CL06",
    "name": "Chemistry for Biomedical Science",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC504"
  },
  {
    "code": "CCST4115",
    "classNo": "CL06",
    "name": "Chemistry for Biomedical Science",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC504"
  },
  {
    "code": "CCST4115",
    "classNo": "CL07",
    "name": "Chemistry for Biomedical Science",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC602"
  },
  {
    "code": "CCST4115",
    "classNo": "CL07",
    "name": "Chemistry for Biomedical Science",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC602"
  },
  {
    "code": "CCST4115",
    "classNo": "CL08",
    "name": "Chemistry for Biomedical Science",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC805"
  },
  {
    "code": "CCST4115",
    "classNo": "CL08",
    "name": "Chemistry for Biomedical Science",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC805"
  },
  {
    "code": "CCST4117",
    "classNo": "CL01",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC903"
  },
  {
    "code": "CCST4117",
    "classNo": "CL01",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC903"
  },
  {
    "code": "CCST4117",
    "classNo": "CL01",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC903"
  },
  {
    "code": "CCST4117",
    "classNo": "CL01",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC903"
  },
  {
    "code": "CCST4117",
    "classNo": "CL01",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "19:00",
    "end": "20:20",
    "room": "KEC903"
  },
  {
    "code": "CCST4117",
    "classNo": "CL02",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC903"
  },
  {
    "code": "CCST4117",
    "classNo": "CL02",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC903"
  },
  {
    "code": "CCST4117",
    "classNo": "CL02",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC903"
  },
  {
    "code": "CCST4117",
    "classNo": "CL02",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC903"
  },
  {
    "code": "CCST4117",
    "classNo": "CL02",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "19:00",
    "end": "20:20",
    "room": "KEC903"
  },
  {
    "code": "CCST4117",
    "classNo": "CL03",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC903"
  },
  {
    "code": "CCST4117",
    "classNo": "CL03",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC903"
  },
  {
    "code": "CCST4117",
    "classNo": "CL03",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC903"
  },
  {
    "code": "CCST4117",
    "classNo": "CL03",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC903"
  },
  {
    "code": "CCST4117",
    "classNo": "CL03",
    "name": "Biomedical Laboratory",
    "day": "Wed",
    "start": "19:00",
    "end": "20:20",
    "room": "KEC903"
  },
  {
    "code": "CCST4122",
    "classNo": "CL01",
    "name": "Global Technology",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1004"
  },
  {
    "code": "CCST4122",
    "classNo": "CL02",
    "name": "Global Technology",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC906"
  },
  {
    "code": "CCST4122",
    "classNo": "CL03",
    "name": "Global Technology",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEE106"
  },
  {
    "code": "CCST4122",
    "classNo": "CL04",
    "name": "Global Technology",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEE106"
  },
  {
    "code": "CCST4122",
    "classNo": "CL05",
    "name": "Global Technology",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC309"
  },
  {
    "code": "CCST4122",
    "classNo": "CL06",
    "name": "Global Technology",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC602"
  },
  {
    "code": "CCST4122",
    "classNo": "CL07",
    "name": "Global Technology",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC11A3"
  },
  {
    "code": "CCST4122",
    "classNo": "CL08",
    "name": "Global Technology",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCST4123",
    "classNo": "CT01",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC805"
  },
  {
    "code": "CCST4123",
    "classNo": "CT02",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC603"
  },
  {
    "code": "CCST4123",
    "classNo": "CT03",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC603"
  },
  {
    "code": "CCST4123",
    "classNo": "CT04",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC805"
  },
  {
    "code": "CCST4123",
    "classNo": "CT05",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC602"
  },
  {
    "code": "CCST4123",
    "classNo": "CT06",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC602"
  },
  {
    "code": "CCST4123",
    "classNo": "CT07",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC907"
  },
  {
    "code": "CCST4123",
    "classNo": "CT08",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC907"
  },
  {
    "code": "CCST4123",
    "classNo": "CT09",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC403"
  },
  {
    "code": "CCST4123",
    "classNo": "CT10",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC403"
  },
  {
    "code": "CCST4123",
    "classNo": "CT11",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC709"
  },
  {
    "code": "CCST4123",
    "classNo": "CT12",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC709"
  },
  {
    "code": "CCST4123",
    "classNo": "CT13",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC501"
  },
  {
    "code": "CCST4123",
    "classNo": "CT14",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC501"
  },
  {
    "code": "CCST4123",
    "classNo": "CT15",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC501"
  },
  {
    "code": "CCST4123",
    "classNo": "CT16",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC501"
  },
  {
    "code": "CCST4123",
    "classNo": "CT17",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC906"
  },
  {
    "code": "CCST4123",
    "classNo": "CT18",
    "name": "Healthy Living",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1003A"
  },
  {
    "code": "CCST4123",
    "classNo": "CT19",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC503"
  },
  {
    "code": "CCST4123",
    "classNo": "CT20",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC808"
  },
  {
    "code": "CCST4123",
    "classNo": "CT21",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-101"
  },
  {
    "code": "CCST4123",
    "classNo": "CT22",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-401"
  },
  {
    "code": "CCST4123",
    "classNo": "CT23",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-401"
  },
  {
    "code": "CCST4123",
    "classNo": "CT24",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "CIT-401"
  },
  {
    "code": "CCST4123",
    "classNo": "CT25",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-601"
  },
  {
    "code": "CCST4123",
    "classNo": "CT26",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-101"
  },
  {
    "code": "CCST4123",
    "classNo": "CT27",
    "name": "Healthy Living",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-101"
  },
  {
    "code": "CCST4123",
    "classNo": "CT28",
    "name": "Healthy Living",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-1008"
  },
  {
    "code": "CCST4123",
    "classNo": "CT29",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-402"
  },
  {
    "code": "CCST4123",
    "classNo": "CT30",
    "name": "Healthy Living",
    "day": "Wed",
    "start": "17:30",
    "end": "18:50",
    "room": "CIT-401"
  },
  {
    "code": "CCST4123",
    "classNo": "CT31",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-601"
  },
  {
    "code": "CCST4123",
    "classNo": "CT32",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "CIT-601"
  },
  {
    "code": "CCST4123",
    "classNo": "CT33",
    "name": "Healthy Living",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-805"
  },
  {
    "code": "CCST4123",
    "classNo": "CT34",
    "name": "Healthy Living",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "CIT-101"
  },
  {
    "code": "CCST4123",
    "classNo": "CT35",
    "name": "Healthy Living",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "CIT-805"
  },
  {
    "code": "CCST4123",
    "classNo": "CT36",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "CIT-402"
  },
  {
    "code": "CCST4123",
    "classNo": "CT37",
    "name": "Healthy Living",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCST4123",
    "classNo": "CT38",
    "name": "Healthy Living",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "CIT-1008"
  },
  {
    "code": "CCST4123",
    "classNo": "CT39",
    "name": "Healthy Living",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "UNC616"
  },
  {
    "code": "CCST4123",
    "classNo": "CT40",
    "name": "Healthy Living",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "UNC616"
  },
  {
    "code": "CCST4123",
    "classNo": "CT41",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "UNC607"
  },
  {
    "code": "CCST4123",
    "classNo": "CT42",
    "name": "Healthy Living",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "UNC607"
  },
  {
    "code": "CCST4123",
    "classNo": "CT43",
    "name": "Healthy Living",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "ADC309"
  },
  {
    "code": "CCST4123",
    "classNo": "CT44",
    "name": "Healthy Living",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "ADC309"
  },
  {
    "code": "CCST4123",
    "classNo": "CT45",
    "name": "Healthy Living",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "UNC616"
  },
  {
    "code": "CCST4123",
    "classNo": "CT46",
    "name": "Healthy Living",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "ADC309"
  },
  {
    "code": "CCST4123",
    "classNo": "CT47",
    "name": "Healthy Living",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "UNC616"
  },
  {
    "code": "CCST4123",
    "classNo": "CT48",
    "name": "Healthy Living",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "ADC309"
  },
  {
    "code": "CCST4123",
    "classNo": "CT49",
    "name": "Healthy Living",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "UNC616"
  },
  {
    "code": "CCST4123",
    "classNo": "CT50",
    "name": "Healthy Living",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "ADC309"
  },
  {
    "code": "CCST4123",
    "classNo": "CT51",
    "name": "Healthy Living",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCST4123",
    "classNo": "CT52",
    "name": "Healthy Living",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KWC1201"
  },
  {
    "code": "CCST4123",
    "classNo": "CT53",
    "name": "Healthy Living",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCST4123",
    "classNo": "CT54",
    "name": "Healthy Living",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC1201"
  },
  {
    "code": "CCST4123",
    "classNo": "CT55",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCST4123",
    "classNo": "CT56",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KWC11A6"
  },
  {
    "code": "CCST4123",
    "classNo": "CT57",
    "name": "Healthy Living",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCST4123",
    "classNo": "CT58",
    "name": "Healthy Living",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KWC11A6"
  },
  {
    "code": "CCST4124",
    "classNo": "CL01",
    "name": "Chemistry for Life Science",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC601"
  },
  {
    "code": "CCST4124",
    "classNo": "CL01",
    "name": "Chemistry for Life Science",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC601"
  },
  {
    "code": "CCST4124",
    "classNo": "CL01",
    "name": "Chemistry for Life Science",
    "day": "Wed",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC609"
  },
  {
    "code": "CCST4124",
    "classNo": "CL02",
    "name": "Chemistry for Life Science",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC609"
  },
  {
    "code": "CCST4124",
    "classNo": "CL02",
    "name": "Chemistry for Life Science",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC609"
  },
  {
    "code": "CCST4124",
    "classNo": "CL02",
    "name": "Chemistry for Life Science",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC609"
  },
  {
    "code": "CCST4132",
    "classNo": "CL01",
    "name": "Introductory Heat and Thermodynamics",
    "day": "Tue",
    "start": "17:00",
    "end": "18:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4132",
    "classNo": "CL01",
    "name": "Introductory Heat and Thermodynamics",
    "day": "Thu",
    "start": "12:00",
    "end": "12:50",
    "room": "HKU-ROOM"
  },
  {
    "code": "CCST4134",
    "classNo": "CL01",
    "name": "Introduction to Healthcare Systems",
    "day": "Wed",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC204"
  },
  {
    "code": "CCST4134",
    "classNo": "CL01",
    "name": "Introduction to Healthcare Systems",
    "day": "Wed",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC204"
  },
  {
    "code": "CCST4134",
    "classNo": "CL02",
    "name": "Introduction to Healthcare Systems",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC204"
  },
  {
    "code": "CCST4134",
    "classNo": "CL02",
    "name": "Introduction to Healthcare Systems",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC204"
  },
  {
    "code": "CCST4134",
    "classNo": "CL03",
    "name": "Introduction to Healthcare Systems",
    "day": "Wed",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC204"
  },
  {
    "code": "CCST4134",
    "classNo": "CL03",
    "name": "Introduction to Healthcare Systems",
    "day": "Wed",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC204"
  },
  {
    "code": "CCST4144",
    "classNo": "CL01",
    "name": "Climate Change and Global Strategies",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC501"
  },
  {
    "code": "CCST4144",
    "classNo": "CL01",
    "name": "Climate Change and Global Strategies",
    "day": "Mon",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC501"
  },
  {
    "code": "CCST4144",
    "classNo": "CL02",
    "name": "Climate Change and Global Strategies",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1004"
  },
  {
    "code": "CCST4144",
    "classNo": "CL02",
    "name": "Climate Change and Global Strategies",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1004"
  },
  {
    "code": "CCST4144",
    "classNo": "CL03",
    "name": "Climate Change and Global Strategies",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC506"
  },
  {
    "code": "CCST4144",
    "classNo": "CL03",
    "name": "Climate Change and Global Strategies",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC506"
  },
  {
    "code": "CCST4145",
    "classNo": "CL01",
    "name": "Introduction to Thermal-fluid Science",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1004"
  },
  {
    "code": "CCST4145",
    "classNo": "CL01",
    "name": "Introduction to Thermal-fluid Science",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1004"
  },
  {
    "code": "CCST4145",
    "classNo": "CL01",
    "name": "Introduction to Thermal-fluid Science",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC803"
  },
  {
    "code": "CCST4145",
    "classNo": "CL01",
    "name": "Introduction to Thermal-fluid Science",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC803"
  },
  {
    "code": "CCST4145",
    "classNo": "CL02",
    "name": "Introduction to Thermal-fluid Science",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC501"
  },
  {
    "code": "CCST4145",
    "classNo": "CL02",
    "name": "Introduction to Thermal-fluid Science",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC501"
  },
  {
    "code": "CCST4145",
    "classNo": "CL02",
    "name": "Introduction to Thermal-fluid Science",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC803"
  },
  {
    "code": "CCST4145",
    "classNo": "CL02",
    "name": "Introduction to Thermal-fluid Science",
    "day": "Thu",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC803"
  },
  {
    "code": "CCST4145",
    "classNo": "CL03",
    "name": "Introduction to Thermal-fluid Science",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC803"
  },
  {
    "code": "CCST4145",
    "classNo": "CL03",
    "name": "Introduction to Thermal-fluid Science",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC803"
  },
  {
    "code": "CCST4145",
    "classNo": "CL03",
    "name": "Introduction to Thermal-fluid Science",
    "day": "Sat",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC507"
  },
  {
    "code": "CCST4145",
    "classNo": "CL03",
    "name": "Introduction to Thermal-fluid Science",
    "day": "Sat",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC507"
  },
  {
    "code": "CCST4146",
    "classNo": "CL01",
    "name": "Human Anatomy",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC501"
  },
  {
    "code": "CCST4146",
    "classNo": "CL01",
    "name": "Human Anatomy",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC501"
  },
  {
    "code": "CCST4147",
    "classNo": "CL01",
    "name": "Human Physiology",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1004"
  },
  {
    "code": "CCST4147",
    "classNo": "CL01",
    "name": "Human Physiology",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1004"
  },
  {
    "code": "CCST4147",
    "classNo": "CL02",
    "name": "Human Physiology",
    "day": "Tue",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1004"
  },
  {
    "code": "CCST4147",
    "classNo": "CL02",
    "name": "Human Physiology",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1004"
  },
  {
    "code": "CCST4171",
    "classNo": "CL01",
    "name": "Microbiological Testing",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1004"
  },
  {
    "code": "CCST4171",
    "classNo": "CL01",
    "name": "Microbiological Testing",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1004"
  },
  {
    "code": "CCST4173",
    "classNo": "CL01",
    "name": "Testing Laboratory",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC903"
  },
  {
    "code": "CCST4173",
    "classNo": "CL01",
    "name": "Testing Laboratory",
    "day": "Thu",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC903"
  },
  {
    "code": "CCST4174",
    "classNo": "CL01",
    "name": "Human Pathophysiology",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1004"
  },
  {
    "code": "CCST4174",
    "classNo": "CL01",
    "name": "Human Pathophysiology",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1004"
  },
  {
    "code": "CCST4174",
    "classNo": "CL02",
    "name": "Human Pathophysiology",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC504"
  },
  {
    "code": "CCST4174",
    "classNo": "CL02",
    "name": "Human Pathophysiology",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC504"
  },
  {
    "code": "CCST4175",
    "classNo": "CL01",
    "name": "Statistics : Ideas and Concepts",
    "day": "Tue",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC501"
  },
  {
    "code": "CCST4175",
    "classNo": "CL01",
    "name": "Statistics : Ideas and Concepts",
    "day": "Tue",
    "start": "17:30",
    "end": "18:50",
    "room": "KEC501"
  },
  {
    "code": "CCST4200",
    "classNo": "CL01",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC801"
  },
  {
    "code": "CCST4200",
    "classNo": "CL02",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC704"
  },
  {
    "code": "CCST4200",
    "classNo": "CL03",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC801"
  },
  {
    "code": "CCST4200",
    "classNo": "CL04",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC801"
  },
  {
    "code": "CCST4200",
    "classNo": "CL05",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC704"
  },
  {
    "code": "CCST4200",
    "classNo": "CL06",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC704"
  },
  {
    "code": "CCST4200",
    "classNo": "CL07",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC704"
  },
  {
    "code": "CCST4200",
    "classNo": "CL08",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC704"
  },
  {
    "code": "CCST4200",
    "classNo": "CL09",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC704"
  },
  {
    "code": "CCST4200",
    "classNo": "CL10",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC704"
  },
  {
    "code": "CCST4200",
    "classNo": "CT01",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT02",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT03",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT04",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT05",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC704"
  },
  {
    "code": "CCST4200",
    "classNo": "CT06",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC704"
  },
  {
    "code": "CCST4200",
    "classNo": "CT07",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1003A"
  },
  {
    "code": "CCST4200",
    "classNo": "CT08",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1003A"
  },
  {
    "code": "CCST4200",
    "classNo": "CT09",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT10",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT11",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT12",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT13",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1003A"
  },
  {
    "code": "CCST4200",
    "classNo": "CT14",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1003A"
  },
  {
    "code": "CCST4200",
    "classNo": "CT15",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT16",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Mon",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT17",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1003A"
  },
  {
    "code": "CCST4200",
    "classNo": "CT18",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1003A"
  },
  {
    "code": "CCST4200",
    "classNo": "CT19",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1003A"
  },
  {
    "code": "CCST4200",
    "classNo": "CT20",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC1003A"
  },
  {
    "code": "CCST4200",
    "classNo": "CT21",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT22",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT23",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT24",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT25",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT26",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT27",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT28",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT29",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC402"
  },
  {
    "code": "CCST4200",
    "classNo": "CT30",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC402"
  },
  {
    "code": "CCST4200",
    "classNo": "CT31",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC402"
  },
  {
    "code": "CCST4200",
    "classNo": "CT32",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "16:00",
    "end": "17:20",
    "room": "KEC402"
  },
  {
    "code": "CCST4200",
    "classNo": "CT33",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT34",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Fri",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT35",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC402"
  },
  {
    "code": "CCST4200",
    "classNo": "CT36",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC402"
  },
  {
    "code": "CCST4200",
    "classNo": "CT37",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC402"
  },
  {
    "code": "CCST4200",
    "classNo": "CT38",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "11:30",
    "end": "12:50",
    "room": "KEC402"
  },
  {
    "code": "CCST4200",
    "classNo": "CT39",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT40",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Tue",
    "start": "13:00",
    "end": "14:20",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT41",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT42",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "08:30",
    "end": "09:50",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT43",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT44",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "10:00",
    "end": "11:20",
    "room": "KEC1001"
  },
  {
    "code": "CCST4200",
    "classNo": "CT45",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1003A"
  },
  {
    "code": "CCST4200",
    "classNo": "CT46",
    "name": "Critical Analysis and Reasoning in Discipline-based Studies",
    "day": "Thu",
    "start": "14:30",
    "end": "15:50",
    "room": "KEC1003A"
  }
];
