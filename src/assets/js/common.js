Function.prototype.addMethod = function(method, func) {
  if (!this.prototype[method]) {
      this.prototype[method] = func;
      return this.prototype;
  }
}
Array.addMethod('test',function(key,direction){
  this.sort(function(val1,val2){
    if(direction==1){
      return val1[key]-val2[key]//升序
    }else{
      return val2[key]-val1[key]//降序
    }
  });
})

String.addMethod('replaceNumber',function(){
  let str=this.replace(/\d+/,'');
  return str;
})
// let arr=[{size:4},{size:114},{size:44}];
// arr.test('size',-1);
// console.log(arr)
let str='dfksf4434kdffd'
let s=str.replaceNumber();

