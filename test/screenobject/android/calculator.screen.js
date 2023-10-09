class CalculatorHomePage {
  get btn_1() {
    return $('//*[@resource-id="com.google.android.calculator:id/digit_1"]');
  }

  get btn_2() {
    return $('//*[@resource-id="com.google.android.calculator:id/digit_2"]');
  }

  get btn_plus() {
    return $('//*[@resource-id="com.google.android.calculator:id/op_add"]');
  }

  get result_preview() {
    return $(
      '//*[@resource-id="com.google.android.calculator:id/result_preview"]'
    );
  }
}

module.exports = new CalculatorHomePage();
