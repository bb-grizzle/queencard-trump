import dynamic from "next/dynamic";

interface EditorViewRenderProps {
  data: string;
}

const EditorView = dynamic(() => import("./EditorView"), { ssr: false })

const EditorViewRender: React.FC<EditorViewRenderProps> = (props) => {
  return (
    <EditorView {...props} />
  );
}

export default EditorViewRender;