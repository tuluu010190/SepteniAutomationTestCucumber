Feature: Register and Order Action

Scenario: Register Without Entering Any Field
	Given User Navigate to SignIn Page
	When User Navigate to Register Page
	And User Click Register Button
	Then System displays error messages for missing required fields


Scenario Outline: Register With Confirmation Password is not matched with Password
	Given User Navigate to SignIn Page
	When User Navigate to Register Page
	And User type User Name "<userName>", Email: "<email>", Password "<password>" and confirmation password: "<confirmationPassword>"
	And User Click Register Button
	Then System displays error message  Password miss matched
Examples:
    | userName     | email              | password   | confirmationPassword | 
    | TuLuu222     | TuLuu222@gmail.com | Thanhtu123 | Thanhtu1234 |


Scenario Outline: Register Successfully
	Given User Navigate to SignIn Page
	When User Navigate to Register Page
	And User type User Name "<userName>", Email: "<email>", Password "<password>" and confirmation password: "<confirmationPassword>"
	And User Click Register Button
	Then Verify Account Name "<firstName>" is Presented in Home Page
	And User SignOut
Examples:
    | userName     | email              | password   | confirmationPassword | firstName |
    | TuLuu222     | TuLuu222@gmail.com | Thanhtu123 | Thanhtu123           | Tu        |
  
    
Scenario Outline: User Makes Order
	Given User Navigate to SignIn Page
	When User types email "<email>" and password "<password>" and click SignIn Button
	And Verify Account Name "<firstName>" is Presented in Home Page
	And User Type "<productSearch>" in text box search and click search Button
	And User Click to choose a Product "<chooseProduct>" in results list
	And User Click Add to cart button
	Then User Verify added successfully message: Cart subtotal ("<numberTotal>" items)
	And User Verify Total Products in Cart is "<numberTotal>"
	And User SignOut
Examples:
    | email              | password   | firstName | productSearch       | chooseProduct                 | numberTotal |
    | TuLuu222@gmail.com | Thanhtu123 | Tu        | iphone 7 32gb black | Apple iPhone 7 Unlocked Phone | 1           |
  
    
Scenario Outline: Delete added product in Cart
	Given User Navigate to SignIn Page
	When User types email "<email>" and password "<password>" and click SignIn Button
	And Verify Account Name "<firstName>" is Presented in Home Page
	And User Verify Total Products in Cart is "<numberTotal>"
	And User click to go to Cart
	And User Delete Added product
	Then User Verify Total Products in Cart is "<restTotal>"
	And User SignOut
Examples:
    | email              | password   | firstName | numberTotal | restTotal |
    | TuLuu222@gmail.com | Thanhtu123 | Tu        | 1           | 0         |
    
    

   
 
