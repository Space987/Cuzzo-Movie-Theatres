var categories = [];
var catalog = [];
var cart = [];
let total = 0;

var imageFolder = "myImages/"; // where all shoe images are contained

/**
 * Function which initializes 8 categories that a Shoe object can possess.
 */
function initializeCategories() {


    var Movie1 = new Category(1000, "Scary", "These are our Scary Movies");
    categories.push(Movie1);

    var Movie2 = new Category(2000, "Funny", "These are our Funny Movies");
    categories.push(Movie2);

    var Movie3 = new Category(3000, "Action", "These are our Action Movies");
    categories.push(Movie3);

    var Movie4 = new Category(4000, "Drama", "These are our Drama Movies");
    categories.push(Movie4);

    var Snack1 = new Category(5000, "Chips", "These are our Chip Snacks");
    categories.push(Snack1);

    var Snack2 = new Category(6000, "Chocolate", "These are our Chocolate Snacks");
    categories.push(Snack2);

    var Snack3 = new Category(7000, "Candy", "These are our Candy Snacks");
    categories.push(Snack3);

    var Snack4 = new Category(8000, "PopCorn", "These are our popcorn Snacks");
    categories.push(Snack4);





}

/**
 * Returns the category which matches the specified id.
 * @param {*} categoryId Id used to find category.
 */
function getCategory(cata) {


    for (let i = 0; i < categories.length; i++) {

        const item = categories[i];
        if (item.categoryId == cata) {
            return item.categoryName;
        }
    }
    return undefined;
}

/**
 * Creates 3 Shoe objects for each category class (24 Shoe objects in total).
 */
