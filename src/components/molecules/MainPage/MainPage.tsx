import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import { PlayCircleFilled } from '@ant-design/icons';
import { RootState } from '../../../store/rootReducer';
import featureImageTitle from '../../../assets/FeaturedTitleImage.png'
import { Button } from '../../atoms';
import './MainPageWrapper.scss'
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const MainPage: React.FC = () => {
  const [featureImage, setFeatureImage] = useState<string | undefined>(undefined);
  const {feature} = useSelector((state: RootState) => state.todo);
  const data = feature[feature.length-1];

  function secondsToHoursMinutes(seconds: number) {
    var hours = Math.floor(seconds / 3600);
    var remainingSeconds = seconds % 3600;
    var minutes = Math.floor(remainingSeconds / 60);

    return {
      hours: hours,
      minutes: minutes
    };
  }
  let {hours, minutes} = secondsToHoursMinutes(data.Duration||2500)

  useEffect(() => {
    
    import(`../../../assets/${data.CoverImage}`).then((module) => {
      setFeatureImage(module.default);
    });
  }, [data]);

  return (
    <>
    
        <div className='mainPage_content'>
          <div className='fetured_content'>
          {data?.VideoUrl?
            ( <>
                <VideoPlayer videoUrl={data.VideoUrl}/>
              </>
            ):(
              <img src={featureImage} alt='featured_image'/>
            )}
          </div>
          <div className='featured_movie_content'>
            <span>{data.Category.toLocaleUpperCase()} {data.Title}</span>
            {!data?.VideoUrl&&<img src={featureImageTitle} alt='fetured movie title'/>}
            <div id='fetured_movie_info'>
              <span>{data.ReleaseYear}</span>
              <span>{data.MpaRating}</span>
              <span>{`${hours?hours+'h':''} ${minutes}m`}</span>
              <p>{data.Description}</p>
            </div>
            <div className='featured_click_buttons'>
              {!data?.VideoUrl && <Button type="play" width='150px' br={20}><PlayCircleFilled style={{color:'black'}}/>Play</Button>}
              <Button type="more" width='150px' br={20}>More Info</Button>
            </div>
          </div>
        </div> 
    </>
  );
};

export default MainPage;
