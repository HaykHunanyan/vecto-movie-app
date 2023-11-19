import React, { useEffect, useRef,useState } from 'react';
import { useDispatch } from 'react-redux';
import { movieData } from '../../../constants/data';
import { addMovie } from '../../../store/feature';
import { FeaturedItem } from '../../../constants/data';
import './CarouselWrapper.scss'

interface Images {
  [key: string]: string;
}

const CarouselComp: React.FC = () => {
  const [data, setData] = useState<FeaturedItem[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lastClickedMovieId = sessionStorage.getItem('lastClickedMovieId');
  const dispatch = useDispatch();
  const {TendingNow} = movieData

  const imagePaths = Array.from({ length: 8 }, (_, index) => `https-specials-${index + 1}.png`);
  const images: Images = Object.fromEntries(
    imagePaths.map((path, index) => [index + 1, require(`../../../assets/${path}`)])
  );

  const addfeatureMovie = (featuredItem:FeaturedItem)=> dispatch(addMovie(featuredItem));
  

  const compareDatesDesc = (a:any, b:any) => {
    const dateA = new Date(a.Date).getTime();;
    const dateB = new Date(b.Date).getTime();;
  
    // Compare dates in descending order
    return dateB - dateA;
  };

  useEffect(() => {
    const sortedDataDesc = TendingNow.sort(compareDatesDesc);
    const sortByLastClick =  sortedDataDesc.sort((a, b) => (a.Id === lastClickedMovieId ? -1 : 1));
    setData(sortByLastClick)
  }, [lastClickedMovieId, TendingNow]);

  return (
    <div id="wrapper">
      <div id="carousel" ref={carouselRef}>
        <div id="content" ref={contentRef}>
        {data.map((val) => {
            let imagePath = val.CoverImage.split('-')[2].split('.')[0]
            return (
            <div className='item' key={val.Id} onClick={()=>addfeatureMovie(val)}>
              <img src={images[imagePath as keyof typeof images]} alt={val.Title}/>
            </div>
          )})}
        </div>
      </div> 
    </div>
  );
};

export default CarouselComp;