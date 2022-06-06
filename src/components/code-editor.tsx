import MonacoEditor, {EditorDidMount} from '@monaco-editor/react'
import React from "react";

interface CodeEditorProps {
    initialValue: string;

    onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({onChange, initialValue}) => {
    const onEditorDidMount: EditorDidMount   = (getValue, monacoEditor: any) => {
        monacoEditor.onDidChangeModelContent(() => {
            onChange(getValue());
        });

        monacoEditor.getModel()?.updateOptions({tabSize: 2});
    };

    return <MonacoEditor
        editorDidMount={onEditorDidMount}
        value={initialValue}
        language="javascript"
        height="90vh"
        options={{
            wordWrap: 'on',
            minimap: {enabled: false},
            showUnused: false,
            folding: false,
            lineNumbersMinChars: 3,
            fontSize: 25,
            scrollBeyondLastLine: false,
            automaticLayout: true
        }}
    />;
};

export default CodeEditor

