import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import DryTree from '../../assets/Tree/dry-tree.png';
import TreeWithBuds from '../../assets/Tree/tree-with-buds.png';
import SmallLeaves from '../../assets/Tree/tree-small-leaves.png';
import BigLeaves from '../../assets/Tree/tree-big-leaves.png';
import ManyLeaves from '../../assets/Tree/tree-many-leaves.png';
import BloomingTree from '../../assets/Tree/blooming-tree.png';
import { selectDailyProgress } from '../../redux/selectors';
import { StyledTreeWrapper } from './Planting.styled';

const Planting = () => {
  const progress = useSelector(selectDailyProgress);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const height = isMobile ? 280 : isTablet ? 656 : 510;

  return (
    <StyledTreeWrapper>
      {progress == 0 && <img src={DryTree} alt="dry tree" height={height} />}
      {progress > 0 && progress < 20 && (
        <img src={TreeWithBuds} alt="tree with buds" height={height} />
      )}
      {progress >= 20 && progress < 50 && (
        <img src={SmallLeaves} alt="tree with small leaves" height={height} />
      )}
      {progress >= 50 && progress < 70 && (
        <img src={BigLeaves} alt="tree with big leaves" height={height} />
      )}
      {progress >= 70 && progress < 100 && (
        <img src={ManyLeaves} alt="tree with many leaves" height={height} />
      )}
      {progress >= 100 && (
        <img src={BloomingTree} alt="blooming tree" height={height} />
      )}
    </StyledTreeWrapper>
  );
};

export default Planting;
