import { setBasePath, registerIconLibrary } from "/shoelace/shoelace.es.js";
setBasePath("/shoelace/");
registerIconLibrary("vscode", {
  resolver: (name) => `/icons/vscode/file_type_${name}.svg`,
});
