let ord_no=[1,2,3,4,5,6,7,8,9];
ord_no.map((i)=>{
  if (i==1) {
    console.log(i+"st \n");
  }
  else if (i==2) {
    console.log(i+"nd \n");
  }
  else if (i==3) {
    console.log(i+"rd \n");
  }
  else{
    console.log(i+"th \n");
  }
})