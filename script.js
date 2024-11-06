$('#check-similarity').on('click', function() {
  var text1 = $('#text1').val();
  var text2 = $('#text2').val();
  
  $.ajax({
      method: 'POST',
      url: 'https://api.api-ninjas.com/v1/textsimilarity',
      headers: { 'X-Api-Key': 'd6DiaXrQpbokeDb/+3bYAA==GcIa5gzpjMqBYD7R' },
      contentType: 'application/json',
      data: JSON.stringify({ "text_1": text1, "text_2": text2 }),
      success: function(result) {
          $('#result').text('Similarity Score: ' + result.similarity);
      },
      error: function ajaxError(jqXHR) {
          $('#result').text('Error: ' + jqXHR.responseText);
          console.error('Error: ', jqXHR.responseText);
      }
  });
});
