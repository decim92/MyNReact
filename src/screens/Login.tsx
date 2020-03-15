import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import {doLogin, LoginType} from '../actions/login';
import {getIsLogged} from '../selectors/login';
import {translate} from './../utils/i18n';

import {goHome} from '../router/Router';

export interface Props {
  isLogged: boolean;
  doLogin(): LoginType;
}

export interface State {
  username: string;
  password: string;
}

class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  static get options() {
    return {
      topBar: {
        title: {
          text: translate('login.title'),
        },
      },
    };
  }

  onLogIn = () => {
    this.props.doLogin();
  };

  onChangeUsername = (text: string) => {
    this.setState({username: text});
  };

  onChangePassword = (text: string) => {
    this.setState({password: text});
  };

  render() {
    const {isLogged} = this.props;
    if (isLogged) {
      goHome();
    }
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.state.username}
          placeholder={translate('login.username_placeholder')}
          onChangeText={text => this.onChangeUsername(text)}
        />
        <TextInput
          style={styles.textInput}
          value={this.state.password}
          secureTextEntry={true}
          placeholder={translate('login.password_placeholder')}
          onChangeText={text => this.onChangePassword(text)}
        />
        <Button
          onPress={this.onLogIn}
          title={translate('login.button_title')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    margin: 16,
  },
});

const mapStateToProps = (state: any) => {
  return {
    isLogged: getIsLogged(state),
  };
};

const mapDispatchToProps = {
  doLogin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
