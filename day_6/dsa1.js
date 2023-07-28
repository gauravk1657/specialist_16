//   shift all zero   right side of array

// let suppose we hab=ve array  arr=[1,5,0,0,,7,78,0]


// logic of array 


function myfun(arr,n)
{


    let nonzero=0;



  for (let i=0;i<n;i++)
  {

if (arr[nonzero]!==0)
{

    arr[nonzero]=arr[i]
    nonzero++



}

while(nonzero<arr.length)
{
  arr[nonzero]=0
    nonzero++

}


  }

  console.log(arr)




}