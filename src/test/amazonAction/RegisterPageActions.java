package amazonAction;

import utils.CommonOperation;
import utils.Constant;
import amazonPage.RegisterPageElements;
import cucumber.api.java.en.*;
import static utils.LogUtil.info;

public class RegisterPageActions extends CommonOperation{

	RegisterPageElements registerPageElems = new RegisterPageElements();

	/**
	 * User click register button
	 */
	@When("^User Click Register Button$")
	public void user_Click_Register_Button() throws Throwable {
		info("User click register button");
		click(registerPageElems.createAccountButton);
	}

	/**
	 * User Type to register form
	 */
	@When("^User type User Name \"([^\"]*)\", Email: \"([^\"]*)\", Password \"([^\"]*)\" and confirmation password: \"([^\"]*)\"$")
	public void user_type_User_Name_Email_Password_and_confirmation_password(String userName, String email, String password, String confirmPassword) throws Throwable {
		info("User Type to register form");
		type(registerPageElems.userName, userName, true);
		type(registerPageElems.email, email, true);
		type(registerPageElems.password, password, true);
		type(registerPageElems.confirmPassword, confirmPassword, true);
	}

	/**
	 * System displays error messages for missing required fields
	 */
	@Then("^System displays error messages for missing required fields$")
	public void system_displays_error_messages_for_missing_required_fields() throws Throwable {
		info("Verify system displays error message when missing Required fields");
		waitForAndGetElement(registerPageElems.missingUserNameMessage, Constant.DEFAULT_TIMEOUT, 1);
		waitForAndGetElement(registerPageElems.missingEmailMessage, Constant.DEFAULT_TIMEOUT, 1);
		waitForAndGetElement(registerPageElems.missingPasswordMessage, Constant.DEFAULT_TIMEOUT, 1);
	}

	/**
	 * System displays error message  Password miss matched
	 */
	@Then("^System displays error message  Password miss matched$")
	public void system_displays_error_message_Password_miss_matched() throws Throwable {
		info("Verify system displays error message when password missmatched");
		waitForAndGetElement(registerPageElems.unmatchedPasswordMessage, Constant.DEFAULT_TIMEOUT, 1);
	}
}