function initializeItems() {

    var movie1 = new Movies(10, "Scream", "Scary Movie about a killer ghoast", 12.00, "myImages/Scream.jpg", 70, 1000);
    catalog.push(movie1);
    var movie2 = new Movies(11, "Morbius", "Scary Movie About a killer vampire", 12.00, "myImages/Morbius.jpg", 70, 1000);
    catalog.push(movie2);
    var movie3 = new Movies(12, "Texan Chainsaw", "Scary Movie About a serial killer with a chainsaw", 12.00, "myImages/Chainsaw.jpg", 70, 1000);
    catalog.push(movie3);

    var movie4 = new Movies(20, "Turning Red", "Funny Disney Movie About a girl who turns into a racoon", 12.00, "myImages/Red.jpg", 20, 2000);
    catalog.push(movie4);
    var movie5 = new Movies(21, "Minions", "Funny Movie about the minions from despicable me", 12.00, "myImages/Minions.jpg", 15, 2000);
    catalog.push(movie5);
    var movie6 = new Movies(22, "Marry Me", "Funny Movie about an arranged marriage", 12.00, "myImages/MarryMe.jpg", 13, 2000);
    catalog.push(movie6);


    var movie7 = new Movies(30, "Uncharted", "Action movie based on the Uncharted games", 12.00, "myImages/Uncharted.jpg", 4, 3000);
    catalog.push(movie7);
    var movie8 = new Movies(31, "Batman", "A new Movie Based on the Batman Comics", 12.00, "myImages/Batman.jpg", 10, 3000);
    catalog.push(movie8);
    var movie9 = new Movies(32, "Top Gun", "A long awaited sequel based on Top Gun", 12.00, "myImages/TopGun.jpg", 30, 3000);
    catalog.push(movie9);

    var movie10 = new Movies(40, "RRR", "Indian Movie about the hard life of a man", 12.00, "myImages/RRR.jpg", 14, 4000);
    catalog.push(movie10);
    var movie11 = new Movies(41, "Deep Water", "Movie about a crumbling marriage", 12.00, "myImages/DeepWater.jpg", 34, 4000);
    catalog.push(movie11);
    var movie12 = new Movies(42, "Samaritan", "Movie about a homeless man who whats to make a change", 12.00, "myImages/Samarian.jpg", 5, 4000);
    catalog.push(movie12);

    var snack1 = new Movies(50, "Sun Chips", "Great chips that incorperate the flavour of the sun", 10.99, "myImages/SunChips.jpg", 10, 5000);
    catalog.push(snack1);
    var snack2 = new Movies(51, "Lays Chips", "Classic Chips that are definitely not too lound to eat", 6.99, "myImages/LaysChips.jpg", 24, 5000);
    catalog.push(snack2);
    var snack3 = new Movies(52, "Ruffles", "Like Lays Chips but have waves so cost more expensive", 11.99, "myImages/Ruffles.jpg", 5, 5000);
    catalog.push(snack3);

    var snack4 = new Movies(60, "Hersey", "Classic Chocolate to have anytime", 5.99, "myImages/Herseys.jpg", 10, 6000);
    catalog.push(snack4);
    var snack5 = new Movies(61, "Twix", "Great Chocolate to have if you want caramel", 6.99, "myImages/twixs.jpg", 24, 6000);
    catalog.push(snack5);
    var snack6 = new Movies(62, "KitKat", "Best Chocolate in the world for any age group", 7.99, "myImages/kitkat.jpg", 5, 6000);
    catalog.push(snack6);

    var snack7 = new Movies(70, "Skittles", "Feel the raibow, taste the rainbow", 11.99, "myImages/Skittles.jpg", 10, 7000);
    catalog.push(snack7);
    var snack8 = new Movies(71, "Gummy Bears", "Classic gummy bear flavour that are not too chewy", 15.99, "myImages/gummies.jpg", 24, 7000);
    catalog.push(snack8);
    var snack9 = new Movies(72, "Jelly Beans", "Good snack if you like this kind of food", 20.99, "myImages/JellyBeans.jpg", 5, 7000);
    catalog.push(snack9);

    var snack10 = new Movies(80, "Tye-Dye", "New Flavour sure to make your mouth explode", 5.99, "myImages/Dye.jfif", 10, 8000);
    catalog.push(snack10);
    var snack11 = new Movies(81, "Coco Nana", "IF you like bananas and chocolate this popocorn is for you", 6.99, "myImages/coco.webp", 24, 8000);
    catalog.push(snack11);
    var snack12 = new Movies(82, "911-Saracha", "If you like a little spice this is for you", 7.99, "myImages/911.jpg", 5, 8000);
    catalog.push(snack12);




}





/**
 * Sets up the webpage for the user.
 */
function setUpCart() {
    initializeCategories();
    initializeItems();
    showListOfItems();
    hideStatusMessage();


}

/**
 * Displays an alert based on user interaction.
 * @param {*} cssClass Class used to change styling of alert.
 * @param {*} messageToDisplay Message to display in the alert.
 */
var timeoutForMsg;

function showStatusMessage(messageToDisplay) {

    if (timeoutForMsg) {

        clearTimeout(timeoutForMsg);
    }
    let alert = document.getElementById("divAlert");
    $(".alert").show();
    alert.innerHTML = messageToDisplay;
    window.scroll(0, 0);
    timeoutForMsg = setTimeout(hideStatusMessage, 5000);

}

/**
 * Hides the status alert.
 */
function hideStatusMessage() {

    $(".alert").hide();
    timeoutForMsg = undefined;
}

/**
 * Clears the div element which contains shoe information.
 */
function clearMainContainer() {

    let mainContainer = document.getElementById("divMainContainer");
    mainContainer.innerHTML = "";
}

/**
 * Displays all shoes in the catalog using bootstrap cards.
 */
