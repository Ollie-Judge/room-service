import React from "react";
import "../styling/menu.css";

const Menu = () => {
  return (
    <div id="menu">
      <div className="menuTitle">

      </div>



<div className="left">

<div id="drinkmenu"> <input type="image" src="https://media.istockphoto.com/photos/fresh-foamy-beer-picture-id91721210?k=20&m=91721210&s=612x612&w=0&h=N936U3lGtzBVa2VwNuaHbiJ_uD7tbQW5q0YDN0uKz90=" width={250} height={320} alt="beers"/> 
</div>
<div className="drink_btn"> <button id="drinks"> DRINKS MENU </button> </div>

<div id="kidmenu"> <input type="image" src="https://media.istockphoto.com/photos/neapolitan-pizza-on-black-background-picture-id1295797149?b=1&k=20&m=1295797149&s=170667a&w=0&h=pvcxQRi0VJvzSr6VW6UBH-TfBEamd_fM5dPpYzUGNg4=" width={250} height={320} alt="pizza"/> 
</div>
<div className="kids_btn"> <button id="kidsmenu"> KIDS MENU </button> </div>

<div id="dessertmenu"> <input type="image" src="https://media.istockphoto.com/photos/four-scoops-of-ice-cream-picture-id155137460?k=20&m=155137460&s=612x612&w=0&h=NzNOUS-mi31BpTpC3zVmf41bzZPPXNXXiUZwD2imfBA=" width={250} height={320} alt="ice cream"/> 
</div>
<div className="dessert_btn"> <button id="dessert"> DESSERT MENU </button> </div>

</div>

<div className="right">

<div id="mains"> <input type="image" src="https://img.freepik.com/premium-photo/steak-marbled-beef-roasting-medium-black-stone-board-black-background-top-view_89816-5742.jpg?w=2000" width={250} height={320} alt="steak"/> 
</div>
<div className="menu_btn"> <button id="mainmenu"> MAIN MENU </button> </div>

<div id="barmenu"> <input type="image" src="https://thumbs.dreamstime.com/b/crispy-potato-chips-black-plate-textured-background-top-view-183025686.jpg" width={250} height={320} alt="crisps"/> 
</div>
<div className="snack_btn"><button id="barsnacks"> BAR SNACKS </button> </div>

<div id="breakfastmenu"> <input type="image" src="https://img.freepik.com/premium-photo/traditional-english-breakfast-black-background_331695-293.jpg" width={250} height={320} alt="eggs"/> 
</div>
<div className="breakfast_btn"> <button id="breakfast"> BREAKFAST MENU </button> </div>

</div>

    </div>

  );
};

export default Menu;
