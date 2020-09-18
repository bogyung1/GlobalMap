
const express = require('express');
const router = express.Router();
const xlsx = require( "xlsx" );
const excelFile = xlsx.readFile( "public/airport_code.xlsx" );

const sheetName = excelFile.SheetNames[0];
const firstSheet = excelFile.Sheets[sheetName];

const jsonData = xlsx.utils.sheet_to_json( firstSheet, { defval : "" } );

const airportnames = jsonData.map((data) => data.name);

//console.log(jsonData);

