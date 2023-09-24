import React, { useState } from 'react';
import { ScrollView, View, Alert } from 'react-native';
import { HomeChannelData } from '@/data';
import { BaseStyle, useTheme, Images } from '@/config';
import styles from '@/screens/Components/Common/styles';
import Input from '@/screens/Components/Common/Input';
import ImagePicker from '@/screens/Components/Common/ImagePicker';
import { Header, Icon, SafeAreaView, Text, CardChannel } from '@/components';
import stylesInline from './styles';

const images = HomeChannelData.map((item) => ({ ...item, name: item.title }));

const CardChannelReview = ({ navigation }) => {
  const { colors } = useTheme();
  const [image, setImage] = useState(images[0]);
  const [title, setTitle] = useState(image.name);

  const onPress = () => {
    Alert.alert('You are press this Card');
  };

  return (
    <SafeAreaView style={BaseStyle.safeAreaView} edges={['right', 'top', 'left']}>
      <Header
        title={'CardChannel Component'}
        renderLeft={() => {
          return <Icon name="angle-left" size={20} color={colors.text} enableRTL={true} />;
        }}
        onPressLeft={() => {
          navigation.goBack();
        }}
      />
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text footnote bold>
            Demo
          </Text>
          <View style={[styles.item, { alignContent: 'center', alignItems: 'center' }]}>
            <CardChannel
              onPress={onPress}
              item={{
                image: image.image,
                title: title,
              }}
            />
          </View>
          <View style={styles.row}>
            <View style={styles.left}>
              <ImagePicker images={images} label="Image" value={image} onChange={(v) => setImage(v)} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.left}>
              <Input
                label={'Title'}
                placeholder="Please input Title"
                onChangeText={(value) => setTitle(value)}
                value={title}
              />
            </View>
          </View>
          <View style={stylesInline.example}>
            <Text footnote bold>
              Example
            </Text>
            <View style={styles.row}>
              <CardChannel
                onPress={onPress}
                item={{
                  image: Images.channel1,
                  title: 'CNN',
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CardChannelReview;
