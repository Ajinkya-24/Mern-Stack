let toc,cn,dbms,ds,dsa;
function calculateGrade(){
    toc=document.getElementById('dbms').value;
    toc=document.getElementById('ds').value;
    toc=document.getElementById('dsa').value;
    toc=document.getElementById('cn').value;
}

let obtainMarks=toc+dbms+ds+cn+dsa;
let prec=(obtainMarks/500)*100

document.getElementById('obtainMarks').innerHTML="Obatain Marks is:"+obtainMarks;
document.getElementById('percentage').innerHTML="You Got:"+prec+"%";

if(prec>=90 && prec<=100){
    document.getElementById('grade').innerHTML='Grade is A'
}

else if(prec>=80 && prec<=90){
    document.getElementById('grade').innerHTML='Grade is B'
}

else if(prec>=70 && prec<=80){
    document.getElementById('grade').innerHTML='Grade is C'
}
else if(prec>60 && prec<=70){
    document.getElementById('grade').innerHTML='Grade is D'
}
else{
    document.getElementById('grade').innerHTML='Invalid Marks'
}

