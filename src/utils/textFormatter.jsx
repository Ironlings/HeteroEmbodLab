import React from 'react';

/**
 * Parses a string and returns an array of React elements with Markdown formatting.
 * Supports:
 * - **bold**
 * - *italic*
 * - `code`
 */
export const parseMarkdown = (text) => {
    if (!text) return null;

    // Regex Explanation:
    // (`[^`]+`)   -> Matches code blocks enclosed in backticks
    // (\*\*.*?\*\*) -> Matches bold text enclosed in double asterisks
    // (\*[^*]+\*)   -> Matches italic text enclosed in single asterisks
    const regex = /(`[^`]+`|\*\*.*?\*\*|\*[^*]+\*)/g;

    const parts = text.split(regex);

    return parts.map((part, index) => {
        if (!part) return null;

        if (part.startsWith('`') && part.endsWith('`')) {
            return (
                <code
                    key={index}
                    style={{
                        background: '#f1f5f9', // clearer grey
                        border: '1px solid #e2e8f0',
                        padding: '0.2em 0.4em',
                        borderRadius: '4px',
                        fontFamily: 'monospace',
                        fontSize: '0.9em',
                        color: '#ef4444' // red for contrast
                    }}
                >
                    {part.slice(1, -1)}
                </code>
            );
        }
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index} style={{ fontWeight: '700' }}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
            return <em key={index} style={{ fontStyle: 'italic' }}>{part.slice(1, -1)}</em>;
        }
        return part;
    });
};
