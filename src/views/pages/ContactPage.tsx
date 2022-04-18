import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Page from '../../components/styled/Page';
import BusinessCard from '../../components/BusinessCard';
import {useResponsiveViewConditional} from '../../hooks/useResponsiveViewConditional';
import ContactBubbles from '../../components/ContactBubbles';

function ContactPage() {
  const ResponsiveContent = useResponsiveViewConditional([
    BusinessCard,
    ContactBubbles,
  ]);

  return (
    <Page style={styles.page}>
      <Text adjustsFontSizeToFit style={styles.title}>
        How can we get in touch?
      </Text>
      <ResponsiveContent />
    </Page>
  );
}

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '700',
    color: 'white',
    fontSize: 28,
    marginHorizontal: 30,
    maxWidth: '60vw',
    textAlign: 'center',
    marginTop: 60,
  },
});

export default ContactPage;
