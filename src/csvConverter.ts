// csvConverter.ts

class CSVConverter {
    constructor(data) {
        this.data = data;
    }

    convertDataType(column, targetType) {
        // Conversion logic here
        this.data.forEach(row => {
            if (targetType === 'number') {
                row[column] = Number(row[column]);
            } else if (targetType === 'string') {
                row[column] = String(row[column]);
            }
            // Add more type conversions as needed
        });
    }

    mergeColumns(columns, newColumnName) {
        this.data.forEach(row => {
            row[newColumnName] = columns.map(col => row[col]).join(' ');
        });
    }

    splitColumn(columnToSplit, newColumnNames, delimiter) {
        this.data.forEach(row => {
            const values = row[columnToSplit].split(delimiter);
            newColumnNames.forEach((newColName, index) => {
                row[newColName] = values[index];
            });
        });
    }

    conditionalTransform(column, condition, transformFunction) {
        this.data.forEach(row => {
            if (condition(row[column])) {
                row[column] = transformFunction(row[column]);
            }
        });
    }
}

// Example usage:
// const converter = new CSVConverter(data);
// converter.convertDataType('age', 'number');
// converter.mergeColumns(['firstName', 'lastName'], 'fullName');
// converter.splitColumn('address', ['street', 'city'], ', ');
// converter.conditionalTransform('status', value => value === 'active', value => 'inactive');
