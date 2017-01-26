package amazonAction;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.firefox.FirefoxDriver;
import cucumber.api.java.*;
import utils.instantBrowser;

public class HookedTags extends instantBrowser{
	
	
	@Before
	public void BeforeMethod(){
		driver = new FirefoxDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("http://www.amazon.com");
	}

	@After
	public void AfterMethod(){
		driver.close();
		driver.manage().deleteAllCookies();
	}

}
