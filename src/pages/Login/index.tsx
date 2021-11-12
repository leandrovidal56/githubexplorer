import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ArrowBack, GitHub } from '~/assets/index';
import api from '../../services/api';

import * as C from '~/components/index';

import * as S from './styles';

const Splash: React.FC = () => {
  const navigation = useNavigation();
  const [newUser, setNewUser] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
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
      <C.Header>
        <C.Return>
          <Image source={ArrowBack} />
        </C.Return>
      </C.Header>
      <S.Content>
        <S.Top>
          <Image source={GitHub} />
        </S.Top>
        <S.Center>
          <C.TextHeader header="Buscar usuários" />
          <C.TextDescription description="Crie sua conta através do seu usuário do GitHub" />
          <C.BoxInput
            value={newUser}
            onChangeText={text => setNewUser(text)}
            placeholder="@username"
          />
          <C.Button onPress={registerUsers}>Cadastrar</C.Button>
        </S.Center>
        <S.Footer>
          <C.TextFooter footer="Termos de política e privacidade" />
        </S.Footer>
      </S.Content>
    </S.Container>
  );
};

export default Splash;
