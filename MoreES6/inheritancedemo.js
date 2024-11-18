class RBI {
    bankPolicy() {
        console.log("bank regulation act 1975")
    }
    roi() {
        console.log("rate of interest is 5%")
    }
    bankAct() {
        console.log("bank will run as per bank act 1984")
    }
}
class SBI extends RBI {
    roi() {
        console.log("rate of interest is 8%")
    }

}
class HDFC extends RBI {
    roi() {
        console.log("rate of interest is 10%")
    }

}
class Districtbank extends RBI {
    roi() {
        console.log("ROI 9%")
    }
}

let objDB = new Districtbank();
objDB.bankPolicy();
objDB.bankAct();
objDB.roi();

console.log("----SBI----")
let objSBI = new SBI();
objSBI.bankPolicy();
objSBI.roi();//8%

console.log("----HDFC---")
let objHDFC = new HDFC();
objHDFC.bankPolicy();
objHDFC.roi();//10%