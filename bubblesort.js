function swap(anArr){
    if(anArr[0]> anArr[1]){
        var temp = anArr[0];
        anArr[0] = anArr[1];
        anArr[1] = temp;
    }
    return anArr;
}
function bubbleSort(array) {

    if(array.length < 2){
        return array;
    }

    for(var i = 0; i<array.length-1;i++){
        for(var j=1;j<array.length;j++){
            if(array[i] > array[j]){
                var temp = swap(array[i],array[j]);//return biggest
                array[i] = array[j];
                array[j] = temp;
            }
        }
            
    }
     return array
}
