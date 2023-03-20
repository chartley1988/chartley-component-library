
## Instructions

Create component file, and make sure CSS file is linked. 

### Mandatory Props
-**frontFace**: This is the front of the card. Make sure to include a background colour.
-**backFace**: This is the back of the card. Make sure to include a background colour.
-**width, height**: Because of the position: absolute of the children elements, size must be applied. Ex: '400px'.

### Optional Props
These props have default values, so they're optional. Allows for more customization.
-**speed**: How fast the card flips in seconds. Default is '0.4s'.
-**zValue**: Used for depth sorting, to specify which card should appear in front. Default is '1'.
-**cornerRadius**: Used to apply rounded corner to cards. Can use px, em, rem, etc. Off by default.
-axis: Controls which axis the rotation occurs on. Must use 'X' or 'Y'. Default is 'Y', which has a card flip horizontally along its Y axis.