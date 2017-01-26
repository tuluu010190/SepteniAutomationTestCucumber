package amazon;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		//dryRun = true,
		features = "Features",
		glue={"amazonAction"},
		format = {"pretty", "html:target/Reports"}
		)

public class TestRunner{

}