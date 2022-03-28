//active HTML elements
const resources = {
btns: document.querySelectorAll('.btn'),
dynCont: document.querySelector('.dynamic-content')
}
// let navItems = document.querySelectorAll('a');
// console.log(resources.btns, resources.dynCont);

//database section
const contents = {
    c1: {
        imageUrl: './img/Asset 6energy-btn1.png',
        imageAlt: 'House with Solar Pannel',
        heading: 'Net Metering-Solar Pannels',
        bodyText: 'Net metering is a financial incentive that allows you to generate electricity from a renewable energy source (solar, geothermal, biomass, and wind) and store this energy in the power grid. When your solar panels or another renewable energy source produce excess power, that energy is sent to the grid and in exchange you can pull from the grid when your system is under-producing - like during nighttime, or during peak demand times, when electricity costs are higher.'
        
        },
    c2: {
        imageUrl: './img/Asset 7energy-btn2.png',
        imageAlt: 'House with dollar sign',
        heading: 'Financing Green Technology',
         bodyText: 'Green Energy Ontario also saves you money by facilitating the purchase and/or financing of green energy technologies, products, and services that reduce energy consumption and waste and increases system efficiencies.'
         
        },
    
    c3: {
        imageUrl: './img/Asset 8energy-btn3.png',
        imageAlt: 'House with star symbol',
        heading: 'Technical Assessment',
         bodyText: 'Green Energy Ontario saves you money by arranging for various other technical assessments, such as building condition assessment, reserve study, age friendly conversion assessment, operational viability analysis and building envelop study at your affordable housing property.'
        }

};
// //loads initial content on page load
resources.dynCont.innerHTML = `<figure>
<img src="${contents.c1.imageUrl}" alt="${contents.c1.imageAlt}" />
</figure>
<h2>${contents.c1.heading}</h2> 
<p>${contents.c1.bodyText}</p>`;  

//updating content
let  handleClick = e => {
    //reference for current button
    let currentButton = e.target;
    //value of data attribute
    let currentContent = currentButton.dataset.btn;
    
    //updates content
    resources.dynCont.innerHTML = `<figure>
    <img src="${contents[currentContent].imageUrl}" alt="${contents[currentContent].imageAlt}" />
    </figure>
    <h2>${contents[currentContent].heading}</h2>
    <p>${contents[currentContent].bodyText}</p>`;
    
   
    //    console.log(currentButton.dataset.btn);
    
    for(let btn of resources.btns){
        if(btn.id){
            btn.removeAttribute('id');
  
        }
    }
    currentButton.id = 'active';
};




for (let btn of resources.btns){
    btn.addEventListener('click', handleClick);
 }
    
