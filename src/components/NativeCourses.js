import React, {Component} from 'react'
import {StyleSheet, Text, View, ListView, Image, Linking} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {getTheme} from 'react-native-material-kit'
import data from '../data/courses.json'

const theme = getTheme();

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

const dataSource = ds.cloneWithRows(data);

export default class NativeCourses extends Component {
    static navigationOptions = {
        tabBarLabel: 'React Native Courses',
        tabBarIcon: ({tinyColor}) => (
            <Icon
                name={'settings-cell'}
                size={26}
                style={{color: tinyColor}}
            />
        )

    };

    handleClick = (link) => {
        Linking.canOpenURL(link).then(supported => {
                if (supported) {
                    Linking.openURL(link);
                } else {
                    console.log("The device don't know how to open thes URL: " + link)
                }
            }
        )
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> React Native Courses </Text>
                <ListView
                    dataSource={dataSource}
                    renderRow={(rowData) =>
                        <View style={theme.cardStyle}>
                            <Image source={{uri: rowData.image}}
                                   style={theme.cardImageStyle}/>
                            <Text style={theme.cardTitleStyle}>{rowData.title}</Text>
                            <Text style={theme.cardContentStyle}>{rowData.description}</Text>
                            <Text style={theme.cardActionStyle}
                                  onPress={() => {
                                      this.handleClick(rowData.link)
                                  }}>Tap to course</Text>
                        </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingTop: 10
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    icon: {
        width: 26,
        height: 26
    }
});

