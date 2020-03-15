import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getIsLogged} from '../selectors/login';
import {goHome, goLogIn} from '../router/Router';

type Props = {
  isLogged: boolean;
};
class Initializer extends React.Component<Props> {
  async componentDidMount() {
    if (this.props.isLogged) {
      goHome();
    } else {
      goLogIn();
    }
  }

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state: any) => {
  return {
    isLogged: getIsLogged(state),
  };
};

export default connect(mapStateToProps)(Initializer);
