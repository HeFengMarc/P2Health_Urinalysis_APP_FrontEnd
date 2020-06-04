import {Heading6, SmallText, Text, Title} from "../../components/text/CustomText";
import {SafeAreaView, StatusBar, StyleSheet, View,FlatList } from "react-native";
import Colors from "../../theme/colors";
import {Calendar} from 'react-native-calendars';
import React, {useState} from 'react';


const record = ({route}) => {
  console.log('history_result page', route.params.user);
  console.log(route.params.markedDates);
  const [recordState,setRecordState] = useState(
    [
      {record: 'Please choose one date', data: '', color:'dimgray'},
      // {record: 'URO', data: '', color:'dimgray'},
      // {record: 'ALB', data: '', color:'dimgray'},
      // {record: 'PRO', data: '', color:'dimgray'},
      // {record: 'BIL', data: '', color:'dimgray'},
      // {record: 'GLU', data: '', color:'dimgray'},
      // {record: 'ASC', data: '', color:'dimgray'},
      // {record: 'SG', data: '', color:'dimgray'},
      // {record: 'KET', data: '', color:'dimgray'},
      // {record: 'NIT', data: '', color:'dimgray'},
      // {record: 'CRE', data: '', color:'dimgray'},
      // {record: 'pH', data: '', color:'dimgray'},
      // {record: 'BLO', data: '', color:'dimgray'},
      // {record: 'CA', data: '', color:'dimgray'}
    ]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    titleContainer: {
      paddingHorizontal: 16,
    },
    titleText: {
      paddingVertical: 16,
      fontWeight: '700',
      textAlign: 'center',
    },
    recordsContainer:{
      flex:1,
      margin:10,
    },
    recordContainer:{
      flex: 1,
      flexDirection:'row',
    },
    recordName:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    recordData:{
      flex : 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    abnormalRecord: {
      flex:1,
    }
  });

  async function sendUsername({day}) {
    let ip = '76.28.196.133';
    let timeUrl = 'http://' + ip + ':5000/history_result';
    // var now = Date.now();
    let user = { username: route.params.user, day: day.dateString};
    // let user = {username:'JJJ'}

    try {
      let res = await fetch(timeUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user,
        }),
      });
      // console.log(res);
      return res;
    } catch (e) {
        console.error(e);
    }
  };

  async function updateRecords({day}){
    try {
      let res = await sendUsername({day});
      let result = await res.json();
      console.log(result.status);
      if (res !== null && result.status == 1) {
        setRecordState([
          {record: result.result[0].item, data: result.result[0].class, color: result.result[0].color},
          {record: result.result[1].item, data: result.result[1].class, color: result.result[1].color},
          {record: result.result[2].item, data: result.result[2].class, color: result.result[2].color},
          {record: result.result[3].item, data: result.result[3].class, color: result.result[3].color},
          {record: result.result[4].item, data: result.result[4].class, color: result.result[4].color},
          {record: result.result[5].item, data: result.result[5].class, color: result.result[5].color},
          {record: result.result[6].item, data: result.result[6].class, color: result.result[6].color},
          {record: result.result[7].item, data: result.result[7].class, color: result.result[7].color},
          {record: result.result[8].item, data: result.result[8].class, color: result.result[8].color},
          {record: result.result[9].item, data: result.result[9].class, color: result.result[9].color},
          {record: result.result[10].item, data: result.result[10].class, color: result.result[10].color},
          {record: result.result[11].item, data: result.result[11].class, color: result.result[11].color},
          {record: result.result[12].item, data: result.result[12].class, color: result.result[12].color},
          {record: result.result[13].item, data: result.result[13].class, color: result.result[13].color}
        ]);
      }else if(res !== null && result.status == 2){
        setRecordState([
          {record: result.result[0].item, data: result.result[0].class, color: result.result[0].color},
          {record: result.result[1].item, data: result.result[1].class, color: result.result[1].color},
          {record: result.result[2].item, data: result.result[2].class, color: result.result[2].color},
          {record: result.result[3].item, data: result.result[3].class, color: result.result[3].color},
          {record: result.result[4].item, data: result.result[4].class, color: result.result[4].color},
          {record: result.result[5].item, data: result.result[5].class, color: result.result[5].color},
          {record: result.result[6].item, data: result.result[6].class, color: result.result[6].color},
          {record: result.result[7].item, data: result.result[7].class, color: result.result[7].color},
          {record: result.result[8].item, data: result.result[8].class, color: result.result[8].color},
          {record: result.result[9].item, data: result.result[9].class, color: result.result[9].color}
        ]);
      }else if(res !== null && result.status == 3){
        setRecordState([
          {record: result.result[0].item, data: result.result[0].class, color: result.result[0].color},
          {record: result.result[1].item, data: result.result[1].class, color: result.result[1].color},
          {record: result.result[2].item, data: result.result[2].class, color: result.result[2].color},
          {record:'',                     data:'',                      color:'withe'},
        ]);
      }else{
        setRecordState([
          {record: 'No Record', data: '', color: 'dimgray'},
        ]);
      }
    } catch (error) {
      console.error('Error:AsyncStorage:', error.message);
    }
  }

  function Record ({record,data,color}) {
    return (
      <View style={styles.recordContainer}>
        <SmallText style={{flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            color:color,
                            fontSize: 15,
                            marginTop: 10,}}>
          {record}
        </SmallText>
        <SmallText style={{flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            color:color,
                            fontSize: 15,
                           marginTop: 10,}}>
          {data}
        </SmallText>
     </View>
    )
  };

  function AbnormalRecord ({record,data}) {
    return (
      <View style={styles.recordContainer}>
        <SmallText style={styles.recordName}>
          {record}
        </SmallText>
        <SmallText style={styles.recordData}>
          {data}
        </SmallText>
      </View>
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.statusBarColor}
        barStyle="dark-content"
      />


      {/*TODO : day.dataString will return the date selected, using this data to fetch and set the return json using setRecordState(returnJson) to update state*/}
      {/*TODO : get all the day that has record and make it into a object and pass in markedDates prop*/}
      <Calendar onDayPress={(day) => {console.log('selected day', day), updateRecords({day})}}
                markedDates={route.params.markedDates}
      />

      <FlatList style={styles.recordsContainer}
                data={recordState}
                renderItem={({ item }) => <Record record={item.record} data={item.data} color = {item.color}/>}
                keyExtractor={item => item.record}
                horizontal={false}
                numColumns = {2}
      />
    </SafeAreaView>
  )
};
export default record;
