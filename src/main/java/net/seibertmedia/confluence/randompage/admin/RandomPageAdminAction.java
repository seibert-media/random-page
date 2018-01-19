package net.seibertmedia.confluence.randompage.admin;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.atlassian.confluence.core.ConfluenceActionSupport;
import com.atlassian.confluence.xwork.FlashScope;
import com.atlassian.xwork.RequireSecurityToken;

import net.seibertmedia.confluence.randompage.settings.RandomPageSettingsDao;

public class RandomPageAdminAction extends ConfluenceActionSupport {

	private static final String CONFIG_SAVED_MESSAGE = "net.seibertmedia.confluence.randompage.admin.action.message.saved";
	private static final String CONFIG_SAVED_KEY = "random-page-config-success-message";

	private static final Logger logger = LoggerFactory.getLogger(RandomPageAdminAction.class);

	private RandomPageSettingsDao dao;

	private Integer pagesLimit;

	@Override
	public String execute() {
		loadActionMessage();
		pagesLimit = dao.getRandomPageLimit();
		logger.error("Loading configuration: limit = {}", pagesLimit);
		return SUCCESS;
	}

	@RequireSecurityToken(true)
	public String doSave() {
		logger.error("Saving configuration: limit = {}", pagesLimit);
		dao.setRandomPageLimit(pagesLimit);
		persistActionMessage(getText(CONFIG_SAVED_MESSAGE));
		return SUCCESS;
	}

	@Override
	public void validate() {
	}

	private void loadActionMessage() {
		if (FlashScope.has(CONFIG_SAVED_KEY)) {
			@SuppressWarnings("rawtypes") final Collection actionMessages = (Collection) FlashScope.get(CONFIG_SAVED_KEY);
			setActionMessages(actionMessages);
		}
	}

	private void persistActionMessage(final String successMessage) {
		addActionMessage(successMessage);
		FlashScope.put(CONFIG_SAVED_KEY, getActionMessages());
		FlashScope.persist();
	}

	public Integer getPagesLimit() {
		return pagesLimit;
	}

	public void setPagesLimit(Integer pagesLimit) {
		this.pagesLimit = pagesLimit;
	}

	public void setDao(final RandomPageSettingsDao dao) {
		this.dao = dao;
	}
}
