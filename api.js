function doPost(e) {
  var sheet = SpreadsheetApp.openById(
    "1FHz8P9Urm-6rlHsbohsz15UBzE37-8H9mh7cKmLe7NA"
  ).getActiveSheet();

  var data = [
    new Date(),
    e.parameter.carteira,
    e.parameter.funcao,
    e.parameter.desabafo,
  ];

  sheet.appendRow(data);

  // Cria a mensagem de retorno com um emoji feliz
  var mensagem = "Dados enviados com sucesso! 😊";

  return ContentService.createTextOutput(mensagem).setMimeType(
    ContentService.MimeType.HTML
  );
}

function doGet() {
  // Quando alguém tentar acessar via GET, redirecione para a página principal
  var htmlOutput = HtmlService.createHtmlOutput(
    '<script>window.location="URL_DA_SUA_PAGINA_PRINCIPAL";</script>'
  );
  return htmlOutput;
}
