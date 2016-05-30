function sortNumber(a,b)
{
 return a - b;
}
function median(array)
{
    var evenArr = [];
    for (var i = 1; i < array.length ; i = i + 2)
    {
         evenArr.push(array[i]);
    }
    var sortArr = evenArr.sort(sortNumber);
    if(sortArr.length % 2 == 0)
    {
        return Math.floor((sortArr[sortArr.length/2]+sortArr[sortArr.length/2-1])/2);
    }
    else
    {
        return (sortArr[Math.floor(sortArr.length/2)]);
    }
    
}
function calculate_median(arr) 
{
  //请勿改动函数名
    var finalResult;
    finalResult = median(arr);
    return finalResult;
}

module.exports = calculate_median;
