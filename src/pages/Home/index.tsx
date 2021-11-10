import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text } from 'react-native';
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
  const [Users, setUsers] = useState([]);

  async function getStorage() {
    const response = (await AsyncStorage.getItem('users')) || [];
    console.log('testando o getStorage', response);
    setUsers(JSON.parse(response));
    // return response;
    // await AsyncStorage.clear();
  }
  useEffect(() => {
    getStorage();
  }, []);

  async function registerUsers() {
    console.log(getStorage());
    try {
      const response = await api.get(`users/${newUser}`);

      console.log(response.data);
      if (Users.length <= 0) {
        console.log('1');
        const user = response.data;
        const users = [user];
        console.log('111111', users);
        await AsyncStorage.setItem('users', JSON.stringify(users));
        // navigation.navigate('Users');
        return;
      }
      console.log('2222');
      const users = await AsyncStorage.getItem('users');
      const user = response.data;
      const merged = [JSON.parse(users), user];
      console.log(merged);
      // console.log('testando o merged', merged);
      await AsyncStorage.setItem('users', JSON.stringify(merged));
      // navigation.navigate('Users');
    } catch (err) {
      console.log(err);
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
      </Center>
      <Footer>
        <TextFooter footer="Termos de política e privacidade" />
      </Footer>
    </Container>
  );
};

export default Home;
