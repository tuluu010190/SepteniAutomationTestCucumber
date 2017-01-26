package amazonAction;

import utils.CommonOperation;
import amazonPage.SigninPageElements;
import cucumber.api.java.en.*;
import static utils.LogUtil.info;

public class SinginPageActions extends CommonOperation{
	
	SigninPageElements siginPageElems = new SigninPageElements();
	
	/**
	 * User Navigate to Register Page
	 */
	@When("^User Navigate to Register Page$")
	public void user_Navigate_to_Register_Page() throws Throwable {
		info("User Navigate to Register Page");
		click(siginPageElems.signUpLink);
	}
	
	/**
	 * User enter email and password, then click SignIn Button
	 */
	@When("^User types email \"([^\"]*)\" and password \"([^\"]*)\" and click SignIn Button$")
	public void user_types_email_and_password_and_click_SignIn_Button(String email, String password) throws Throwable {
		info("User enter email and password");
		type(siginPageElems.email, email, true);
		type(siginPageElems.password, password, true);
		click(siginPageElems.signinButton);
	}
}
