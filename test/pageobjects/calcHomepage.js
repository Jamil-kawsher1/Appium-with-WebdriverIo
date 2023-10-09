const page=require("./page")


class calcHomepage extends page{

   
get btn_1(){


    return b.$('//*[@resource-id="com.google.android.calculator:id/digit_1"]')
}

get btn_2(){


    return b.$('//*[@resource-id="com.google.android.calculator:id/digit_2"]')
}



}
export  default new calcHomepage();