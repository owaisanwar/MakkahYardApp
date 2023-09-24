import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { Images } from '@/config';
import Text from '@/components/Text';
import styles from './styles';

const CategoryGrid2 = (props) => {
  const { title, style, image, onPress } = props;

  return (
    <TouchableOpacity style={[style]} onPress={onPress}>
      <ImageBackground source={image} style={styles.imageBackground} borderRadius={8}>
        <Text body1 whiteColor style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

CategoryGrid2.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  image: PropTypes.node.isRequired,
  title: PropTypes.string,
  onPress: PropTypes.func,
};

CategoryGrid2.defaultProps = {
  style: {},
  image: Images.news,
  title: '',
  onPress: () => {},
};

export default CategoryGrid2;
