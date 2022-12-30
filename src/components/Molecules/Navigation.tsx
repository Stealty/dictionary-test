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
    <nav>
      <OrderedList
        display="grid"
        gridTemplateColumns="1fr 1fr 1fr"
        alignItems="center"
        justifyItems="center"
        listStyleType="none"
        bgColor="var(--chakra-colors-gray-800);"
        margin="0"
        h="50px"
      >
        <ListItem
          w="100%"
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
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
