package amazonAction;

import static org.junit.Assert.assertTrue;
import utils.CommonOperation;
import utils.Constant;
import amazonPage.HomePageElements;
import cucumber.api.java.en.*;
import static utils.LogUtil.info;

public class HomePageActions extends CommonOperation{

	HomePageElements homePageElems = new HomePageElements();

	/**
	 * User Click To SignIn to navigate to SignIn Page
	 */
	@When("^User Navigate to SignIn Page$")
	public void user_Navigate_to_SignIn_Page() throws Throwable {
		info("User Click To SignIn to navigate to SignIn Page");
		click(homePageElems.navigateSignupLink);
	}
	
	/**
	 * User Verify user name is displayed in home Page
	 * @param accountName
	 */
	@Then("^Verify Account Name \"([^\"]*)\" is Presented in Home Page$")
	public void verify_Account_Name_is_Presented_in_Home_Page(String accountName) throws Throwable {
		info("User Verify user name" + accountName + " is displayed in home Page");
		waitForAndGetElement(homePageElems.getaccountName(accountName), Constant.DEFAULT_TIMEOUT, 1);
	}
	
	/**
	 * User Verify Total Products in Cart
	 * @param total
	 */
	@Then("^User Verify Total Products in Cart is \"([^\"]*)\"$")
	public void user_Verify_Total_Products_in_Cart_is(String total) throws Throwable {
		info("User Verify Total Products in Cart is: " + total);
		String totalProduct = waitForAndGetElement(homePageElems.totalCartProduct, Constant.DEFAULT_TIMEOUT, 1).getText();
		assertTrue(total.equals(totalProduct));
	}
	
	/**
	 * User Click to Cart Link
	 */
	@When("^User click to go to Cart$")
	public void user_click_to_go_to_Cart() throws Throwable {
		info("User Click to Cart Link");
		click(homePageElems.cartLink);
	}
	
	/**
	 * User Sign out system
	 */
	@Then("^User SignOut$")
	public void user_SignOut() throws Throwable {
		info("User mouse over to Navigate Signup Link");
		mouseOver(homePageElems.navigateSignupLink, true);
		info("User click Sign out button");
		click(homePageElems.signoutButton);
	}
	
}

