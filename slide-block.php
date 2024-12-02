<?php
/**
 * Plugin Name:       Slide Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       slide-block
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

function my_plugin_register_block() {
    register_block_type_from_metadata( __DIR__. '/build', [
        'render_callback' => 'my_plugin_render_block',
    ]);
}
add_action( 'init', 'my_plugin_register_block' );

function my_plugin_render_block() {
    return '<div class="wp-block-my_plugin-react-block" style="max-width: unset;"></div>';
}

function my_plugin_enqueue_block_assets() {
    wp_enqueue_script(
        'my_plugin-frontend-script',
        plugins_url( 'build/view.js', __FILE__ ),
        [ 'wp-element' ],
        '1.0.0',
        true
    );
}
add_action( 'enqueue_block_assets', 'my_plugin_enqueue_block_assets' );
