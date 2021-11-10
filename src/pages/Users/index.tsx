import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Image,
  ScrollView,
  FlatList,
  VirtualizedList,
  Text,
} from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
import GitHubSmall from '~/assets/github_small.png';
import api from '../../services/api';

import {
  Header,
  ButtonSmall,
  Return,
  CardUser,
  List,
} from '~/components/index';

import { Container, Content } from './styles';

interface Teste {
  id: string;
  name: string;
  company: string;
  location: string;
  followers: string;
  login: string;
  avatar_url: string;
}

const Users: React.FC = ({ route }) => {
  const navigation = useNavigation();
  const [users, setUsers] = useState<Teste>({});

  async function getStorage() {
    const response = await AsyncStorage.getItem('users');
    setUsers(JSON.parse(response));

    console.log('testando o getStorage', response);
    return response;
  }
  useEffect(() => {
    getStorage();
  }, []);

  return (
    <Container>
      <Header>
        <Return>
          <Image source={GitHubSmall} />
        </Return>
        <ButtonSmall onPress={() => navigation.navigate('Login')}>
          Adicionar novo
        </ButtonSmall>
      </Header>
      <ScrollView>
        <Content>
          <FlatList
            data={users}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <CardUser
                Avatar={item.avatar_url}
                HeaderText={item.name}
                CompanyText={item.company}
                PlaceText={item.location}
                StarText={item.followers}
                Login={item.login}
              />
            )}
          />
        </Content>
      </ScrollView>
    </Container>
  );
};
export default Users;
