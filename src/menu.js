const menuSection = (title) => {
    const div = document.createElement('div');
    const divTitle = document.createElement('h2');
    divTitle.textContent = title;
    div.appendChild(divTitle);
    const items = document.createElement('ul');
    items.id = title;
    div.appendChild(items);
    container.appendChild(div);
}

const menuItem = (group, name, price, description) => {
    const item = document.createElement('li');
    const itemTitle = document.createElement('h3');
    itemTitle.textContent = name;
    
    const itemPrice = document.createElement('div');
    itemPrice.textContent = price;

    const itemDecription = document.createElement('div');
    itemDecription.textContent = description;

    item.appendChild(itemTitle);
    item.appendChild(itemPrice);
    item.appendChild(itemDecription);

    const parentDiv = document.getElementById(group);
    parentDiv.appendChild(item);
}

const menu = () => {
    const beignets = menuSection('Beignets');
    const plain = menuItem('Beignets', 'Plain', '$2/ea', 'Unsugared beignets ready to add jam or leave savory.')
    const powdered = menuItem('Beignets', 'Powdered', '$3/ea', 'Dusted with powdered sugar for classic style.')
    const cinnamon = menuItem('Beignets', 'Plain', '$2/ea', 'Rolled in cinnamon sugar to spice up your life.')

    const sides = menuSection('Sides');
    const berry = menuItem('Sides', 'Berry Jam', '$3', 'A container of homemade seasonal berry jam.')
    const marmalade = menuItem('Sides', 'Marmalade', '$3', 'Imported spiced orange marmalade.')

    const beverages = menuSection('Beverages');
    const coffee = menuItem('Beverages', 'Drip Coffee', '$15', 'A warm carafe of coffee, light roast or nothing.')
    const juice = menuItem('Beverages', 'Orange Juice', '$8', '16oz of hand squeezed orange juice.')
    const mimosa = menuItem('Beverages', 'Mimosa', '$12', 'A flute of champagne with 4 drops of fresh orange juice.')
}

export default menu;