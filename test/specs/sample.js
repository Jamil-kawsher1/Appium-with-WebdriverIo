// const calcHomepage=require("../pageobjects/calcHomepage")
const calculatorScreen = require("../screenobject/android/calculator.screen");

describe("Smaple", () => {
  it("sample Test", async () => {
    // await  $('//*[@resource-id="com.google.android.calculator:id/digit_7"]').click();

    // await $('//*[@resource-id="com.google.android.calculator:id/digit_6"]').click()

    // await calcHomepage.btn_1.click()
    // await  calcHomepage.btn_1.click();
    // await calcHomepage.btn_1.click();

    await calculatorScreen.btn_1.click();
    await calculatorScreen.btn_plus.click();
    await calculatorScreen.btn_2.click();
    const resultvalue = await calculatorScreen.result_preview.getText();
    await expect(resultvalue).toEqual("3");
  });
});
