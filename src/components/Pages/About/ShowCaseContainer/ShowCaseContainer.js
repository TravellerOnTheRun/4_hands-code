import React from 'react';
import { showcases } from './websites/websites';
import ShowCase from './ShowCase/ShowCase';

const ShowCaseContainer = () => 
	{
		const showcaseArray = showcases.map(website =>
			{
				return <ShowCase 
							key={website.id}
							picture={website.screenshot}
							screenshotDesc={website.screenshotDesc}
							text={website.description}
							link={website.link}/>
			})
		return showcaseArray;
	}

export default ShowCaseContainer;