package net.seibertmedia.confluence.randompage.rest;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

import com.atlassian.confluence.pages.AbstractPage;

@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class RandomPageDto implements Serializable {

	private final long id;
	private final String title;

	RandomPageDto(final long id, final String title) {
		this.id = id;
		this.title = title;
	}

	public static RandomPageDto fromPage(final AbstractPage page) {
		return new RandomPageDto(page.getId(), page.getTitle());
	}
}