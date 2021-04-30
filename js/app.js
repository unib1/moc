const menu = [
  {
    id: 1,
    title: "In need of a math teacher",
    category: "Teaching",
    date: "19-05-2021",
    img: "../img/logo.png",
    author: "Chucks",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    date: 13.99,
    img: "../img/blog1.png",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    date: 6.99,
    img: "../img/right-1.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "In need of a math teacher",
    category: "Teaching",
    date: "19-05-2021",
    img: "../img/top-left.jpg",
    author: "Chucks",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
},
  
];

const sectionCenter = document.querySelector('.main');
const container = document.querySelector('.btn')

window.addEventListener('DOMContentLoaded', function(){
  displayMenuItems(menu);
  //displayMenuBtns();
})



function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){
    return `<div class="col-6 row">
    <div class="col-4">
      <img src=${item.img} alt=${item.title} class="photo" />
    </div>
    <div class="col-8" >
        <h3><a href="">${item.title}</a></h3>
        <p><i><a href="#">by ${item.author}</a>  ${item.date}</i></p>
        <p>${item.desc}</p>
    </div>
</div>
  `;
  })
  displayMenu = displayMenu.join('');
  
  sectionCenter.innerHTML = displayMenu
}
/*
function displayMenuBtns(){
  const categories = menu.reduce(function(values, item){
    if (!values.includes(item.category)){
      values.push(item.category);
    }
    return values;
  },
  ['all']
  );
  const categoryBtns = categories.map(function(category){
    return `<button type="button" class="filter-btn" data-id=${category}>
    ${category}
    </button>`
  }).join('');
  container.innerHTML=categoryBtns;
  const filterBtns = document.querySelectorAll('.filter-btn')
  filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function(menuItem){
        //console.log(menuItem.category);
        if (menuItem.category === category){
          return menuItem;
        }
      })
      console.log(menuCategory);
      if(category == 'all'){
        displayMenuItems(menu)
      }
      else{
        displayMenuItems(menuCategory)
      }
    })
  })
}*/