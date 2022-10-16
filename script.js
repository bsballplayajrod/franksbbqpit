var coll = document.getElementsByClassName("menu-btn");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function buttonOutOfOrderAlert () {
    alert ("Sorry, this button does not work");
}



/*


sides  fried okra 5.75
        hush puppies 5.75
        coleslaw 5.75
        potato salad 5.75
        seasoned fries
        collard greens
        baked beans
        corn bread
        mashed potatoes

bbq chicken dinner 17.95
1/2 BBQ Chicken

Ribs 19.95
five beef ribs

pork ribs 

Hot Links 15.99


desserts
choc pudding pound cake 5.85
rich and moist chocolate cake

peach cobbler 6.85
sweet ripe peaches topped with a flakey crust

Sweet potato pie 6.85
made with a buttery flakey crust and creamy filling

ice cream 3.50 vanilla choc strawberry


coke
dr pepper
diet coke
sprite
lemonade
unsweet tea
fanta
rootbeer
1.95


The Pup Package - 13.50
One Meat - Two sides

#The Classic Wolf - 16.00
Two Meats - Two Sides

#The Hungry Wolf Package - 17.50
Three Meats - Three Sides

Meat Choices:

Chicken, Pulled Pork, Brisket, Hotlinks, Ribs, Catfish

Side Choices:

Mac, Okra, Greens, Hush Puppies, Red Beans & Rice, Potato Salad, Coleslaw, Baked Beans, Fries, Onion Rings, Corn, Yams, Black Eyed Peas, Cabbage, Mashed Potatoes

#Appetizers - 5.50
Choose any 1 of our delicious appetizers

Mac & Cheese Bites
Chicken Tenders
Chicken Gizzards
Jalapeño Bites
Does not include wings

#Wings
10 pcs	20 pcs	40 pcs	75 pcs	100 pcs
10.50	15.50	27.50	56.50	68.50
Dipped in any of our sauces

Hot BBQ
Sweet BBQ
Honey Hot
Original Breaded
Choose up to 2 flavors starting at 20 wings


CATERING MUST ORDER BY THE PAN
#Desserts
Choose any 1 of our desserts

Peach Cobbler
Sweet Potato Pie
Cherry Pudding lb Cake
Chocolate lb Cake
See more information here


#Drinks - 3.15 A Liter
1 Liter of Any Coke Products

All catering prices are per person

Catering orders are for parties of 10 or more.

Orders for parties 20+ must be made a week prior from the ready date.

All catering orders are equipped with sauce.

Utensils & plate ware can be provided for an additional charge of 2.50 per person.

These Items may be served raw or undercooked, or contain raw or undercooked ingridients. Consuming raw or 
undercooked meats, poultry, seafood, 
shellfish or eggs may increase your 
risk of foodborne illness.*/