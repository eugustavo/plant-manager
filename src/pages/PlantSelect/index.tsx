import React, { useCallback, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator
 } from 'react-native';

 import { Header } from '../../components/Header';
 import { EnviromentButton } from '../../components/EnviromentButton';
 import { Loading } from '../../components/Loading';

 import colors from '../../styles/colors';
 import fonts from '../../styles/fonts';
import api from '../../services/api';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';

interface EnviromentProps {
  key: string;
  title: string
}

interface PlantProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: Array<string>;
  frequency: {
    times: number;
    repeat_every: string;
  };
}

export function PlantSelect() {
  const [environments, setEnvironments] = useState<EnviromentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);

  useEffect(() => {
    async function loadEnviroment() {
      const { data } = await api.get('plants_environments?_sort=title&_order=asc');
      setEnvironments([
        {
          key: 'all',
          title: 'Todos'
        },
        ...data
      ])
    }
    loadEnviroment()
  }, []);

  async function loadPlants() {
    const { data } = await api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=8`
    );
    
    if(!data) {
      return setLoading(true);
    }

    if(page > 1) {
      setPlants(oldValue => [...oldValue, ...data])
      setFilteredPlants(oldValue => [...oldValue, ...data])
    } else {
      setPlants(data)
      setFilteredPlants(data)
    }
    setTimeout(() => setLoading(false), 4500);
    setLoadingMore(false);
  }

  useEffect(() => {
    loadPlants();
  }, []);

  const handleMorePlants = useCallback((distance: number) => {
    if (distance < 1) {
      return;
    }

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    loadPlants();
  }, [plants]);

  const handlesEnvironmentSelected = useCallback((key: string) => {
    setEnvironmentSelected(key)

    if (key === 'all') {
      return setFilteredPlants(plants)
    }

    const filtered = plants.filter(plant => plant.environments.includes(key))
    setFilteredPlants(filtered)
  }, [plants]);

  if(loading) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Text style={styles.title}>
          Em qual ambiente
        </Text>
        <Text style={styles.subtitle}>
          Você quer colocar sua planta?
        </Text>
      </View>

      <View>
        <FlatList
          data={environments}
          keyExtractor={({ key }) => key}
          renderItem={({ item }) => (
            <EnviromentButton
              title={item.title}
              active={item.key === environmentSelected}
              onPress={() => handlesEnvironmentSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />
      </View>

      <View style={styles.plants}>
        <FlatList
          data={filteredPlants}
          keyExtractor={({ id }) => String(id)}
          renderItem={({ item }) => (
            <PlantCardPrimary data={item} />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.2}
          onEndReached={({ distanceFromEnd }) => handleMorePlants(distanceFromEnd)}
          ListFooterComponent={
            loadingMore 
            ?
              <ActivityIndicator color={colors.green} />
            : <></>
          }
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  header: {
    paddingHorizontal: 30
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15
  },
  subtitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    color: colors.heading,
    lineHeight: 20,
  },
  enviromentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 28,
    marginVertical: 20,
  },
  plants: {
    flex: 1,
    paddingHorizontal: 18,
    justifyContent: 'center',
  },
});