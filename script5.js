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