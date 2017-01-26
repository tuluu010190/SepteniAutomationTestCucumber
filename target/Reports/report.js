$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login_Test.feature");
formatter.feature({
  "id": "register-and-order-action",
  "description": "",
  "name": "Register and Order Action",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 10794876736,
  "status": "passed"
});
formatter.scenario({
  "id": "register-and-order-action;register-without-entering-any-field",
  "description": "",
  "name": "Register Without Entering Any Field",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "User Navigate to SignIn Page",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "User Navigate to Register Page",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "User Click Register Button",
  "keyword": "And ",
  "line": 6
});
formatter.step({
  "name": "System displays error messages for missing required fields",
  "keyword": "Then ",
  "line": 7
});
formatter.match({
  "location": "HomePageActions.user_Navigate_to_SignIn_Page()"
});
formatter.result({
  "duration": 2556959557,
  "status": "passed"
});
formatter.match({
  "location": "SinginPageActions.user_Navigate_to_Register_Page()"
});
formatter.result({
  "duration": 1969963289,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageActions.user_Click_Register_Button()"
});
formatter.result({
  "duration": 1339481133,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageActions.system_displays_error_messages_for_missing_required_fields()"
});
formatter.result({
  "duration": 99615252,
  "status": "passed"
});
formatter.after({
  "duration": 14633700,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "register-and-order-action;register-with-confirmation-password-is-not-matched-with-password",
  "description": "",
  "name": "Register With Confirmation Password is not matched with Password",
  "keyword": "Scenario Outline",
  "line": 10,
  "type": "scenario_outline"
});
formatter.step({
  "name": "User Navigate to SignIn Page",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "User Navigate to Register Page",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "User type User Name \"\u003cuserName\u003e\", Email: \"\u003cemail\u003e\", Password \"\u003cpassword\u003e\" and confirmation password: \"\u003cconfirmationPassword\u003e\"",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "User Click Register Button",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "System displays error message  Password miss matched",
  "keyword": "Then ",
  "line": 15
});
formatter.examples({
  "id": "register-and-order-action;register-with-confirmation-password-is-not-matched-with-password;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 16,
  "rows": [
    {
      "id": "register-and-order-action;register-with-confirmation-password-is-not-matched-with-password;;1",
      "cells": [
        "userName",
        "email",
        "password",
        "confirmationPassword"
      ],
      "line": 17
    },
    {
      "id": "register-and-order-action;register-with-confirmation-password-is-not-matched-with-password;;2",
      "cells": [
        "TuLuu222",
        "TuLuu222@gmail.com",
        "Thanhtu123",
        "Thanhtu1234"
      ],
      "line": 18
    }
  ]
});
formatter.before({
  "duration": 11042558889,
  "status": "passed"
});
formatter.scenario({
  "id": "register-and-order-action;register-with-confirmation-password-is-not-matched-with-password;;2",
  "description": "",
  "name": "Register With Confirmation Password is not matched with Password",
  "keyword": "Scenario Outline",
  "line": 18,
  "type": "scenario"
});
formatter.step({
  "name": "User Navigate to SignIn Page",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "User Navigate to Register Page",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "User type User Name \"TuLuu222\", Email: \"TuLuu222@gmail.com\", Password \"Thanhtu123\" and confirmation password: \"Thanhtu1234\"",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    0,
    1,
    2,
    3
  ]
});
formatter.step({
  "name": "User Click Register Button",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "System displays error message  Password miss matched",
  "keyword": "Then ",
  "line": 15
});
formatter.match({
  "location": "HomePageActions.user_Navigate_to_SignIn_Page()"
});
formatter.result({
  "duration": 2712404192,
  "status": "passed"
});
formatter.match({
  "location": "SinginPageActions.user_Navigate_to_Register_Page()"
});
formatter.result({
  "duration": 1864371300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TuLuu222",
      "offset": 21
    },
    {
      "val": "TuLuu222@gmail.com",
      "offset": 40
    },
    {
      "val": "Thanhtu123",
      "offset": 71
    },
    {
      "val": "Thanhtu1234",
      "offset": 111
    }
  ],
  "location": "RegisterPageActions.user_type_User_Name_Email_Password_and_confirmation_password(String,String,String,String)"
});
formatter.result({
  "duration": 1120659098,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageActions.user_Click_Register_Button()"
});
formatter.result({
  "duration": 1761480529,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageActions.system_displays_error_message_Password_miss_matched()"
});
formatter.result({
  "duration": 50426013,
  "status": "passed"
});
formatter.after({
  "duration": 12950921,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "register-and-order-action;register-successfully",
  "description": "",
  "name": "Register Successfully",
  "keyword": "Scenario Outline",
  "line": 21,
  "type": "scenario_outline"
});
formatter.step({
  "name": "User Navigate to SignIn Page",
  "keyword": "Given ",
  "line": 22
});
formatter.step({
  "name": "User Navigate to Register Page",
  "keyword": "When ",
  "line": 23
});
formatter.step({
  "name": "User type User Name \"\u003cuserName\u003e\", Email: \"\u003cemail\u003e\", Password \"\u003cpassword\u003e\" and confirmation password: \"\u003cconfirmationPassword\u003e\"",
  "keyword": "And ",
  "line": 24
});
formatter.step({
  "name": "User Click Register Button",
  "keyword": "And ",
  "line": 25
});
formatter.step({
  "name": "Verify Account Name \"\u003cfirstName\u003e\" is Presented in Home Page",
  "keyword": "Then ",
  "line": 26
});
formatter.step({
  "name": "User SignOut",
  "keyword": "And ",
  "line": 27
});
formatter.examples({
  "id": "register-and-order-action;register-successfully;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 28,
  "rows": [
    {
      "id": "register-and-order-action;register-successfully;;1",
      "cells": [
        "userName",
        "email",
        "password",
        "confirmationPassword",
        "firstName"
      ],
      "line": 29
    },
    {
      "id": "register-and-order-action;register-successfully;;2",
      "cells": [
        "TuLuu222",
        "TuLuu222@gmail.com",
        "Thanhtu123",
        "Thanhtu123",
        "Tu"
      ],
      "line": 30
    }
  ]
});
formatter.before({
  "duration": 11718742026,
  "status": "passed"
});
formatter.scenario({
  "id": "register-and-order-action;register-successfully;;2",
  "description": "",
  "name": "Register Successfully",
  "keyword": "Scenario Outline",
  "line": 30,
  "type": "scenario"
});
formatter.step({
  "name": "User Navigate to SignIn Page",
  "keyword": "Given ",
  "line": 22
});
formatter.step({
  "name": "User Navigate to Register Page",
  "keyword": "When ",
  "line": 23
});
formatter.step({
  "name": "User type User Name \"TuLuu222\", Email: \"TuLuu222@gmail.com\", Password \"Thanhtu123\" and confirmation password: \"Thanhtu123\"",
  "keyword": "And ",
  "line": 24,
  "matchedColumns": [
    0,
    1,
    2,
    3
  ]
});
formatter.step({
  "name": "User Click Register Button",
  "keyword": "And ",
  "line": 25
});
formatter.step({
  "name": "Verify Account Name \"Tu\" is Presented in Home Page",
  "keyword": "Then ",
  "line": 26,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "User SignOut",
  "keyword": "And ",
  "line": 27
});
formatter.match({
  "location": "HomePageActions.user_Navigate_to_SignIn_Page()"
});
formatter.result({
  "duration": 2652146489,
  "status": "passed"
});
formatter.match({
  "location": "SinginPageActions.user_Navigate_to_Register_Page()"
});
formatter.result({
  "duration": 1864063855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TuLuu222",
      "offset": 21
    },
    {
      "val": "TuLuu222@gmail.com",
      "offset": 40
    },
    {
      "val": "Thanhtu123",
      "offset": 71
    },
    {
      "val": "Thanhtu123",
      "offset": 111
    }
  ],
  "location": "RegisterPageActions.user_type_User_Name_Email_Password_and_confirmation_password(String,String,String,String)"
});
formatter.result({
  "duration": 1211251159,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageActions.user_Click_Register_Button()"
});
formatter.result({
  "duration": 1678890886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tu",
      "offset": 21
    }
  ],
  "location": "HomePageActions.verify_Account_Name_is_Presented_in_Home_Page(String)"
});
formatter.result({
  "duration": 2389039397,
  "status": "passed"
});
formatter.match({
  "location": "HomePageActions.user_SignOut()"
});
formatter.result({
  "duration": 1469494658,
  "status": "passed"
});
formatter.after({
  "duration": 134568274,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "register-and-order-action;user-makes-order",
  "description": "",
  "name": "User Makes Order",
  "keyword": "Scenario Outline",
  "line": 33,
  "type": "scenario_outline"
});
formatter.step({
  "name": "User Navigate to SignIn Page",
  "keyword": "Given ",
  "line": 34
});
formatter.step({
  "name": "User types email \"\u003cemail\u003e\" and password \"\u003cpassword\u003e\" and click SignIn Button",
  "keyword": "When ",
  "line": 35
});
formatter.step({
  "name": "Verify Account Name \"\u003cfirstName\u003e\" is Presented in Home Page",
  "keyword": "And ",
  "line": 36
});
formatter.step({
  "name": "User Type \"\u003cproductSearch\u003e\" in text box search and click search Button",
  "keyword": "And ",
  "line": 37
});
formatter.step({
  "name": "User Click to choose a Product \"\u003cchooseProduct\u003e\" in results list",
  "keyword": "And ",
  "line": 38
});
formatter.step({
  "name": "User Click Add to cart button",
  "keyword": "And ",
  "line": 39
});
formatter.step({
  "name": "User Verify added successfully message: Cart subtotal (\"\u003cnumberTotal\u003e\" items)",
  "keyword": "Then ",
  "line": 40
});
formatter.step({
  "name": "User Verify Total Products in Cart is \"\u003cnumberTotal\u003e\"",
  "keyword": "And ",
  "line": 41
});
formatter.step({
  "name": "User SignOut",
  "keyword": "And ",
  "line": 42
});
formatter.examples({
  "id": "register-and-order-action;user-makes-order;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 43,
  "rows": [
    {
      "id": "register-and-order-action;user-makes-order;;1",
      "cells": [
        "email",
        "password",
        "firstName",
        "productSearch",
        "chooseProduct",
        "numberTotal"
      ],
      "line": 44
    },
    {
      "id": "register-and-order-action;user-makes-order;;2",
      "cells": [
        "TuLuu222@gmail.com",
        "Thanhtu123",
        "Tu",
        "iphone 7 32gb black",
        "Apple iPhone 7 Unlocked Phone",
        "1"
      ],
      "line": 45
    }
  ]
});
formatter.before({
  "duration": 14450137790,
  "status": "passed"
});
formatter.scenario({
  "id": "register-and-order-action;user-makes-order;;2",
  "description": "",
  "name": "User Makes Order",
  "keyword": "Scenario Outline",
  "line": 45,
  "type": "scenario"
});
formatter.step({
  "name": "User Navigate to SignIn Page",
  "keyword": "Given ",
  "line": 34
});
formatter.step({
  "name": "User types email \"TuLuu222@gmail.com\" and password \"Thanhtu123\" and click SignIn Button",
  "keyword": "When ",
  "line": 35,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "Verify Account Name \"Tu\" is Presented in Home Page",
  "keyword": "And ",
  "line": 36,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "User Type \"iphone 7 32gb black\" in text box search and click search Button",
  "keyword": "And ",
  "line": 37,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "User Click to choose a Product \"Apple iPhone 7 Unlocked Phone\" in results list",
  "keyword": "And ",
  "line": 38,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "User Click Add to cart button",
  "keyword": "And ",
  "line": 39
});
formatter.step({
  "name": "User Verify added successfully message: Cart subtotal (\"1\" items)",
  "keyword": "Then ",
  "line": 40,
  "matchedColumns": [
    5
  ]
});
formatter.step({
  "name": "User Verify Total Products in Cart is \"1\"",
  "keyword": "And ",
  "line": 41,
  "matchedColumns": [
    5
  ]
});
formatter.step({
  "name": "User SignOut",
  "keyword": "And ",
  "line": 42
});
formatter.match({
  "location": "HomePageActions.user_Navigate_to_SignIn_Page()"
});
formatter.result({
  "duration": 2663910553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TuLuu222@gmail.com",
      "offset": 18
    },
    {
      "val": "Thanhtu123",
      "offset": 52
    }
  ],
  "location": "SinginPageActions.user_types_email_and_password_and_click_SignIn_Button(String,String)"
});
formatter.result({
  "duration": 3132270138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tu",
      "offset": 21
    }
  ],
  "location": "HomePageActions.verify_Account_Name_is_Presented_in_Home_Page(String)"
});
formatter.result({
  "duration": 2620325761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iphone 7 32gb black",
      "offset": 11
    }
  ],
  "location": "OrderpageActions.user_Type_in_text_box_search_and_click_search_Button(String)"
});
formatter.result({
  "duration": 4984262952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPhone 7 Unlocked Phone",
      "offset": 32
    }
  ],
  "location": "OrderpageActions.user_Click_to_choose_a_Product_in_results_list(String)"
});
formatter.result({
  "duration": 3568001430,
  "status": "passed"
});
formatter.match({
  "location": "OrderpageActions.user_Click_Add_to_cart_button()"
});
formatter.result({
  "duration": 6226037882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 56
    }
  ],
  "location": "OrderpageActions.user_Verify_added_successfully_message_Cart_subtotal_items(String)"
});
formatter.result({
  "duration": 1292710862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 39
    }
  ],
  "location": "HomePageActions.user_Verify_Total_Products_in_Cart_is(String)"
});
formatter.result({
  "duration": 34729088,
  "status": "passed"
});
formatter.match({
  "location": "HomePageActions.user_SignOut()"
});
formatter.result({
  "duration": 1641645327,
  "status": "passed"
});
formatter.after({
  "duration": 18271248,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "register-and-order-action;delete-added-product-in-cart",
  "description": "",
  "name": "Delete added product in Cart",
  "keyword": "Scenario Outline",
  "line": 48,
  "type": "scenario_outline"
});
formatter.step({
  "name": "User Navigate to SignIn Page",
  "keyword": "Given ",
  "line": 49
});
formatter.step({
  "name": "User types email \"\u003cemail\u003e\" and password \"\u003cpassword\u003e\" and click SignIn Button",
  "keyword": "When ",
  "line": 50
});
formatter.step({
  "name": "Verify Account Name \"\u003cfirstName\u003e\" is Presented in Home Page",
  "keyword": "And ",
  "line": 51
});
formatter.step({
  "name": "User Verify Total Products in Cart is \"\u003cnumberTotal\u003e\"",
  "keyword": "And ",
  "line": 52
});
formatter.step({
  "name": "User click to go to Cart",
  "keyword": "And ",
  "line": 53
});
formatter.step({
  "name": "User Delete Added product",
  "keyword": "And ",
  "line": 54
});
formatter.step({
  "name": "User Verify Total Products in Cart is \"\u003crestTotal\u003e\"",
  "keyword": "Then ",
  "line": 55
});
formatter.step({
  "name": "User SignOut",
  "keyword": "And ",
  "line": 56
});
formatter.examples({
  "id": "register-and-order-action;delete-added-product-in-cart;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 57,
  "rows": [
    {
      "id": "register-and-order-action;delete-added-product-in-cart;;1",
      "cells": [
        "email",
        "password",
        "firstName",
        "numberTotal",
        "restTotal"
      ],
      "line": 58
    },
    {
      "id": "register-and-order-action;delete-added-product-in-cart;;2",
      "cells": [
        "TuLuu222@gmail.com",
        "Thanhtu123",
        "Tu",
        "1",
        "0"
      ],
      "line": 59
    }
  ]
});
formatter.before({
  "duration": 10185578852,
  "status": "passed"
});
formatter.scenario({
  "id": "register-and-order-action;delete-added-product-in-cart;;2",
  "description": "",
  "name": "Delete added product in Cart",
  "keyword": "Scenario Outline",
  "line": 59,
  "type": "scenario"
});
formatter.step({
  "name": "User Navigate to SignIn Page",
  "keyword": "Given ",
  "line": 49
});
formatter.step({
  "name": "User types email \"TuLuu222@gmail.com\" and password \"Thanhtu123\" and click SignIn Button",
  "keyword": "When ",
  "line": 50,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "Verify Account Name \"Tu\" is Presented in Home Page",
  "keyword": "And ",
  "line": 51,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "User Verify Total Products in Cart is \"1\"",
  "keyword": "And ",
  "line": 52,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "User click to go to Cart",
  "keyword": "And ",
  "line": 53
});
formatter.step({
  "name": "User Delete Added product",
  "keyword": "And ",
  "line": 54
});
formatter.step({
  "name": "User Verify Total Products in Cart is \"0\"",
  "keyword": "Then ",
  "line": 55,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "User SignOut",
  "keyword": "And ",
  "line": 56
});
formatter.match({
  "location": "HomePageActions.user_Navigate_to_SignIn_Page()"
});
formatter.result({
  "duration": 2704717616,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TuLuu222@gmail.com",
      "offset": 18
    },
    {
      "val": "Thanhtu123",
      "offset": 52
    }
  ],
  "location": "SinginPageActions.user_types_email_and_password_and_click_SignIn_Button(String,String)"
});
formatter.result({
  "duration": 2870318646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tu",
      "offset": 21
    }
  ],
  "location": "HomePageActions.verify_Account_Name_is_Presented_in_Home_Page(String)"
});
formatter.result({
  "duration": 2600778548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 39
    }
  ],
  "location": "HomePageActions.user_Verify_Total_Products_in_Cart_is(String)"
});
formatter.result({
  "duration": 38532720,
  "status": "passed"
});
formatter.match({
  "location": "HomePageActions.user_click_to_go_to_Cart()"
});
formatter.result({
  "duration": 1161366789,
  "status": "passed"
});
formatter.match({
  "location": "CartPageActions.user_Delete_Added_product()"
});
formatter.result({
  "duration": 2857507685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 39
    }
  ],
  "location": "HomePageActions.user_Verify_Total_Products_in_Cart_is(String)"
});
formatter.result({
  "duration": 775965406,
  "status": "passed"
});
formatter.match({
  "location": "HomePageActions.user_SignOut()"
});
formatter.result({
  "duration": 2326282017,
  "status": "passed"
});
formatter.after({
  "duration": 479372534,
  "status": "passed"
});
});