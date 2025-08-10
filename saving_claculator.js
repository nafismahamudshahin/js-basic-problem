const monthlySavings =(listOfIncome,livingCost) =>{
    if(Array.isArray(listOfIncome) && typeof livingCost === "number"){
        let totalIncome = 0;
        listOfIncome.forEach(money=>{
            if(money>=3000){
                let tex = money*0.2
                totalIncome+=(money-tex)
            }else totalIncome+=money;
        })
        let savingMoney = totalIncome - livingCost;
        if(savingMoney>0) console.log(savingMoney);
        else console.log("earn more");
    }else{
        console.log("invalid given information.");
    }
}
const income = [1000,4000,2000]
monthlySavings(income,5000)