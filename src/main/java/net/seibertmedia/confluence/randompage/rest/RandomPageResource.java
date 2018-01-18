package net.seibertmedia.confluence.randompage.rest;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import net.seibertmedia.confluence.randompage.RandomPage;

/**
 * REST endpoint to get random pages.
 * <em>http://host:port/context/rest/random-page/1.0/random-page</em>.
 */
@Path("/random-page")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class RandomPageResource {

	private static final String DEFAULT_LIMIT = "1";

	private final RandomPage randomPage;

	@Inject
	public RandomPageResource(final RandomPage randomPage) {
		this.randomPage = randomPage;
	}

	@GET
	public List<RandomPageDto> getPermissions(@QueryParam("limit") @DefaultValue(DEFAULT_LIMIT) int limit) {
		return randomPage.getPages(limit);
	}
}
