import './App.css';
import Header from './components/header/Header';
import Carousel from './components/carousel/Carousel';
import Menus from './components/menus/Menus';
import Slider2 from './components/slider2/Slider2';
import List1 from './components/list1/List1';
import ImageList from './components/imageList/ImageList';
import Categories from './components/categories/Categories';
import ImageList2 from './components/imagelist2/ImageList2';
import PopularBrands from './components/popularbrands/PopularBrands';
import ImageList3 from './components/ImageList3/ImageList3';
import DigikalaOffers from './components/digikalaOffers/DigikalaOffers';
import TopCategories from './components/TopCategories/TopCategories';
import DigiPlus from './components/DigiPlus/DigiPlus';
import DigiClub from './components/DigiClub/DigiClub';
import BestSellingProducts from './components/BestSellingProducts/BestSellingProducts';
import BishtarinTakhfif from './components/BishtarinTakhfif/BishtarinTakhfif';
import Auction from './components/Auction/Auction';
import Weblog from './components/Weblog/Weblog';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
          <Header />
          <Carousel />
          <Menus />
          <Slider2 />
          <List1 />
          <ImageList />
          <Categories />
          <ImageList2 />
          <DigikalaOffers />
          <PopularBrands />
          <ImageList3 />
          <TopCategories />
          <DigiPlus />
          <DigiClub />
          <BestSellingProducts />
          <BishtarinTakhfif />
          <Auction />
          <Weblog />          
          <Footer />
    </div>
  );
}

export default App;
