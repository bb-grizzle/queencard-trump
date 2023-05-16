import { useEffect } from 'react';
import styled from 'styled-components';
import Editor, { LogLevels } from '@editorjs/editorjs';
import { UseInputEditorResultType } from '@/types/input/editor';
import media from '@/styles/media';
import { EDITOR_JS_TOOLS } from '@/lib/editorjs/tools';

interface EditorjsProps extends Omit<UseInputEditorResultType, "layout"> {

}

const Wrapper = styled.div`
  background-color: ${props => props.theme.colorPalette.sub.white};
  border: 1px solid ${props => props.theme.color.div};
  border-radius: 8px;
  width: 100%;
  min-height: 480px;
  padding: 32px 0;
  
  @media ${media.tablet} {
    padding: ${props => props.theme.size.offset.tablet}px 0;
  }


  .ce-block__content, .ce-toolbar__content{
    max-width: calc(100% - 72px * 2);
    
    @media ${media.tablet} {
      max-width: calc(100% - ${props => props.theme.size.offset.tablet}px * 2);
    }
  }

`;

const Editorjs: React.FC<EditorjsProps> = ({ editorRef, option, onChange }) => {


  // STATE
  useEffect(() => {
    if (editorRef.current) return;
    editorRef.current = new Editor({
      holder: "editorjs",
      placeholder: 'Let`s write an awesome story!',
      logLevel: "ERROR" as LogLevels,
      sanitizer: { p: true },
      minHeight: 0,
      tools: EDITOR_JS_TOOLS,
      onChange,
      ...option
    });
  }, [])

  // RENDER
  return (
    <Wrapper id='editorjs' />
  );
}

export default Editorjs;