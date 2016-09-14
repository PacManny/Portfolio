$(document).ready(function () {

var randomNumbers = [];

function swap(array,element1, element2)
{
 var numberHolder = array[element1];
 array[element1] = array[element2];
 array[element2] = numberHolder;
}

function generateNumbers(emptyArray, amount)
{
  while(emptyArray.length != amount)
  {
    randomNumbers.push(Math.floor(Math.random() * 100) + 1);

  }

}

function bubbleSort(arrayToSort) {
    var elementsLeft = arrayToSort.length;
    var count = 0
    do {
        var elementPlaceHolder = 0;
        for (var index = 0; index < elementsLeft + 1; index++) {

          //debug("checking element at indexes " + index +" :"+arrayToSort[index]+", "+(index + 1)+" :" + arrayToSort[index + 1]);

            if (arrayToSort[index] > arrayToSort[index + 1]) {
                swap(index, index + 1, arrayToSort);
                elementPlaceHolder = index;
              // debug("sorted "+ elementPlaceHolder+" elements")
            }
        }
        elementsLeft = elementPlaceHolder;
      count++
     // debug("There are "+ elementsLeft+" elements left to sort")
      } while (elementsLeft != 0);
 // debug("It took "+count+" interations to sort");
};

var t0 = performance.now();
function quickSortH(a, start, end)
{
  if (start < end)
    {
      var partitionIndex = partitionH(a, start, end)
      quickSortH(a,start,partitionIndex);
      quickSortH(a, partitionIndex + 1, end)
    }
}
var t1 = performance.now();
function partitionH(a, start, end)
{
  pivot = a[start]
  i = start -1
  j = end + 1
  while(true)
  {
    do
    {
      i = i + 1
    } while(a[i] < pivot);
     do
     {
       j = j - 1
     } while(a[j] > pivot);

    if (i >= j)
    {
      return j
    }
      swap(a,i,j)
    }
}

var t0 = performance.now();

function quickSortL (a, start, end)
{
  if (start < end)
    {
     var partitionIndex = partitionL(a, start, end);
      quickSortL(a,start,partitionIndex - 1);
      quickSortL(a, partitionIndex + 1, end);
    }
}

var t1 = performance.now();

function partitionL (a, start, end)
{
  var pivot = a[end];
  var partitionIndex = start;
  for (var j = start; j < end; j++)
    {
      if (a[j] <= pivot)
        {
          swap(a, j, partitionIndex);
          partitionIndex++;
        }
    }
  swap(a, partitionIndex, end)
  return partitionIndex;
}
});
