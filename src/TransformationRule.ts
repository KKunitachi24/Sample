// TransformationRule.ts

// Define an interface for a column mapping
interface ColumnMapping {
    sourceColumn: string;
    targetColumn: string;
}

// Define an enum for different data types
enum DataType {
    STRING = 'string',
    NUMBER = 'number',
    BOOLEAN = 'boolean',
    DATE = 'date',
}

// Define an interface for a transformation rule
interface TransformationRule {
    mappings: ColumnMapping[];
    dataTypeConversions?: Record<string, DataType>; // key: column name, value: DataType
    mergingRules?: MergingRule[];
    splittingRules?: SplittingRule[];
    conditionalLogic?: ConditionalLogic[];
}

// Define an interface for a merging rule
interface MergingRule {
    targetColumn: string;
    sourceColumns: string[];
}

// Define an interface for a splitting rule
interface SplittingRule {
    sourceColumn: string;
    targetColumns: string[];
    delimiter: string;
}

// Define an interface for conditional logic
interface ConditionalLogic {
    condition: string; // Represents the condition as a string, e.g. "columnA > 10"
    trueRule: TransformationRule;
    falseRule: TransformationRule;
}