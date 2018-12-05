<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://visual-legion.com
 * @since             0.0.1
 * @package           Container_Tabs
 *
 * @wordpress-plugin
 * Plugin Name:       Container Tabs 
 * Plugin URI:        https://github.com/Visual-Legion/container-tabs.git
 * Description:       This plugin makes is a boilerplate to develop gutenberg plugins
 * Version:           0.0.1
 * Author:            Ulysse Coates
 * Author URI:        https://visual-legion.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       container-tabs
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'CONTAINER_TABS_VERSION', '0.0.1' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-container-tabs-activator.php
 */
function activate_container_tabs() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-container-tabs-activator.php';
	Container_Tabs_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-container-tabs-deactivator.php
 */
function deactivate_container_tabs() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-container-tabs-deactivator.php';
	Container_Tabs_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_container_tabs' );
register_deactivation_hook( __FILE__, 'deactivate_container_tabs' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-container-tabs.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */

/**
* Register Custom Tab
*/
// function vl_ct_custom_post_type() {

//     $labels = array(
//       'name'                  => _x( 'Tabs', 'Tab General Name', 'vl_ct_text_domain' ),
//       'singular_name'         => _x( 'Tab', 'Tab Singular Name', 'vl_ct_text_domain' ),
//       'menu_name'             => __( 'Tabs', 'vl_ct_text_domain' ),
//       'name_admin_bar'        => __( 'Tab', 'vl_ct_text_domain' ),
//       'archives'              => __( 'Tab Archives', 'vl_ct_text_domain' ),
//       'attributes'            => __( 'Tab Attributes', 'vl_ct_text_domain' ),
//       'parent_item_colon'     => __( 'Parent Tab:', 'vl_ct_text_domain' ),
//       'all_items'             => __( 'All Tabs', 'vl_ct_text_domain' ),
//       'add_new_item'          => __( 'Add New Tab', 'vl_ct_text_domain' ),
//       'add_new'               => __( 'Add New', 'vl_ct_text_domain' ),
//       'new_item'              => __( 'New Tab', 'vl_ct_text_domain' ),
//       'edit_item'             => __( 'Edit Tab', 'vl_ct_text_domain' ),
//       'update_item'           => __( 'Update Tab', 'vl_ct_text_domain' ),
//       'view_item'             => __( 'View Tab', 'vl_ct_text_domain' ),
//       'view_items'            => __( 'View Tabs', 'vl_ct_text_domain' ),
//       'search_items'          => __( 'Search Tab', 'vl_ct_text_domain' ),
//       'not_found'             => __( 'Not found', 'vl_ct_text_domain' ),
//       'not_found_in_trash'    => __( 'Not found in Trash', 'vl_ct_text_domain' ),
//       'featured_image'        => __( 'Featured Image', 'vl_ct_text_domain' ),
//       'set_featured_image'    => __( 'Set featured image', 'vl_ct_text_domain' ),
//       'remove_featured_image' => __( 'Remove featured image', 'vl_ct_text_domain' ),
//       'use_featured_image'    => __( 'Use as featured image', 'vl_ct_text_domain' ),
//       'insert_into_item'      => __( 'Insert into item', 'vl_ct_text_domain' ),
//       'uploaded_to_this_item' => __( 'Uploaded to this item', 'vl_ct_text_domain' ),
//       'items_list'            => __( 'Tabs list', 'vl_ct_text_domain' ),
//       'items_list_navigation' => __( 'Tabs list navigation', 'vl_ct_text_domain' ),
//       'filter_items_list'     => __( 'Filter items list', 'vl_ct_text_domain' ),
//     );

//     $args = array(
//       'label'                 => __( 'Tab', 'vl_ct_text_domain' ),
//       'description'           => __( 'Tab Description', 'vl_ct_text_domain' ),
//       'labels'                => $labels,
//       'supports'              => array( 'editor', 'title', 'revisions', 'page-attributes', 'custom-fields' ),
//       'taxonomies'            => array( 'category', 'post_tag' ),
//       'hierarchical'          => true,
//       'public'                => true,
//       'show_ui'               => true,
//       'show_in_menu'          => true,
//       'show_in_rest'          => true,
//       'template'              => array(array('vl-ct/editor')),
//       // 'template_lock'        => 'all',
//       'menu_position'         => 5,
//       'menu_icon'             => 'dashicons-admin-plugins',
//       'show_in_admin_bar'     => true,
//       'show_in_nav_menus'     => true,
//       'can_export'            => true,
//       'has_archive'           => true,
//       'exclude_from_search'   => false,
//       'publicly_queryable'    => true,
//       'capability_type'       => 'page',
//     );
//     register_post_type( 'tab', $args );

//   }
// add_action( 'init', 'vl_ct_custom_post_type' );

// add_filter('single_template', 'vl_ct_my_custom_template');
// function vl_ct_my_custom_template($single) {

//     global $post;

//     /* Checks for single template by post type */
//     if ( $post->post_type == 'tab' ) {
//         if ( file_exists( __DIR__ . '/public/partials/single-tab.php' ) ) {
//             return __DIR__ . '/public/partials/single-tab.php';
//         }
//     }

//     return $single;

// }

// add_filter( 'archive_template', 'vl_ct_get_custom_post_type_template' ) ;
// function vl_ct_get_custom_post_type_template($archive) {

//     global $post;

//     /* Checks for archive template by post type */
//     if ( $post->post_type == 'tab' ) {
//         if ( file_exists( __DIR__ . '/public/partials/archive-tab.php' ) ) {
//             return __DIR__ . '/public/partials/archive-tab.php';
//         }
//     }

//     return $archive;

// }

// function vl_ct_meta_gutenberg_editor_block_init() {
//     register_meta( 'post', 'vl_ct_editor__title', array(
//         'show_in_rest' => true,
//         'single' => true,
//         'type' => 'string'
//     ) );
// }
// add_action( 'init', 'vl_ct_meta_gutenberg_editor_block_init' );


/**
* Pagination
*/

function vl_ct_pagination_bar( $custom_query ) {

    $total_pages = $custom_query->max_num_pages;
    $big = 999999999; // need an unlikely integer

    if ($total_pages > 1){
        $current_page = max(1, get_query_var('paged'));

        echo paginate_links(array(
            'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
            'format' => '?paged=%#%',
            'current' => $current_page,
            'total' => $total_pages,
        ));
    }
}

/**
* Rest API
*/
// require_once 'vl_ct_rest_endpoints.php'; 


/**
* Settings Page
*/

// require_once 'settings.php';

/**
/* Main block 
*/

// To create if php render is necessary
//require_once 'php-renders/container-tabs-render.php';

function vl_ct_my_register_tab() {

  // Register our block script with WordPress
  wp_register_script(
    'vl-ct-js',
    plugins_url('/blocks/dist/blocks.build.js', __FILE__),
    array('wp-blocks', 'wp-element')
  );

  // Adding settings value from db to block js
  if (isset(get_option('vl_ct_options')['vl_ct_api_key'])) {
    wp_localize_script( 'vl-ct-js', 'api_key', get_option('vl_ct_options')['vl_ct_api_key'] );
  } else {
    wp_localize_script( 'vl-ct-js', 'api_key', null );
  }

  // Register our block's base CSS  
  wp_register_style(
    'vl-ct-style',
    plugins_url( '/blocks/dist/blocks.style.build.css', __FILE__ ),
    array( 'wp-blocks' )
  );
  
  // Register our block's editor-specific CSS
  wp_register_style(
    'vl-ct-edit-style',
    plugins_url('/blocks/dist/blocks.editor.build.css', __FILE__),
    array( 'wp-edit-blocks' )
  );  
  
  // Enqueue the script in the editor
  register_block_type('vl-ct/tab', array( 
  	// 'render_callback' => 'vl_blocks_tab_callback',
    'editor_script' => 'vl-ct-js',
    'editor_style' => 'vl-ct-edit-style',
    'style' => 'vl-ct-style'
  ));
}

add_action('init', 'vl_ct_my_register_tab');

function vl_ct_my_register_container() {

  // Register our block script with WordPress
  wp_register_script(
    'vl-ct-js',
    plugins_url('/blocks/dist/blocks.build.js', __FILE__),
    array('wp-blocks', 'wp-element')
  );

  // Adding settings value from db to block js
  if (isset(get_option('vl_ct_options')['vl_ct_api_key'])) {
    wp_localize_script( 'vl-ct-js', 'api_key', get_option('vl_ct_options')['vl_ct_api_key'] );
  } else {
    wp_localize_script( 'vl-ct-js', 'api_key', null );
  }

  // Register our block's base CSS  
  wp_register_style(
    'vl-ct-style',
    plugins_url( '/blocks/dist/blocks.style.build.css', __FILE__ ),
    array( 'wp-blocks' )
  );
  
  // Register our block's editor-specific CSS
  wp_register_style(
    'vl-ct-edit-style',
    plugins_url('/blocks/dist/blocks.editor.build.css', __FILE__),
    array( 'wp-edit-blocks' )
  );  
  
  // Enqueue the script in the editor
  register_block_type('vl-ct/container', array( 
    // 'render_callback' => 'vl_blocks_container_callback',
    'editor_script' => 'vl-ct-js',
    'editor_style' => 'vl-ct-edit-style',
    'style' => 'vl-ct-style'
  ));
}

add_action('init', 'vl_ct_my_register_container');

/**
/* CPT Editor block 
*/

// To create if php render is necessary
//require_once 'php-renders/gpb-editor-render.php';

// function vl_ct_my_register_editor() {

//   // Register our block script with WordPress
//   wp_register_script(
//     'vl-ct-editor-js',
//     plugins_url('/blocks/dist/blocks.build.js', __FILE__),
//     array('wp-blocks', 'wp-element')
//   );

//   // Adding settings value from db to block js
//   // if (isset(get_option('vl_ct_options')['vl_ct_api_key'])) {
//   //   wp_localize_script( 'vl-ct-editor-js', 'api_key', get_option('vl_ct_options')['vl_ct_api_key'] );
//   // } else {
//   //   wp_localize_script( 'vl-ct-editor-js', 'api_key', null );
//   // }

//   // Register our block's base CSS  
//   wp_register_style(
//     'vl-ct-editor-style',
//     plugins_url( '/blocks/dist/blocks.style.build.css', __FILE__ ),
//     array( 'wp-blocks' )
//   );
  
//   // Register our block's editor-specific CSS
//   wp_register_style(
//     'vl-ct-editor-edit-style',
//     plugins_url('/blocks/dist/blocks.editor.build.css', __FILE__),
//     array( 'wp-edit-blocks' )
//   );  
  
//   // Enqueue the script in the editor
//   register_block_type('vl-ct/editor', array( 
//     // 'render_callback' => 'vl_blocks_editor_callback',
//     'editor_script' => 'vl-ct-editor-js',
//     'editor_style' => 'vl-ct-editor-edit-style',
//     'style' => 'vl-ct-editor-style'
//   ));
// }

// add_action('init', 'vl_ct_my_register_editor');

// /**
// /* CPT Page block 
// */

// // To create if php render is necessary
// //require_once 'php-renders/gpb-editor-render.php';

// function vl_ct_my_register_page() {

//   // Register our block script with WordPress
//   wp_register_script(
//     'vl-ct-page-js',
//     plugins_url('/blocks/dist/blocks.build.js', __FILE__),
//     array('wp-blocks', 'wp-element')
//   );

//   // Adding settings value from db to block js
//   // if (isset(get_option('vl_ct_options')['vl_ct_api_key'])) {
//   //   wp_localize_script( 'vl-ct-page-js', 'api_key', get_option('vl_ct_options')['vl_ct_api_key'] );
//   // } else {
//   //   wp_localize_script( 'vl-ct-page-js', 'api_key', null );
//   // }

//   // Register our block's base CSS  
//   wp_register_style(
//     'vl-ct-page-style',
//     plugins_url( '/blocks/dist/blocks.style.build.css', __FILE__ ),
//     array( 'wp-blocks' )
//   );
  
//   // Register our block's page-specific CSS
//   wp_register_style(
//     'vl-ct-page-edit-style',
//     plugins_url('/blocks/dist/blocks.page.build.css', __FILE__),
//     array( 'wp-edit-blocks' )
//   );  
  
//   // Enqueue the script in the page
//   register_block_type('vl-ct/page', array( 
//     // 'render_callback' => 'vl_blocks_page_callback',
//     'page_script' => 'vl-ct-page-js',
//     'page_style' => 'vl-ct-page-edit-style',
//     'style' => 'vl-ct-page-style'
//   ));
// }

// add_action('init', 'vl_ct_my_register_page');

function vl_ct_adding_shared_scripts() {
  wp_register_script('vl_ct_shared_scripts', plugins_url('shared/shared.js', __FILE__), array('jquery'),'1.1', true);
  wp_enqueue_script('vl_ct_shared_scripts');
}
  
add_action( 'wp_enqueue_scripts', 'vl_ct_adding_shared_scripts' ); 
add_action( 'admin_enqueue_scripts', 'vl_ct_adding_shared_scripts' );

function run_container_tabs() {

	$plugin = new Container_Tabs();
	$plugin->run();

}
run_container_tabs();
