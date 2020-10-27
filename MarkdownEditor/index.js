import React, {useState} from 'react';
import PropTypes from 'prop-types';

import css from './style.css';
import ReactMarkdown from 'react-markdown';
import {render} from 'react-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

function MarkdownEditor({ file, write }) {
  const [data, setData] = useState();
  console.log(file, write);
  const reader = new FileReader();
  reader.readAsText(file)
  reader.onload = function() {
    const text = reader.result;
    setData(text);
  };
  console.log(file, write);
  const [input = data, setInput] = useState();
  return (
    <div>
      <h3>Markdown Editor</h3>
      <div className={css.editor}>

        <textarea defaultValue ={data} autoFocus className="textarea" value={input} onChange={
          (e) => setInput(e.target.value)}/>

        <ReactMarkdown source={input} className="markdown"
        renderers={{code: Component,}}
        />

      </div>
    </div>

  );
}


const Component = ({value, language}) => {
  return (
    <SyntaxHighlighter language={language ?? null} style={docco}>
      {value ?? ''}
    </SyntaxHighlighter>
  );
};

MarkdownEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default MarkdownEditor;
