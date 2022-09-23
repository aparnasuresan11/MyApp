// console.log((null===undefined))
// console.log((undefined==null))
// console.log(typeof(null))


// import { useEffect } from "react";

// const a=[1,2,3]
// a.pop(3)
// console.log(a)
// b={a:1,b:2}
// b.a=9
// console.log(b)
// const fun=(a)=>(b)=>{
//     return a*b
// }

// let r=fun(2)(3)
// console.log(r)

// import React, { Component } from 'react';


// class Parent extends React.Component{
//     handle(val){
//         console.log(val)
//     }
//     render(){
//        <Child send={handle}/>
//     }
// }

// export default class Child extends React.Component{
//     send1(){
//         this.props.send(3)
//     }
//     render(){
//         this.send1();
//     }
// }



// function add(a){
    
//     b=a.toString()
//     let c=b.split('')
//     var res=c.reduce((acc,cur)=>{
//     acc+=parseInt(cur)
//     return acc
//     },0)
//     if(res>9){
//         add(res)
//     }
//     else{
//         console.log(res)
//     }
// }

// add(4987)



// let numbers = [1, 2, [3, 4, [5, 6, [7, 8]]]];
// let d=numbers.flat(Infinity)
// console.log(d)


// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 3 * 100);
// });

// p.then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//              resolve(result * 2);
//         }, 3 * 1000);
//     });
// }).then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(result * 3);
//         }, 3 * 1000);
//     });
// }).then(result => console.log(result));


// const fun=(a)=>(b)=>(c)=>(d)=>(e)=>{
//     return a + b + c + d + e
// }

// console.log(fun(1)(2)(3)(4)(5))

// const a = "fdsfjngjkdsfhhhhhhhhhhhfsdfsd"

// b=a.split('')
// console.log(b)
// res={}
// for(i=0;i<b.length;i++){
//     if(b[i] in res)
//         res[b[i]]+=1
//     else
//         res[b[i]]=1
// }
// console.log(res)

// const a = "fdsfjngjkdsfhhhhhhhhhhhfsdfsd"
// console.log(a.split('h').length)
// let max=0
// let maxchar=''
// a.split('').forEach((char)=>{
//     if(a.split(char).length>max){
//         max=a.split(char).length-1
//         maxchar=char
//     }
// })
// console.log(maxchar)

// a=[1,2,32,111,1]
// a.sort((a,b)=>a-b)
// console.log(a)

// max=0
// let res=a.forEach(element => {
//     if(max<element)
//         max=element
// });
// console.log(max)


// let obj1=[{
//     firstname:'Appu',
//     lastname:'Nom',
// },
// {
//     firstname:'Ann',
//     lastname:'Ben'
// }]
// let firstname=obj1.map((element)=>
//     (element.firstname)
// )
// console.log(Object(firstname))


// let arar=[1,2,3]
// let out=arar.filter((item)=>!(item%2))
// console.log(out)

// for(var i=0;i<10;i++)
// {
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }


// var array=[1,2,3,4,5];
// console.log(array.splice(2));
// console.log(array)

// //slice
// var array2=[1,2,3,4,5]
// console.log(array2.slice(2));
// console.log(array2)


// console.log("----after-----");
// console.log(array);
// console.log(array2);


// let a=[1,0,2,3,0,4,5]
// var c=0
// for(let i=0;i<a.length;i++)
// {
//     if(a[i]==0){
//         c+=1
//         a.splice(i,1)
//         i-=1
//     }
// }
// for(let j=0;j<c;j++)
//     a.push(0)

// console.log(a)

// let a;
// console.log(a)


// const a='aabbccaa'
// const res={}
// a.split('').map((ele)=>{
//     if(ele in res )
//         res[ele]+=1
//     else
//         res[ele]=1
// })

// console.log(res)
var a=1
function t(){
    console.log(a)
    var a=2
}
t()