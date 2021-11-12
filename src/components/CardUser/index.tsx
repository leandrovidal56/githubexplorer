import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Arrowright, Delete, Company, Place, Star } from '~/assets/index';

import { TextDescription } from '~/components/index';

import * as S from './styles';

interface Text {
  HeaderText?: string;
  CompanyText?: string;
  PlaceText?: string;
  StarText?: string;
  Login?: string;
  Avatar?: string;
}

const CardUser: React.FC<Text> = ({
  HeaderText,
  CompanyText,
  PlaceText,
  StarText,
  Login,
  Avatar,
}) => {
  const navigation = useNavigation();
  return (
    <S.Card>
      <S.Line>
        <S.LineRight>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{ uri: Avatar }}
          />
          <S.LineCenter>
            <S.LineHeader>
              <S.TextHeader>{HeaderText}</S.TextHeader>
              <S.ArrowStyle onPress={() => navigation.navigate('Repository')}>
                <Image source={Arrowright} />
              </S.ArrowStyle>
            </S.LineHeader>
            <TextDescription description={Login} />
          </S.LineCenter>
        </S.LineRight>
        <S.Button onPress={() => AsyncStorage.clear()}>
          <Image width={100} height={50} source={Delete} />
        </S.Button>
      </S.Line>
      <S.LineDescription>
        <Image source={Company} />
        <S.Description>{CompanyText}</S.Description>
        <Image source={Place} />
        <S.Description>{PlaceText}</S.Description>
        <Image source={Star} />
        <S.Description>{StarText}</S.Description>
      </S.LineDescription>
    </S.Card>
  );
};

export default CardUser;
