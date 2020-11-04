import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface OrganizationProps {
  organization: string;
}

const Organization: FunctionComponent<OrganizationProps> = ({organization}) => {
  return (
    <View style={styles.organizationContainer}>
      <Text>{organization}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  organizationContainer: {
    width: '50%',
    alignItems: 'center',
  },
});

export default Organization;
