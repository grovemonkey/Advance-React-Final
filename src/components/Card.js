import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";


const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.


  return (
    <VStack
      bg="#FFFFFF"
      borderRadius="md"
      boxShadow="md"
      p={4}
      w="100%"
      alignItems="flex-start"
      spacing={4}
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <Heading as="h3" size="md" color="black">
        {title}
      </Heading>
      <Text color="gray">{description}</Text>
      <HStack>
        <Text color="black" fontWeight="bold">
          See more
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" color="#14532d" />
      </HStack>
    </VStack>
  );
};

export default Card;
