//  import { ImgTumb } from '../../../pages/HomePage/HomePage.styled';
import pictureMob from '../../assets/MobileBg/HomePageBottleBg.webp';
import pictureMobRetina from '../../assets/MobileBg/HomePageBottleBg@retina.webp';
import pictureTab from '../../assets/TabletBg/HomePageBgTab.webp';
import pictureTabRetina from '../../assets/TabletBg/HomePageBgTab@retina.webp';
import pictureDesk from '../../assets/DesktopBg/HomePageBg.webp';
import pictureDeskRetina from '../../assets/DesktopBg/HomePageBg@retina.webp';

const PictureBottleBg = () => {
  return (
    <picture>
      <source
        srcSet={`${pictureDesk}, ${pictureDeskRetina} 2x`}
        media="(min-width: 1440px)"
      />
      <source
        srcSet={`${pictureTab}, ${pictureTabRetina} 2x`}
        media="(min-width: 768px)"
      />
      <source
        srcSet={`${pictureMob}, ${pictureMobRetina} 2x`}
        media="(min-width: 320px)"
      />
      <img
        src={pictureMob}
        srcSet={`${pictureMob} 1x, ${pictureMobRetina} 2x`}
        alt="Mobile background"
      />
    </picture>
  );
};
export default PictureBottleBg;
