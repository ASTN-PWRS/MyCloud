//import "@shoelace-style/shoelace";
import { setBasePath, registerIconLibrary } from "@shoelace-style/shoelace";

setBasePath("/shoelace/");
registerIconLibrary("vscode", {
  resolver: (name) => `/icons/vscode/file_type_${name}.svg`,
});
