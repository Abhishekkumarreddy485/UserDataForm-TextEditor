import React, { useState, useRef } from "react";
import { Editor, EditorState, RichUtils, AtomicBlockUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import "./RichTextEditor.css"; // Custom styles

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editor = useRef(null);

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const onTab = (e) => {
    const maxDepth = 4;
    setEditorState(RichUtils.onTab(e, editorState, maxDepth));
  };

  const toggleBlockType = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  const addLink = () => {
    const url = prompt("Enter the URL:");
    if (url) {
      setEditorState(RichUtils.toggleLink(
        editorState,
        editorState.getSelection(),
        url
      ));
    }
  };

  const addImage = () => {
    const url = prompt("Enter the Image URL:");
    if (url) {
      const contentState = editorState.getCurrentContent();
      const contentStateWithEntity = contentState.createEntity(
        'IMAGE',
        'IMMUTABLE',
        { src: url }
      );
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      const newEditorState = AtomicBlockUtils.insertAtomicBlock(
        editorState,
        entityKey,
        ' '
      );
      setEditorState(newEditorState);
    }
  };

  return (
    <div className="editor-container">
      {/* Toolbar */}
      <div className="toolbar">
        <button onClick={() => toggleInlineStyle("BOLD")} className={editorState.getCurrentInlineStyle().has("BOLD") ? "active" : ""}>
          <b>B</b>
        </button>
        <button onClick={() => toggleInlineStyle("ITALIC")} className={editorState.getCurrentInlineStyle().has("ITALIC") ? "active" : ""}>
          <i>I</i>
        </button>
        <button onClick={() => toggleInlineStyle("UNDERLINE")} className={editorState.getCurrentInlineStyle().has("UNDERLINE") ? "active" : ""}>
          <u>U</u>
        </button>
        <button onClick={() => toggleBlockType("header-one")} className={editorState.getCurrentContent().getBlockForKey(editorState.getSelection().getStartKey()).getType() === "header-one" ? "active" : ""}>
          H1
        </button>
        <button onClick={() => toggleBlockType("header-two")} className={editorState.getCurrentContent().getBlockForKey(editorState.getSelection().getStartKey()).getType() === "header-two" ? "active" : ""}>
          H2
        </button>
        <button onClick={() => toggleBlockType("unordered-list-item")} className={editorState.getCurrentContent().getBlockForKey(editorState.getSelection().getStartKey()).getType() === "unordered-list-item" ? "active" : ""}>
          <b>&#8226;</b> List
        </button>
        <button onClick={() => toggleBlockType("ordered-list-item")} className={editorState.getCurrentContent().getBlockForKey(editorState.getSelection().getStartKey()).getType() === "ordered-list-item" ? "active" : ""}>
          1. List
        </button>
        <button onClick={addLink}>
          <b>🔗</b> Link
        </button>
        <button onClick={addImage}>
          <b>🖼️</b> Image
        </button>
      </div>

      {/* Editor */}
      <div className="editor" onClick={() => editor.current.focus()}>
        <Editor
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onTab={onTab}
          onChange={setEditorState}
          placeholder="Start writing..."
          spellCheck={true}
          ref={editor}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
