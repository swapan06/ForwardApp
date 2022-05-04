import React from 'react'
import { Text, View, Platform, KeyboardAvoidingView, StyleShee, ScrollView } from 'react-native'
import navigationStrings from '../../../navigation/navigationStrings'
import { textScale, moderateScale, moderateScaleVertical } from '../../../style/responsiveSize'
import strings from '../../../constants/lang'
import TextInputComponent from '../../../Components/TextInput'
import ButtonComponent from '../../../Components/button'
import WrapperContainer from '../../../Components/WrapperContainer'
import Header from '../../../Components/Header'
import { images } from '../../../constants/images'
import styles from './style'
import colors from '../../../style/colors'


function ChangePassword({ navigation }) {
    return (
        <WrapperContainer>
            <Header leftImage={true}
        leftImageIcon={images?.arrow}
        leftText={true}
        leftTextTitle={strings.CHANGE_PASSWORD}
        leftTextStyle={styles.leftTextStyle}
                onPress={() => navigation.goBack()} />
            <ScrollView>
                {/* <Text style={styles.welcomeText}>{strings.CHANGE_PASSWORD}</Text> */}
                <View style={{ marginHorizontal: moderateScale(15) }}>
                    <View style={{ marginVertical: moderateScale(20) }}>
                        <TextInputComponent
                            viewstyle={styles.inputview}
                            placeholder={strings.PASSWORD}
                            placeholderTextColor={colors.disabledlight}
                            value={null}
                            rightText={true}
                            righttext={strings.SHOW}
                        />
                    </View>
                    <View >
                        <TextInputComponent
                            viewstyle={styles.inputview}
                            placeholder={strings.CONFIRM_PASSWORD}
                            placeholderTextColor={colors.disabledlight}
                            value={null}
                            rightText={true}
                            righttext={strings.SHOW}
                        />
                    </View>
                </View>
            </ScrollView>

            <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                <View style={{ paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(45) : moderateScaleVertical(20) }} >
                    <ButtonComponent buttonText={strings.SAVE} textColor={colors.white} />
                </View>
            </KeyboardAvoidingView>
        </WrapperContainer>
    )
}

export default ChangePassword