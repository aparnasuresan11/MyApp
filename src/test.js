
// for (let i=0;i<10;i++){
//     let res=""
//     for(j=0;j<10-i;j++){
//         res+=" "
//     }
//     for(let k=0;k<i;k++){ 
//         res+=i+" "
//     }
//     console.log(res)
// }
// for (let i=9;i>0;i--){
//     let res=""
//     for(j=9;j>=i;j--){
//         res+=" "
//     }
//     for(let k=0;k<i;k++){
//         res+=i+" "
//     }
//     console.log(res)
// }



// arr=[1,2,3,4,5]
// let res=arr.filter((item)=>!(item%2))
// console.log(res)
// let rese=arr.map(ele=>ele*2)
// console.log(rese)
// let s="HELLO"
// let res=s.split("").reverse().join("")
// console.log(res)

// arr=[1,2,3,4,5]
// let res=arr.reduce((acc,cur)=>{
//     acc+=cur
//     return acc
// })
// console.log(res)

// arr.splice(2,2,"*",'9')
// console.log(arr)

// for(let i=0;i<10;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000*i)
// }

// for(let i=10;i>0;i--){
//     setTimeout(()=>{
//         console.log(i)
//     },1000*(10-i))
// }

// let a=[1,2,3,1,2,4,3,5,6,3,2,1,5]
// res={}
// for(i=0;i<a.length;i++){
//     if(a[i] in res){
//         res[a[i]]+=1
//     }
//     else{
//         res[a[i]]=1
//     }
// }
// console.log(res)

// for(let i=0;i<10;i++){
//     res=""

//     for(let j=0;j<10-i;j++){
//         res+=" "
//     }
//     for(let k=0;k<i;k++){
//         res+="* "
//     }
//     console.log(res)

// }
// for(let i=10;i>0;i--){
//     res=""
//     for(let j=0;j<10-i;j++){
//         res+=" "
//     }
//     for(let k=0;k<i;k++){
//         res+="* "
//     }
//     console.log(res)

// }

// for(let i=6;i>0;i--){
//     res=""
//     for(let j=1;j<=i;j++){
//         res+=j
//     }
//     console.log(res)
// }
// for(let i=1;i<6;i++){
//     res=""
//     for(let j=1;j<=i;j++){
//         res+=j
//     }
//     console.log(res)
// }

// console.log("*****************************")

// for(let i=1;i<6;i++){
//     res=""
//     for(k=0;k<6-i;k++){
//         res+=" "
//     }
//     for(let j=1;j<=i;j++){
//         res+=j+" "
//     }
//     console.log(res)
// }
// for(let i=1;i<6;i++){
//     res=""
//     for(let j=1;j<=i;j++){
//         res+=j
//     }
//     console.log(res)
// }


// for(i=0;i<5;i++){
//     res=""
//     for(j=0;j<5-i;j++)
//         res+=" "
//     for(k=0;k<=i;k++)
//         res+="* "
//     console.log(res)
// }



// let arr=[1,2,3,4]
// let re=arr.filter((item)=>(item%2))
// console.log(re)

// arr.splice(2,2,"*",'9')
// console.log(arr)

// let a="HELLO"
// let o=a.split('').reverse().join('')
// console.log(o)

// // for(let i=5;i>0;i--){
// //     setTimeout(()=>{
// //         console.log(i)
// //     },1000*(5-i))
// // }

// let ar=[1,2,3,1,2,4,3,5,6,3,2,1,5]
// res={}
// for(let i=0;i<ar.length;i++)
// {
 
//  if(ar[i] in res){
//      res[ar[i]]+=1
//  }  
//  else{
//      res[ar[i]]= 1
//  } 
// }
// console.log(res)

// let arar=[1,2,3]
// // let out=arar.map((item)=>(item*2))
// // console.log(out)

// let outp=arar.filter((item)=>(item>2))
// console.log(outp)

// let ot=arar.reduce((acc,cur)=>{
//     acc+=cur
//     return acc
// },0)
// console.log(ot)

// //max
// let m=arar.reduce((acc,cur)=>{
//         if(cur>acc){
//             acc=cur
//         }
//         return acc
// },0)
// console.log(m)

// let b=[1,2,3,1,2,4,3,5,6,3,2,1,5]
// let c=b.reduce((acc,cur)=>{
//     if(acc[cur])
//         acc[cur]+=1
//     else    
//         acc[cur]=1
//     return acc
// },{})
// console.log(c)


// function x(){
//     setTimeout(()=>console.log(i),1000)
//     var i=1
// }
// x();


// a=1+"2"
// console.log(a)

// a="wertt"
// b=a.split("").reverse().join("")
// console.log(b)


// a="car"
// b=a.split("")
// c=""
// for(i=b.length-1;i>=0;i--)
// {
//     c+=b[i]
// }
// console.log(c)

// a="aparna"
// const b=new Set(a.split(""))
// console.log(Array.from(b))


// const fun=(name,cfun)=>{
//     a=name.split("")
//     cfun();
// }

// fun("aparna",()=>{console.log(a)})


// const arr=[1,2,3]
// const res=arr.map(ele=>ele*2)
// console.log(res)
// const res2=arr.forEach(e=>e*3)
// console.log(arr)