function showListOfItems() {


    clearMainContainer();
    let mainContainer = document.getElementById("divMainContainer");
    let content = `<div class="container">`;
    content += `<div class="row rowShift">`;
    for (let i = 0; i < catalog.length; i++) {
        const item = catalog[i];
        const addRow = i % 3 == 0;
        if (addRow && i > 0) {
            content += `</div> <div class="row rowShift">`;
        }
        content += `
        <div class="card text-white text-center bg-dark mb-3" style="width: 18rem; margin-right: 1.6%">
            <div class="card-header">${getCategory(item.category)}</div>
            <div class="card-body">
                <img src="${item.image}" class="card-img-top" alt="..." style="width: 14rem; height: 200px; border-radius: 8pt">
                <h5 class="card-title"><br>${item.title}</h5>
                <p class="card-text">${item.description}</p>
                <p class="card-text">Quantity : ${item.quantity}</p>
                <p class="card-text">$${item.price}</p>
                <button type="button" class="btn btn-secondary" onclick="addToCart(${item.id},${item.price})">Add To Cart <i class="fa fa-cart-plus"></i></button>
                <button type="button" class="btn btn-primary"  onclick ="showItemDetails(${item.id})" data-toggle="modal" data-target="#exampleModalCenter">Details <i class="fa fa-info"></i>
            </div>
        </div>
        `;

    }
    content += "</div> </div>";
    mainContainer.innerHTML += content;
}

/**
 * Displays all shoes found in the user's cart in a bootstrap table.
 */
function viewCart() {

    clearMainContainer();
    let mainContainer = document.getElementById("divMainContainer");
    let movieTable = '<table class="table table-striped tableAlignText"><thead><tr class="trTitle"><th colspan=9>Cart Details</th></tr> <tr><th>ID</th><th>Name</th><th>Description</th><th>Price</th><th>Quantity</th><th>Display</th><th></th><th></th></tr></thead><tbody> ';

    cart.forEach(hair => {
        movieTable += `<tr> <td>${hair.id}</td> <td>${hair.title}</td> <td>${hair.description}</td> <td>$${hair.price}</td><td>${hair.quantity}</td> <td><img src="${hair.image}" width="75" height="75" class="img-thumbnail"/></td> <td><button type="button" class="btn btn-danger" onclick="removeFromCart(${hair.id}, ${hair.price})">Remove Item <i class="fa fa-minus"></i></button></td> <td><button type="button" class="btn btn-primary"  onclick ="showItemDetails(${hair.id})" data-toggle="modal" data-target="#exampleModalCenter">Details <i class="fa fa-info"></i></td></tr>`;
    });
    movieTable += `</tbody></table><div class="cart-total"><strong class="cart-total-title">Total</strong> <span class="cart-total-price">$${total}</span></div>`;

    mainContainer.innerHTML = movieTable;;
}


/**
 * Finds an item in catalog based on id.
 * @param {*} itemId Id used to search for item.
 */
function findItemById(itemId) {

    for (let i = 0; i < catalog.length; i++) {
        let equip = catalog[i];
        if (equip.id == itemId) {
            return equip;
        }
    }
    return undefined;
}



/**
 * Displays the details of an item.
 * @param {*} itemId Id used to find item to be detailed.
 */

function showItemDetails(itemId) {


    let result = findItemById(itemId);
    let mainContainer = document.getElementById("divMainContainer");
    let movieTable = `
    
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Item Details</h5>
          <button type="button" class="close" onclick = "resetModal()"" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <div class="card text-white text-center bg-dark mb-3" style="width: 27rem; margin-right: 1.6%">
            <div class="card-header">${getCategory(result.category)}</div>
            <div class="card-body">
                <img src="${result.image}" class="card-img-top" alt="..." style="width: 15rem; height: 210px; border-radius: 8pt">
                <h5 class="card-title"><br>${result.title}</h5>
                <p class="card-text">${result.description}</p>
                <p class="card-text">Quantity : ${result.quantity}</p>
                <p class="card-text">$${result.price}</p>
                <button type="button" class="btn btn-secondary" onclick="addToCart(${result.id})">Add To Cart <i class="fa fa-cart-plus"></i></button>
            
            </div>
        </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick = "resetModal()">Close</button>
        </div>
      </div>
    </div>
  </div>`;

    mainContainer.innerHTML += movieTable;


}

