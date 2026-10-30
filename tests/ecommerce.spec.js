
import { test, expect } from '@playwright/test';

test('getByRole() — accessible names', async ({ page, context, browser, request }) => {
 
  //go to url
  await page.goto('https://speedwaytechlabs.com/?lab=pw-ecommerce');
  
  //Locate username and password
  await page.locator('#pw-username').fill('admin');
  await page.locator('#pw-login-password').fill('admin123');
  await page.getByText("Sign in to practice").click();

  //validate dashboard page
  await expect(page.getByTestId('welcome-user')).toBeVisible();
  
 // add to cart Laptop & Tablet

 await page.getByRole('button', {name: 'Add Laptop'}).click();
 await page.getByRole('button' ,{name: 'Add Tablet'}).click();

 //validate cart item . that item added in cart or not 

 await expect (page.getByTestId('cart-count')).toHaveText('2');

//add to wishlist 
await page.getByRole('button' ,{name:'Wishlist Mobile'}).click();

//validate wishlist count

await expect(page.getByTestId('wishlist-count')).toHaveText('1');

//removal of cart 

await page.getByRole('button', {name:'Remove Laptop item 1'}).click();

//validate the Wishlist 

await expect(page.getByTestId('wishlist-items')).toContainText('Mobile');

//place demo order button 
await page.getByRole('button' ,{name:'Place demo order'}).click();

// veriy product is added in  order

//await expect (page.getByRole('button',{name:'Demo order history'})).toHaveText('₹30000');

await expect(page.getByRole('table').locator('tr').nth(1).locator('td').nth(1)).toHaveText('₹30000');
 

// Select Mumbai from the profile city dropdown.
/*const profileCity = page.getByLabel('Profile city');
await profileCity.selectOption({ label: 'Mumbai' });
await expect(profileCity.locator('option:checked')).toHaveText('Mumbai');*/

await page.getByLabel('Profile city').selectOption({label:'Mumbai'});

// click on checkbox
await page.locator('#pw-notifications-setting').check();


//click on save setting button
await page.getByRole('button',{name:'Save settings'}).click();

});


