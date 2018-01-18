package net.seibertmedia.confluence.randompage.macro;

import static com.atlassian.confluence.renderer.radeox.macros.MacroUtils.defaultVelocityContext;
import static com.atlassian.confluence.util.velocity.VelocityUtils.getRenderedTemplate;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.atlassian.confluence.content.render.xhtml.ConversionContext;
import com.atlassian.confluence.macro.Macro;
import com.atlassian.confluence.macro.MacroExecutionException;
import com.atlassian.renderer.RenderContext;
import com.atlassian.renderer.v2.RenderMode;
import com.atlassian.renderer.v2.macro.BaseMacro;
import com.atlassian.renderer.v2.macro.MacroException;

public class RandomPageMacro extends BaseMacro implements Macro {

	private static final Logger log = LoggerFactory.getLogger(RandomPageMacro.class);

	private static final String MACRO_TEMPLATE = "/macro/random-page.vm";

	public String execute(final Map<String, String> parameters, final String body, final ConversionContext context) throws MacroExecutionException {
		Map<String, Object> velocityContext = defaultVelocityContext();
		velocityContext.putAll(parameters);

		return getRenderedTemplate(MACRO_TEMPLATE, velocityContext);
	}

	public String execute(final Map parameters, final String body, final RenderContext renderContext) throws MacroException {
		try {
			return execute(parameters, body, (ConversionContext) null);
		} catch (final MacroExecutionException e) {
			log.warn("Failed to execute macro", e);
			throw new MacroException(e);
		}
	}

	public BodyType getBodyType() {
		return BodyType.NONE;
	}

	public OutputType getOutputType() {
		return OutputType.BLOCK;
	}

	public RenderMode getBodyRenderMode() {
		return RenderMode.NO_RENDER;
	}

	public boolean hasBody() {
		return false;
	}

}
