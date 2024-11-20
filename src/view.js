import {render} from '@wordpress/element';
import App from './app';

// Find all block elements to render React components dynamically
document.querySelectorAll('.wp-block-my_plugin-react-block').forEach((el) => {
	render(<App/>, el);
});
