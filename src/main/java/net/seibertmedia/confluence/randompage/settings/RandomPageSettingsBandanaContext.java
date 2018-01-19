package net.seibertmedia.confluence.randompage.settings;

import com.atlassian.bandana.BandanaContext;
import com.atlassian.confluence.setup.bandana.KeyedBandanaContext;

final class RandomPageSettingsBandanaContext implements KeyedBandanaContext {

	private static final long serialVersionUID = -4182287507056810420L;
	private static final String BANDANA_CONTEXT_KEY = "net.seibertmedia.extranet.postinstall";

	static final RandomPageSettingsBandanaContext INSTANCE = new RandomPageSettingsBandanaContext();

	private RandomPageSettingsBandanaContext() {
	}

	@Override
	public String getContextKey() {
		return BANDANA_CONTEXT_KEY;
	}

	@Override
	public BandanaContext getParentContext() {
		return null;
	}

	@Override
	public boolean hasParentContext() {
		return false;
	}
}
