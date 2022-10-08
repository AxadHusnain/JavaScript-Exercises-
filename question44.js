let items1=["chicken","cucumber","olives"];
let items2=["chicken","cucumber","olives","mustard"];
let items3=["chicken","cucumber","olives","mustard","pickles"];

function summary(item){
  console.log("the summary of the sandwich items is :\n");
  item.map((i)=>{
    console.log(i+"\n");
  })
}
summary(items1);
summary(items2);
summary(items3);