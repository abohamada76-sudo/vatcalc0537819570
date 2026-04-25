const vat=0.15;

function toggleFields(){
  if(mode.value==="target"){
    mainLabel.innerText="صافي الضريبة المستهدفة";
    purchaseReturnBox.style.display="none";
    purRet.value="";
  }else{
    mainLabel.innerText="المشتريات شامل الضريبة";
    purchaseReturnBox.style.display="block";
  }
}

function calc(){

let s=+sales.value||0;
let sr=+salesRet.value||0;

let netS=s-sr;
let vatS=netS-(netS/1.15);

let netVAT=0;

if(mode.value==="purchases"){
  let p=+mainInput.value||0;
  let pr=+purRet.value||0;

  let netP=p-pr;
  let vatP=netP-(netP/1.15);

  netVAT=vatS-vatP;

}else{
  let target=+mainInput.value||0;

  if(target>vatS){alert("خطأ");return;}

  netVAT=target;
}

net.innerText=netVAT.toFixed(2)+" ريال";
}