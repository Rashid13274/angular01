import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'calc2',
  templateUrl: './calc2.component.html',
  styleUrls: ['./calc2.component.scss']
})
export class Calc2Component   {
  result: string ='';

  longButtons =['AC','CE'];
  buttons :string[] =['1','2','3','4','5','6','7','8','9','0','.','-','+','*','/','='];
  private prevValue:string='';
  private curValue:string='';
  addToExpression(value:string){
  if(this.result!=''){
      this.prevValue = this.curValue;
      this.curValue =value;
      
    }
    
  if(this.result[0] =='/' ||this.result[0] =='*'||this.result[0] =='+'||this.result[0] =='-'){
    this.prevValue =this.curValue;
    this.curValue= '';
    this.result ='';
  }  

 
  if(this.result!=''){
    if((this.prevValue ==this.curValue) && (this.prevValue =='+' ||this.prevValue =='-' ||
    this.prevValue =='/' ||this.prevValue =='*' ||this.prevValue =='.')){  
      this.prevValue =this.curValue;
      this.curValue ='';
      this.result ='';
    }
  } 
  


  if((this.result[0] =='0') &&  (this.curValue=='1'|| this.curValue=='2'||this.curValue=='3'||
  this.curValue=='4'||this.curValue=='5'|| this.curValue=='6'|| this.curValue=='7'|| this.curValue=='8'
  || this.curValue=='9')){
    this.prevValue =this.curValue;
    this.curValue= '';
    this.result ='';
  } 


  if(this.result!=''){
    if((this.prevValue =='+' ||this.prevValue =='-' ||this.prevValue =='*' ||this.prevValue =='/' ||this.prevValue =='.')
     &&(this.curValue =='+' ||this.curValue =='-' ||
    this.curValue =='/' ||this.curValue =='*' ||this.curValue =='.')){
      this.prevValue =this.curValue;
      this.curValue= '';
      this.result ='';
    }
  } 
  
  if(value =='AC'){
    this.result ='';
  }else if(value =='CE'){
      this.result= this.prevValue!='=' ? this.result.slice(0,-1):this.result;
  }
  
  else if(value=='='){
    this.result=eval(this.result);

  }
  else{
    this.result+=value;
  }
}
}