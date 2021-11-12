import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GitHub } from '~/assets/index';
import api from '../../services/api';

import * as C from '~/components/index';

import * as S from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [newUser, setNewUser] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      // AsyncStorage.clear();
      const response = (await AsyncStorage.getItem('@GitHub:users')) || [];
      const parsed = JSON.parse(response);
      if (parsed.length) {
        setUsers(parsed);
      }
    }

    getUsers();
  }, []);

  async function registerUsers() {
    try {
      if (users.length) {
        const response = await api.get(`/users/${newUser}`);

        const merged = [...users, response.data];

        await AsyncStorage.setItem('@GitHub:users', JSON.stringify(merged));

        navigation.navigate('Users');
      }

      if (!users.length) {
        const response = await api.get(`/users/${newUser}`);

        const merged = [...users, response.data];

        await AsyncStorage.setItem('@GitHub:users', JSON.stringify(merged));
        navigation.navigate('Users');
      }
    } catch (err) {
      alert('Algo deu errado tente novamente');
      navigation.navigate('Error');
    }
  }

  return (
    <S.Container>
      <S.Top>
        <Image source={GitHub} />
      </S.Top>
      <S.Center>
        <C.TextHeader header="Buscar usuários" />
        <C.TextDescription description="Crie sua conta através do seu usuário do GitHub" />
        <C.BoxInput
          placeholder="@username"
          value={newUser}
          onChangeText={text => setNewUser(text)}
        />
        <C.Button onPress={registerUsers}>Cadastrar</C.Button>
      </S.Center>
      <S.Footer>
        <C.TextFooter footer="Termos de política e privacidade" />
      </S.Footer>
    </S.Container>
  );
};

export default Home;