function resetModal() {

    $('.modal-backdrop').hide();
    showListOfItems();
}

/**
 * Adds an item from the catalog to the user's cart.
 * @param {*} itemId Id to find item in catalog.
 */
function addToCart(itemId, price) {

    var equip = findItemById(itemId);
    if (equip.quantity == 0) {
        showStatusMessage("The Item that you have selected is currently unavailibe");
    } else {
        equip.quantity--;
        cart.push(equip);
        total += price;
        total = parseFloat(total.toFixed(4));
        showStatusMessage("The Item that you have selected has been added to your cart");
        showListOfItems();
    }
}



/**
 * Removes an item from the user's cart.
 * @param {*} itemId Id to find item in cart.
 */
function removeFromCart(itemId, price) {

    var equip = findItemById(itemId);

    cart.splice(cart.indexOf(equip), 1)
    total -= price;
    total = parseFloat(total.toFixed(4));
    viewCart();
    showStatusMessage("The Item that you have selected has been removed from your cart");
}

/**
 * Displays a specified array as a boostrap table.
 * @param {*} array Array to display as a table.
 */
function viewArrayAsTable(search, type) {

    var array = [];

    if (type == "category") {

        for (let i = 0; categories.length > i; i++) {
            if (search == categories[i].categoryName) {
                for (let y = 0; catalog.length > y; y++) {
                    if (categories[i].categoryId == catalog[y].category) {
                        array.push(catalog[y]);


                    }

                }
            }
        }
    }

    if (type == "title") {
        for (let i = 0; catalog.length > i; i++) {
            if (search == catalog[i].title) {
                array.push(catalog[i]);

                break;
            }
        }
    }


    clearMainContainer();
    let mainContainer = document.getElementById("divMainContainer");
    let movieTable = '<table class="table table-striped tableAlignText"><thead><tr class="trTitle"><th colspan=9>Cart Details</th></tr> <tr><th>ID</th><th>Name</th><th>Description</th><th>Price</th><th>Quantity</th><th>Display</th><th></th><th></th></tr></thead><tbody>';

    array.forEach(hair => {
        movieTable += `<tr> <td>${hair.id}</td> <td>${hair.title}</td> <td>${hair.description}</td> <td>$${hair.price}</td> <td>${hair.quantity}</td><td><img src="${hair.image}" width="75" height="75" class="img-thumbnail"/></td> <td><button type="button" class="btn btn-secondary" onclick="addToCart(${hair.id})">Add To Cart <i class="fa fa-cart-plus"></i></button></td> <td><button type="button" class="btn btn-primary"  onclick ="showItemDetails(${hair.id})" data-toggle="modal" data-target="#exampleModalCenter">Details <i class="fa fa-info"></i></td></tr>`;
    });

    movieTable += "</tbody></table>";

    mainContainer.innerHTML = movieTable;;
}

function findHairWithProperty(search, type) {

    if (type == "category") {

        for (let i = 0; categories.length > i; i++) {
            if (search == categories[i].categoryName) {

                return 0;

            }
        }
    }

    if (type == "title") {

        for (let i = 0; catalog.length > i; i++) {

            if (search == catalog[i].title) {

                return 1;

            }

        }
    }
    return 2;
}

/**
 * Seaches for an item based on what the user typed.
 */
function searchByKeyword() {

    let searchBar = document.getElementById("carSearchBar");
    const keyword = searchBar.value;
    if (keyword) {


        if (findHairWithProperty(keyword, "category") == 0) {
            viewArrayAsTable(keyword, "category");
            searchBar.value = "";
        }
        if (findHairWithProperty(keyword, "title") == 1) {

            viewArrayAsTable(keyword, "title");
            searchBar.value = "";
        }


        if (findHairWithProperty(keyword, "category") == 2 && (findHairWithProperty(keyword, "title") == 2)) {

            showStatusMessage("No item Found");
        }
    }

}