// const arr=[1,2,3,4]
// for(const i of arr){
//     console.log(i);
    
// }


const map=new Map()

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")


for(const [k,v] of map){
    console.log(k,' - ',v);
    
}