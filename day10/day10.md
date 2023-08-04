Phase 1 :
you have to setup json server and have products as endpoint;
Create form which can take title,price and imageUrl from user. this should be saved in state.
once a user submits the form; Make a post request to the endpoint;
maintain loading and error state and display info on UI accordingly.
Phase 2 :
ProductForm should be a separate component now;
on component mount, get the products data and set local state products with that data;
display the products on UI, ProductItem should a separate component; 3 items should be displayed per row;
Phase 3 :
Implement Pagination; 3 Items per page
Previous button should be disabled on page 1
Next button should be disabled on last page
Check whenever you add a new element to database. is it being reflected in UI or not