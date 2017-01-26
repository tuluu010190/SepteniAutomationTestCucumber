package amazonAction;

import cucumber.api.java.en.*;
import utils.CommonOperation;
import utils.Constant;
import amazonPage.OrderPageElements;
import static utils.LogUtil.info;

public class OrderpageActions extends CommonOperation{

	OrderPageElements orderPageElems = new OrderPageElements();

	/**
	 * User type search text and click search button
	 */
	@When("^User Type \"([^\"]*)\" in text box search and click search Button$")
	public void user_Type_in_text_box_search_and_click_search_Button(String searchProduct) throws Throwable {
		info("User type search text: " + searchProduct + " and click search button");
		type(orderPageElems.searchTextBox, searchProduct, true);
		click(orderPageElems.allDepartmentLink);
		click(orderPageElems.searchButton);
	}
	
	/**
	 * User click to choose a product in results list
	 */
	@When("^User Click to choose a Product \"([^\"]*)\" in results list$")
	public void user_Click_to_choose_a_Product_in_results_list(String chooseProduct) throws Throwable {
		info("User click to choose a product in results list");
		click(orderPageElems.getproductOrder(chooseProduct));
	}
	
	/**
	 * User click add to cart button
	 */
	@When("^User Click Add to cart button$")
	public void user_Click_Add_to_cart_button() throws Throwable {
		info("User click add to cart button");
		click(orderPageElems.addToCartButton);
		if(waitForAndGetElement(orderPageElems.noThanksButton, 10000, 0) != null)
			click(orderPageElems.noThanksButton);
	}
	
	/**
	 * User Verify successfully message when added product
	 */
	@Then("^User Verify added successfully message: Cart subtotal \\(\"([^\"]*)\" items\\)$")
	public void user_Verify_added_successfully_message_Cart_subtotal_items(String number) throws Throwable {
		info("User Verify successfully message when added product with " + number + " subtotal");
		waitForAndGetElement(orderPageElems.getcartSubtotal(number), Constant.DEFAULT_TIMEOUT, 1);
	}
}
