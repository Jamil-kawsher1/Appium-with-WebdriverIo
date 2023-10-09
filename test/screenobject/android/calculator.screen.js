class CalculatorHomePage{

    get btn_1(){


        return $('//*[@resource-id="com.google.android.calculator:id/digit_1"]')
    }

    get btn_2(){


        return $('//*[@resource-id="com.google.android.calculator:id/digit_2"]')
    }

    get btn_plus(){

        return $('//*[@resource-id="com.google.android.calculator:id/op_add"]')
    }
}

module.exports=new CalculatorHomePage();