import React from "react";
import { Box, Flex, Heading, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image } from "@chakra-ui/react";
import { FaChartLine, FaChartPie, FaChartBar, FaUsers } from "react-icons/fa";

const Index = () => {
  const metrics = [
    {
      label: "Total Sales",
      value: "$120,500",
      change: "12%",
      changeType: "increase",
      icon: FaChartLine,
    },
    {
      label: "Revenue",
      value: "$45,200",
      change: "8%",
      changeType: "increase",
      icon: FaChartPie,
    },
    {
      label: "Customers",
      value: "1,258",
      change: "5%",
      changeType: "decrease",
      icon: FaUsers,
    },
    {
      label: "Orders",
      value: "4,512",
      change: "20%",
      changeType: "increase",
      icon: FaChartBar,
    },
  ];

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Business Dashboard
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
        {metrics.map((metric, index) => (
          <Stat key={index} bg="white" p={6} shadow="md" rounded="md" borderWidth={1} borderColor="gray.200">
            <Flex alignItems="center" mb={4}>
              <Box as={metric.icon} size="3rem" mr={4} color="blue.500" />
              <Box>
                <StatLabel fontSize="xl">{metric.label}</StatLabel>
                <StatNumber fontSize="3xl" fontWeight="bold">
                  {metric.value}
                </StatNumber>
              </Box>
            </Flex>
            <StatHelpText>
              <StatArrow type={metric.changeType === "increase" ? "increase" : "decrease"} />
              {metric.change} {metric.changeType}
            </StatHelpText>
          </Stat>
        ))}
      </SimpleGrid>

      <Flex mt={12} alignItems="center">
        <Box flex={1}>
          <Heading as="h2" size="lg" mb={4}>
            Sales Overview
          </Heading>
          <Image src="https://images.unsplash.com/photo-1543286386-713bdd548da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYWxlcyUyMGNoYXJ0fGVufDB8fHx8MTcxMjUyMzEwMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Sales Chart" rounded="md" shadow="md" />
        </Box>
        <Box flex={1} ml={8}>
          <Heading as="h2" size="lg" mb={4}>
            Top Products
          </Heading>
          <Image src="https://images.unsplash.com/photo-1498843053639-170ff2122f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwY2hhcnR8ZW58MHx8fHwxNzEyNTIzMTAyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Top Products" rounded="md" shadow="md" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
