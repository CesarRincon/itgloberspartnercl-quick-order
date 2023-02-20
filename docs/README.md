📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Quick order
![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)

The quick order component allows you to go directly to the checkout to complete the purchase simply by entering the SKU ID and also showing you a preview.

<img width="508" alt="image" src="https://user-images.githubusercontent.com/90701896/220184448-10fa6bf1-4746-40ff-84ba-7cd58036156b.png">

## Configuration 

1. Import the  Quick order's app to your theme's dependencies in the manifest.json, for example:
```json
  dependencies: {
    "{vendor}.quick-order": "0.x"
  }
 ```
 
 2. Add the Quick order block to the store-theme. For example:
```json
  "flex-layout.row#quick-order": {
    "title": "Quick order",
    "children": [
      "quick-order"
    ]
  }
   ```
|  Block name     | Description                                     |
| -------------- | ----------------------------------------------- |
| `quick-order` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red)  Top level block that must be declared in the store theme block to render a quick order block.   |

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

|CSS HANDLES |
| ----------- | 
|` container_suggestion `|
|` container_imager `|
|` form_container `|
|` description `|
|` container_info `|

## Contributors ✨

Thanks goes to these wonderful people:

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)