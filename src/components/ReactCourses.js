import React, {Component} from 'react'
import {Text, View, ListView, Image, Linking} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {getTheme} from 'react-native-material-kit'
import styles from '../styles/styles';
import data from '../data/courses.json'


const theme = getTheme();

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

const dataSource = ds.cloneWithRows(data);

export default class ReactCourses extends Component {
    static navigationOptions = {
        tabBarLabel: 'React  Courses',
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
                <Text style={styles.welcome}>React Courses</Text>
                <ListView
                    dataSource={dataSource}
                    renderRow={(rowData) =>
                        <View style={[theme.cardStyle, styles.card]}>
                            <Image source={{uri: rowData.image}}
                                   style={theme.cardImageStyle}/>
                            <Text style={[theme.cardTitleStyle, styles.title]}>{rowData.title}</Text>
                            <Text style={theme.cardContentStyle}>{rowData.description}</Text>
                            <Text style={[theme.cardActionStyle, styles.action]}
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

