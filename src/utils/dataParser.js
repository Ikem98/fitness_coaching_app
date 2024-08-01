import Papa from 'papaparse';

export default function parseCSV (csvFile, callback){
    Papa.parse(csvFile, {
      header: true,
      download: true,
      complete: function(results) {
        callback(results.data);
      },
    });
};