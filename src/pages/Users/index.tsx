import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image, ScrollView, FlatList } from 'react-native';
import GitHubSmall from '~/assets/github_small.png';

import * as C from '~/components/index';

import * as S from './styles';

interface Teste {
  id: string;
  name: string;
  company: string;
  location: string;
  followers: string;
  login: string;
  avatarUrl: string;
}

const Users: React.FC = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState<Teste>({});

  async function getStorage() {
    const response = await AsyncStorage.getItem('@GitHub:users');
    setUsers(JSON.parse(response));
    return response;
  }
  useEffect(() => {
    getStorage();
  }, []);

  return (
    <S.Container>
      <C.Header>
        <C.Return>
          <Image source={GitHubSmall} />
        </C.Return>
        {/* <ButtonSmall onPress={() => navigation.navigate('Login')}> */}
        <C.ButtonSmall onPress={() => navigation.goBack()}>
          Adicionar novo
        </C.ButtonSmall>
      </C.Header>
      <ScrollView>
        <S.Content>
          <FlatList
            data={users}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <C.CardUser
                Avatar={item.avatar_url}
                HeaderText={item.name}
                CompanyText={item.company}
                PlaceText={item.location}
                StarText={item.followers}
                Login={item.login}
              />
            )}
          />
        </S.Content>
      </ScrollView>
    </S.Container>
  );
};
export default Users;
