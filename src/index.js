import {registerBlockType} from '@wordpress/blocks';
import './style.css';

import App from './app';
import metadata from './block.json';


registerBlockType(metadata.name, {
	edit: App,
	save: () => null
});
