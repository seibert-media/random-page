package net.seibertmedia.confluence.randompage.settings;

import javax.inject.Named;

import org.apache.commons.lang3.math.NumberUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.atlassian.bandana.BandanaManager;
import com.atlassian.plugin.spring.scanner.annotation.component.Scanned;
import com.atlassian.plugin.spring.scanner.annotation.imports.ComponentImport;

@Named
@Scanned
public class RandomPageSettingsDao {

	private static final Logger logger = LoggerFactory.getLogger(RandomPageSettingsDao.class);

	private static final String RANDOM_PAGE_LIMIT_KEY = "randomPageLimit";
	private static final Integer DEFAULT_RANDOM_PAGE_LIMIT = 100;

	@ComponentImport
	private final BandanaManager bandanaManager;

	@Autowired
	public RandomPageSettingsDao(final BandanaManager bandanaManager) {
		this.bandanaManager = bandanaManager;
	}

	public void setRandomPageLimit(final Integer limit) {
		logger.debug("set '{}' to '{}'", RANDOM_PAGE_LIMIT_KEY, limit);
		bandanaManager.setValue(RandomPageSettingsBandanaContext.INSTANCE, RANDOM_PAGE_LIMIT_KEY, limit);
	}

	public Integer getRandomPageLimit() {
		final Object value = bandanaManager.getValue(RandomPageSettingsBandanaContext.INSTANCE, RANDOM_PAGE_LIMIT_KEY);
		if (value instanceof Integer) {
			return NumberUtils.createInteger(value.toString());
		}
		return DEFAULT_RANDOM_PAGE_LIMIT;
	}
}
