import React, { useState } from 'react';

const TransformationRuleEditor = () => {
    const [rules, setRules] = useState([{}]);

    const addRule = () => {
        setRules([...rules, {}]);
    };

    const handleChange = (index, key, value) => {
        const newRules = [...rules];
        newRules[index][key] = value;
        setRules(newRules);
    };

    return (
        <div>
            <h2>Edit Transformation Rules</h2>
            {rules.map((rule, index) => (
                <div key={index} className="rule">
                    <select
                        value={rule.dataType || ''}
                        onChange={(e) => handleChange(index, 'dataType', e.target.value)}
                    >
                        <option value="">Select Data Type</option>
                        <option value="string">String</option>
                        <option value="number">Number</option>
                        <option value="date">Date</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Columns to merge"
                        value={rule.columnsToMerge || ''}
                        onChange={(e) => handleChange(index, 'columnsToMerge', e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Column to split"
                        value={rule.columnToSplit || ''}
                        onChange={(e) => handleChange(index, 'columnToSplit', e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Condition"
                        value={rule.condition || ''}
                        onChange={(e) => handleChange(index, 'condition', e.target.value)}
                    />
                </div>
            ))}
            <button onClick={addRule}>Add Rule</button>
        </div>
    );
};

export default TransformationRuleEditor;