import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Platform,
  TextInput,
} from 'react-native';
import { ArrowBack, PictureProfile, FilterList, Find } from '~/assets/index';

import { Header, Return, CardRepo } from '~/components/index';

import { Container, Content, Search, SearchBar, Filter } from './styles';

const Repository: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <Container>
      <Header>
        <Return>
          <Image source={ArrowBack} />
        </Return>
        <Image source={PictureProfile} />
      </Header>
      <Search>
        <SearchBar>
          <Image source={Find} />
          <TextInput placeholder="busque" />
        </SearchBar>
        <Filter>
          <Image source={FilterList} />
        </Filter>
      </Search>
      <ScrollView>
        <Content>
          <CardRepo
            ProjectName="project-name-java"
            RepositoryDescription="Project application with component app with React Native"
            TagNameOne="#javaScript"
            TagNameTwo="#Front-End"
            LanguageText="React Native"
            StarText="2"
            PeopleText="5"
            Day="2 dias atrás"
          />
          <CardRepo
            ProjectName="project-name-java"
            RepositoryDescription="Project application with component app with React Native"
            TagNameOne="#javaScript"
            TagNameTwo="#Front-End"
            LanguageText="React Native"
            StarText="2"
            PeopleText="5"
            Day="2 dias atrás"
          />
          <CardRepo
            ProjectName="project-name-java"
            RepositoryDescription="Project application with component app with React Native"
            TagNameOne="#javaScript"
            TagNameTwo="#Front-End"
            LanguageText="React Native"
            StarText="2"
            PeopleText="5"
            Day="2 dias atrás"
          />
          <CardRepo
            ProjectName="project-name-java"
            RepositoryDescription="Project application with component app with React Native"
            TagNameOne="#javaScript"
            TagNameTwo="#Front-End"
            LanguageText="React Native"
            StarText="2"
            PeopleText="5"
            Day="2 dias atrás"
          />
        </Content>
      </ScrollView>
    </Container>
  );
};
export default Repository;
