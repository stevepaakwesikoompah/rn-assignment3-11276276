import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Categories() {
  return (
    <>
      <View style={styles.categoriesBox}>
        <Text style={styles.catText}>Categories</Text>
      </View>
      <ScrollView style={styles.scroll} horizontal={true}>
        <View style={styles.categoriesBox1}>
          <View style={styles.catbox1}>
            <View style={styles.exerciseBox}>
              <Text style={styles.exText}>Exercise</Text>
              <Text style={styles.exTex1}>12 tasks</Text>
              <Image style={styles.womanImage} source={require('../assets/young woman working online.png')} />
            </View>
          </View>
          <View style={styles.catbox1}>
            <View style={styles.exerciseBox}>
              <Text style={styles.exText}>Study</Text>
              <Text style={styles.exTex1}>12 tasks</Text>
              <Image style={styles.womanImage} source={require('../assets/young woman working at desk.png')} />
            </View>
          </View>
          <View style={styles.catbox1}>
            <View style={styles.exerciseBox}>
              <Text style={styles.exText}>Cook</Text>
              <Text style={styles.exTex1}>12 tasks</Text>
              <Image style={styles.image1} source={require('../assets/cooking.png')} />
            </View>
          </View>
          <View style={styles.catbox1}>
            <View style={styles.exerciseBox}>
              <Text style={styles.exText}>Washing</Text>
              <Text style={styles.exTex1}>12 tasks</Text>
              <Image style={styles.image1} source={require('../assets/washing.png')} />
            </View>
          </View>
          <View style={styles.catbox1}>
            <View style={styles.exerciseBox}>
              <Text style={styles.exText}>Playing Piano</Text>
              <Text style={styles.exTex1}>12 tasks</Text>
              <Image style={styles.image1} source={require('../assets/playing piano.png')} />
            </View>
          </View>
          <View style={styles.catbox1}>
            <View style={styles.exerciseBox}>
              <Text style={styles.exText}>Teaching</Text>
              <Text style={styles.exTex1}>12 tasks</Text>
              <Image style={styles.image1} source={require('../assets/teaching.png')} />
            </View>
          </View>
          <View style={styles.catbox1}>
            <View style={styles.exerciseBox}>
              <Text style={styles.exText}>Coding</Text>
              <Text style={styles.exTex1}>12 tasks</Text>
              <Image style={styles.image1} source={require('../assets/coding.png')} />
            </View>
          </View>
          <View style={styles.catbox1}>
            <View style={styles.exerciseBox}>
              <Text style={styles.exText}>Playing Soccer</Text>
              <Text style={styles.exTex1}>12 tasks</Text>
              <Image style={styles.image1} source={require('../assets/playing soccer.png')} />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  categoriesBox: {
    marginHorizontal: 20,
    marginTop: 29,
  },
  catText: {
    fontSize: 20,
    fontWeight: '700',
  },
  categoriesBox1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 6,
  },
  catbox1: {
    width: 150,
    height: 192,
    backgroundColor: 'white',
    borderRadius: 15,
    marginRight: 10,
  },
  exerciseBox: {
    padding: 10,
  },
  exText: {
    fontSize: 16,
    fontWeight: '700',
  },
  exTex1: {
    fontSize: 12,
    fontWeight: '400',
  },
  womanImage: {
    width: 150,
    height: 132,
    marginTop: 10,
  },
  image1:{
    width: 130,
    height:120,
    
  },
  scroll: {
    height: 550,
  },
});
