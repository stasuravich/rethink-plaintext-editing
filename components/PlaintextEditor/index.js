import React, {useState, useEffect, Component} from 'react';
import PropTypes from 'prop-types';
import css from './style.css';



function PlaintextEditor({ file, write }) {
  const [data, setData] = useState();
  console.log(file, write);
  const reader = new FileReader();
  reader.readAsText(file)
  reader.onload = function() {
    const text = reader.result;
    setData(text);
  };
  if (typeof window !== 'undefined') {
    const CKEditor = require('@ckeditor/ckeditor5-react');
    const ClassicEditor = require('@ckeditor/ckeditor5-build-classic');
    return (
      <div className={css.editor}>
        <h3>Text Editor</h3>
        <CKEditor
          editor={ClassicEditor}
          data = {data}
        />
      </div>
    );
  }
}

PlaintextEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default PlaintextEditor;
