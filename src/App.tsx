import React, { useState } from 'react';

const App: React.FC = () => {
    const [csvData, setCsvData] = useState<string>('');
    const [jsonData, setJsonData] = useState<string>('');

    const handleCsvInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCsvData(event.target.value);
    };

    const convertCsvToJson = () => {
        const lines = csvData.split('\n');
        const headers = lines[0].split(',');
        const jsonResult = lines.slice(1).map(line => {
            const values = line.split(',');
            return headers.reduce((obj, header, index) => {
                obj[header.trim()] = values[index]?.trim() || '';
                return obj;
            }, {} as any);
        });
        setJsonData(JSON.stringify(jsonResult, null, 2));
    };

    return (
        <div>
            <h1>CSV to JSON Converter</h1>
            <textarea
                rows={10}
                cols={50}
                placeholder="Enter CSV data..."
                value={csvData}
                onChange={handleCsvInputChange}
            />
            <br />
            <button onClick={convertCsvToJson}>Convert</button>
            <h2>Converted JSON</h2>
            <pre>{jsonData}</pre>
        </div>
    );
};

export default App;