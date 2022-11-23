'use client';

import { Text, ListItem, OrderedList } from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [route, setRoute] = useState('');

  useEffect(() => {
    if (window) setRoute(window.location.href);
  }, []);

  function selectedRoute(route: string, reference: string, color: string) {
    if (reference === route.replace('http://localhost:3000', '')) {
      return color;
    }
  }

  return (
    <nav style={{ width: '100%' }}>
      <OrderedList
        w="100%"
        justifyContent="space-around"
        display="flex"
        flexDirection="row"
        listStyleType="none"
      >
        <ListItem>
          <Link href="/">
            <Text color={selectedRoute(route, '/', 'orange')}>Home</Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/quiz">
            <Text color={selectedRoute(route, '/quiz', 'orange')}>Quiz</Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/contact">
            <Text color={selectedRoute(route, '/contact', 'orange')}>
              Contact
            </Text>
          </Link>
        </ListItem>
      </OrderedList>
    </nav>
  );
}
