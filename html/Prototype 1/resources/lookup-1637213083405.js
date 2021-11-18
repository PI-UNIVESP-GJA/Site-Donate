(function(window, undefined) {
  var dictionary = {
    "25b36003-4430-48b7-ae5a-6eda2f94fb59": "cadastro",
    "315186cb-2d2d-4ec5-ab47-f37d2e309600": "doacoes publicadas",
    "9532194e-1769-4380-886c-56b1022b2138": "Quem Somos",
    "cfa9aba9-a187-490a-b09b-0f7e8d24f240": "login",
    "0fad7dcf-7563-44ee-aae6-0c616931537c": "tela inicial",
    "c42d16bb-2afb-46b5-ba4e-177902ed4312": "Contato",
    "bbf7f97a-d8a1-4a51-9800-d3a118255053": "cadastrar pedido",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "cadastrar doacao",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);