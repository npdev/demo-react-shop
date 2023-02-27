import {FC} from 'react';
import {useNavigate} from 'react-router-dom';

import {CategoriesCategory} from '../categories/categories.component';

import {
  BackgroundImage,
  Body,
  CategoriesItemContainer
} from './categories-item.styles';

type CategoriesItemProps = {
  category: CategoriesCategory;
}

const CategoriesItem: FC<CategoriesItemProps> = ({category}) => {
  const {title, imageUrl, route} = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <CategoriesItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}/>
      <Body className='body'>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </CategoriesItemContainer>
  );
}

export default CategoriesItem;
