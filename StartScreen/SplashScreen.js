import React, { Component } from 'react';
import {View, Image, Text, StyleSheet, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


import Logo from '../Images/Logo.png';


class Splash extends Component {

    constructor(props)
    {
        super(props);
        setTimeout(()=>
        {
            this.props.navigation.navigate("Select_Login");
        },5000);
    }
    state={
        LogoAnime: new Animated.Value(0),
        LogoText: new Animated.Value(0),
        loadingSpinner: false,
    }

    componentDidMount(){
        const {LogoAnime, LogoText} = this.state;
        Animated.parallel([
            Animated.spring(LogoAnime, {
            toValue: 1,
            tension: 10,
            friction: 2,
            duration: 1000,
            }).start(),

            Animated.timing (LogoText, {
            toValue:1,
            duration: 1200,
            }),
        ]).start(() => {
            this.setState({
                loadingSpinner: true,
            });
        });
    }
    
    render() {
        return (
            <LinearGradient colors={['#BE93C5', '#7BC6CC']} style={styles.con}>
            {/* <View style ={styles.container}> */}
                <Animated.View 
                style={{
                    opacity: this.state.LogoAnime,
                    top: this.state.LogoAnime.interpolate({
                        inputRange: [0, 1],
                        outputRange: [80, 0],
                    })
                }}>
                    <Image source={Logo}/>
                </Animated.View>
                <Animated.View style={{
                    opacity: this.state.LogoText
                    }}>
                <Text style = {styles.logoText}>Doctor care</Text>
                </Animated.View>
            {/* </View> */}
            </LinearGradient>
        );
    }
}
export default Splash;

const styles = StyleSheet.create({
    con : {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    },
    logoText : {
    color: '#ffffff',
    fontFamily: 'GoogleSans-Bold',
    fontSize: 30,
    marginTop: 29.1,
    fontWeight: '300',
    }
});
