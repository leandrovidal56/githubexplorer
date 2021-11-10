import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GitHub } from '~/assets/index';
import api from '../../services/api';

import {
  BoxInput,
  Button,
  TextHeader,
  TextDescription,
  TextFooter,
} from '~/components/index';

import { Container, Top, Center, Footer } from './styles';

const Home: React.FC = () => {
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
      navigation.navigate('Error');
    }
  }

  return (
    <Container>
      <Top>
        <Image source={GitHub} />
      </Top>
      <Center>
        <TextHeader header="Buscar usuários" />
        <TextDescription description="Crie sua conta através do seu usuário do GitHub" />
        <TextDescription>{newUser}</TextDescription>

        <BoxInput
          placeholder="@username"
          value={newUser}
          onChangeText={text => setNewUser(text)}
        />
        <Button onPress={registerUsers}>Cadastrar</Button>
        <Button onPress={() => AsyncStorage.clear()}>APAGAR</Button>
      </Center>
      <Footer>
        <TextFooter footer="Termos de política e privacidade" />
      </Footer>
    </Container>
  );
};

export default Home;
