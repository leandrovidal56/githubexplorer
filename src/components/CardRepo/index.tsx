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
import {
  Container,
  HeaderRepo,
  TextHeaderRepo,
  TextDescriptionRepo,
  LineDescription,
  Tag,
  TagLine,
  TagText,
  ArrowStyle,
  Description,
} from './styles';

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
    <Container>
      <HeaderRepo>
        <TextHeaderRepo>
          {ProjectName}
          <ArrowStyle>
            <Image source={Arrowright} />
          </ArrowStyle>
        </TextHeaderRepo>
        <Image height={50} source={StarGold} />
      </HeaderRepo>
      <TextDescriptionRepo>{RepositoryDescription}</TextDescriptionRepo>
      <TagLine>
        <Tag>
          <TagText>{TagNameOne}</TagText>
        </Tag>
        <Tag>
          <TagText>{TagNameTwo}</TagText>
        </Tag>
        <Image height={5} source={Edit} />
      </TagLine>
      <LineDescription>
        <Image source={Language} />
        <Description>{LanguageText}</Description>
        <Image source={Star} />
        <Description>{StarText}</Description>
        <Image source={People} />
        <Description>{PeopleText}</Description>
        <Image source={Time} />
        <Description>{Day}</Description>
      </LineDescription>
    </Container>
  );
};

export default CardRepo;
