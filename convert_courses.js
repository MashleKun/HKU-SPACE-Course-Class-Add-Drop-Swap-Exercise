const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'mastertimetable.txt');
const outputFile = path.join(__dirname, 'courses.js');

try {
    const rawData = fs.readFileSync(inputFile, 'utf-8');
    const lines = rawData.split(/\r?\n/); // Handle both CRLF and LF

    const courses = [];

    const weekdayMap = {
        '1': 'Mon',
        '2': 'Tue',
        '3': 'Wed',
        '4': 'Thu',
        '5': 'Fri',
        '6': 'Sat',
        '0': 'Sun' // Just in case
    };

    // Regex Explanation:
    // ^(CC\w+)               -> Capture Group 1: Course Code (Starts with CC, alphanumeric)
    // \s+                    -> Separator
    // ([A-Z0-9]+)            -> Capture Group 2: Class No (Alphanumeric)
    // \s+                    -> Separator
    // (.+?)                  -> Capture Group 3: Course Name (Non-greedy match until the following numeric patterns)
    // \s+                    -> Separator
    // (\d+)                  -> Capture Group 4: Semester (Digits)
    // \s+                    -> Separator
    // (\d)                   -> Capture Group 5: Weekday Code (Single digit)
    // \s+                    -> Separator
    // (\d{1,2}:\d{2})        -> Capture Group 6: Start Time
    // \s*-\s*                -> Separator (hyphen with optional spaces)
    // (\d{1,2}:\d{2})        -> Capture Group 7: End Time
    // \s+                    -> Separator
    // (\S+)                  -> Capture Group 8: Room (Non-whitespace characters)
    // $                      -> End of line
    const regex = /^(CC\w+)\s+([A-Z0-9]+)\s+(.+?)\s+(\d+)\s+(\d)\s+(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})\s+(.+)$/;

    lines.forEach((line, index) => {
        const trimmedLine = line.trim();
        if (!trimmedLine.startsWith('CC')) return;

        const match = trimmedLine.match(regex);

        if (match) {
            const [_, code, classNo, name, semester, dayCode, start, end, room] = match;

            // Basic validation to ensure we didn't capture part of the name as semester if regex was too greedy or loose
            // But with \d+ \d and time format, it should be robust.

            courses.push({
                code: code,
                classNo: classNo,
                name: name.trim(),
                day: weekdayMap[dayCode] || dayCode,
                start: start,
                end: end,
                room: room
            });
        }
    });

    const outputContent = `const allCourses = ${JSON.stringify(courses, null, 2)};\n`;
    fs.writeFileSync(outputFile, outputContent);
    console.log(`Successfully converted ${courses.length} courses to ${outputFile}`);

} catch (err) {
    console.error('Error processing file:', err);
}
