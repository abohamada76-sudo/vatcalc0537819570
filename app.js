const vat=0.15;

function toggleFields(){
  if(mode.value==="target"){
    mainLabel.innerText="صافي الضريبة المستهدفة";
    mainInput.placeholder="مثال: 50";
    purchaseReturnBox.style.display="none";
    purRet.value="";
  }else{
    mainLabel.innerText="المشتريات (شامل الضريبة)";
    mainInput.placeholder="مثال: 500";
    purchaseReturnBox.style.display="block";
  }
}

function calc(){

let salesVal=+sales.value||0;
let sRet=+salesRet.value||0;

let netSales=salesVal-sRet;
let before=netSales/1.15;
let vatSales=netSales-before;

let netVAT=0;
let purBefore=0, purVAT=0, netPur=0;

if(mode.value==="purchases"){

  let purchases=+mainInput.value||0;
  let pRet=+purRet.value||0;

  netPur=purchases-pRet;
  purBefore=netPur/1.15;
  purVAT=netPur-purBefore;

  netVAT=vatSales-purVAT;

}else{

  let target=+mainInput.value||0;

  if(target>vatSales){alert("الهدف أكبر من الضريبة");return;}

  purVAT=vatSales-target;
  purBefore=purVAT/vat;
  netPur=purBefore+purVAT;

  netVAT=target;
}

const dash="-";

s1.innerText=salesVal.toFixed(2);
s2.innerText=sRet? sRet.toFixed(2):dash;
s3.innerText=sRet? netSales.toFixed(2):dash;
s4.innerText=before.toFixed(2);
s5.innerText=vatSales.toFixed(2);

p1.innerText=mode.value==="purchases"? (+mainInput.value||0).toFixed(2):dash;
p2.innerText=purRet.value? purRet.value:dash;
p3.innerText=purRet.value? netPur.toFixed(2):dash;
p4.innerText=purBefore? purBefore.toFixed(2):dash;
p5.innerText=purVAT? purVAT.toFixed(2):dash;

net.innerText=netVAT.toFixed(2)+" ريال";
}
