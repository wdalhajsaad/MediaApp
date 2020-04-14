export const GetDateString= (date) => {
var res=[];
   const words = date.split(' ');
     words[1]
  var shortDate=  words[1]+'/' + getMonthNumber(words[2])+'/'+ words[3];
 // alert(words[2]);
    res[0]=shortDate;
    res[1]= words[4].substring(0,5)
    
 return res;


}

export const getMonthNumber=(word)=>{

    switch (word) {
        case "Feb":
            return '2'
            break;
              case "Mar":
            return '3'
            break;
    
        default:
        return '0'
            break;
    }


}