# Simple Modal Component Library

## Installation 
Run the following command:`npm install simple-component-library`

## Examples
You can find an example of usage in "/src/examples"

## configuration

to make component functional, pass the following props:

{content}: jsx.Element containing content you wish to be displayed in modal
{modalState}: state that corresponds to whether modal is open or closed (true or false)
{close}: function to set modalState(false)

### optional

{closeIcon}: icon source to be displayed instead of default X