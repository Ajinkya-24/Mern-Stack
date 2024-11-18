//method overloading
//if same method in differnt para un same clas MOl
class Addition{
    n1;
    n2;

    add(){
        this.n1=10;
        this.n2=20;
        return n1+n2;
    }
    add(new1,new2){
        return new1+new2
    }

    add(new1,new2,new3){
        return new1+new2+new3
    }
}
let objAdd=new Addition();
console.log(objAdd.add());
//method Overriding
//Same method in Same para nut the child Class is MOR
