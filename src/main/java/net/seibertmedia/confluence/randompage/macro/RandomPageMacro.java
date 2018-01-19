package net.seibertmedia.confluence.randompage.macro;

import static org.apache.commons.lang3.ObjectUtils.defaultIfNull;
import static com.atlassian.confluence.renderer.radeox.macros.MacroUtils.defaultVelocityContext;
import static com.atlassian.confluence.util.velocity.VelocityUtils.getRenderedTemplate;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.atlassian.confluence.content.render.xhtml.ConversionContext;
import com.atlassian.confluence.macro.Macro;
import com.atlassian.confluence.macro.MacroExecutionException;

public class RandomPageMacro implements Macro {

	private static final Logger logger = LoggerFactory.getLogger(RandomPageMacro.class);

	private static final String MACRO_TEMPLATE = "/macro/random-page.vm";

	private static final String DEFAULT_PAGE_COUNT = "1";
	private static final String PAGE_COUNT_KEY = "pageCount";

	@Override
	public String execute(final Map<String, String> parameters, final String body, final ConversionContext context) throws MacroExecutionException {
		logger.debug("execute macro with params: {}", parameters);

		Map<String, Object> velocityContext = defaultVelocityContext();
		velocityContext.put(PAGE_COUNT_KEY, defaultIfNull(parameters.get(PAGE_COUNT_KEY), DEFAULT_PAGE_COUNT));

		return getRenderedTemplate(MACRO_TEMPLATE, velocityContext);
	}

	@Override
	public BodyType getBodyType() {
		return BodyType.NONE;
	}

	@Override
	public OutputType getOutputType() {
		return OutputType.BLOCK;
	}
}
