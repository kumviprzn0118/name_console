$(document).ready(function() {
    // クリックした要素のタグ名とname属性の値を出力する
    $('body').on('click', '*', function() {
      var name = $(this).attr('name');
      if (name) {
        console.log(name);
      }
    });
});

