import { ToolConstructable, ToolSettings } from "@editorjs/editorjs";
import Paragraph from "@editorjs/paragraph";

export const EDITOR_JS_TOOLS: {
	[toolName: string]: ToolConstructable | ToolSettings;
} = {
	paragraph: {
		class: Paragraph,
		inlineToolbar: true,
		config: {
			preserveBlank: true,
		},
	},
};
