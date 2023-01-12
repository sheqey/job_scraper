const XLSX = require('xlsx');
const fs = require('fs');
const workbook = XLSX.readFile("C:\\Users\\ahmed.abdirizak\\Downloads\\All content (2).csv")
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(sheet);
const matchingRows = data.filter(row => row.A === 'Chezasmart');
let csvString = "A, B, C, D\n"; 
matchingRows.forEach(row => {
    csvString += Object.values(row).join(',') + "\n";
});
fs.writeFile('C:\Users\ahmed.abdirizak\Downloads\All content (2).csv', csvString, (err) => {
  if (err) throw err;
  console.log('Matching rows were written to file.');
});
