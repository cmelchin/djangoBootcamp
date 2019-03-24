var p1 = prompt("Play one's name. You will be playing as grey.");
var p1color = 'rgb(64, 67, 78)';

var p2 = prompt("Play two's name. You will be playing as green.");
var p2color = 'rgb(102, 133, 134)';

var game_on = true;
var table = $('table tr');

function reportWin(rowNum, colNum) {
  console.log("You won starting at this row & column.");
  console.log(rowNum);
  console.log(colNum);
}

function changeColor(rowIndex,colIndex,color) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}

function returnColor(rowIndex,colIndex,) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function checkBottom(colIndex){
  var colorReport = returnColor(5,colIndex);
  for (var row = 5; row > -1; row--) {
    colorReport = returnColor(row,colIndex);
    if(colorReport === 'rgb(248, 241, 255)'){
      return row
    }
  }
}

function colorMatchCheck(one,two,three,four) {
  return (one === two && one === three && one === four && one !== 'rgb(248, 241, 255)' && one !== undefined);
}

function horizontalWinCheck() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if(colorMatchCheck(returnColor(row,col),returnColor(row,col+1),returnColor(row,col+2),returnColor(row,col+3))){
        console.log('horiz');
        reportWin(row,col);
        return true;
      }else{
        continue;
      }
    }
  }
}

function verticalWinCheck() {
  for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 7; col++) {
      if(colorMatchCheck(returnColor(row,col),returnColor(row+1,col),returnColor(row+2,col),returnColor(row+3,col))){
        console.log('vertical');
        reportWin(row,col);
        return true;
      }else{
        continue;
      }
    }
  }
}

function diagonalWinCheck() {
  for (var row = 0; row < 7; row++) {
    for (var col = 0; col < 5; col++) {
      if(colorMatchCheck(returnColor(row,col),returnColor(row+1,col+1),returnColor(row+2,col+2),returnColor(row+3,col+3))){
        console.log('diag');
        reportWin(row,col);
        return true;
      }else if (colorMatchCheck(returnColor(row,col),returnColor(row-1,col+1),returnColor(row-2,col+2),returnColor(row-3,col+3))){
        console.log('diag');
        reportWin(row,col);
        return true;
      }else{
        continue;
      }
    }
  }
}

var currentPlayer = 1;
var currentName = p1;
var currentColor = p1color;

$('h3').text("It is "+p1+"\'s turn.")

$('.board button').on('click',function(){
  var col = $(this).closest('td').index();

  var bottomAvail = checkBottom(col);

  changeColor(bottomAvail,col,currentColor);

  if(horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()){
    $('h1').text(currentName+" won!!!")
    $('h3').fadeOut('fast');
    $('h2').fadeOut('fast');
  }
  currentPlayer = currentPlayer * -1;

  if (currentPlayer === 1){
    currentName = p1;
    $('h3').text("It is "+currentName+"\'s turn.");
    currentColor = p1color;
  }else{
    currentName = p2;
    $('h3').text("It is "+currentName+"\'s turn.");
    currentColor = p2color;
  }
})

// if (currentPlayer === 1) {
//   currentName = p1;
//   $('h3').text(currentName+": it is your turn, please pick a column to drop your blue chip.");
//   currentColor = p1Color;
// }else {
//   currentName = p2
//   $('h3').text(currentName+": it is your turn, please pick a column to drop your red chip.");
//   currentColor = p2Color;
// }
//
// })
