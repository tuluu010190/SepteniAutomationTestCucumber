package amazonAction;

import cucumber.api.java.en.*;
import utils.CommonOperation;
import amazonPage.CartPageElements;
import static utils.LogUtil.info;

public class CartPageActions extends CommonOperation{

	CartPageElements cartPageElements = new CartPageElements();
	
	/**
	 * User Click delete button to delete a product
	 */
	@When("^User Delete Added product$")
	public void user_Delete_Added_product() throws Throwable {
		info("User Click delete button to delete a product");
		click(cartPageElements.deleteCart);
	}
}

