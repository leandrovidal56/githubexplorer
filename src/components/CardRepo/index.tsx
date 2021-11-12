import React from 'react';
import { Image } from 'react-native';

import {
  Arrowright,
  Edit,
  Language,
  People,
  StarGold,
  Star,
  Time,
} from '~/assets/index';
import * as S from './styles';

interface Text {
  ProjectName: string;
  RepositoryDescription: string;
  TagNameOne?: string;
  TagNameTwo?: string;
  LanguageText: string;
  StarText: string;
  PeopleText: string;
  Day: string;
}

const CardRepo: React.FC<Text> = ({
  ProjectName,
  RepositoryDescription,
  TagNameOne,
  TagNameTwo,
  LanguageText,
  StarText,
  PeopleText,
  Day,
}) => {
  return (
    <S.Container>
      <S.HeaderRepo>
        <S.TextHeaderRepo>
          {ProjectName}
          <S.ArrowStyle>
            <Image source={Arrowright} />
          </S.ArrowStyle>
        </S.TextHeaderRepo>
        <Image height={50} source={StarGold} />
      </S.HeaderRepo>
      <S.TextDescriptionRepo>{RepositoryDescription}</S.TextDescriptionRepo>
      <S.TagLine>
        <S.Tag>
          <S.TagText>{TagNameOne}</S.TagText>
        </S.Tag>
        <S.Tag>
          <S.TagText>{TagNameTwo}</S.TagText>
        </S.Tag>
        <Image height={5} source={Edit} />
      </S.TagLine>
      <S.LineDescription>
        <Image source={Language} />
        <S.Description>{LanguageText}</S.Description>
        <Image source={Star} />
        <S.Description>{StarText}</S.Description>
        <Image source={People} />
        <S.Description>{PeopleText}</S.Description>
        <Image source={Time} />
        <S.Description>{Day}</S.Description>
      </S.LineDescription>
    </S.Container>
  );
};

export default CardRepo;
