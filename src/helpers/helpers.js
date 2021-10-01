export function showNotification(setter) {
    setter(true);
    setTimeout(() => {
      setter(false);
    }, 4000);
  }
  
  export function checkWin(correct, wrong, word) {
    let status = 'win';
  
    word.split('').forEach(letter => {
      if(!correct.includes(letter)){
        status = '';
      }
    });
    
    if(wrong.length === 5) status = 'lose';
  
    return status
  }
  