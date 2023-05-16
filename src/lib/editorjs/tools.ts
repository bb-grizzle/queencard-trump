import { ToolConstructable, ToolSettings } from "@editorjs/editorjs";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";

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
	header: {
		class: Header as any,
		config: {
			placeholder: "Enter a header",
			levels: [2, 3, 4],
			defaultLevel: 3,
		},
	},
};
