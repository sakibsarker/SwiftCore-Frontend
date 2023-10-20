import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { EditorState, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertFromHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import SoftEditorRoot from "components/SoftEditor/SoftEditorRoot";
import { useSoftUIController } from "context";

function SoftEditor({ onChange, defaultValue }) {
  const [controller] = useSoftUIController();
  const { darkMode } = controller;

  const contentState = ContentState.createFromText(defaultValue || '');
  
  const [editorState, setEditorState] = React.useState(
      EditorState.createWithContent(contentState)
  );
  
  const [lastReportedValue, setLastReportedValue] = useState("");

  React.useEffect(() => {
      const currentText = editorState.getCurrentContent().getPlainText();
      
      if (currentText !== lastReportedValue) {
          if(onChange) {
              onChange(currentText);
          }
          setLastReportedValue(currentText);
      }
  }, [editorState, onChange]);
  
  return (
    <SoftEditorRoot ownerState={{ darkMode }}>
      <Editor editorState={editorState} onEditorStateChange={setEditorState} />
    </SoftEditorRoot>
  );
}

SoftEditor.defaultProps = {
  onChange: null,
  defaultValue: "",
};

SoftEditor.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};

export default SoftEditor;
