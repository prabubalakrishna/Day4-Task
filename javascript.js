//a. Print odd numbers in an array
var y=[1,2,3,4,5,6,7]

var odd=(array)=>{
   let arr=[];
   for(let i=0; i<array.length; i++)
   {
     if(array[i]%2!==0)
     {
      arr.push(array[i]);
     }
   }
   return arr;
}
console.log(odd(y));

//b. Convert all the strings to title caps in a string array
var str="my name is ayesha";
let def= (str)=>{
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}
console.log(def(str));
//c.Sum of all numbers in an array
 var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
let ghi=(a)=>
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
}
console.log(ghi(a));

//D.Return all the prime numbers in an array
let n=34;
let l=(n)=>
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
}
console.log(l(n));
//E.Return all the palindromes in an array
Palindrome = (arr, n) =>
    {
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }

    //f.Return median of two sorted arrays of the same size.
    function(nums1, nums2) {
       let s1= nums1.length
       let s2= nums2.length
       let index = s1+s2
       if(s1==0){
           if(s2%2==1){
               return nums2[Math.floor(index/2)]
           }else{
               return  (nums2[Math.floor(index/2)-1] + nums2[Math.floor(index/2)])/2
           }
       }
       for(let i=0 ; i<index/2+1;i++){
               nums1.push(nums2[i])
           }
       nums1.sort((a,b)=>a-b)
       console.log(nums1)
       if(index%2==1){
           return nums1[Math.floor(index/2)]
       }else{
           return (nums1[Math.floor(index/2)-1] + nums1[Math.floor(index/2)])/2
       }

      // g.Remove duplicates from an array
       var array=[1,1,2,3,4,5];
       function (array){
          let dup = [...new Set(array)];
          return(dup);
        }
        (array);
       
        IIFE :
        var array=[1,1,2,3,4,5];
       (function (array){
          let dup = [...new Set(array)];
          return(dup);
        })
        (array);
       
       //h.Rotate an array by k times
       function (a, n, k)
       {
           k = k % n;
       
           for (let i = 0; i < n; i++) {
               if (i < k) {
       
       
                   console.log(a[n + i - k] + " ");
               }
               else {
       
       
                   console.log((a[i - k]) + " ");
               }
           }
       
       }
         let Array = [1, 2, 3, 4, 5];
       let N = Array.length;
       let K = 2;
       (Array, N, K);
       
h.Rotate an array by k times
anonymous :
function (a, n, k)
{
    k = k % n;

    for (let i = 0; i < n; i++) {
        if (i < k) {


            console.log(a[n + i - k] + " ");
        }
        else {


            console.log((a[i - k]) + " ");
        }
    }

}
  let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
(Array, N, K);

