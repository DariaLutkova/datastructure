function bottomUpMergeSort(items) {
  var array = [];
  
  if ( items ) {
    array = items.map(function(item) { return item; });
  }
  
  bottomUpSort(array, array.length);
  
  return array;
}

function bottomUpSort(items, n) {
  var width, i;
  
  for ( width = 1; width < n; width = width * 2 ) {
    for ( i = 0; i < n; i = i + 2 * width ) {
      bottomUpMerge(items, i, Math.min(i + width, n), Math.min(i + 2 * width, n));
    }
  }
}

function bottomUpMerge(items, left, right, end) {
  var n = left,
      m = right,
      currentSort = [],
      j;
  
  for ( j = left; j < end; j++ ) {
    if ( n < right && ( m >= end || items[n] < items[m] )) {
      currentSort.push(items[n]);
      n++;
    }
    else {
      currentSort.push(items[m]);
      m++;
    }
  }
  
  currentSort.map(function(item,i) { 
    items[left + i] = item; 
  });
}

var items1 = [2, 5, 142, 5, 1, 65, -2, 323, 0, 2, 12, -13, 12, 1],
    items2 = [9, 8, 54, 75, 18, 2, 3, 10, -11, 3, 0, -127, 90, -2, 0, 11];
console.log(items1 + ' -> ' + bottomUpMergeSort(items1));
console.log(items2 + ' -> ' + bottomUpMergeSort(items2));