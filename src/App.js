
import Directory from './components/directory/directory.component';
import './components/directory/directory.styles.scss';

const App = () => {
 
  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]
 
 
  //here there are 5 divs in side on big div for the whole page. Each div contains an image,and another div which contains writing/item description
  //basically each div is like one of 5 images of the main page, and inside it is an image, and on top of image, also inside the div is some writing, like "hat, buy now"
  return (
  <Directory categories={categories} />
  ); 
}

export default App;
